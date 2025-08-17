#!/usr/bin/env node

/**
 * Performance Check Script for Aurum Ascend Capital
 * Monitors Core Web Vitals and SEO performance metrics
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aurumascend.ch';

// Performance thresholds (Google's recommended values)
const THRESHOLDS = {
  performance: 90,    // Lighthouse performance score
  seo: 90,           // Lighthouse SEO score
  accessibility: 90,  // Lighthouse accessibility score
  bestPractices: 90, // Lighthouse best practices score
  lcp: 2.5,          // Largest Contentful Paint (seconds)
  fid: 100,          // First Input Delay (milliseconds)
  cls: 0.1           // Cumulative Layout Shift
};

// Critical pages for performance monitoring
const CRITICAL_PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/apply', name: 'Application Page' },
  { path: '/how-it-works', name: 'How It Works' },
  { path: '/case-studies', name: 'Case Studies' },
  { path: '/about', name: 'About Page' },
  { path: '/contact', name: 'Contact Page' }
];

/**
 * Fetch performance metrics using PageSpeed Insights API
 */
async function getPerformanceMetrics(url, strategy = 'mobile') {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=seo&category=accessibility&category=best-practices`;
    
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const lighthouseResult = result.lighthouseResult;
          
          if (!lighthouseResult) {
            throw new Error('No Lighthouse result found');
          }
          
          const metrics = {
            url,
            strategy,
            timestamp: new Date().toISOString(),
            scores: {
              performance: Math.round((lighthouseResult.categories?.performance?.score || 0) * 100),
              seo: Math.round((lighthouseResult.categories?.seo?.score || 0) * 100),
              accessibility: Math.round((lighthouseResult.categories?.accessibility?.score || 0) * 100),
              bestPractices: Math.round((lighthouseResult.categories?.['best-practices']?.score || 0) * 100)
            },
            coreWebVitals: {
              lcp: {
                value: parseFloat(lighthouseResult.audits?.['largest-contentful-paint']?.numericValue || 0) / 1000,
                displayValue: lighthouseResult.audits?.['largest-contentful-paint']?.displayValue || 'N/A',
                rating: lighthouseResult.audits?.['largest-contentful-paint']?.score >= 0.9 ? 'good' : 
                        lighthouseResult.audits?.['largest-contentful-paint']?.score >= 0.5 ? 'needs-improvement' : 'poor'
              },
              fid: {
                value: parseFloat(lighthouseResult.audits?.['max-potential-fid']?.numericValue || 0),
                displayValue: lighthouseResult.audits?.['max-potential-fid']?.displayValue || 'N/A',
                rating: lighthouseResult.audits?.['max-potential-fid']?.score >= 0.9 ? 'good' : 
                        lighthouseResult.audits?.['max-potential-fid']?.score >= 0.5 ? 'needs-improvement' : 'poor'
              },
              cls: {
                value: parseFloat(lighthouseResult.audits?.['cumulative-layout-shift']?.numericValue || 0),
                displayValue: lighthouseResult.audits?.['cumulative-layout-shift']?.displayValue || 'N/A',
                rating: lighthouseResult.audits?.['cumulative-layout-shift']?.score >= 0.9 ? 'good' : 
                        lighthouseResult.audits?.['cumulative-layout-shift']?.score >= 0.5 ? 'needs-improvement' : 'poor'
              },
              inp: {
                value: parseFloat(lighthouseResult.audits?.['interaction-to-next-paint']?.numericValue || 0),
                displayValue: lighthouseResult.audits?.['interaction-to-next-paint']?.displayValue || 'N/A',
                rating: lighthouseResult.audits?.['interaction-to-next-paint']?.score >= 0.9 ? 'good' : 
                        lighthouseResult.audits?.['interaction-to-next-paint']?.score >= 0.5 ? 'needs-improvement' : 'poor'
              }
            },
            opportunities: lighthouseResult.audits ? Object.keys(lighthouseResult.audits)
              .filter(key => lighthouseResult.audits[key].score < 1 && lighthouseResult.audits[key].details?.type === 'opportunity')
              .map(key => ({
                audit: key,
                title: lighthouseResult.audits[key].title,
                description: lighthouseResult.audits[key].description,
                score: lighthouseResult.audits[key].score,
                savings: lighthouseResult.audits[key].details?.overallSavingsMs || 0
              }))
              .sort((a, b) => b.savings - a.savings)
              .slice(0, 5) : [],
            diagnostics: lighthouseResult.audits ? Object.keys(lighthouseResult.audits)
              .filter(key => lighthouseResult.audits[key].score < 1 && lighthouseResult.audits[key].details?.type === 'diagnostic')
              .map(key => ({
                audit: key,
                title: lighthouseResult.audits[key].title,
                description: lighthouseResult.audits[key].description,
                score: lighthouseResult.audits[key].score
              }))
              .slice(0, 5) : []
          };
          
          resolve(metrics);
        } catch (error) {
          resolve({
            url,
            strategy,
            error: error.message,
            timestamp: new Date().toISOString()
          });
        }
      });
    }).on('error', (error) => {
      resolve({
        url,
        strategy,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

/**
 * Check if metrics meet performance thresholds
 */
function evaluatePerformance(metrics) {
  const evaluation = {
    overall: 'good',
    issues: [],
    recommendations: []
  };
  
  // Check Lighthouse scores
  if (metrics.scores.performance < THRESHOLDS.performance) {
    evaluation.overall = 'needs-improvement';
    evaluation.issues.push(`Performance score (${metrics.scores.performance}) below threshold (${THRESHOLDS.performance})`);
  }
  
  if (metrics.scores.seo < THRESHOLDS.seo) {
    evaluation.overall = 'needs-improvement';
    evaluation.issues.push(`SEO score (${metrics.scores.seo}) below threshold (${THRESHOLDS.seo})`);
  }
  
  // Check Core Web Vitals
  if (metrics.coreWebVitals.lcp.value > THRESHOLDS.lcp) {
    evaluation.overall = 'poor';
    evaluation.issues.push(`LCP (${metrics.coreWebVitals.lcp.value.toFixed(2)}s) exceeds threshold (${THRESHOLDS.lcp}s)`);
    evaluation.recommendations.push('Optimize Largest Contentful Paint by reducing server response times and optimizing images');
  }
  
  if (metrics.coreWebVitals.cls.value > THRESHOLDS.cls) {
    evaluation.overall = 'poor';
    evaluation.issues.push(`CLS (${metrics.coreWebVitals.cls.value.toFixed(3)}) exceeds threshold (${THRESHOLDS.cls})`);
    evaluation.recommendations.push('Reduce Cumulative Layout Shift by setting explicit dimensions for images and ads');
  }
  
  return evaluation;
}

/**
 * Generate performance alerts if thresholds are exceeded
 */
function generateAlerts(results) {
  const alerts = [];
  
  results.forEach(result => {
    if (result.error) {
      alerts.push({
        type: 'error',
        page: result.url,
        message: `Failed to get performance metrics: ${result.error}`
      });
      return;
    }
    
    const evaluation = evaluatePerformance(result);
    
    if (evaluation.overall === 'poor') {
      alerts.push({
        type: 'critical',
        page: result.url,
        message: `Critical performance issues detected`,
        issues: evaluation.issues,
        recommendations: evaluation.recommendations
      });
    } else if (evaluation.overall === 'needs-improvement') {
      alerts.push({
        type: 'warning',
        page: result.url,
        message: `Performance improvements needed`,
        issues: evaluation.issues,
        recommendations: evaluation.recommendations
      });
    }
  });
  
  return alerts;
}

/**
 * Main performance check function
 */
async function runPerformanceCheck() {
  console.log('🚀 Starting Performance Check for Aurum Ascend Capital...\n');
  
  const results = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    mobile: [],
    desktop: [],
    alerts: []
  };
  
  // Test mobile performance
  console.log('📱 Checking mobile performance...');
  for (const page of CRITICAL_PAGES) {
    const url = `${BASE_URL}${page.path}`;
    console.log(`  Testing: ${page.name} (${url})`);
    
    const mobileMetrics = await getPerformanceMetrics(url, 'mobile');
    results.mobile.push({ ...mobileMetrics, pageName: page.name });
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Test desktop performance for critical pages only
  console.log('\n💻 Checking desktop performance...');
  const criticalDesktopPages = CRITICAL_PAGES.slice(0, 3); // Test only top 3 pages for desktop
  
  for (const page of criticalDesktopPages) {
    const url = `${BASE_URL}${page.path}`;
    console.log(`  Testing: ${page.name} (${url})`);
    
    const desktopMetrics = await getPerformanceMetrics(url, 'desktop');
    results.desktop.push({ ...desktopMetrics, pageName: page.name });
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Generate alerts
  results.alerts = generateAlerts([...results.mobile, ...results.desktop]);
  
  // Save results
  const outputPath = path.join(__dirname, '..', 'performance-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  // Generate summary
  generatePerformanceSummary(results);
  
  console.log(`\n✅ Performance check completed. Report saved to: ${outputPath}`);
  
  // Exit with error code if critical issues found
  const criticalAlerts = results.alerts.filter(alert => alert.type === 'critical');
  if (criticalAlerts.length > 0) {
    console.log(`\n❌ ${criticalAlerts.length} critical performance issues found!`);
    process.exit(1);
  }
}

/**
 * Generate human-readable performance summary
 */
function generatePerformanceSummary(results) {
  console.log('\n📊 PERFORMANCE SUMMARY');
  console.log('='.repeat(60));
  
  // Mobile summary
  if (results.mobile.length > 0) {
    const avgMobilePerf = results.mobile.reduce((sum, r) => sum + (r.scores?.performance || 0), 0) / results.mobile.length;
    const avgMobileSEO = results.mobile.reduce((sum, r) => sum + (r.scores?.seo || 0), 0) / results.mobile.length;
    
    console.log(`\n📱 Mobile Performance:`);
    console.log(`   Average Performance Score: ${avgMobilePerf.toFixed(1)}/100`);
    console.log(`   Average SEO Score: ${avgMobileSEO.toFixed(1)}/100`);
    
    results.mobile.forEach(result => {
      if (result.scores) {
        const status = result.scores.performance >= 90 ? '✅' : result.scores.performance >= 70 ? '⚠️' : '❌';
        console.log(`   ${status} ${result.pageName}: ${result.scores.performance}/100 (LCP: ${result.coreWebVitals.lcp.displayValue}, CLS: ${result.coreWebVitals.cls.displayValue})`);
      }
    });
  }
  
  // Desktop summary
  if (results.desktop.length > 0) {
    const avgDesktopPerf = results.desktop.reduce((sum, r) => sum + (r.scores?.performance || 0), 0) / results.desktop.length;
    
    console.log(`\n💻 Desktop Performance:`);
    console.log(`   Average Performance Score: ${avgDesktopPerf.toFixed(1)}/100`);
    
    results.desktop.forEach(result => {
      if (result.scores) {
        const status = result.scores.performance >= 90 ? '✅' : result.scores.performance >= 70 ? '⚠️' : '❌';
        console.log(`   ${status} ${result.pageName}: ${result.scores.performance}/100`);
      }
    });
  }
  
  // Alerts summary
  if (results.alerts.length > 0) {
    console.log(`\n🚨 Alerts:`);
    results.alerts.forEach(alert => {
      const icon = alert.type === 'critical' ? '🔴' : alert.type === 'warning' ? '🟡' : 'ℹ️';
      console.log(`   ${icon} ${alert.page}: ${alert.message}`);
      if (alert.issues) {
        alert.issues.forEach(issue => console.log(`      - ${issue}`));
      }
    });
  } else {
    console.log('\n✅ No performance issues detected!');
  }
  
  console.log('\n' + '='.repeat(60));
}

// Run the performance check
if (require.main === module) {
  runPerformanceCheck().catch(console.error);
}

module.exports = {
  runPerformanceCheck,
  getPerformanceMetrics,
  evaluatePerformance,
  generateAlerts
};
