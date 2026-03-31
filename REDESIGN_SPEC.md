**# 🚀 RunDailyAI Website Redesign — Complete Build Specification**




**\*\*Project:\*\*** Premium AI Product Platform Redesign &#x20;

**\*\*Current Site:\*\*** [https://www.rundailyai.com](https://www.rundailyai.com) &#x20;

**\*\*Final Goal:\*\*** Premium, conversion-focused AI SaaS website &#x20;

**\*\*Timeline:\*\*** Full rebuild &#x20;

**\*\*Deployment:\*\*** Vercel + Next.js 14




**---**




**## 📋 EXECUTIVE SUMMARY**




**\*\*Problem:\*\*** Current website looks basic with poor spacing, weak typography, broken responsive layout, no visual hierarchy, and weak branding.




**\*\*Solution:\*\*** Complete redesign and rebuild into a **\*\*premium AI startup website\*\*** with:

\- Modern, futuristic design (glassmorphism, animations, 3D elements)

\- Clear value proposition and product showcase

\- Conversion-focused CTAs and user flow

\- Professional branding for AI product company




**\*\*Inspiration:\*\*** Modern AI startups (Stripe, OpenAI, mid-level portfolio sites) &#x20;

**\*\*Not a personal portfolio\*\*** — This is a **\*\*product company\*\*** selling AI tools/templates.




**---**




**## 🎨 DESIGN SYSTEM**




**### Color Palette**




**\*\*Primary Colors:\*\***

\- **\*\*Background:\*\*** Dark navy/charcoal (#0A0E27 or #1A1A2E)

\- **\*\*Accent 1:\*\*** Electric blue (#0061FF or #00D9FF)

\- **\*\*Accent 2:\*\*** Purple gradient (#8B5CF6 or #A78BFA)

\- **\*\*Accent 3:\*\*** Neon cyan (#06B6D4)

\- **\*\*Text Primary:\*\*** Off-white (#F8F9FA or #FFFFFF)

\- **\*\*Text Secondary:\*\*** Light gray (#A8ADB8)




**\*\*Secondary Palette:\*\***

\- Gradient overlays: Blue-to-purple (#0061FF → #8B5CF6)

\- Hover states: Brighter cyan/neon effects




**\*\*Theme:\*\*** Dark-first with neon/AI accents (cyberpunk-inspired, not overdone)




**### Typography**




**\*\*Primary Font:\*\*** Inter (Google Fonts) &#x20;

\- Headings: Bold/Semibold (700/600)

\- Body: Regular (400)




**\*\*Secondary Font:\*\*** Satoshi or JetBrains Mono (for tech/code elements) &#x20;

\- Used in: Code snippets, feature callouts, stats




**\*\*Type Scale:\*\***

\`\`\`

H1: 56px (bold) — Hero headlines

H2: 42px (bold) — Section titles

H3: 32px (semibold) — Subsection headers

H4: 24px (semibold) — Card titles

Body: 16px (regular) — Main text

Small: 14px (regular) — Secondary text

Tiny: 12px (regular) — Labels

\`\`\`




**\*\*Line Height:\*\***

\`\`\`

Headings: 1.2

Body: 1.6

Code: 1.5

\`\`\`




**### Spacing System**




**\*\*Base:\*\*** 8px/10px grid (be consistent)




**\*\*Margins/Padding:\*\***

\`\`\`

XS: 8px

S: 16px

M: 24px

L: 32px

XL: 48px

2XL: 64px

3XL: 96px

\`\`\`




Use these consistently across all components.




**### Border & Shadows**




**\*\*Border Radius:\*\***

\- Small: 6px (buttons, small cards)

\- Medium: 12px (large cards)

\- Large: 20px (hero sections)




**\*\*Shadows:\*\***

\- Light: 0 2px 8px rgba(0,0,0,0.1)

\- Medium: 0 8px 24px rgba(0,97,255,0.2) \[blue glow]

\- Heavy: 0 20px 48px rgba(0,0,0,0.3)




**\*\*Glassmorphism:\*\***

\`\`\`

Background: rgba(255,255,255,0.05)

Backdrop-filter: blur(10px)

Border: 1px solid rgba(255,255,255,0.1)

\`\`\`




**---**




**## 🎯 WEBSITE SECTIONS & STRUCTURE**




**### 1. HEADER / NAVIGATION**




**\*\*Requirements:\*\***

\- Fixed or sticky header (decide based on scroll behavior)

\- Logo on left (text "RunDailyAI" + minimal icon)

\- Navigation menu: Home | Products | Features | About | Blog | Contact

\- Right side: CTA button "Get Started" or "Shop Now"

\- Mobile hamburger menu (smooth slide animation)

\- Header background: Semi-transparent dark with blur (glassmorphic)




**\*\*Logo Design:\*\***

\- Text-based: "RunDailyAI" with a minimal icon (e.g., circuit board, AI brain outline)

\- Single color (electric blue or white depending on context)

\- Professional and recognizable

\- Could use gradient for premium feel




**\*\*Interactions:\*\***

\- Logo hover: Subtle glow or color shift

\- Nav links: Underline animation on hover

\- Mobile menu: Smooth slide-in from left/right

\- CTA button: Color change + slight lift effect




**---**




**### 2. HERO SECTION**




**\*\*Layout:\*\***

\- Full viewport height (100vh)

\- Split layout: Left text (60%), Right visual (40%)

&#x20; \- OR: Centered text with background visual




**\*\*Text Content:\*\***

\- **\*\*Main Headline:\*\*** "AI Tools That Actually Save You Thousands" (or similar)

&#x20; \- Should emphasize: automation, time-saving, productivity

&#x20; \- Font: 56px bold, white

&#x20; \- Gradient text effect optional (blue → purple)




\- **\*\*Subheadline:\*\*** "Curated AI templates, tools, and automation workflows for modern professionals. Save 20+ hours every month with ready-to-use solutions."

&#x20; \- Font: 18px regular, light gray

&#x20; \- Line height: 1.6




\- **\*\*CTA Buttons:\*\***

&#x20; \- Primary: "Browse Products" (blue background, white text)

&#x20; \- Secondary: "Try Free Tools" (outline style, white border)

&#x20; \- Buttons: 16px, 12px vertical padding, rounded 6px

&#x20; \- Hover: Glow effect, slight scale increase (1.05)




**\*\*Visual Background:\*\***

\- **\*\*Option A:\*\*** Animated gradient with subtle motion

\- **\*\*Option B:\*\*** 3D animated element (Three.js) — geometric shapes, floating particles

\- **\*\*Option C:\*\*** Animated lottie animation (AI-themed)

\- **\*\*Motion:\*\*** Subtle drift, parallax on scroll, no distraction




**\*\*Animation Details:\*\***

\- Hero headline: Fade in + slide up on load (250ms ease-out)

\- Subheadline: Fade in with 100ms delay

\- Buttons: Fade in with 150ms delay

\- Background: Continuous subtle motion (very slow rotation or drift)




**---**




**### 3. VALUE PROPOSITION SECTION**




**\*\*Goal:\*\*** Clearly communicate what RunDailyAI is and why it's valuable




**\*\*Layout:\*\*** 3 cards in a row (responsive to 2 on tablet, 1 on mobile)




**\*\*Card 1 - Quick Access\*\***

\- Icon: ShoppingCart or Zap emoji

\- Title: "Browse & Download Instantly"

\- Description: "No waiting. Get instant access to 100+ AI tools, templates, and automation workflows."




**\*\*Card 2 - AI-Made\*\***

\- Icon: Brain or Code emoji

\- Title: "Built by AI, Perfected by Humans"

\- Description: "Every product is AI-generated and then carefully reviewed by our expert team for quality."




**\*\*Card 3 - Affordable Pricing\*\***

\- Icon: CreditCard or Coin emoji

\- Title: "Affordable for Everyone"

\- Description: "Most products under $50. All products include lifetime access and free updates."




**\*\*Card Design:\*\***

\- Background: Glassmorphism (rgba background + blur)

\- Border: Subtle 1px white border with transparency

\- Padding: 32px

\- Corner radius: 12px

\- Icon size: 48px

\- Font: Icon + Title (24px bold) + Description (14px gray)




**\*\*Interaction:\*\***

\- Hover: Card lifts (transform: translateY(-8px)), shadow intensifies, border glows blue

\- Smooth transition (300ms)




**---**




**### 4. FEATURED PRODUCTS SECTION**




**\*\*Title:\*\*** "Bestselling Products"




**\*\*Layout:\*\*** 3 product cards in grid (responsive)




**\*\*Each Card Should Show:\*\***

\- Product image/thumbnail

\- Category badge (Email Marketing, Productivity, etc.) — small, colored label

\- Product name (bold, 18px)

\- Brief description (14px, gray)

\- Price ($39, $19, etc.) — large, bold, blue

\- "View Details" CTA button (outline style)




**\*\*Card Design:\*\***

\- Background: Slight gradient or solid dark with border

\- Image area: 200x200px, object-fit cover, rounded corners

\- Padding: 20px

\- Border: 1px solid rgba(255,255,255,0.1)

\- Corner radius: 12px




**\*\*Interaction:\*\***

\- Hover: Image scales slightly (1.05), card shadow increases, button color changes

\- Title and description text should show on hover

\- Smooth 300ms transition




**---**




**### 5. HOW IT WORKS SECTION**




**\*\*Goal:\*\*** Simple, visual explanation of the process




**\*\*Layout:\*\*** 3-4 steps with connecting lines/arrows




**\*\*Steps:\*\***




\`\`\`

Step 1: Browse Our Collection

Icon: Magnifying glass or grid icon

"Explore 100+ curated AI templates, tools, and automation workflows"




↓ (animated arrow or connector)




Step 2: Download Instantly

Icon: Download or checkmark

"Get instant access to your purchase—no waiting, no setup required"




↓




Step 3: Start Using Immediately

Icon: Rocket or play

"Use professionally crafted, ready-to-use products right away"




↓




Step 4: Level Up Your Workflow (Optional)

Icon: Zap or trending up

"See immediate productivity gains and save hours every month"

\`\`\`




**\*\*Design:\*\***

\- Steps arranged vertically (mobile) or horizontally (desktop)

\- Large circular icons (64x64px, colored with gradients)

\- Connected by animated lines (slide in on scroll)

\- Text below each step




**\*\*Animation:\*\***

\- Line animation: Draws from left to right on scroll-into-view

\- Icons: Fade in staggered (100ms between each)

\- Text: Fade in after icons




**---**




**### 6. FEATURES / BENEFITS SECTION**




**\*\*Goal:\*\*** Showcase why RunDailyAI is better




**\*\*Layout:\*\*** 2-column alternating layout (text + image/icon on alternating sides)




**\*\*Feature 1: Built by AI\*\***

\- Icon/Visual: AI brain with circuit patterns

\- Headline: "Cutting-Edge AI Generation"

\- Description: "Every product is created using advanced AI models, ensuring professional quality and modern best practices."

\- Details list: Time saved, Expert quality, Always updated




**\*\*Feature 2: Human-Reviewed Quality\*\***

\- Icon/Visual: Checkmark with human silhouette

\- Headline: "Reviewed by Expert Humans"

\- Description: "Our team manually reviews every AI-generated product to ensure it meets our strict quality standards."




**\*\*Feature 3: Lifetime Access\*\***

\- Icon/Visual: Infinity symbol or lock

\- Headline: "One-Time Purchase, Lifetime Access"

\- Description: "Buy once, use forever. All future updates and improvements included at no extra cost."




**\*\*Feature 4: Money-Back Guarantee\*\***

\- Icon/Visual: Shield with checkmark

\- Headline: "30-Day Money-Back Guarantee"

\- Description: "Not satisfied? Get a full refund within 30 days, no questions asked."




**\*\*Design:\*\***

\- Section background: Subtle gradient or solid

\- Text area: 40% width, padding 32px

\- Visual area: 60% width, showcasing benefits

\- Text: H3 (32px) + description (16px gray)

\- Padding between sections: 64px




**\*\*Animation:\*\***

\- On scroll into view: Text slides in from left, visual slides in from right

\- 400ms ease-out

\- Stagger: Text appears first, visual follows with 100ms delay




**---**




**### 7. STATS / SOCIAL PROOF SECTION**




**\*\*Goal:\*\*** Build credibility with numbers




**\*\*Layout:\*\*** 4 stats in a row (responsive to 2x2 on tablet, stacked on mobile)




**\*\*Stats:\*\***




\`\`\`

Stat 1:

150+

Products & Tools

Big bold number (48px) + label (16px gray)




Stat 2:

50K+

Happy Customers

Big bold number + label




Stat 3:

500K+

Hours Saved This Year

Big bold number + label




Stat 4:

$2M+

Total Revenue Generated For Users

Big bold number + label

\`\`\`




**\*\*Design:\*\***

\- Each stat: Centered box with light border

\- Background: Slight glassmorphism

\- Padding: 24px

\- Text color: White for numbers, gray for labels




**\*\*Animation:\*\***

\- Number counter: Animates from 0 to final number on scroll-into-view (1 second)

\- Used library: \`react-countup\` or similar




**---**




**### 8. PRODUCT CATEGORIES SECTION**




**\*\*Title:\*\*** "Browse by Category"




**\*\*Layout:\*\*** 6 category cards (3x2 grid, responsive)




**\*\*Each Card:\*\***

\- Category name: "📝 Notion Templates"

\- Count: "24 products"

\- Click to filter or navigate to category page

\- Hover: Slight lift, color change




**\*\*Action:\*\*** Link to \`/products?category\=notion-templates\`




**---**




**### 9. FREE TOOLS SECTION**




**\*\*Title:\*\*** "Try Free AI Tools — No Sign-Up Required"




**\*\*Description:\*\*** "Test our premium quality without paying. These tools are fully functional and production-ready."




**\*\*Layout:\*\*** 3 tool cards (responsive)




**\*\*Each Card:\*\***

\- Icon: Relevant emoji or icon

\- Tool name: "Word Counter", "Color Palette Generator", "JSON Formatter"

\- Description: "Count words, characters, and reading time instantly"

\- CTA: "Try Now" button




**\*\*Design:\*\*** Similar to product cards but with "FREE" badge




**\*\*Interaction:\*\***

\- Hover: Same as product cards

\- Click: Navigate to tool page or open tool in modal




**---**




**### 10. TESTIMONIALS / REVIEWS SECTION (Optional but Recommended)**




**\*\*Title:\*\*** "What Our Customers Say"




**\*\*Layout:\*\*** 3 testimonial cards or carousel (auto-rotate)




**\*\*Each Testimonial:\*\***

\`\`\`

⭐⭐⭐⭐⭐

"These templates saved me 20+ hours a month. Highly recommend RunDailyAI!"

— Sarah, Marketing Manager

\`\`\`




**\*\*Design:\*\***

\- Card with quote icon

\- Star rating (5 stars)

\- Quote text (italic, 16px)

\- Author name + role

\- Slight gradient background




**---**




**### 11. TEAM / "BUILT DIFFERENT" SECTION**




**\*\*Title:\*\*** "Built Different"




**\*\*Description:\*\*** "Our products are created by a team of specialized AI agents, each an expert in their domain"




**\*\*Team Members (AI agents):\*\***




\`\`\`

🧭 Atlas — CEO

Strategic vision and company direction




⚡ Builder — CTA

Technical architecture and implementation




📢 Voice — CMO

Brand voice and content strategy




🎨 Canvas — Designer

Visual design and user experience




🔍 Radar — Researcher

Market research and data analysis




⚙️ Ops — Operations

Process optimization and execution

\`\`\`




**\*\*Design:\*\***

\- 6 cards in 2 rows (responsive)

\- Icon (emoji or illustration): 64x64px

\- Title: Agent name (18px bold)

\- Role: "CEO" etc. (14px gray)

\- Description: 14px gray text




**\*\*Animation:\*\***

\- Cards fade in on scroll with stagger (100ms between each)




**---**




**### 12. NEWSLETTER / EMAIL SIGNUP SECTION**




**\*\*Title:\*\*** "Get Smarter About AI in 5 Minutes"




**\*\*Description:\*\*** "Weekly updates on new products, tools, and AI insights"




**\*\*Layout:\*\*** Centered, with form




**\*\*Form:\*\***

\- Input field: "Enter your email"

\- CTA button: "Subscribe" (blue, with arrow icon)

\- Success message: "Thanks for subscribing!"




**\*\*Design:\*\***

\- Background: Gradient or glassmorphism

\- Input: 16px, padding 12px, border 1px, placeholder gray

\- Button: 16px bold, rounded 6px




**\*\*Animation:\*\***

\- On focus: Input border color changes to blue

\- Button hover: Slight scale + color shift




**---**




**### 13. CTA SECTION (Before Footer)**




**\*\*Title:\*\*** "Ready to Transform Your Workflow?"




**\*\*Description:\*\*** "Join 50K+ professionals using RunDailyAI to save time and automate their work."




**\*\*Layout:\*\*** Centered, full width




**\*\*CTA Buttons:\*\***

\- Primary: "Shop Products" (blue, large 18px)

\- Secondary: "Explore Free Tools" (outline, 18px)




**\*\*Background:\*\*** Gradient (blue to purple) with animated elements




**\*\*Animation:\*\***

\- Buttons have glow effect on hover

\- Background has subtle moving gradient




**---**




**### 14. FOOTER**




**\*\*Layout:\*\*** Dark background, multi-column




**\*\*Columns:\*\***




\`\`\`

Column 1: COMPANY

\- Logo/Brand

\- "Made with AI, reviewed by humans"

\- Social icons (Twitter, LinkedIn, GitHub)




Column 2: PRODUCTS

\- Browse All

\- Notion Templates

\- Web Tools

\- Printables




Column 3: FREE TOOLS

\- All Free Tools

\- Word Counter

\- JSON Formatter

\- Color Palette Generator




Column 4: COMPANY

\- About Us

\- Blog

\- Support

\- Contact




Column 5: LEGAL

\- Privacy Policy

\- Terms of Service

\- Refund Policy

\`\`\`




**\*\*Bottom Section:\*\***

\`\`\`

© 2026 RunDailyAI. All rights reserved.

Made with ❤️ and AI.

\`\`\`




**\*\*Design:\*\***

\- Background: Dark (#0A0E27)

\- Text: Gray (#A8ADB8)

\- Links: Light gray, underline on hover

\- Padding: 48px vertical, 32px horizontal

\- Columns: 20% width each




**---**




**## 🎬 ANIMATIONS & INTERACTIONS**




**### Global Animations**




**\*\*Scroll Animations:\*\***

\- Fade-in on scroll-into-view (300ms ease-out)

\- Slide-up effect combined with fade-in

\- Parallax effect on background images (subtle, 50-100px movement)

\- Line animations (draw effect) for connectors




**\*\*Hover Effects:\*\***

\- Buttons: Color darken + slight scale (1.05)

\- Cards: Lift effect (translateY -8px) + shadow increase

\- Links: Underline animation (width 0 → 100%, 200ms)




**\*\*Page Load:\*\***

\- Header: Fade in + slide down (200ms)

\- Hero headline: Fade in + slide up (250ms)

\- Elements: Staggered entrance (100-150ms between)




**\*\*Cursor Effects (Optional):\*\***

\- Custom cursor that follows mouse (lightweight, no performance impact)

\- OR glow effect around cursor on hover (subtle)

\- Could use cursor-following library or custom CSS




**### Specific Section Animations**




**\*\*Hero Section:\*\***

\- Background: Continuous slow rotation or wave effect (very subtle)

\- Headline: Word-by-word fade in (optional, more dynamic)

\- Buttons: Scale + glow on hover




**\*\*"How It Works" Section:\*\***

\- Connecting lines: Draw animation on scroll-into-view

\- Icons: Pop-in animation with slight bounce

\- Text: Fade in staggered




**\*\*Feature Section (Alternating):\*\***

\- Text: Slide in from left (400ms)

\- Visual: Slide in from right (400ms)

\- Stagger: Text first, visual 100ms after




**\*\*Stats Section:\*\***

\- Numbers: Counter animation from 0 (1 second duration)

\- Cards: Fade in with stagger




**### Animation Library**




Use **\*\*Framer Motion\*\*** for React animations (recommended):

\- Cleaner API for React

\- Great performance

\- Built-in scroll detection

\- Variants system for complex animations




Alternative: GSAP (more powerful but heavier)




**---**




**## 📱 RESPONSIVE DESIGN**




**### Breakpoints**




\`\`\`

Mobile: 320px - 640px

Tablet: 641px - 1024px

Desktop: 1025px+

\`\`\`




**### Key Responsive Changes**




**\*\*Navigation:\*\***

\- Desktop: Horizontal menu

\- Tablet/Mobile: Hamburger menu with slide-in sidebar




**\*\*Hero Section:\*\***

\- Desktop: Split layout (text 60%, visual 40%)

\- Tablet: Stacked (text 100%, visual 100%)

\- Mobile: Stacked, full width




**\*\*Product Grid:\*\***

\- Desktop: 3 columns

\- Tablet: 2 columns

\- Mobile: 1 column




**\*\*Padding/Margins:\*\***

\- Desktop: Based on 24px-32px spacing

\- Tablet: Reduce to 20px

\- Mobile: Reduce to 16px




**\*\*Font Sizes:\*\***

\- Desktop: H1 56px

\- Tablet: H1 42px

\- Mobile: H1 32px




**\*\*Ensure:\*\***

\- No horizontal scrolling

\- Touch-friendly buttons (min 44px height)

\- Readable text on all devices

\- Images scale correctly

\- Navigation is accessible




**---**




**## 🔧 TECHNICAL IMPLEMENTATION**




**### Tech Stack**




**\*\*Framework:\*\*** Next.js 14 (App Router) &#x20;

**\*\*Styling:\*\*** Tailwind CSS &#x20;

**\*\*Animations:\*\*** Framer Motion (primary), GSAP (optional for advanced effects) &#x20;

**\*\*Components:\*\*** Radix UI or Headless UI (for accessibility) &#x20;

**\*\*Form Handling:\*\*** React Hook Form + Zod &#x20;

**\*\*Icons:\*\*** Lucide React or Heroicons &#x20;

**\*\*3D (Optional):\*\*** Three.js (for hero section, advanced effects) &#x20;




**### Project Structure**




\`\`\`

src/

├── app/

│   ├── layout.tsx              # Root layout

│   ├── page.tsx                # Landing/home page

│   ├── globals.css             # Global Tailwind

│   ├── font-definitions.css    # Google Fonts

│   ├── products/

│   │   ├── page.tsx            # Product listing page

│   │   ├── \[id]/

│   │   │   └── page.tsx        # Product detail page

│   │   └── layout.tsx

│   ├── free-tools/

│   │   ├── page.tsx

│   │   └── \[toolId]/

│   │       └── page.tsx

│   ├── about/

│   │   └── page.tsx

│   ├── blog/

│   │   ├── page.tsx

│   │   └── \[slug]/

│   │       └── page.tsx

│   ├── contact/

│   │   └── page.tsx

│   └── api/

│       ├── subscribe/

│       │   └── route.ts        # Newsletter subscription

│       ├── contact/

│       │   └── route.ts        # Contact form

│       └── products/

│           └── route.ts        # Fetch products API

│

├── components/

│   ├── Header.tsx              # Navigation header

│   ├── Footer.tsx              # Footer

│   ├── HeroSection.tsx

│   ├── ValueProposition.tsx    # 3-card section

│   ├── FeaturedProducts.tsx

│   ├── HowItWorks.tsx

│   ├── Features.tsx

│   ├── Stats.tsx

│   ├── Categories.tsx

│   ├── FreeTools.tsx

│   ├── Testimonials.tsx

│   ├── Team.tsx

│   ├── Newsletter.tsx

│   ├── CTA.tsx

│   ├── UI/

│   │   ├── Button.tsx

│   │   ├── Card.tsx

│   │   ├── Input.tsx

│   │   └── Badge.tsx

│   └── Animations/

│       ├── ScrollReveal.tsx    # Fade-in on scroll

│       ├── CountUp.tsx         # Number counter

│       └── ParallaxSection.tsx # Parallax effect

│

├── lib/

│   ├── config.ts               # Config constants

│   ├── colors.ts               # Color palette (export as JS)

│   ├── animations.ts           # Framer Motion variants

│   ├── api/

│   │   ├── supabase.ts         # Supabase client (if using DB)

│   │   └── fetch-products.ts   # Fetch products logic

│   └── utils.ts                # Utility functions

│

├── styles/

│   ├── globals.css

│   ├── variables.css           # CSS variables for colors

│   └── animations.css          # Global animations

│

└── public/

&#x20;   ├── logo.png                # Logo (light + dark versions)

&#x20;   ├── icons/                  # SVG icons

&#x20;   ├── images/                 # Hero images, product images

&#x20;   └── animations/             # Lottie files if used

\`\`\`




**### Configuration Files**




**\*\*tailwind.config.ts:\*\***

\`\`\`typescript

export default {

&#x20; theme: {

&#x20;   extend: {

&#x20;     colors: {

&#x20;       'brand-dark': '#0A0E27',

&#x20;       'brand-blue': '#0061FF',

&#x20;       'brand-purple': '#8B5CF6',

&#x20;       'brand-cyan': '#06B6D4',

&#x20;       'text-primary': '#F8F9FA',

&#x20;       'text-secondary': '#A8ADB8',

&#x20;     },

&#x20;     fontFamily: {

&#x20;       sans: \['Inter', 'sans-serif'],

&#x20;       mono: \['JetBrains Mono', 'monospace'],

&#x20;     },

&#x20;     animation: {

&#x20;       fadeIn: 'fadeIn 0.3s ease-out',

&#x20;       slideUp: 'slideUp 0.4s ease-out',

&#x20;     },

&#x20;   },

&#x20; },

}

\`\`\`




**\*\*next.config.js:\*\***

\- Enable Image Optimization

\- Set up redirect rules

\- Enable compression




**### Key Implementation Details**




**\*\*1. Hero Section with 3D Background (Optional)\*\***




If using Three.js:

\`\`\`typescript

// src/components/HeroSection.tsx

import { Canvas, useFrame } from '@react-three/fiber';




// Animated 3D shapes or particles

// OR use Lottie animation for simpler approach

\`\`\`




**\*\*2. Scroll Animation Provider\*\***




\`\`\`typescript

// src/components/Animations/ScrollReveal.tsx

import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';




// Wrapper component that triggers animations on scroll

\`\`\`




**\*\*3. Counter Animation\*\***




\`\`\`typescript

// src/components/Animations/CountUp.tsx

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';




// Animates numbers when section comes into view

\`\`\`




**\*\*4. Responsive Navigation\*\***




\`\`\`typescript

// src/components/Header.tsx

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive'; // or custom hook




// Toggle hamburger menu on mobile

// Smooth transitions

\`\`\`




**---**




**## 🎯 SEO & PERFORMANCE OPTIMIZATION**




**### SEO Requirements**




1\. **\*\*Meta Tags:\*\***

&#x20;  \- Title: \`RunDailyAI - AI Tools That Save You Time | Automation Templates\`

&#x20;  \- Description: \`Discover 150+ AI-powered templates and tools. Save 20+ hours monthly with curated productivity solutions. One-time purchase, lifetime access.\`

&#x20;  \- Keywords: AI tools, productivity, templates, automation, Notion templates, email marketing




2\. **\*\*Open Graph Tags:\*\***

&#x20;  \- og:title, og:description, og:image

&#x20;  \- All pages should have proper OG tags




3\. **\*\*Structured Data (JSON-LD):\*\***

&#x20;  \- Organization schema

&#x20;  \- Product schema (for each product page)

&#x20;  \- BreadcrumbList for navigation




4\. **\*\*Sitemap & Robots.txt:\*\***

&#x20;  \- Generate sitemap.xml

&#x20;  \- robots.txt for crawler instructions




5\. **\*\*Canonical URLs:\*\***

&#x20;  \- Prevent duplicate content




**### Performance Optimization**




1\. **\*\*Image Optimization:\*\***

&#x20;  \- Use Next.js Image component

&#x20;  \- WebP format with fallbacks

&#x20;  \- Lazy loading enabled

&#x20;  \- Proper aspect ratios




2\. **\*\*Code Splitting:\*\***

&#x20;  \- Dynamic imports for heavy components

&#x20;  \- Separate lazy-loaded sections




3\. **\*\*Bundle Size:\*\***

&#x20;  \- Monitor with \`next/bundle-analyzer\`

&#x20;  \- Keep animations light (Framer Motion over heavy 3D libs)




4\. **\*\*Caching:\*\***

&#x20;  \- Static generation (SSG) for product pages

&#x20;  \- ISR (Incremental Static Regeneration) for blog




5\. **\*\*Core Web Vitals Target:\*\***

&#x20;  \- LCP: \< 2.5s

&#x20;  \- FID: \< 100ms

&#x20;  \- CLS: \< 0.1




**---**




**## 💡 CONVERSION OPTIMIZATION**




**### Call-to-Action Strategy**




1\. **\*\*Primary CTAs:\*\***

&#x20;  \- "Browse Products" (Hero)

&#x20;  \- "Shop Now" (Throughout)

&#x20;  \- Large, visible, high contrast




2\. **\*\*Secondary CTAs:\*\***

&#x20;  \- "Try Free Tools"

&#x20;  \- "Learn More"

&#x20;  \- Outline style, less prominent




3\. **\*\*CTA Placement:\*\***

&#x20;  \- Hero section (top fold)

&#x20;  \- End of each major section

&#x20;  \- Sticky button on scroll (optional)

&#x20;  \- Footer




4\. **\*\*Visual Hierarchy:\*\***

&#x20;  \- Primary: Blue filled button

&#x20;  \- Secondary: Outline button

&#x20;  \- Tertiary: Text link




**### Conversion Funnel**




\`\`\`

Hero → Browse/Try → Product Page → Add to Cart → Checkout

&#x20;                                           ↓

&#x20;                                   Email signup

\`\`\`




**### Psychological Triggers**




1\. **\*\*Urgency:\*\*** "Limited time offer" or "Join 50K+ users" (optional)

2\. **\*\*Social Proof:\*\*** Stats section showing customers/revenue

3\. **\*\*Risk Reversal:\*\*** "30-day money-back guarantee"

4\. **\*\*Clarity:\*\*** Clear value propositions at every step

5\. **\*\*Simplicity:\*\*** Easy navigation, minimal friction




**---**




**## 🔄 CONTENT STRATEGY**




**### Homepage Content Sources**




1\. **\*\*Hero Headline:\*\*** "AI Tools That Actually Save You Thousands"

2\. **\*\*Value Props:\*\*** Can use existing content from current site

3\. **\*\*Product Data:\*\*** Pull from existing product listings

4\. **\*\*Testimonials:\*\*** Collect from happy customers or use placeholder

5\. **\*\*Team Info:\*\*** "Built Different" section content




**### Blog Integration**




\- Blog posts linked from footer and nav

\- Recent posts on homepage (3-4 latest)

\- Each post should have featured image, excerpt, date, author




**### Future Content Updates**




\- Plan for monthly blog posts (schedule)

\- Regular product additionsProduct description templates




**---**




**## 📊 ANALYTICS & TRACKING**




**### Google Analytics Setup**




1\. Implement GA4 tracking code

2\. Track events:

&#x20;  \- CTA clicks (Browse Products, Shop Now, etc.)

&#x20;  \- Product views

&#x20;  \- Newsletter signups

&#x20;  \- Add to cart events




3\. Goals:

&#x20;  \- Product purchase

&#x20;  \- Newsletter signup

&#x20;  \- Free tool usage




**### Heatmap Tracking (Optional)**




\- Use Hotjar or Clarity

\- Track user scrolling, clicks

\- Identify drop-off points




**### Conversion Rate Tracking**




\- Monitor CTR on homepage CTAs

\- Track funnel completion rate

\- A/B test button text/color variations




**---**




**## 🚀 DEPLOYMENT & HOSTING**




**### Deployment Platform**




**\*\*Vercel (Recommended):\*\***

\- Built for Next.js

\- Automatic deployments on git push

\- CDN for fast global delivery

\- Environment variables management




**### Environment Variables**




\`\`\`

NEXT\_PUBLIC\_SITE\_URL\=https://www.rundailyai.com

NEXT\_PUBLIC\_API\_URL\=https://api.rundailyai.com

NEXT\_PUBLIC\_GA\_ID\=G-XXXXX

\# Add other services as needed

\`\`\`




**### Deployment Checklist**




\- \[ ] Domain DNS configured

\- \[ ] SSL certificate enabled

\- \[ ] Environment variables set

\- \[ ] Build optimization tested

\- \[ ] Performance audit (Lighthouse)

\- \[ ] SEO audit

\- \[ ] Cross-browser testing

\- \[ ] Mobile testing

\- \[ ] Analytics tracking verified




**---**




**## 📈 IMPLEMENTATION PHASES**




**### Phase 1: Foundation (Week 1)**




\- \[ ] Setup Next.js project

\- \[ ] Configure Tailwind CSS + design tokens

\- \[ ] Create base components (Button, Card, Input)

\- \[ ] Setup layout (Header, Footer)

\- \[ ] Implement responsive framework




**### Phase 2: Core Pages (Week 2)**




\- \[ ] Build Hero section with animations

\- \[ ] Implement Value Proposition section

\- \[ ] Create Featured Products section

\- \[ ] Build How It Works section

\- \[ ] Implement Stats section with counters




**### Phase 3: Additional Sections (Week 3)**




\- \[ ] Add Features section

\- \[ ] Build Categories section

\- \[ ] Implement Free Tools showcase

\- \[ ] Add Testimonials (if content available)

\- \[ ] Build Team section




**### Phase 4: Advanced Features (Week 4)**




\- \[ ] Add Newsletter signup with form validation

\- \[ ] Implement CTA section

\- \[ ] Add Blog integration (if needed)

\- \[ ] Setup API routes for forms

\- \[ ] Implement analytics tracking




**### Phase 5: Optimization & Polish (Week 5)**




\- \[ ] Performance optimization

\- \[ ] SEO audit + implementation

\- \[ ] Cross-browser testing

\- \[ ] Mobile responsiveness audit

\- \[ ] Animation refinement

\- \[ ] Load time optimization

\- \[ ] Lighthouse performance check




**### Phase 6: Deployment & Launch (Week 6)**




\- \[ ] Domain setup

\- \[ ] Vercel deployment configuration

\- \[ ] Environment variables setup

\- \[ ] DNS configuration

\- \[ ] SSL certificate

\- \[ ] Final testing in production

\- \[ ] Launch + monitoring




**---**




**## 🛠 DEVELOPMENT BEST PRACTICES**




**### Code Organization**




1\. **\*\*Component Files:\*\***

&#x20;  \- One component per file

&#x20;  \- Clear, descriptive names

&#x20;  \- Comments for complex logic




2\. **\*\*Type Safety:\*\***

&#x20;  \- Use TypeScript for all files

&#x20;  \- Define interfaces for props

&#x20;  \- Avoid \`any\` types




3\. **\*\*Styling:\*\***

&#x20;  \- Use Tailwind utility classes

&#x20;  \- Avoid inline styles

&#x20;  \- Create CSS modules for complex styles

&#x20;  \- Use CSS variables for colors




4\. **\*\*Performance:\*\***

&#x20;  \- Lazy load components

&#x20;  \- Memoize expensive computations (useMemo)

&#x20;  \- Use useCallback for event handlers

&#x20;  \- Minimize bundle size




**### Testing**




\- Unit tests for utility functions

\- Integration tests for API routes

\- E2E tests for critical user flows

\- Use Jest + React Testing Library




**---**




**## 🔐 SECURITY**




1\. **\*\*Environment Variables:\*\***

&#x20;  \- Never commit \`.env.local\`

&#x20;  \- Use Vercel environment variable management




2\. **\*\*API Routes:\*\***

&#x20;  \- Validate user input

&#x20;  \- Rate limiting on form endpoints

&#x20;  \- CORS configuration if needed




3\. **\*\*Content Security Policy:\*\***

&#x20;  \- Set CSP headers in Next.js config

&#x20;  \- Prevent XSS attacks




4\. **\*\*HTTPS:\*\***

&#x20;  \- Enforce SSL/TLS

&#x20;  \- Use security headers (Helmet.js or Next.js headers)




**---**




**## 📱 FUTURE SCALABILITY**




**### Adding New AI Products**




1\. **\*\*Product Data Structure:\*\***

&#x20;  \- Create reusable product card component

&#x20;  \- Fetch product data from Supabase or CMS

&#x20;  \- Dynamic product pages from templates




2\. **\*\*Categorization System:\*\***

&#x20;  \- Implement category filtering

&#x20;  \- Search functionality

&#x20;  \- Sort by price, popularity, new




3\. **\*\*Product Management:\*\***

&#x20;  \- Admin dashboard for adding products

&#x20;  \- Product images/storage (Supabase or AWS S3)

&#x20;  \- Inventory management




4\. **\*\*User Accounts:\*\***

&#x20;  \- Implement purchase history

&#x20;  \- Download management

&#x20;  \- User dashboard




**### Integrations**




1\. **\*\*E-Commerce:\*\***

&#x20;  \- Stripe/Paddle for payments

&#x20;  \- Shopping cart management

&#x20;  \- Order tracking




2\. **\*\*Email Marketing:\*\***

&#x20;  \- Automated welcome emails

&#x20;  \- Product digest emails

&#x20;  \- Abandoned cart emails




3\. **\*\*CRM (Optional):\*\***

&#x20;  \- Track customer interactions

&#x20;  \- Segment users

&#x20;  \- Personalized marketing




**### Technical Scaling**




1\. **\*\*Database:\*\***

&#x20;  \- Plan for Supabase or PostgreSQL

&#x20;  \- Implement caching (Redis)

&#x20;  \- Database indexing for performance




2\. **\*\*File Storage:\*\***

&#x20;  \- Cloud storage for product files

&#x20;  \- CDN for fast delivery

&#x20;  \- Backup strategy




3\. **\*\*Monitoring:\*\***

&#x20;  \- Error tracking (Sentry)

&#x20;  \- Performance monitoring

&#x20;  \- Uptime monitoring




**---**




**## 💬 BRAND VOICE & MESSAGING**




**\*\*Brand Tone:\*\*** Professional but approachable, modern, tech-forward




**\*\*Key Messages:\*\***

\- "Made with AI, reviewed by humans"

\- "Save hours every month"

\- "One-time purchase, lifetime access"

\- "Built different" — emphasizing AI-driven creation




**\*\*Call-Out Examples:\*\***

\- "No subscriptions. No fluff. Just results."

\- "Join 50K+ professionals automating their workflow"

\- "Premium AI templates for real humans"




**---**




**## 📸 VISUAL ASSETS NEEDED**




1\. **\*\*Logo:\*\***

&#x20;  \- Light version (white)

&#x20;  \- Dark version (blue)

&#x20;  \- Square (favicon)

&#x20;  \- Full horizontal lockup




2\. **\*\*Hero Background:\*\***

&#x20;  \- 3D visual OR animated gradient OR Lottie animation

&#x20;  \- High resolution (2560x1440px)




3\. **\*\*Product Images:\*\***

&#x20;  \- For featured products section

&#x20;  \- Consistent style and sizing (400x300px)




4\. **\*\*Icons:\*\***

&#x20;  \- For sections (How It Works, Features, etc.)

&#x20;  \- Consistent style and size (icon set like Lucide or custom)




5\. **\*\*Team/AI Agents:\*\***

&#x20;  \- Avatar illustrations for 6 team members

&#x20;  \- Consistent art style




**---**




**## 📝 FORM IMPLEMENTATION**




**### Newsletter Signup Form**




\`\`\`

Input: Email address (required, email validation)

Button: Subscribe (primary CTA)

Success: "Check your email for confirmation"

Error: "Please enter a valid email"

\`\`\`




**### Contact Form (Contact Page)**




\`\`\`

Input: Name (required)

Input: Email (required, email validation)

Textarea: Message (required, min 10 characters)

Select: Topic (Question, Bug Report, Partnership, Other)

Button: Send Message

Success: "Message sent! We'll get back to you soon."

\`\`\`




**### E-Commerce Integration**




\- Product page with "Add to Cart" button

\- Shopping cart page

\- Checkout with Stripe integration

\- Order confirmation page




**---**




**## 🎨 DESIGN INSPIRATION REFERENCES**




**\*\*Site Structure:\*\*** Based on rundailyai.com existing layout &#x20;

**\*\*Visual Style:\*\*** Modern AI startups (Stripe, OpenAI, mid-level portfolios) &#x20;

**\*\*Animation:\*\*** Smooth, purposeful, not overdone &#x20;

**\*\*Color Scheme:\*\*** Dark with neon AI accents (cyberpunk aesthetic, refined) &#x20;




**---**




**## ✅ QUALITY CHECKLIST**




Before launching, verify:




\- \[ ] All pages responsive (mobile, tablet, desktop)

\- \[ ] All animations smooth (no jank, 60fps)

\- \[ ] All CTAs functional and visible

\- \[ ] Forms working (validation + submission)

\- \[ ] Navigation intuitive

\- \[ ] Typography correct (font sizes, weights, spacing)

\- \[ ] Colors match brand palette consistently

\- \[ ] Images optimized and loading fast

\- \[ ] SEO tags implemented

\- \[ ] Analytics tracking working

\- \[ ] No console errors

\- \[ ] Accessibility audit (WCAG AA standard)

\- \[ ] Lighthouse score >90

\- \[ ] Cross-browser testing passed

\- \[ ] Mobile testing passed




**---**




**## 🎯 SUCCESS METRICS**




After launch, measure:




1\. **\*\*User Engagement:\*\***

&#x20;  \- Average time on page

&#x20;  \- Scroll depth

&#x20;  \- CTA click-through rate




2\. **\*\*Conversion:\*\***

&#x20;  \- Product page visits

&#x20;  \- Add to cart rate

&#x20;  \- Purchase completion rate




3\. **\*\*Performance:\*\***

&#x20;  \- Page load time (target: \<3s)

&#x20;  \- Core Web Vitals scores

&#x20;  \- Error rate




4\. **\*\*SEO:\*\***

&#x20;  \- Organic traffic

&#x20;  \- Search ranking for target keywords

&#x20;  \- Impressions in Google Search Console




**---**




**## 📧 CONTACT & SUPPORT**




**\*\*Designer/Builder Notes:\*\***

\- Ask clarifying questions if anything is unclear

\- Provide design mockups for review before implementation

\- Regular check-ins for feedback and iteration

\- Final review before deployment




**\*\*Questions to Address:\*\***

\- Should we add blog functionality on day 1 or later?

\- Do you want a product filtering/search feature?

\- Should product pages have customer reviews?

\- Do you want a dashboard for users to track purchases?

\- Any specific 3D library preference for hero animation?




**---**




**\*\*END OF SPECIFICATION\*\***




**---**




**### QUICK START: Designer/Builder Actions**




1\. **\*\*Phase 1:\*\*** Read this document entirely. Ask clarifying questions.

2\. **\*\*Phase 2:\*\*** Create design mockups (at least 3 key pages: home, product listing, product detail)

3\. **\*\*Phase 3:\*\*** Implement design in Next.js/Tailwind

4\. **\*\*Phase 4:\*\*** Add animations with Framer Motion

5\. **\*\*Phase 5:\*\*** Optimize, test, polish

6\. **\*\*Phase 6:\*\*** Deploy to Vercel




**---**




**\*\*Version:\*\*** 1.0 &#x20;

**\*\*Created:\*\*** March 30, 2026 &#x20;

**\*\*Status:\*\*** Ready for Implementation &#x20;

**\*\*Approval:\*\*** \[Your Name]

**# 🎨 RunDailyAI Visual Design Guide & Mood Board**




**\*\*Created:\*\*** March 30, 2026 &#x20;

**\*\*Purpose:\*\*** Visual reference, design inspiration, and component specifications &#x20;

**\*\*Audience:\*\*** Designer, Developer, Stakeholder Review




**---**




**## 📐 DESIGN SYSTEM CHEAT SHEET**




**### Color Palette (Copy-Paste Ready)**




**\*\*Primary Colors:\*\***

\`\`\`css

\--color-bg-dark: *#0A0E27*;      /\* Main background (navy) \*/

\--color-bg-secondary: *#1A1A2E*;  /\* Alternative background \*/

\--color-accent-blue: *#0061FF*;   /\* Primary accent \*/

\--color-accent-cyan: *#00D9FF*;   /\* Bright cyan \*/

\--color-accent-purple: *#8B5CF6*; /\* Purple gradient \*/

\--color-accent-purple-light: *#A78BFA;* /\* Light purple \*/

\--color-text-primary: *#F8F9FA;*  /\* Main text (off-white) \*/

\--color-text-secondary: *#A8ADB8;* /\* Secondary text (gray) \*/

\--color-text-tertiary: *#7A7F8B*; /\* Tertiary text (darker gray) \*/

\`\`\`




**\*\*Usage Examples:\*\***

\- Headings: \`--color-text-primary\`

\- Body text: \`--color-text-secondary\`

\- Buttons primary: \`--color-accent-blue\`

\- Button hover: \`--color-accent-cyan\` or darker blue

\- Borders: \`rgba(255,255,255,0.1)\` on dark background

\- Shadows: \`rgba(0,97,255,0.2)\` for blue glow




**### Typography Master Reference**




\| Element | Font | Size | Weight | Line Height | Color |

\|---------|------|------|--------|-------------|-------|

\| H1 | Inter | 56px | 700 | 1.2 | Primary |

\| H2 | Inter | 42px | 700 | 1.2 | Primary |

\| H3 | Inter | 32px | 600 | 1.2 | Primary |

\| H4 | Inter | 24px | 600 | 1.3 | Primary |

\| Body Large | Inter | 18px | 400 | 1.6 | Primary |

\| Body | Inter | 16px | 400 | 1.6 | Secondary |

\| Body Small | Inter | 14px | 400 | 1.6 | Secondary |

\| Label | Inter | 12px | 600 | 1.4 | Tertiary |

\| Code | JetBrains Mono | 14px | 400 | 1.5 | Primary |




**### Spacing System Grid**




\`\`\`

XS:   8px

S:    16px

M:    24px

L:    32px

XL:   48px

2XL:  64px

3XL:  96px

4XL:  128px

\`\`\`




**\*\*Use:\*\***

\- Component padding: S (16px) to M (24px)

\- Section margins: L (32px) to 2XL (64px)

\- Gaps between grid items: M (24px)

\- Large section padding (top/bottom): 96px-128px




**### Border Radius Reference**




\`\`\`

xs:  4px    (small UI elements)

sm:  6px    (buttons, small cards)

md:  12px   (medium cards, inputs)

lg:  20px   (large cards, hero sections)

xl:  32px   (extra large containers)

full: 9999px (circles, fully rounded)

\`\`\`




**### Shadow Elevation System**




\`\`\`

Shadow Soft:

box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);




Shadow Medium:

box-shadow: 0 8px 24px rgba(0, 97, 255, 0.2);




Shadow Hard:

box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);




Glow Effect (Blue):

box-shadow: 0 0 20px rgba(0, 97, 255, 0.4);




Glow Effect (Cyan):

box-shadow: 0 0 30px rgba(0, 217, 255, 0.3);

\`\`\`




**---**




**## 🎬 COMPONENT SPECIFICATIONS**




**### BUTTONS**




**\*\*Primary Button (CTA)\*\***

\`\`\`

Background: #0061FF (--color-accent-blue)

Text: White (#F8F9FA)

Padding: 12px 24px (vertical/horizontal)

Font: Inter 16px Bold

Border: None

Radius: 6px

Transition: 200ms ease-out




Hover:

&#x20; \- Background: #0051D4 (darker blue)

&#x20; \- Transform: scale(1.05)

&#x20; \- Box-shadow: 0 0 20px rgba(0, 97, 255, 0.4)




Active:

&#x20; \- Background: #0041A4 (even darker)

&#x20; \- Transform: scale(0.98) (slight press effect)

\`\`\`




**\*\*Secondary Button (Outline)\*\***

\`\`\`

Background: Transparent

Border: 1px solid rgba(255, 255, 255, 0.3)

Text: #F8F9FA (white)

Padding: 12px 24px

Font: Inter 16px (not bold)

Radius: 6px

Transition: 200ms ease-out




Hover:

&#x20; \- Border: 1px solid #F8F9FA (more opaque)

&#x20; \- Background: rgba(255, 255, 255, 0.05)

&#x20; \- Box-shadow: 0 0 15px rgba(0, 217, 255, 0.3)




Active:

&#x20; \- Background: rgba(255, 255, 255, 0.1)

\`\`\`




**\*\*Small Button\*\***

\`\`\`

(Same as primary but)

Font: 14px

Padding: 8px 16px

\`\`\`




**\*\*Icon Button\*\***

\`\`\`

Background: Transparent or rgba(255, 255, 255, 0.05)

Icon size: 20px or 24px

Padding: 8px (creates clickable area)

Radius: 6px




Hover:

&#x20; \- Background: rgba(0, 97, 255, 0.1)

&#x20; \- Icon color: --color-accent-cyan

\`\`\`




**### CARDS**




**\*\*Product Card\*\***

\`\`\`

Width: 100% (responsive container)

Background: rgba(255, 255, 255, 0.03) (glassmorphism)

Border: 1px solid rgba(255, 255, 255, 0.1)

Padding: 20px

Radius: 12px

Backdrop-filter: blur(10px)




Content Layout:

├─ Image (200x200px, object-fit: cover)

├─ Category Badge (top-right, absolute)

├─ Title (18px bold, white)

├─ Description (14px, gray)

├─ Price (20px bold, blue)

└─ CTA Button (full width)




Hover:

&#x20; \- Transform: translateY(-8px)

&#x20; \- Box-shadow: 0 20px 40px rgba(0, 97, 255, 0.2)

&#x20; \- Image: scale(1.05)

&#x20; \- Border: 1px solid rgba(0, 217, 255, 0.5)

&#x20; \- Transition: 300ms ease-out

\`\`\`




**\*\*Feature Card (Alternating)\*\***

\`\`\`

Background: Gradient to rgba(0, 97, 255, 0.1)

Border: None or subtle 1px

Padding: 40px

Radius: 20px

Min-height: 300px

Display: flex (align content)




Content:

├─ Icon/Visual (200-300px)

├─ Title (32px bold)

├─ Description (16px, gray)

└─ Feature list (14px bullets)




Hover: Subtle lift + shadow increase

\`\`\`




**\*\*Category Card\*\***

\`\`\`

Background: rgba(255, 255, 255, 0.02)

Border: 1px solid rgba(255, 255, 255, 0.1)

Padding: 24px

Radius: 12px

Text-align: center




Content:

├─ Icon/Emoji (40px, centered)

├─ Category Name (18px bold)

└─ Count (14px gray)




Hover:

&#x20; \- Background: rgba(0, 97, 255, 0.1)

&#x20; \- Border: 1px solid rgba(0, 217, 255, 0.5)

&#x20; \- Transform: translateY(-4px)

&#x20; \- Cursor: pointer

\`\`\`




**\*\*Testimonial Card\*\***

\`\`\`

Background: rgba(255, 255, 255, 0.02)

Border: 1px solid rgba(255, 255, 255, 0.1)

Padding: 24px

Radius: 12px

Quote Icon: 48px, opacity 0.2




Content:

├─ Star Rating (24px, #FCD34D)

├─ Quote (16px italic, primary text)

├─ Author Name (14px bold)

└─ Author Title (12px gray)




Hover: Subtle lift

\`\`\`




**### INPUTS & FORMS**




**\*\*Text Input\*\***

\`\`\`

Background: transparent or rgba(255, 255, 255, 0.02)

Border: 1px solid rgba(255, 255, 255, 0.2)

Padding: 12px 16px

Font: 16px, primary text

Radius: 6px

Transition: 200ms




Focus:

&#x20; \- Border: 1px solid #0061FF

&#x20; \- Box-shadow: 0 0 10px rgba(0, 97, 255, 0.3)

&#x20; \- Background: rgba(255, 255, 255, 0.05)




Placeholder: --color-text-tertiary

\`\`\`




**\*\*Email Input (Newsletter)\*\***

\`\`\`

(Same as text input)

Width: 100% or 60% (desktop)

Minimum height: 44px (mobile friendly)

\`\`\`




**\*\*Textarea\*\***

\`\`\`

(Same as input but)

Min-height: 120px

Resize: vertical

\`\`\`




**### BADGES & LABELS**




**\*\*Category Badge\*\***

\`\`\`

Background: Blue gradient or solid blue with opacity

Color: White

Padding: 4px 12px

Font: 12px, 600 weight

Radius: 4px

Display: inline-block




Example: "Email Marketing" or "Productivity"

\`\`\`




**\*\*Status Badge\*\***

\`\`\`

Success: Green (#10B981)

Warning: Yellow (#F59E0B)

Error: Red (#EF4444)

Info: Blue (#0061FF)




Size: 20x20px badge with icon or text

Radius: 4px

\`\`\`




**---**




**## 🎬 PAGE LAYOUT TEMPLATES**




**### HERO SECTION LAYOUT**




\`\`\`

┌─────────────────────────────────────────────────────┐

│                      HEADER                          │

├─────────────────────────────────────────────────────┤

│                                                     │

│   Text Section (50%)      │  Visual Section (50%)   │

│                           │                        │

│   • Large H1              │  • 3D Animation        │

│   • Subheadline           │  • or Gradient         │

│   • 2 CTA Buttons         │  • or Lottie           │

│   • Social proof (opt)    │                        │

│                           │  (Parallax on scroll)  │

│                                                     │

└─────────────────────────────────────────────────────┘

\`\`\`




**\*\*Spacing:\*\***

\- Top padding: 96px

\- Bottom padding: 96px

\- CTA buttons gap: 20px

\- Grid gap: 48px (between text and visual)




**### SECTION LAYOUT (2-COLUMN ALTERNATING)**




\`\`\`

Section 1:

┌────────────────────────────────────────────┐

│ Text (50%)       │  Visual (50%)          │

│ H3 + Description │  Icon/Image            │

│ Bullet points    │  (Floating animation)  │

└────────────────────────────────────────────┘




Section 2:

┌────────────────────────────────────────────┐

│ Visual (50%)           │ Text (50%)        │

│ (Floating animation)   │ H3 + Description  │

│ Icon/Image             │ Bullet points     │

└────────────────────────────────────────────┘

\`\`\`




**### GRID LAYOUT (PRODUCTS, CATEGORIES, STATS)**




**\*\*3 Column Grid (Desktop)\*\***

\`\`\`

┌─────────────────────────────────────────────┐

│ Card 1    │  Card 2    │  Card 3           │

│           │             │                   │

│ (flex)    │  (flex)    │  (flex)           │

└─────────────────────────────────────────────┘




Gap: 24px

Padding (container): 32px

Max width: 1200px (centered on larger screens)

\`\`\`




**\*\*2 Column (Tablet)\*\***

\`\`\`

┌──────────────────────────────┐

│ Card 1    │  Card 2         │

│           │                 │

│ (flex)    │  (flex)         │

├──────────────────────────────┤

│ Card 3    │  Card 4         │

│           │                 │

└──────────────────────────────┘

\`\`\`




**\*\*1 Column (Mobile)\*\***

\`\`\`

┌──────────────┐

│ Card 1       │

│ (full width) │

├──────────────┤

│ Card 2       │

├──────────────┤

│ Card 3       │

└──────────────┘

\`\`\`




**---**




**## ✨ ANIMATION LIBRARY (Framer Motion Reference)**




**### FADE-IN ANIMATION**




\`\`\`typescript

// Reusable component

const fadeInVariants \= {

&#x20; hidden: { opacity: 0 },

&#x20; visible: {

&#x20;   opacity: 1,

&#x20;   transition: { duration: 0.6, ease: 'easeOut' }

&#x20; }

};




\<motion.div

&#x20; variants\={fadeInVariants}

&#x20; initial\="hidden"

&#x20; whileInView\="visible"

&#x20; viewport\={{ once: true, amount: 0.2 }}

\>

&#x20; Content here

\</motion.div>

\`\`\`




**### SLIDE-UP ANIMATION**




\`\`\`typescript

const slideUpVariants \= {

&#x20; hidden: { opacity: 0, y: 40 },

&#x20; visible: {

&#x20;   opacity: 1,

&#x20;   y: 0,

&#x20;   transition: { duration: 0.6, ease: 'easeOut' }

&#x20; }

};

\`\`\`




**### STAGGER CHILDREN**




\`\`\`typescript

const containerVariants \= {

&#x20; hidden: { opacity: 0 },

&#x20; visible: {

&#x20;   opacity: 1,

&#x20;   transition: {

&#x20;     staggerChildren: 0.1,

&#x20;     delayChildren: 0.2,

&#x20;     ease: 'easeOut'

&#x20;   }

&#x20; }

};




const itemVariants \= {

&#x20; hidden: { opacity: 0, y: 20 },

&#x20; visible: { opacity: 1, y: 0 }

};




\<motion.div

&#x20; variants\={containerVariants}

&#x20; initial\="hidden"

&#x20; whileInView\="visible"

\>

&#x20; {items.map(item \=> (

&#x20;   \<motion.div key\={item.id} variants\={itemVariants}>

&#x20;     {item.content}

&#x20;   \</motion.div>

&#x20; ))}

\</motion.div>

\`\`\`




**### HOVER LIFT EFFECT**




\`\`\`typescript

\<motion.div

&#x20; whileHover\={{

&#x20;   y: -8,

&#x20;   transition: { duration: 0.2, ease: 'easeOut' }

&#x20; }}

\>

&#x20; Card content

\</motion.div>

\`\`\`




**### BUTTON GLOW HOVER**




\`\`\`typescript

\<motion.button

&#x20; whileHover\={{

&#x20;   boxShadow: '0 0 20px rgba(0, 97, 255, 0.4)',

&#x20;   scale: 1.05

&#x20; }}

&#x20; whileTap\={{ scale: 0.98 }}

&#x20; transition\={{ type: 'spring', stiffness: 300 }}

\>

&#x20; Click me

\</motion.button>

\`\`\`




**### COUNTER ANIMATION (STATS)**




\`\`\`typescript

// Use react-countup library

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';




const { ref, inView } \= useInView({ threshold: 0.5 });




\<div ref\={ref}>

&#x20; {inView && (

&#x20;   \<CountUp

&#x20;     start\={0}

&#x20;     end\={150}

&#x20;     duration\={2}

&#x20;     suffix\="+"

&#x20;   />

&#x20; )}

\</div>

\`\`\`




**### PARALLAX EFFECT**




\`\`\`typescript

// Hero background subtle parallax

import { useScroll, useTransform } from 'framer-motion';




const { scrollY } \= useScroll();

const y \= useTransform(scrollY, \[0, 500], \[0, 100]);




\<motion.div style\={{ y }}>

&#x20; Background content

\</motion.div>

\`\`\`




**### LINE DRAW ANIMATION**




\`\`\`typescript

{/\* SVG line with stroke animation \*/}

\<motion.line

&#x20; initial\={{ pathLength: 0 }}

&#x20; whileInView\={{ pathLength: 1 }}

&#x20; transition\={{ duration: 1.5 }}

&#x20; viewport\={{ once: true }}

/>

\`\`\`




**---**




**## 🎨 COLOR APPLICATION GUIDE**




**### Navigation Header**

\`\`\`css

Background: rgba(10, 14, 39, 0.8) with backdrop-filter: blur(10px);

Text: --color-text-primary

Links hover: --color-accent-blue

CTA button: --color-accent-blue background

\`\`\`




**### Hero Section**

\`\`\`css

Background: Linear gradient (dark navy to slightly lighter navy)

Text H1: --color-text-primary

Text subheading: --color-text-secondary

Primary button: --color-accent-blue

Secondary button: Outline with white border

Visual background: Animated gradient with blues/purples

\`\`\`




**### Cards & Content**

\`\`\`css

Background: Semi-transparent (rgba(255, 255, 255, 0.02-0.05))

Border: rgba(255, 255, 255, 0.1)

Text primary: --color-text-primary

Text secondary: --color-text-secondary

Hover border: --color-accent-cyan or --color-accent-blue

Hover shadow: Blue glow rgba(0, 97, 255, 0.2)

Price/Highlight: --color-accent-blue or --color-accent-cyan

\`\`\`




**### Accents & Highlights**

\`\`\`css

Primary accent: --color-accent-blue (*#0061FF*)

Secondary accent: --color-accent-cyan (*#00D9FF*)

Tertiary accent: --color-accent-purple (*#8B5CF6*)




Use in: Buttons, links, badges, hover states, shadows

Avoid: Don't use too many accent colors at once

Limit: Max 2-3 accent colors per section

\`\`\`




**### Footer**

\`\`\`css

Background: --color-bg-dark (nearly black navy)

Text: --color-text-secondary

Links: --color-text-secondary

Links hover: --color-accent-blue

Dividers: rgba(255, 255, 255, 0.1)

\`\`\`




**---**




**## 📱 RESPONSIVE BREAKPOINTS & ADJUSTMENTS**




**### Mobile (320px - 640px)**




**\*\*Typography:\*\***

\`\`\`

H1: 28px (instead of 56px)

H2: 24px (instead of 42px)

H3: 20px (instead of 32px)

Body: 14-16px (same)

\`\`\`




**\*\*Spacing:\*\***

\`\`\`

Section padding: 48px (vertical) → 32px

Component padding: 20px → 16px

Grid gap: 24px → 16px

Margins: 32px → 20px

\`\`\`




**\*\*Layout:\*\***

\`\`\`

Hero: Text 100%, Visual 100% (stacked)

Grids: 1 column (all)

Navigation: Hamburger menu

Buttons: Full width when possible

\`\`\`




**### Tablet (641px - 1024px)**




**\*\*Typography:\*\***

\`\`\`

H1: 42px (instead of 56px)

H2: 32px (instead of 42px)

Body: 16px (same)

\`\`\`




**\*\*Layout:\*\***

\`\`\`

Hero: Split or stacked (optional)

Grids: 2 columns (instead of 3)

Navigation: Desktop nav or collapsible

Buttons: Inline when space allows

\`\`\`




**### Desktop (1025px+)**




**\*\*Standard desktop layout as specified\*\***




**---**




**## 🔍 VISUAL HIERARCHY LEVELS**




**\*\*Level 1 (Most Important):\*\***

\- Page H1 headings

\- Primary action buttons

\- Major CTAs

\- Featured products

\- Hero section




**\*\*Level 2 (Important):\*\***

\- H2 section titles

\- Secondary buttons

\- Product cards

\- Feature descriptions




**\*\*Level 3 (Supporting):\*\***

\- H3/H4 headings

\- Body text

\- Labels

\- Secondary information




**\*\*Level 4 (Background):\*\***

\- Footer information

\- Disclaimer text

\- Tertiary meta information




**\*\*Visual Emphasis Techniques:\*\***

1\. **\*\*Size:\*\*** Larger \= more important

2\. **\*\*Color:\*\*** Bright/accent colors \= higher priority

3\. **\*\*Position:\*\*** Top/center \= more visible

4\. **\*\*White space:\*\*** More breathing room \= more important

5\. **\*\*Weight:\*\*** Bold fonts \= more important

6\. **\*\*Contrast:\*\*** High contrast \= draws attention




**---**




**## 🚀 MICRO-INTERACTIONS CHECKLIST**




\- \[ ] Button hover: Color change + scale + shadow

\- \[ ] Button active: Press-down effect (scale 0.98)

\- \[ ] Card hover: Lift + shadow + border glow

\- \[ ] Link hover: Underline animation + color change

\- \[ ] Input focus: Border color + glow shadow

\- \[ ] Form success: Checkmark animation + green highlight

\- \[ ] Form error: Red highlight + shake animation

\- \[ ] Menu open: Smooth slide animation

\- \[ ] Scroll sections: Fade-in + slide-up animation

\- \[ ] Number counters: Count-up animation

\- \[ ] Parallax: Background shift on scroll

\- \[ ] Page transitions: Fade or slide between pages

\- \[ ] Loading states: Spinner or pulse animation




**---**




**## 📐 GRID & LAYOUT SPECIFICATIONS**




**### Container Max-Width**




\`\`\`css

Mobile: 100% (with 16px padding)

Tablet: 100% (with 32px padding)

Desktop: 1200px (centered, with side padding)




/\* Responsive using clamp() \*/

width: min(100%, clamp(280px, 90vw, 1200px));

padding: clamp(16px, 4vw, 48px);

\`\`\`




**### Column Specification**




**\*\*3-Column Desktop:\*\***

\`\`\`

(1200px - 48px total padding) / 3 \= 384px per column

Gap: 24px

Actual column width: calc((100% - 48px) / 3)

\`\`\`




**\*\*2-Column Tablet:\*\***

\`\`\`

(980px - 64px padding) / 2 \= 458px per column

\`\`\`




**\*\*1-Column Mobile:\*\***

\`\`\`

Full width minus padding

\`\`\`




**---**




**## 🎯 FINAL VISUAL TIPS**




1\. **\*\*Consistency:\*\*** Use the same colors, fonts, spacing everywhere

2\. **\*\*Contrast:\*\*** Ensure text is readable on all backgrounds (WCAG AA minimum)

3\. **\*\*Whitespace:\*\*** Don't overcrowd. Let content breathe.

4\. **\*\*Alignment:\*\*** Use invisible grid. Snap elements to multiples of 8px.

5\. **\*\*Shadows:\*\*** Use sparingly. They add depth but can feel heavy.

6\. **\*\*Animations:\*\*** Keep under 500ms for UI animations. Smooth ease-out functions.

7\. **\*\*Accessibility:\*\*** Test keyboard navigation, screen readers, color blind modes

8\. **\*\*Mobile First:\*\*** Design mobile first, then enhance for larger screens

9\. **\*\*Performance:\*\*** Optimize images. Lazy load below fold. Monitor bundle size.

10\. **\*\*Testing:\*\*** Test on real devices, real networks, real scenarios.




**---**




**\*\*END OF VISUAL DESIGN GUIDE\*\***




Use this as reference while building. Consistency in these specs \= professional-looking site.

**# 🚀 RunDailyAI Website — Developer Implementation Checklist**




**\*\*Purpose:\*\*** Practical, phase-by-phase checklist for builder/developer &#x20;

**\*\*Status:\*\*** Ready to use &#x20;

**\*\*Created:\*\*** March 30, 2026




**---**




**## 📋 PRE-BUILD CHECKLIST**




**### Environment Setup**

\- \[ ] Clone/fork Next.js boilerplate or start fresh

\- \[ ] Install dependencies: \`npm install\`

\- \[ ] Configure Tailwind CSS (\`tailwind.config.ts\`)

\- \[ ] Setup color tokens in Tailwind config

\- \[ ] Configure TypeScript (\`tsconfig.json\`)

\- \[ ] Setup ESLint (Next.js default)

\- \[ ] Install Framer Motion: \`npm install framer-motion\`

\- \[ ] Install icons: \`npm install lucide-react\`

\- \[ ] Install form library: \`npm install react-hook-form zod\`

\- \[ ] Install counter: \`npm install react-countup\`

\- \[ ] Setup \`.env.local\` with any necessary variables

\- \[ ] Create project folder structure (see specification)




**### Design Assets Preparation**

\- \[ ] Obtain or create logo (light + dark versions)

\- \[ ] Collect product images (featured products)

\- \[ ] Create hero background (3D, gradient, or animation)

\- \[ ] Prepare team/AI agent avatars

\- \[ ] Setup favicon

\- \[ ] Prepare all SVG icons or export from Lucide




**---**




**## 🏗️ BUILD PHASES CHECKLIST**




**### Phase 1: Foundation**




**#### Project Setup**

\- \[ ] Initialize Next.js 14 project

\- \[ ] Setup git repository

\- \[ ] Configure deployment (Vercel)

\- \[ ] Setup environment variables




**#### Tailwind Configuration**

\- \[ ] Define color palette in theme.extend.colors

\- \[ ] Define spacing scale

\- \[ ] Define border radius scale

\- \[ ] Define transition timings

\- \[ ] Add custom animations (fadeIn, slideUp)




**\*\*Tailwind Config Essentials:\*\***

\`\`\`typescript

// tailwind.config.ts

export default {

&#x20; theme: {

&#x20;   extend: {

&#x20;     colors: {

&#x20;       brand: {

&#x20;         dark: '#0A0E27',

&#x20;         blue: '#0061FF',

&#x20;         cyan: '#00D9FF',

&#x20;         purple: '#8B5CF6',

&#x20;       },

&#x20;       text: {

&#x20;         primary: '#F8F9FA',

&#x20;         secondary: '#A8ADB8',

&#x20;         tertiary: '#7A7F8B',

&#x20;       }

&#x20;     },

&#x20;     fontFamily: {

&#x20;       sans: \['Inter', 'sans-serif'],

&#x20;       mono: \['JetBrains Mono', 'monospace'],

&#x20;     },

&#x20;     animation: {

&#x20;       fadeIn: 'fadeIn 0.3s ease-out',

&#x20;       slideUp: 'slideUp 0.4s ease-out',

&#x20;     },

&#x20;     keyframes: {

&#x20;       fadeIn: {

&#x20;         '0%': { opacity: '0' },

&#x20;         '100%': { opacity: '1' },

&#x20;       },

&#x20;       slideUp: {

&#x20;         '0%': { transform: 'translateY(20px)', opacity: '0' },

&#x20;         '100%': { transform: 'translateY(0)', opacity: '1' },

&#x20;       },

&#x20;     }

&#x20;   }

&#x20; }

}

\`\`\`




**#### Base Components**

\- \[ ] Create \`Button.tsx\` (primary + secondary variants)

\- \[ ] Create \`Card.tsx\` (base card component)

\- \[ ] Create \`Input.tsx\` (form input)

\- \[ ] Create \`Badge.tsx\` (category/status badges)

\- \[ ] Create reusable animation wrapper: \`ScrollReveal.tsx\`

\- \[ ] Create \`Container.tsx\` (max-width wrapper)




**#### Global Styles**

\- \[ ] Setup \`globals.css\` with:

&#x20; \- \[ ] Font imports (Inter, JetBrains Mono from Google Fonts)

&#x20; \- \[ ] CSS reset/normalize

&#x20; \- \[ ] Root colors as CSS variables

&#x20; \- \[ ] Global body background

&#x20; \- \[ ] Scrollbar styling (optional, custom for dark theme)




**#### Root Layout**

\- \[ ] Create \`src/app/layout.tsx\`

\- \[ ] Configure meta tags (title, description, favicon)

\- \[ ] Setup font loading

\- \[ ] Create layout structure: Header > {children} > Footer

\- \[ ] Add global providers if needed




**\*\*Expected output:\*\*** Clean, styled foundation ready for pages




**---**




**### Phase 2: Core Pages**




**#### Shared Components**

\- \[ ] \`Header.tsx\` - Navigation + Logo

&#x20; \- \[ ] Fixed/sticky header

&#x20; \- \[ ] Responsive hamburger menu

&#x20; \- \[ ] Logo component

&#x20; \- \[ ] Navigation links

&#x20; \- \[ ] CTA button

&#x20;&#x20;

\- \[ ] \`Footer.tsx\` - Multi-column footer

&#x20; \- \[ ] Company info column

&#x20; \- \[ ] Links columns

&#x20; \- \[ ] Social media icons

&#x20; \- \[ ] Copyright




**#### Home Page Components (Build in order)**




**\*\*1. HeroSection.tsx\*\***

\- \[ ] H1 headline (large, bold, gradient optional)

\- \[ ] Subheading (18px gray)

\- \[ ] Two CTA buttons (primary + secondary)

\- \[ ] Background animation/visual

\- \[ ] Animations: fade-in + slide-up

\- \[ ] Responsive: stacked on mobile

\- \[ ] **\*\*Goal:\*\*** Professional first impression




**\*\*Checklist for Hero:\*\***

\- \[ ] Text readable over background

\- \[ ] CTA buttons clickable and visible

\- \[ ] Animations smooth (no jank)

\- \[ ] Background doesn't distract from text

\- \[ ] Mobile layout works

\- \[ ] Load time \< 3s




**\*\*2. ValueProposition.tsx\*\*** (3 cards)

\- \[ ] Three feature cards in grid

\- \[ ] Icon + Title + Description in each card

\- \[ ] Glassmorphism styling

\- \[ ] Hover effects (lift + glow)

\- \[ ] Responsive: 1 column on mobile

\- \[ ] Animation: fade-in on scroll




**\*\*3. FeaturedProducts.tsx\*\*** (3 product cards)

\- \[ ] Product grid layout (3 cols desktop, 1 mobile)

\- \[ ] Product image/thumbnail

\- \[ ] Category badge

\- \[ ] Product name + description

\- \[ ] Price ($39, $19, etc.)

\- \[ ] "View Details" button

\- \[ ] Hover: image scale, card lift, button highlight

\- \[ ] Animation: stagger children

\- \[ ] Link to product detail page




**\*\*4. HowItWorks.tsx\*\*** (4 steps)

\- \[ ] Steps arranged vertically or horizontally

\- \[ ] Connecting lines between steps (CSS or SVG)

\- \[ ] Large circular icons

\- \[ ] Step title + description

\- \[ ] Animation: line draws on scroll, icons pop-in

\- \[ ] Responsive: stack vertically on mobile




**\*\*5. Features.tsx\*\*** (4 feature cards, alternating)

\- \[ ] 2-column alternating layout

\- \[ ] Feature 1: Text left, Visual right

\- \[ ] Feature 2: Visual left, Text right

\- \[ ] H3 title + description + benefit list

\- \[ ] Icons/visuals for each feature

\- \[ ] Hover: lift effect on entire section

\- \[ ] Animation: slide-in from side on scroll

\- \[ ] Responsive: stack all on mobile




**\*\*6. Stats.tsx\*\***

\- \[ ] 4 stat cards in grid

\- \[ ] Large number + label

\- \[ ] Background: light glassmorphism

\- \[ ] Animation: counter from 0 to final number on scroll

\- \[ ] Responsive: 2x2 on tablet, 1 column on mobile




**\*\*7. Categories.tsx\*\*** (Browse by category)

\- \[ ] 6 category cards

\- \[ ] Emoji/icon + category name + count

\- \[ ] Hover: lift + color change

\- \[ ] Link to filtered product page

\- \[ ] Grid responsive: 3 cols → 2 → 1




**\*\*8. Newsletter.tsx\*\***

\- \[ ] Email input field

\- \[ ] Subscribe button

\- \[ ] Success message on submit

\- \[ ] Error handling for invalid email

\- \[ ] Integration with form API (if backend ready)

\- \[ ] Styling: centered, with background gradient




**---**




**### Phase 3: Additional Pages**




**\*\*Optional: Testimonials.tsx\*\***

\- \[ ] 3 testimonial cards or carousel

\- \[ ] 5-star rating

\- \[ ] Quote text (italic)

\- \[ ] Author name + role

\- \[ ] Auto-rotate if carousel (5s interval)




**\*\*Optional: Team.tsx\*\*** ("Built Different")

\- \[ ] 6 AI agent cards

\- \[ ] Emoji/icon + name + role + description

\- \[ ] Grid: 3 cols → 2 → 1

\- \[ ] Animation: fade-in stagger




**\*\*CTA.tsx\*\*** (Before footer)

\- \[ ] Large headline + description

\- \[ ] Two CTA buttons

\- \[ ] Background gradient with animation

\- \[ ] Center aligned

\- \[ ] Padding/margin for prominence




**\*\*Products Page\*\*** (\`/products\`)

\- \[ ] Product listing/grid

\- \[ ] Category filtering (optional for MVP)

\- \[ ] Product cards (reuse from home)

\- \[ ] Pagination or infinite scroll




**\*\*Product Detail Page\*\*** (\`/products/\[id]\`)

\- \[ ] Product image/gallery

\- \[ ] Title + full description

\- \[ ] Price + Add to Cart button

\- \[ ] Features list

\- \[ ] Related products (optional)




**\*\*Free Tools Page\*\*** (\`/free-tools\`)

\- \[ ] Tool listing/grid

\- \[ ] Tool cards (name + icon + description + "Try Now" button)

\- \[ ] Links to individual tool pages




**\*\*About Page\*\*** (\`/about\`)

\- \[ ] Company mission

\- \[ ] Team section (if not on home)

\- \[ ] Company values/principles




**\*\*Blog Page\*\*** (\`/blog\`)

\- \[ ] Blog post listing

\- \[ ] Featured blog posts

\- \[ ] Blog categories

\- \[ ] Search (optional for MVP)




**\*\*Blog Post Detail\*\*** (\`/blog/\[slug]\`)

\- \[ ] Post title, date, author

\- \[ ] Featured image

\- \[ ] Post content (markdown rendering)

\- \[ ] Related posts

\- \[ ] Share buttons (optional)




**\*\*Contact Page\*\*** (\`/contact\`)

\- \[ ] Contact form (name, email, topic, message)

\- \[ ] Form validation with Zod

\- \[ ] Success message

\- \[ ] Error handling

\- \[ ] Contact info (email, social links)




**---**




**### Phase 4: Animations & Interactions**




**#### Animation Components**




**\*\*ScrollReveal.tsx\*\*** (Reusable wrapper)

\`\`\`typescript

// Wraps any component with fade-in on scroll animation

\<ScrollReveal>

&#x20; \<ComponentToAnimate />

\</ScrollReveal>

\`\`\`




**\*\*CountUp.tsx\*\*** (Number counter)

\`\`\`typescript

// Counts up from 0 when section enters viewport

\<CountUp end\={150} suffix\="+" />

\`\`\`




**\*\*ParallaxSection.tsx\*\*** (Optional, advanced)

\`\`\`typescript

// Background parallax effect on scroll

\<ParallaxSection>

&#x20; Content here

\</ParallaxSection>

\`\`\`




**#### Animation Implementation Checklist**




**\*\*Scroll Animations:\*\***

\- \[ ] Homepage sections fade-in on scroll

\- \[ ] Stats counter animation implemented

\- \[ ] Cards fade-in with stagger effect

\- \[ ] Lines/connectors animate on scroll




**\*\*Hover Animations:\*\***

\- \[ ] Buttons: scale + glow on hover

\- \[ ] Cards: lift + shadow on hover

\- \[ ] Links: underline animation on hover

\- \[ ] Images: scale slightly on hover




**\*\*Page Load:\*\***

\- \[ ] Header fades in

\- \[ ] Hero fades in + slides up

\- \[ ] Elements enter with stagger (100ms)




**\*\*Performance Check:\*\***

\- \[ ] Animations run at 60fps

\- \[ ] No animation jank or stuttering

\- \[ ] Transitions are smooth

\- \[ ] Performance doesn't drop below 60fps (Lighthouse)




**---**




**### Phase 5: Forms & API Routes**




**#### Newsletter Form**

\- \[ ] Email input validation (email format)

\- \[ ] Submit button loading state

\- \[ ] Success message display

\- \[ ] Error message handling

\- \[ ] API route: \`POST /api/subscribe\`




**#### Contact Form**

\- \[ ] Name, email, topic, message fields

\- \[ ] Form validation (Zod schema)

\- \[ ] Submit button loading state

\- \[ ] Success/error notifications

\- \[ ] API route: \`POST /api/contact\`




**#### API Routes to Build**

\- \[ ] \`POST /api/subscribe\` - Newsletter signup

\- \[ ] \`POST /api/contact\` - Contact form submission

\- \[ ] \`GET /api/products\` - Fetch products (if DB ready)




**---**




**### Phase 6: SEO & Metadata**




**#### Meta Tags**

\- \[ ] Homepage: title, description, OG tags

\- \[ ] All pages: unique titles + descriptions

\- \[ ] Social sharing tags (og:image, og:title, etc.)




**#### Structured Data**

\- \[ ] Organization schema (JSON-LD in root layout)

\- \[ ] Product schema (for product pages)

\- \[ ] Breadcrumb schema (for navigation)




**#### Technical SEO**

\- \[ ] Sitemap generation (or manual)

\- \[ ] Robots.txt setup

\- \[ ] Canonical URLs on all pages

\- \[ ] Mobile responsiveness verified

\- \[ ] Page speed optimized

\- \[ ] Internal linking structure




**#### Content**

\- \[ ] All pages have unique, descriptive meta descriptions

\- \[ ] Keywords naturally included

\- \[ ] Headings structure (H1 → H2 → H3)

\- \[ ] Alt text on all images




**---**




**### Phase 7: Performance Optimization**




**#### Image Optimization**

\- \[ ] Use Next.js Image component everywhere

\- \[ ] Compress images (Tinypng, ImageOptim)

\- \[ ] Lazy load below-the-fold images

\- \[ ] Proper aspect ratios

\- \[ ] WebP format with fallbacks




**#### Code Splitting**

\- \[ ] Dynamic imports for heavy components

\- \[ ] Lazy load third-party scripts

\- \[ ] Route-based code splitting (automatic in Next.js)




**#### Bundle Analysis**

\- \[ ] Run bundle analyzer

\- \[ ] Check component sizes

\- \[ ] Remove unused dependencies

\- \[ ] Monitor Framer Motion size




**#### Performance Targets**

\- \[ ] Lighthouse Performance: >90

\- \[ ] LCP (Largest Contentful Paint): \<2.5s

\- \[ ] FID (First Input Delay): \<100ms

\- \[ ] CLS (Cumulative Layout Shift): \<0.1

\- \[ ] First Contentful Paint: \<1.8s




**#### Monitoring**

\- \[ ] Test on real 4G network

\- \[ ] Test on low-end devices

\- \[ ] Test on various browsers

\- \[ ] Check Core Web Vitals




**---**




**### Phase 8: Testing & QA**




**#### Functionality Testing**

\- \[ ] All links working (internal + external)

\- \[ ] All forms submitting correctly

\- \[ ] All animations playing smoothly

\- \[ ] All buttons clickable and functional

\- \[ ] Navigation working on all pages

\- \[ ] Mobile menu working

\- \[ ] Search/filtering working (if implemented)




**#### Cross-Browser Testing**

\- \[ ] Chrome (latest 2 versions)

\- \[ ] Firefox (latest 2 versions)

\- \[ ] Safari (latest 2 versions)

\- \[ ] Edge (latest)




**#### Responsive Testing**

\- \[ ] Mobile (320px - 640px)

\- \[ ] Tablet (641px - 1024px)

\- \[ ] Desktop (1025px+)

\- \[ ] All elements visible, no horizontal scrolling

\- \[ ] Touch targets min 44px × 44px




**#### Accessibility Testing**

\- \[ ] Keyboard navigation works

\- \[ ] Color contrast passes WCAG AA

\- \[ ] Screen reader friendly (semantic HTML)

\- \[ ] Form labels properly associated

\- \[ ] Images have alt text

\- \[ ] Links have descriptive text (not "click here")




**#### Content Review**

\- \[ ] All copy is accurate

\- \[ ] No typos or grammar errors

\- \[ ] All images are professional

\- \[ ] Product prices correct

\- \[ ] Links point to correct pages

\- \[ ] Dates/times correct




**---**




**### Phase 9: Deployment & Launch**




**#### Pre-Deployment**

\- \[ ] Build command works locally: \`npm run build\`

\- \[ ] No console errors in production build

\- \[ ] Environment variables configured on Vercel

\- \[ ] Database/API endpoints configured (if needed)




**#### Vercel Deployment**

\- \[ ] Connect GitHub repo to Vercel

\- \[ ] Configure build settings

\- \[ ] Set environment variables

\- \[ ] Deploy main branch

\- \[ ] Setup automatic deployments

\- \[ ] Preview deployments working




**#### Domain Configuration**

\- \[ ] Domain registered (already have: rundailyai.com)

\- \[ ] DNS updated to point to Vercel

\- \[ ] SSL certificate provisioned (automatic)

\- \[ ] Redirect www to non-www (or vice versa)

\- \[ ] Test domain resolution




**#### Post-Deployment Testing**

\- \[ ] Test on live domain

\- \[ ] All pages load correctly

\- \[ ] Forms submit successfully

\- \[ ] Analytics tracking working

\- \[ ] No 404 errors (check server logs)




**#### Launch Checklist**

\- \[ ] Analytics set up (Google Analytics 4)

\- \[ ] Search Console verified

\- \[ ] Sitemap submitted to Search Console

\- \[ ] Social media links working

\- \[ ] Email signup working

\- \[ ] Contact form working

\- \[ ] Monitoring/alerts set up




**---**




**## 🔧 QUICK REFERENCE: Common Tasks**




**### Add New Section to Homepage**




1\. Create component file: \`src/components/NewSection.tsx\`

2\. Import animation wrapper: \`import { ScrollReveal } from '@/components/Animations/ScrollReveal'\`

3\. Build section JSX with Tailwind classes

4\. Add animations: \`whileInView\`, \`initial\`, \`animate\` (Framer Motion)

5\. Import in \`src/app/page.tsx\`

6\. Add to page JSX with proper spacing




**### Make Component Responsive**




1\. Use Tailwind breakpoints: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`

2\. Mobile-first approach: define mobile styles first, then override

3\. Examples:

&#x20;  \`\`\`jsx

&#x20;  \<div className\="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

&#x20;    {/\* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols \*/}

&#x20;  \</div>

&#x20;  \`\`\`




**### Add Animation to Component**




1\. Import from Framer Motion: \`import { motion } from 'framer-motion'\`

2\. Replace \`\<div>\` with \`\<motion.div>\`

3\. Add animation props:

&#x20;  \`\`\`jsx

&#x20;  \<motion.div

&#x20;    initial\={{ opacity: 0, y: 20 }}

&#x20;    whileInView\={{ opacity: 1, y: 0 }}

&#x20;    transition\={{ duration: 0.6, ease: 'easeOut' }}

&#x20;    viewport\={{ once: true, amount: 0.2 }}

&#x20;  \>

&#x20;    Content

&#x20;  \</motion.div>

&#x20;  \`\`\`




**### Create Form with Validation**




\`\`\`typescript

import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';




const schema \= z.object({

&#x20; email: z.string().email('Invalid email'),

&#x20; message: z.string().min(10, 'Min 10 characters'),

});




export function ContactForm() {

&#x20; const { register, handleSubmit, errors } \= useForm({

&#x20;   resolver: zodResolver(schema),

&#x20; });




&#x20; return (

&#x20;   \<form onSubmit\={handleSubmit(onSubmit)}>

&#x20;     \<input {...register('email')} />

&#x20;     {errors.email && \<p>{errors.email.message}\</p>}

&#x20;     \<button type\="submit">Submit\</button>

&#x20;   \</form>

&#x20; );

}

\`\`\`




**### Link to Another Page**




\`\`\`jsx

import Link from 'next/link';




\<Link href\="/products">

&#x20; \<a className\="hover:underline">Browse Products\</a>

\</Link>




// Or as button

\<Link href\="/products">

&#x20; \<Button>Browse Products\</Button>

\</Link>

\`\`\`




**### Add Image Optimized**




\`\`\`jsx

import Image from 'next/image';




\<Image

&#x20; src\="/images/product.jpg"

&#x20; alt\="Product description"

&#x20; width\={400}

&#x20; height\={300}

&#x20; className\="rounded-lg"

/>

\`\`\`




**### Style Component with Tailwind**




\`\`\`jsx

\<div className\="

&#x20; bg-brand-dark

&#x20; text-text-primary

&#x20; rounded-lg

&#x20; p-8

&#x20; hover:shadow-lg

&#x20; transition-shadow

&#x20; duration-300

">

&#x20; Content

\</div>

\`\`\`




**### Create Reusable Animation Variant**




\`\`\`typescript

// lib/animations.ts

export const fadeInVariants \= {

&#x20; hidden: { opacity: 0 },

&#x20; visible: {

&#x20;   opacity: 1,

&#x20;   transition: {

&#x20;     duration: 0.6,

&#x20;     ease: 'easeOut'

&#x20;   }

&#x20; }

};




// In component:

\<motion.div

&#x20; variants\={fadeInVariants}

&#x20; initial\="hidden"

&#x20; whileInView\="visible"

\>

&#x20; Content

\</motion.div>

\`\`\`




**---**




**## 🐛 COMMON ISSUES & FIXES**




**### Animations Not Triggering on Scroll**




**\*\*Problem:\*\*** Animations defined but not playing when scrolling &#x20;

**\*\*Solution:\*\*** Add \`viewport\={{ once: true, amount: 0.2 }}\` to motion element




\`\`\`jsx

\<motion.div

&#x20; viewport\={{ once: true, amount: 0.2 }}  // Add this

&#x20; whileInView\={{ opacity: 1 }}

/>

\`\`\`




**### Content Jumping on Scroll**




**\*\*Problem:\*\*** Cumulative Layout Shift (CLS) issues &#x20;

**\*\*Solution:\*\*** Set explicit heights/widths on images, reserve space

\`\`\`jsx

\<Image

&#x20; src\="..."

&#x20; width\={400}

&#x20; height\={300}

/>

\`\`\`




**### Styles Not Applying in Production**




**\*\*Problem:\*\*** Tailwind classes not in final CSS &#x20;

**\*\*Solution:\*\*** Check \`tailwind.config.ts\` has correct content paths

\`\`\`typescript

content: \[

&#x20; "./src/app/\*\*/\*.{js,ts,jsx,tsx}",

&#x20; "./src/components/\*\*/\*.{js,ts,jsx,tsx}",

],

\`\`\`




**### Images Not Loading After Deploy**




**\*\*Problem:\*\*** Images 404 in production &#x20;

**\*\*Solution:\*\*** Check images are in \`/public\` folder and paths are correct

\`\`\`jsx

\<Image src\="/images/logo.png" />  // Correct

\`\`\`




**### Responsive Design Not Working**




**\*\*Problem:\*\*** Mobile styles not applying &#x20;

**\*\*Solution:\*\*** Ensure Tailwind breakpoints in config and use correctly

\`\`\`jsx

\<div className\="w-full md:w-1/2 lg:w-1/3">  // Mobile first

\`\`\`




**### API Route Not Working**




**\*\*Problem:\*\*** Form submission fails &#x20;

**\*\*Solution:\*\*** Check:

\- \[ ] Route file is in \`/src/app/api/\[route]/route.ts\`

\- \[ ] Correct HTTP method (GET, POST, etc.)

\- \[ ] Correct response format: \`NextResponse.json({...})\`

\- \[ ] Check server logs for errors




**### Performance Score Low**




**\*\*Problem:\*\*** Lighthouse score below 90 &#x20;

**\*\*Solution:\*\***

\- \[ ] Compress images

\- \[ ] Remove unused CSS

\- \[ ] Lazy load below-fold components

\- \[ ] Minimize main thread work

\- \[ ] Check bundle size




**---**




**## 📊 FINAL VERIFICATION CHECKLIST**




**### Desktop Experience**

\- \[ ] Hero section loads quickly and looks stunning

\- \[ ] All animations smooth (no stuttering)

\- \[ ] Text readable and well-spaced

\- \[ ] Buttons prominent and clickable

\- \[ ] Navigation responsive and clear

\- \[ ] Products showcase attractive and compelling

\- \[ ] Scroll animations trigger perfectly

\- \[ ] Footer complete and styled




**### Mobile Experience**

\- \[ ] All sections stack properly (no overflow)

\- \[ ] Touch targets min 44px

\- \[ ] Text readable without zoom

\- \[ ] Images scale correctly

\- \[ ] Menu works on mobile

\- \[ ] No horizontal scrolling

\- \[ ] Buttons full width and easy to tap




**### Performance**

\- \[ ] Lighthouse score >90

\- \[ ] Page load \<3s on 4G

\- \[ ] Core Web Vitals pass

\- \[ ] No console errors

\- \[ ] Smooth animations at 60fps




**### Conversions**

\- \[ ] CTAs prominent and visible

\- \[ ] Forms functional

\- \[ ] Newsletter signup working

\- \[ ] Product links working

\- \[ ] Clear value proposition

\- \[ ] Social proof visible

\- \[ ] Trust signals (money-back guarantee, AI-reviewed)




**### SEO Ready**

\- \[ ] Meta tags on all pages

\- \[ ] Structured data implemented

\- \[ ] Mobile friendly

\- \[ ] Fast loading

\- \[ ] SSL certificate active

\- \[ ] Sitemap created

\- \[ ] Robots.txt set up




**---**




**\*\*Version:\*\*** 1.0 &#x20;

**\*\*Status:\*\*** Complete & Ready for Implementation &#x20;

**\*\*Last Updated:\*\*** March 30, 2026




Good luck! Reference this checklist daily to stay on track. 🚀
