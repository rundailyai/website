export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  tags: string[];
  featured: boolean;
  images: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    id: "cold-email-template-library",
    title: "Cold Email Templates: 55+ Proven B2B Sequences for Sales & Partnerships",
    description: "Stop starting from scratch every time you need to send a cold email. Get 55+ battle-tested email templates organized by industry and use case, plus a proven personalization framework that turns 1% response rates into 10-15%.",
    longDescription: "Cold email is still one of the highest-ROI ways to book meetings, get demos, and build partnerships—but only if you know what actually works.\n\nThe Cold Email Template Library gives you 55+ proven email templates used by sales teams, agencies, and B2B service providers to consistently book meetings and close deals. Every template includes subject lines that get opened, proven email bodies with timing guidance, personalization checkpoints, expected response rates, and A/B testing variations.\n\nYou get 9 complete email sequences (45 templates total) covering SaaS, Agency, and B2B Services industries. Each sequence includes 5 emails sent over 30 days with specific timing for meeting bookings, demo requests, and partnership outreach. Plus 10 bonus trigger-based templates for re-engaging cold leads, event invitations, content sharing, mutual connections, competitor switching, job postings, funding announcements, and more.\n\nThe included 5-Minute Research Framework shows exactly what to research, where to find it, and how to use it to turn generic templates into custom messages that feel personally written. Stop agonizing over what to say and start booking meetings with templates that consistently deliver 8-15% response rates.",
    price: 39,
    category: "email-marketing",
    tags: ["email", "cold-email", "templates", "sales", "b2b", "outreach", "sequences"],
    featured: true,
    images: ["/images/products/cold-email-templates.jpg"],
    faq: [
      {
        question: "What industries are these templates for?",
        answer: "Templates are organized for SaaS companies, agencies, and B2B service providers. Each template can be adapted to your specific industry using the included personalization framework.",
      },
      {
        question: "How many templates are included?",
        answer: "55+ email templates total: 9 complete 5-email sequences (45 templates) plus 10 bonus trigger-based templates for special situations.",
      },
      {
        question: "What's included besides the templates?",
        answer: "You get a complete personalization framework, the 5-Minute Research Method, template selection guide, Notion CSV database for easy management, benchmarks, and best practices.",
      },
      {
        question: "Can I customize these templates?",
        answer: "Absolutely! Every template is fully editable. The personalization framework teaches you exactly how to adapt each template to your specific prospects and situations.",
      },
      {
        question: "What response rates can I expect?",
        answer: "Using the templates with proper personalization, you can expect 8-15% response rates vs. the industry average of 1-3%. Actual results depend on your list quality and personalization effort.",
      },
      {
        question: "What format are the templates delivered in?",
        answer: "Templates are delivered as a comprehensive PDF guide plus a Notion CSV file that you can import directly into Notion or any spreadsheet application.",
      },
    ],
    relatedProducts: ["email-automation-kit", "ai-content-calendar", "digital-planner-bundle"],
  },
  {
    id: "digital-planner-bundle",
    title: "Daily AI Planner Bundle — 5 Productivity Templates",
    description: "Get organized and stay consistent with 5 essential CSV planner templates: daily, weekly, monthly, habit tracker, and goal tracker. Works with Google Sheets, Excel, and all major spreadsheet apps.",
    longDescription: "Building better habits and achieving your goals starts with a system you can actually stick to. This Digital Planner Bundle gives you five battle-tested templates designed for productivity enthusiasts, solopreneurs, and anyone serious about personal growth.\n\nEach template is delivered as a simple CSV file that opens in Google Sheets, Excel, or any spreadsheet application. No complicated software, no subscriptions—just clean, functional planning tools you can customize to fit your life. The daily planner includes time blocking from 5 AM to 10 PM, priority tracking, gratitude prompts, and reflection questions. The weekly and monthly planners help you zoom out and align your daily actions with bigger goals. The habit tracker gives you a 31-day grid to build consistency, and the goal tracker breaks down quarterly and annual objectives into actionable milestones.\n\nWhether you're a student managing coursework, an entrepreneur juggling multiple projects, or someone who just wants to feel more in control of their time, these templates provide the structure without the overwhelm. Print them, use them digitally, or combine them into one master workbook—it's your system, your way.",
    price: 19,
    category: "digital-planners",
    tags: ["productivity", "planning", "habits", "goals", "spreadsheet", "csv"],
    featured: true,
    images: [
      "/images/products/digital-planner-thumbnail.png",
      "/images/products/digital-planner-daily.png",
      "/images/products/digital-planner-habits.png",
      "/images/products/digital-planner-goals.png",
    ],
    faq: [
      {
        question: "What format are these templates in?",
        answer: "All five planners are delivered as CSV files, which work seamlessly with Google Sheets, Microsoft Excel, Apple Numbers, LibreOffice, and virtually any spreadsheet application.",
      },
      {
        question: "Can I customize the templates?",
        answer: "Absolutely! These are fully editable spreadsheets. Add columns, change colors, adjust time blocks—make them work for your unique workflow.",
      },
      {
        question: "Do I need any special software?",
        answer: "Nope. If you can open a spreadsheet, you're good to go. Google Sheets is free and works great with these templates.",
      },
      {
        question: "Can I print these planners?",
        answer: "Yes! They're designed to work both digitally and as printable planning sheets. Print daily pages as needed or use them entirely on your device.",
      },
      {
        question: "Will I get updates or new templates?",
        answer: "This is a one-time purchase of five core templates. We may release additional planning tools in the future, which would be separate products.",
      },
    ],
    relatedProducts: ["notion-productivity-templates", "ai-content-calendar"],
  },
  {
    id: "notion-productivity-templates",
    title: "Notion Productivity Templates",
    description: "Complete productivity system with 50+ templates for task management, goals, and habit tracking.",
    longDescription: "Transform your productivity with our comprehensive Notion template collection. Includes task management, goal tracking, habit builder, project planner, and more. Designed for professionals, students, and entrepreneurs.",
    price: 29,
    category: "notion-templates",
    tags: ["productivity", "notion", "templates", "organization"],
    featured: true,
    images: ["/images/products/notion-templates.jpg"],
    faq: [
      {
        question: "Do I need a Notion account?",
        answer: "Yes, you'll need a free Notion account to use these templates.",
      },
      {
        question: "Can I customize the templates?",
        answer: "Absolutely! All templates are fully customizable to fit your needs.",
      },
    ],
    relatedProducts: ["ai-content-calendar", "email-automation-kit"],
  },
  {
    id: "ai-content-calendar",
    title: "AI Content Calendar",
    description: "Generate a month of content ideas with AI. Perfect for social media managers and creators.",
    longDescription: "Never run out of content ideas again. Our AI-powered content calendar generates 30 days of content ideas tailored to your niche. Includes templates for posts, captions, and scheduling recommendations.",
    price: 19,
    category: "content-tools",
    tags: ["AI", "content", "social media", "marketing"],
    featured: true,
    images: ["/images/products/content-calendar.jpg"],
    faq: [
      {
        question: "What platforms does it support?",
        answer: "The calendar works for Instagram, Twitter, LinkedIn, and Facebook.",
      },
      {
        question: "Is it a one-time purchase?",
        answer: "Yes! Pay once and use it forever.",
      },
    ],
    relatedProducts: ["notion-productivity-templates", "social-media-toolkit"],
  },
  {
    id: "email-automation-kit",
    title: "Email Automation Kit",
    description: "Pre-built email sequences and templates for onboarding, nurture, and sales campaigns.",
    longDescription: "Launch your email marketing campaigns in minutes with our proven templates. Includes welcome sequences, nurture campaigns, product launches, and re-engagement emails. Compatible with all major email platforms.",
    price: 39,
    category: "email-marketing",
    tags: ["email", "marketing", "automation", "templates"],
    featured: true,
    images: ["/images/products/email-kit.jpg"],
    faq: [
      {
        question: "What email platforms work with this?",
        answer: "Compatible with Mailchimp, ConvertKit, ActiveCampaign, and more.",
      },
      {
        question: "How many email templates are included?",
        answer: "Over 25 professionally written email templates.",
      },
    ],
    relatedProducts: ["ai-content-calendar", "notion-productivity-templates"],
  },
  {
    id: "social-media-toolkit",
    title: "Social Media Toolkit",
    description: "Complete toolkit for managing your social media presence across all platforms.",
    longDescription: "Streamline your social media management with templates, content ideas, hashtag lists, and scheduling tools. Perfect for small businesses and solo entrepreneurs.",
    price: 24,
    category: "social-media",
    tags: ["social media", "marketing", "content", "templates"],
    featured: false,
    images: ["/images/products/social-toolkit.jpg"],
    faq: [
      {
        question: "Is this suitable for beginners?",
        answer: "Yes! Includes step-by-step guides for beginners.",
      },
    ],
    relatedProducts: ["ai-content-calendar"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = getProduct(productId);
  if (!product) return [];

  return products
    .filter((p) => product.relatedProducts.includes(p.id))
    .slice(0, limit);
}

export function getFeaturedProducts(limit: number = 3): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
