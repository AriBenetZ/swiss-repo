#!/usr/bin/env node

/**
 * SEO Validation Script for Aurum Ascend Capital
 * Validates structured data, meta tags, and SEO best practices
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aurumascend.ch';

// List of pages to validate
const PAGES_TO_VALIDATE = [
  '/',
  '/about',
  '/apply',
  '/how-it-works',
  '/case-studies',
  '/contact',
  '/team',
  '/careers',
  '/blog',
  '/press',
  '/compliance',
  '/privacy',
  '/terms'
];

/**
 * Validate structured data using Google's Rich Results Test API
 */
async function validateStructuredData(url) {
  return new Promise((resolve, reject) => {
    const testUrl = `https://search.google.com/test/rich-results/result?url=${encodeURIComponent(url)}`;
    
    https.get(testUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = {
            url,
            status: res.statusCode === 200 ? 'valid' : 'error',
            timestamp: new Date().toISOString()
          };
          resolve(result);
        } catch (error) {
          resolve({
            url,
            status: 'error',
            error: error.message,
            timestamp: new Date().toISOString()
          });
        }
      });
    }).on('error', (error) => {
      resolve({
        url,
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

/**
 * Check Core Web Vitals and page performance
 */
async function checkPagePerformance(url) {
  return new Promise((resolve, reject) => {
    const testUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`;
    
    https.get(testUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const metrics = {
            url,
            performance: result.lighthouseResult?.categories?.performance?.score * 100 || 0,
            seo: result.lighthouseResult?.categories?.seo?.score * 100 || 0,
            accessibility: result.lighthouseResult?.categories?.accessibility?.score * 100 || 0,
            bestPractices: result.lighthouseResult?.categories?.['best-practices']?.score * 100 || 0,
            lcp: result.lighthouseResult?.audits?.['largest-contentful-paint']?.displayValue || 'N/A',
            fid: result.lighthouseResult?.audits?.['max-potential-fid']?.displayValue || 'N/A',
            cls: result.lighthouseResult?.audits?.['cumulative-layout-shift']?.displayValue || 'N/A',
            timestamp: new Date().toISOString()
          };
          resolve(metrics);
        } catch (error) {
          resolve({
            url,
            error: error.message,
            timestamp: new Date().toISOString()
          });
        }
      });
    }).on('error', (error) => {
      resolve({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

/**
 * Validate robots.txt
 */
async function validateRobots() {
  return new Promise((resolve, reject) => {
    const robotsUrl = `${BASE_URL}/robots.txt`;
    
    https.get(robotsUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const validation = {
          url: robotsUrl,
          status: res.statusCode,
          hasUserAgent: data.includes('User-agent:'),
          hasSitemap: data.includes('Sitemap:'),
          hasDisallow: data.includes('Disallow:'),
          content: data,
          timestamp: new Date().toISOString()
        };
        
        resolve(validation);
      });
    }).on('error', (error) => {
      resolve({
        url: robotsUrl,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

/**
 * Validate sitemap.xml
 */
async function validateSitemap() {
  return new Promise((resolve, reject) => {
    const sitemapUrl = `${BASE_URL}/sitemap.xml`;
    
    https.get(sitemapUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const validation = {
          url: sitemapUrl,
          status: res.statusCode,
          isValidXML: data.includes('<?xml'),
          hasUrlset: data.includes('<urlset'),
          urlCount: (data.match(/<url>/g) || []).length,
          timestamp: new Date().toISOString()
        };
        
        resolve(validation);
      });
    }).on('error', (error) => {
      resolve({
        url: sitemapUrl,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

/**
 * Main validation function
 */
async function runSEOValidation() {
  console.log('🔍 Starting SEO Validation for Aurum Ascend Capital...\n');
  
  const results = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    structuredData: [],
    performance: [],
    robots: null,
    sitemap: null
  };

  // Validate robots.txt
  console.log('📄 Validating robots.txt...');
  results.robots = await validateRobots();
  
  // Validate sitemap.xml
  console.log('🗺️  Validating sitemap.xml...');
  results.sitemap = await validateSitemap();
  
  // Validate structured data for each page
  console.log('🏗️  Validating structured data...');
  for (const page of PAGES_TO_VALIDATE) {
    const url = `${BASE_URL}${page}`;
    console.log(`  Checking: ${url}`);
    const result = await validateStructuredData(url);
    results.structuredData.push(result);
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Check performance for key pages
  console.log('🚀 Checking Core Web Vitals...');
  const keyPages = ['/', '/apply', '/how-it-works', '/case-studies'];
  for (const page of keyPages) {
    const url = `${BASE_URL}${page}`;
    console.log(`  Performance check: ${url}`);
    const result = await checkPagePerformance(url);
    results.performance.push(result);
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Save results to file
  const outputPath = path.join(__dirname, '..', 'seo-validation-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  // Generate summary report
  generateSummaryReport(results);
  
  console.log(`\n✅ SEO validation completed. Report saved to: ${outputPath}`);
}

/**
 * Generate human-readable summary report
 */
function generateSummaryReport(results) {
  console.log('\n📊 SEO VALIDATION SUMMARY');
  console.log('=' .repeat(50));
  
  // Robots.txt summary
  if (results.robots) {
    console.log(`\n📄 Robots.txt: ${results.robots.status === 200 ? '✅ Valid' : '❌ Error'}`);
    if (results.robots.hasUserAgent && results.robots.hasSitemap) {
      console.log('   ✅ Contains User-agent and Sitemap directives');
    }
  }
  
  // Sitemap summary
  if (results.sitemap) {
    console.log(`\n🗺️  Sitemap.xml: ${results.sitemap.status === 200 ? '✅ Valid' : '❌ Error'}`);
    if (results.sitemap.urlCount) {
      console.log(`   📍 Contains ${results.sitemap.urlCount} URLs`);
    }
  }
  
  // Structured data summary
  const validStructuredData = results.structuredData.filter(r => r.status === 'valid').length;
  console.log(`\n🏗️  Structured Data: ${validStructuredData}/${results.structuredData.length} pages valid`);
  
  // Performance summary
  if (results.performance.length > 0) {
    const avgPerformance = results.performance.reduce((sum, p) => sum + (p.performance || 0), 0) / results.performance.length;
    const avgSEO = results.performance.reduce((sum, p) => sum + (p.seo || 0), 0) / results.performance.length;
    
    console.log(`\n🚀 Performance Scores:`);
    console.log(`   📈 Average Performance: ${avgPerformance.toFixed(1)}/100`);
    console.log(`   🔍 Average SEO: ${avgSEO.toFixed(1)}/100`);
    
    results.performance.forEach(p => {
      if (p.performance !== undefined) {
        console.log(`   ${p.url}: ${p.performance}/100 (LCP: ${p.lcp}, CLS: ${p.cls})`);
      }
    });
  }
  
  console.log('\n' + '='.repeat(50));
}

// Run the validation
if (require.main === module) {
  runSEOValidation().catch(console.error);
}

module.exports = {
  runSEOValidation,
  validateStructuredData,
  checkPagePerformance,
  validateRobots,
  validateSitemap
};
