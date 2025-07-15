// Professional FAQ data - simplified and focused
export const investmentFAQs = [
  {
    question: "How personal is Aurum Ascend Capital's approach to funding?",
    answer: "Extremely personal. Every client works directly with our Zurich-based team through dedicated one-on-one consultations, personal investor introductions, and ongoing relationship management. We treat your success as our reputation and invest in long-term partnerships, not just transactions.",
    category: "approach",
    searchIntent: ["personal funding service", "relationship-driven investment", "dedicated support"]
  },
  {
    question: "Do I get direct access to decision-makers at Aurum Ascend Capital?",
    answer: "Yes. From your first consultation, you work directly with senior team members including our CTO/CFO who personally joins client calls throughout the entire process. No junior staff or account managers—you get direct access to the people making decisions about your funding journey.",
    category: "approach", 
    searchIntent: ["direct access", "senior team contact", "decision makers"]
  },
  {
    question: "How long does the funding process take with Aurum Ascend Capital?",
    answer: "The typical funding process takes 8-12 weeks from application to funding completion. This includes personal consultation and application review (1-2 weeks), strategic investor matching (2-3 weeks), and due diligence with closing (4-6 weeks).",
    category: "process",
    searchIntent: ["funding timeline", "how long funding", "investment process time"]
  },
  {
    question: "What types of companies can apply for funding through Aurum Ascend Capital?",
    answer: "We work with growth-stage companies seeking £250K to £50M+ in funding. Ideal candidates have proven revenue, scalable business models, and are ready for Series A, B, or growth capital rounds.",
    category: "eligibility",
    searchIntent: ["who can apply", "funding criteria", "startup requirements"]
  },
  {
    question: "What makes Aurum Ascend Capital's investor introductions different?",
    answer: "Our introductions are relationship-based, not database-driven. We personally know our investors, understand their investment preferences, and provide context-rich introductions explaining why this is a perfect match for both parties. Each introduction comes with personal leverage and ongoing facilitation.",
    category: "approach",
    searchIntent: ["investor introductions", "relationship-based matching", "personal connections"]
  },
  {
    question: "What is the success rate for funding applications?",
    answer: "Aurum Ascend Capital has a 78% success rate for qualified applications that complete our process. We pre-screen applications to ensure investor-readiness before proceeding.",
    category: "success",
    searchIntent: ["success rate", "funding success", "approval rate"]
  },
  {
    question: "How does Aurum Ascend Capital support long-term relationships?",
    answer: "We believe in multi-round partnerships. From seed discussions to Series B and beyond, we maintain relationships that evolve with your business. Our network grows with you, and we provide ongoing strategic support throughout your entire growth journey, not just single funding rounds.",
    category: "approach",
    searchIntent: ["long-term support", "multi-round funding", "ongoing relationships"]
  },
  {
    question: "What types of investors are in your network?",
    answer: "Our network includes 500+ institutional investors: VCs, growth equity funds, family offices, strategic corporates, and private equity firms across Europe, Americas, and Asia-Pacific. All investors are verified and actively investing.",
    category: "network",
    searchIntent: ["types of investors", "investor network", "who invests"]
  },
  {
    question: "Do you charge fees for funding applications?",
    answer: "No upfront fees. We only charge a success fee when funding is successfully completed. This aligns our interests with your success.",
    category: "pricing",
    searchIntent: ["funding fees", "cost of funding", "application fees"]
  },
  {
    question: "What makes Aurum Ascend Capital different from other funding platforms?",
    answer: "Our verified investor network of 500+ institutional investors, 78% success rate, and end-to-end support from application to closing sets us apart. We focus on growth-stage companies ready for institutional funding.",
    category: "differentiation",
    searchIntent: ["why choose aurumascend", "best funding platform", "funding platform comparison"]
  },
  {
    question: "Can international companies apply for Swiss investor funding?",
    answer: "Yes, international companies can access Swiss investors through Aurum Ascend Capital. We work with companies from Europe, North America, Asia, and other regions seeking Swiss institutional investment.",
    category: "international",
    searchIntent: ["international funding", "Swiss investors international", "global funding"]
  },
  {
    question: "How does Aurum Ascend Capital match companies with the right investors?",
    answer: "Our proprietary matching algorithm considers sector expertise, investment stage, ticket size, geographic preferences, and strategic value-add. Each company is manually reviewed and matched with 3-5 highly relevant investors from our verified network.",
    category: "matching",
    searchIntent: ["how matching works", "investor matching process", "how to find right investors"]
  },
  {
    question: "What types of investors are in your network?",
    answer: "Our network includes 500+ institutional investors: VCs, growth equity funds, family offices, strategic corporates, and private equity firms across Europe, Americas, and Asia-Pacific. All investors are verified and actively investing.",
    category: "network",
    searchIntent: ["types of investors", "investor network", "who invests"]
  },
  {
    question: "Do you work with early-stage startups or only growth companies?",
    answer: "We primarily focus on growth-stage companies (Series A and beyond) seeking £250K+ funding. Early-stage startups may be considered if they have proven traction and revenue, but our investor network specializes in growth capital.",
    category: "stage",
    searchIntent: ["startup stage", "early stage funding", "growth stage investment"]
  },
  {
    question: "How do you ensure investor quality and legitimacy?",
    answer: "Every investor in our network is verified through due diligence: regulatory checks, investment history validation, reference calls with portfolio companies, and minimum AUM requirements. We maintain a 95%+ investor quality score.",
    category: "quality",
    searchIntent: ["investor verification", "legitimate investors", "quality investors"]
  },
  {
    question: "What happens if no investors are interested in my company?",
    answer: "If initial matches don't progress, we provide detailed feedback and recommendations for improving your investment readiness. We also maintain relationships for future opportunities as companies develop and market conditions change.",
    category: "outcomes",
    searchIntent: ["no investor interest", "rejection feedback", "what if no matches"]
  }
];

