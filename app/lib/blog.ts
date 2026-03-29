export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-ai-automation",
    title: "Getting Started with AI Automation in 2026",
    excerpt: "Learn how to leverage AI tools to automate repetitive tasks and boost your productivity.",
    date: "2026-03-15",
    readTime: "5 min read",
    category: "AI",
    author: "RunDailyAI Team",
    content: `
# Getting Started with AI Automation in 2026

AI automation is transforming how we work. In this guide, we'll explore practical ways to leverage AI tools.

## Why AI Automation Matters

Automation frees up your time for creative and strategic work. AI makes automation smarter and more accessible.

## Key Areas for Automation

1. **Email Management** - Let AI sort, prioritize, and draft responses
2. **Content Creation** - Generate outlines, ideas, and first drafts
3. **Data Analysis** - Automate reporting and insights
4. **Customer Support** - Use AI chatbots for common queries

## Getting Started

Start small. Pick one repetitive task and automate it. Build from there.

## Recommended Tools

- ChatGPT for content and ideation
- Zapier for workflow automation
- Notion AI for note-taking and organization

## Conclusion

AI automation isn't about replacing humans—it's about amplifying our capabilities.
    `,
  },
  {
    slug: "notion-templates-guide",
    title: "The Ultimate Guide to Notion Templates",
    excerpt: "Everything you need to know about creating and using Notion templates effectively.",
    date: "2026-03-10",
    readTime: "8 min read",
    category: "Productivity",
    author: "RunDailyAI Team",
    content: `
# The Ultimate Guide to Notion Templates

Notion templates can supercharge your productivity. Here's everything you need to know.

## What Are Notion Templates?

Templates are pre-built page structures you can duplicate and customize for your needs.

## Types of Templates

### Personal Productivity
- Task managers
- Habit trackers
- Goal planners

### Business
- Project management
- CRM systems
- Content calendars

### Education
- Study planners
- Note-taking systems
- Research databases

## Creating Your Own Templates

1. Build your page structure
2. Add databases and views
3. Create relationships between databases
4. Add formulas and automations
5. Duplicate as a template

## Best Practices

- Keep it simple
- Use clear naming
- Document how to use it
- Test before sharing

## Popular Template Resources

Check out our Notion template collection for ready-to-use templates!
    `,
  },
  {
    slug: "email-marketing-best-practices",
    title: "Email Marketing Best Practices for 2026",
    excerpt: "Proven strategies to improve your email open rates and conversions.",
    date: "2026-03-05",
    readTime: "6 min read",
    category: "Marketing",
    author: "RunDailyAI Team",
    content: `
# Email Marketing Best Practices for 2026

Email remains one of the highest ROI marketing channels. Here's how to do it right in 2026.

## Subject Line Strategies

- Keep it under 50 characters
- Create curiosity
- Use personalization
- Avoid spam trigger words

## Content Best Practices

1. **Mobile-first design** - Most emails are read on mobile
2. **Clear CTA** - One primary action per email
3. **Personalization** - Use subscriber data
4. **Value-first** - Educate, don't just sell

## Timing and Frequency

Test to find what works for your audience. Generally:
- B2B: Tuesday-Thursday, morning
- B2C: Weekends can work well
- Frequency: 1-2 times per week

## Segmentation

Don't send the same email to everyone. Segment by:
- Engagement level
- Purchase history
- Interests and preferences
- Stage in customer journey

## Testing and Optimization

Always be testing:
- Subject lines
- Send times
- Content formats
- CTAs

## Automation

Set up these automated sequences:
- Welcome series
- Abandoned cart
- Re-engagement
- Post-purchase

## Conclusion

Email marketing success comes from knowing your audience and delivering value consistently.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function generateTableOfContents(content: string): Array<{ text: string; id: string; level: number }> {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const toc: Array<{ text: string; id: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    toc.push({ text, id, level });
  }

  return toc;
}
