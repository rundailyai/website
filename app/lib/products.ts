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
    id: "digital-planner-bundle",
    title: "Daily AI Planner Bundle — 5 Productivity Templates",
    description: "Get organized and stay consistent with 5 essential CSV planner templates: daily, weekly, monthly, habit tracker, and goal tracker. Works with Google Sheets, Excel, and all major spreadsheet apps.",
    longDescription: "Building better habits and achieving your goals starts with a system you can actually stick to. This Digital Planner Bundle gives you five battle-tested templates designed for productivity enthusiasts, solopreneurs, and anyone serious about personal growth.\n\nEach template is delivered as a simple CSV file that opens in Google Sheets, Excel, or any spreadsheet application. No complicated software, no subscriptions—just clean, functional planning tools you can customize to fit your life. The daily planner includes time blocking from 5 AM to 10 PM, priority tracking, gratitude prompts, and reflection questions. The weekly and monthly planners help you zoom out and align your daily actions with bigger goals. The habit tracker gives you a 31-day grid to build consistency, and the goal tracker breaks down quarterly and annual objectives into actionable milestones.\n\nWhether you're a student managing coursework, an entrepreneur juggling multiple projects, or someone who just wants to feel more in control of their time, these templates provide the structure without the overwhelm. Print them, use them digitally, or combine them into one master workbook—it's your system, your way.",
    price: 19,
    category: "digital-planners",
    tags: ["productivity", "planning", "habits", "goals", "spreadsheet", "csv"],
    featured: true,
    images: ["/images/products/digital-planner.jpg"], // TODO: Replace with actual image from RUN-22
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
