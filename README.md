# RunDailyAI Website

A modern, production-grade website built with Next.js 15, featuring AI-powered tools, digital products, and educational content.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Tailwind CSS 4** for styling
- 📝 **MDX** for blog posts
- 💳 **Polar** integration for payments
- 🛠️ **Free Tools** (Word Counter, Color Palette Generator, JSON Formatter)
- 📱 **Fully Responsive** and mobile-optimized
- ⚡ **Lighthouse 95+** performance score
- 🔍 **SEO Optimized** with proper metadata

## Pages

- `/` - Homepage with hero, featured products, categories
- `/products` - Product catalog with search, filters, and sorting
- `/products/[slug]` - Individual product pages with buy button
- `/blog` - Blog index with post cards
- `/blog/[slug]` - Individual blog posts with TOC and reading time
- `/free-tools` - 3 interactive web tools
- `/about` - About page
- `/support` - Support page with FAQ and contact form

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rundailyai-website.git
cd rundailyai-website
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will be automatically deployed on push to the main branch.

### Environment Variables

- `NEXT_PUBLIC_POLAR_ACCESS_TOKEN` - Polar API access token
- `POLAR_ORGANIZATION_ID` - Your Polar organization ID

## Project Structure

```
app/
├── components/          # Shared React components
├── lib/                 # Utility functions and data
├── products/            # Product pages
├── blog/                # Blog pages
├── free-tools/          # Free tools pages
├── about/               # About page
├── support/             # Support page
├── layout.tsx           # Root layout
├── page.tsx             # Homepage
└── globals.css          # Global styles
```

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4
- **Content:** MDX for blog posts
- **Payments:** Polar
- **Deployment:** Vercel
- **Language:** TypeScript

## Performance

The site is optimized for Lighthouse 95+ scores:

- Server-side rendering with Next.js App Router
- Optimized images with Next.js Image component
- Minimal JavaScript bundle size
- CSS optimization with Tailwind
- Fast page loads with static generation where possible

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - see LICENSE file for details

## Support

For questions or issues, visit [rundailyai.com/support](https://rundailyai.com/support)
