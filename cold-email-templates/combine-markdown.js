#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

// Read all markdown files
const readFile = (filename) => {
  return fs.readFileSync(path.join(baseDir, filename), 'utf-8');
};

const readSequence = (filename) => {
  return fs.readFileSync(path.join(baseDir, 'sequences', filename), 'utf-8');
};

// Build the complete markdown document
function combineMarkdown() {
  console.log('📄 Combining markdown files...');

  // Build complete markdown content
  let markdown = `# Cold Email Template Library
## 55+ Proven Email Templates for B2B Sales & Partnerships

---

## Table of Contents

### Part I: Introduction
1. [How to Use This Library](#how-to-use-this-library)
2. [Template Selection Guide](#template-selection-guide)
3. [The 5-Minute Personalization Method](#personalization-method)

### Part II: Core Email Sequences (45 Templates)

**SaaS Industry**
4. [SaaS - Meeting Booking Sequence](#saas-meeting-booking) (5 emails)
5. [SaaS - Demo Request Sequence](#saas-demo-request) (5 emails)
6. [SaaS - Partnership Sequence](#saas-partnership) (5 emails)

**Agency Industry**
7. [Agency - Meeting Booking Sequence](#agency-meeting-booking) (5 emails)
8. [Agency - Portfolio Review Sequence](#agency-portfolio-review) (5 emails)
9. [Agency - Partnership Sequence](#agency-partnership) (5 emails)

**B2B Services**
10. [B2B - Meeting Booking Sequence](#b2b-meeting-booking) (5 emails)
11. [B2B - Discovery Call Sequence](#b2b-discovery-call) (5 emails)
12. [B2B - Partnership Sequence](#b2b-partnership) (5 emails)

### Part III: Bonus Templates (10 Templates)
13. [Trigger-Based Email Templates](#bonus-templates)

### Part IV: Frameworks & Resources
14. [Personalization Framework](#personalization-framework)

---

# Part I: Introduction

## How to Use This Library

### Quick Start (5 Minutes)

1. **Identify Your Situation**
   - What industry are you in? (SaaS, Agency, B2B Services)
   - What's your goal? (Book meetings, get demos, build partnerships)
   - Find the matching sequence in the Table of Contents

2. **Read the Full Sequence**
   - Each sequence has 5 emails designed to work together
   - Don't cherry-pick individual emails - use the complete sequence
   - Review timing guidelines (Day 0, Day 3, Day 7, etc.)

3. **Personalize Each Email**
   - Spend 5 minutes researching each prospect (see Personalization Framework)
   - Replace [brackets] with specific information
   - Customize opening lines and specific observations

4. **Track & Optimize**
   - Monitor open rates, response rates, meeting bookings
   - A/B test subject lines and opening paragraphs
   - Double down on what works for your audience

---

## Template Selection Guide

### Choose By Industry:

**SaaS Companies** (Software products)
→ Use SaaS sequences
- Meeting Booking: Book discovery calls with potential customers
- Demo Request: Get prospects to see your product
- Partnership: Build integrations or co-marketing with other SaaS

**Agencies** (Marketing, design, development services)
→ Use Agency sequences
- Meeting Booking: Book initial consultations with clients
- Portfolio Review: Get prospects to review your work
- Partnership: Build referral networks or white-label relationships

**B2B Services** (Consulting, legal, accounting, HR, etc.)
→ Use B2B Services sequences
- Meeting Booking: Book discovery calls with service buyers
- Discovery Call: Offer free assessments or consultations
- Partnership: Build referral partnerships with complementary services

---

### Choose By Goal:

**Goal: Book Meetings**
- Use "Meeting Booking" sequences
- Focus: Getting 15-30 minute calls on calendar
- Best for: Initial prospecting, cold outreach

**Goal: Get Product Demos**
- Use "Demo Request" or "Portfolio Review" sequences
- Focus: Showing your product or work examples
- Best for: Sales-driven products, visual work

**Goal: Build Partnerships**
- Use "Partnership" sequences
- Focus: Strategic relationships, referrals, integrations
- Best for: B2B partnerships, ecosystem plays

**Goal: Re-engage Old Leads**
- Use Bonus Templates: Re-engagement, Event, Content Share
- Focus: Warming up cold prospects
- Best for: Leads that went cold 6+ months ago

---

## The 5-Minute Personalization Method {#personalization-method}

**Why personalization matters:**
- Generic emails get <1% response rate
- Personalized emails get 8-15% response rate
- 5 minutes of research = 10x better results

### The 5-Minute Research Breakdown:

**Minute 1: LinkedIn Profile**
- Current role & tenure
- Recent posts/activity
- Shared connections
- Previous companies

**Minute 2: Company Website**
- What they do
- Recent blog posts/news
- Customer logos
- Job openings

**Minute 3: Trigger Events**
- Funding (Crunchbase)
- Product launches
- Executive hires
- Expansion news

**Minute 4: Competitive Context**
- Who their competitors are
- Tools they likely use
- Industry challenges
- Market trends

**Minute 5: Social Quick Check**
- Twitter/X activity
- Company social media
- Reddit/community presence
- Recent content

### Personalization Insertion Points:

1. **Subject Line**: Reference specific observation
2. **Opening Line**: Most critical - hooks or loses them in 5 seconds
3. **Problem Statement**: Connect to their specific situation
4. **Social Proof**: Similar company/industry
5. **Call to Action**: Relevant to their needs

**Rule:** Never send an email without personalizing at least the opening line.

---

\\newpage

# Part II: Core Email Sequences

---

`;

  // Add all sequence files
  console.log('📝 Adding SaaS sequences...');
  markdown += '\n\n' + readSequence('saas-meeting-booking.md') + '\n\n---\n\n';
  markdown += readSequence('saas-demo-request.md') + '\n\n---\n\n';
  markdown += readSequence('saas-partnership.md') + '\n\n---\n\n';

  console.log('📝 Adding Agency sequences...');
  markdown += readSequence('agency-meeting-booking.md') + '\n\n---\n\n';
  markdown += readSequence('agency-portfolio-review.md') + '\n\n---\n\n';
  markdown += readSequence('agency-partnership.md') + '\n\n---\n\n';

  console.log('📝 Adding B2B sequences...');
  markdown += readSequence('b2b-meeting-booking.md') + '\n\n---\n\n';
  markdown += readSequence('b2b-discovery-call.md') + '\n\n---\n\n';
  markdown += readSequence('b2b-partnership.md') + '\n\n---\n\n';

  console.log('📝 Adding bonus templates...');
  markdown += '\\newpage\n\n# Part III: Bonus Templates\n\n---\n\n';
  markdown += readSequence('bonus-templates.md') + '\n\n---\n\n';

  console.log('📝 Adding personalization framework...');
  markdown += '\\newpage\n\n# Part IV: Frameworks & Resources\n\n---\n\n';
  markdown += readFile('personalization-framework.md') + '\n\n';

  // Add footer
  markdown += `\n\n---

## About This Product

**Cold Email Template Library** - 55+ Proven Email Templates for B2B Sales & Partnerships

Created by RunDailyAI.com

Price: $39

© 2026 RunDailyAI. All rights reserved.

For support or questions, visit RunDailyAI.com

---

**Version:** 1.0
**Last Updated:** ${new Date().toLocaleDateString()}
`;

  const outputPath = path.join(baseDir, 'COMPLETE-LIBRARY.md');
  fs.writeFileSync(outputPath, markdown);

  const stats = fs.statSync(outputPath);
  const fileSizeKB = (stats.size / 1024).toFixed(2);
  const wordCount = markdown.split(/\s+/).length;

  console.log('✅ Markdown combined successfully!');
  console.log(`📄 Output: ${outputPath}`);
  console.log(`📊 File size: ${fileSizeKB} KB`);
  console.log(`📝 Word count: ${wordCount.toLocaleString()} words`);

  return outputPath;
}

// Run the combination
try {
  const outputPath = combineMarkdown();
  console.log('\n✨ Markdown combination complete!');
  console.log(`\nCombined markdown saved to:\n${outputPath}`);
} catch (error) {
  console.error('\n❌ Failed to combine markdown:', error);
  process.exit(1);
}
