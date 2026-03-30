'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Notion Templates",
    slug: "notion-templates",
    icon: "📝",
    count: 24,
  },
  {
    name: "Content Tools",
    slug: "content-tools",
    icon: "✍️",
    count: 18,
  },
  {
    name: "Productivity",
    slug: "productivity",
    icon: "⚡",
    count: 32,
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    icon: "📧",
    count: 15,
  },
  {
    name: "Social Media",
    slug: "social-media",
    icon: "📱",
    count: 21,
  },
  {
    name: "Business Tools",
    slug: "business-tools",
    icon: "💼",
    count: 19,
  },
];

export function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.slug}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <Link
            href={`/products?category=${category.slug}`}
            className="block glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 text-center group hover:glow"
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="font-semibold text-sm mb-1 text-white group-hover:text-blue-400 transition">
              {category.name}
            </h3>
            <p className="text-xs text-gray-500">{category.count} products</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
