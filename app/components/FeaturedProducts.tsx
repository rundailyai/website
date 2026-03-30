'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/app/lib/products";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/products/${product.id}`}
            className="block glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group hover:glow"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-white group-hover:text-blue-400 transition">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ${product.price}
                </span>
                <span className="text-blue-400 group-hover:translate-x-1 transition inline-block">
                  View details →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