// Generate FAQ structured data for voice search
export function generateFAQStructuredData(faqs: typeof investmentFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "answerCount": 1,
      "datePublished": "2024-01-01T00:00:00Z",
      "dateModified": "2025-07-10T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "Aurum Ascend Capital",
        "url": "https://www.aurumascend.ch"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "upvoteCount": 0
      }
    }))
  };
}

// Voice search optimized Q&A pairs
export const voiceSearchOptimized = [
  {
    query: "How to get startup funding in Switzerland",
    answer: "Apply through Aurum Ascend Capital's verified investor network. Submit your application, get matched with relevant institutional investors, and complete funding in 3-6 months with our 78% success rate."
  },
  {
    query: "What do investors look for in startups",
    answer: "Investors seek scalable business models, proven revenue growth, strong management teams, clear market opportunity, and companies ready for institutional funding rounds of £250K to £50M+."
  },
  {
    query: "How much funding should I raise",
    answer: "Raise 12-18 months of runway to reach your next major milestone. Typical amounts: Seed (£250K-£2M), Series A (£2M-£10M), Series B (£10M-£30M), Growth (£30M+)."
  }
];

// SEO-optimized FAQ component structure
export const faqPageStructure = {
  title: "Funding FAQs - Investment Questions Answered | Aurum Ascend Capital",
  description: "Get answers to common funding questions. Learn about the investment process, requirements, timeline, and success rates with Aurum Ascend Capital's institutional investor network.",
  h1: "Frequently Asked Questions About Startup Funding",
  sections: [
    {
      title: "Our Personal Approach",
      questions: investmentFAQs.filter(faq => faq.category === "approach")
    },
    {
      title: "Getting Started",
      questions: investmentFAQs.filter(faq => faq.category === "process" || faq.category === "eligibility")
    },
    {
      title: "Investor Network & Matching",
      questions: investmentFAQs.filter(faq => faq.category === "matching" || faq.category === "network" || faq.category === "quality")
    },
    {
      title: "Application Process", 
      questions: investmentFAQs.filter(faq => faq.category === "application")
    },
    {
      title: "Terms & Success Rates",
      questions: investmentFAQs.filter(faq => faq.category === "terms" || faq.category === "success")
    },
    {
      title: "Pricing & International",
      questions: investmentFAQs.filter(faq => faq.category === "pricing" || faq.category === "international")
    },
    {
      title: "Outcomes & Support",
      questions: investmentFAQs.filter(faq => faq.category === "outcomes" || faq.category === "stage")
    }
  ]
};
