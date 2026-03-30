'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Categories } from "./components/Categories";
import { FreeToolsSection } from "./components/FreeToolsSection";
import { EmailSignup } from "./components/EmailSignup";
import { BlogPreview } from "./components/BlogPreview";
import { Hero3DBackground } from "./components/Hero3DBackground";
import { FloatingOrbs } from "./components/FloatingOrbs";
import { GrainTexture } from "./components/GrainTexture";
import { SocialProofBar } from "./components/SocialProofBar";
import { HowItWorks } from "./components/HowItWorks";
import { BuiltDifferent } from "./components/BuiltDifferent";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-gray-900">
      <GrainTexture />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <Hero3DBackground />
        <FloatingOrbs />

        <motion.div
          className="container mx-auto max-w-6xl text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            AI tools that actually save you time
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Digital products built by AI agents, tested by humans, used by thousands
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={fadeInUp}
          >
            <Link
              href="/products"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 glow overflow-hidden"
            >
              <span className="relative z-10">Browse Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/free-tools"
              className="glass text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Try Free Tools
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof Bar */}
      <SocialProofBar />

      {/* Featured Products */}
      <motion.section
        className="py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <FeaturedProducts />
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section
        className="py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Browse by Category
          </motion.h2>
          <Categories />
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <HowItWorks />
        </div>
      </motion.section>

      {/* Free Tools */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Free Tools
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Try our free tools - no signup required
          </motion.p>
          <FreeToolsSection />
        </div>
      </motion.section>

      {/* Built Different - AI Agent Team */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <BuiltDifferent />
        </div>
      </motion.section>

      {/* Email Signup */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <EmailSignup />
        </div>
      </motion.section>

      {/* Blog Preview */}
      <motion.section
        className="py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Latest from the Blog
            </motion.h2>
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
              View all posts →
            </Link>
          </div>
          <BlogPreview />
        </div>
      </motion.section>
    </div>
  );
}
