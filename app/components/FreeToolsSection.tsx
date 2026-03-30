'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const freeTools = [
  {
    title: "Word Counter",
    description: "Count words, characters, and reading time instantly",
    icon: "📊",
    href: "/free-tools#word-counter",
  },
  {
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes for your designs",
    icon: "🎨",
    href: "/free-tools#color-palette",
  },
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data with ease",
    icon: "🔧",
    href: "/free-tools#json-formatter",
  },
];

export function FreeToolsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {freeTools.map((tool, index) => (
        <motion.div
          key={tool.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={tool.href}
            className="block glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group hover:glow-purple"
          >
            <div className="text-4xl mb-3">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition">
              {tool.title}
            </h3>
            <p className="text-gray-400 text-sm">{tool.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
