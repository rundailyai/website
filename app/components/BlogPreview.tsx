'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const recentPosts = [
  {
    slug: "getting-started-with-ai-automation",
    title: "Getting Started with AI Automation in 2026",
    excerpt: "Learn how to leverage AI tools to automate repetitive tasks and boost your productivity.",
    date: "2026-03-15",
    readTime: "5 min read",
    category: "AI",
  },
  {
    slug: "notion-templates-guide",
    title: "The Ultimate Guide to Notion Templates",
    excerpt: "Everything you need to know about creating and using Notion templates effectively.",
    date: "2026-03-10",
    readTime: "8 min read",
    category: "Productivity",
  },
  {
    slug: "email-marketing-best-practices",
    title: "Email Marketing Best Practices for 2026",
    excerpt: "Proven strategies to improve your email open rates and conversions.",
    date: "2026-03-05",
    readTime: "6 min read",
    category: "Marketing",
  },
];

export function BlogPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recentPosts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="block glass rounded-2xl hover:scale-105 transition-all duration-300 p-6 group hover:glow-green"
          >
            <span className="text-xs text-green-400 font-semibold uppercase tracking-wide">
              {post.category}
            </span>
            <h3 className="text-xl font-semibold mt-2 mb-2 text-white group-hover:text-green-400 transition">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <span>{post.readTime}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
