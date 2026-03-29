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
