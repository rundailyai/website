'use client';

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Categories } from "./components/Categories";
import { FreeToolsSection } from "./components/FreeToolsSection";
import { EmailSignup } from "./components/EmailSignup";
import { BlogPreview } from "./components/BlogPreview";
import { GrainTexture } from "./components/GrainTexture";
import { SocialProofBar } from "./components/SocialProofBar";
import { HowItWorks } from "./components/HowItWorks";
import { BuiltDifferent } from "./components/BuiltDifferent";
import { Hero3D } from "./components/Hero3D";
import { Loading } from "./components/ui/Loading";
import { Cursor } from "./components/ui/Cursor";
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollAnimations } from "./components/animations/ScrollAnimations";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { getFeaturedProducts } from "./lib/products";

// Lazy load 3D Product Showcase
const ProductShowcase3D = dynamic(
  () => import('./components/3d/ProductShowcase3D').then(mod => ({ default: mod.ProductShowcase3D })),
  { ssr: false, loading: () => <div className="h-[600px] animate-pulse bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl" /> }
);



export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}

      {/* Custom Cursor */}
      {!isLoading && <Cursor />}

      {/* Smooth Scroll */}
      {!isLoading && <SmoothScroll />}

      {/* Scroll Animations */}
      {!isLoading && <ScrollAnimations />}

      {/* Scroll Progress */}
      {!isLoading && <ScrollProgress />}

      <div className="flex flex-col bg-[#0A0E27]">
        <GrainTexture />

        {/* 3D Hero Section */}
        {!isLoading && <Hero3D />}

      {/* Social Proof Bar */}
      <SocialProofBar />

      {/* Featured Products - 3D Showcase */}
      <section
        id="products"
        className="py-20 px-4 relative scroll-animate"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-heading">
            Featured Products
          </h2>

          {/* 3D Showcase on desktop, fallback to cards on mobile */}
          <div className="hidden md:block">
            {!isLoading && <ProductShowcase3D products={getFeaturedProducts()} />}
          </div>

          {/* Mobile fallback */}
          <div className="block md:hidden scroll-stagger">
            <FeaturedProducts />
          </div>
        </div>
      </section>


      {/* Categories */}
      <section className="py-20 px-4 relative scroll-animate">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white scroll-heading">
            Browse by Category
          </h2>
          <div className="scroll-stagger">
            <Categories />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 relative scroll-animate">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white scroll-heading">
            How It Works
          </h2>
          <div className="scroll-stagger">
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-20 px-4 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 parallax" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent scroll-heading">
            Free Tools
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Try our free tools - no signup required
          </p>
          <div className="scroll-stagger">
            <FreeToolsSection />
          </div>
        </div>
      </section>

      {/* Built Different - AI Agent Team */}
      <section className="py-20 px-4 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 parallax" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <BuiltDifferent />
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-4 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 parallax" />
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <EmailSignup />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 relative scroll-animate">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white scroll-heading">
              Latest from the Blog
            </h2>
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
              View all posts →
            </Link>
          </div>
          <div className="scroll-stagger">
            <BlogPreview />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
