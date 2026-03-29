import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    id: "notion-productivity-templates",
    title: "Notion Productivity Templates",
    description: "Complete productivity system with 50+ templates for task management, goals, and habit tracking.",
    price: 29,
    image: "/images/products/notion-templates.jpg",
    category: "Templates",
  },
  {
    id: "ai-content-calendar",
    title: "AI Content Calendar",
    description: "Generate a month of content ideas with AI. Perfect for social media managers and creators.",
    price: 19,
    image: "/images/products/content-calendar.jpg",
    category: "Tools",
  },
  {
    id: "email-automation-kit",
    title: "Email Automation Kit",
    description: "Pre-built email sequences and templates for onboarding, nurture, and sales campaigns.",
    price: 39,
    image: "/images/products/email-kit.jpg",
    category: "Templates",
  },
];

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
        >
          <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
            {/* Placeholder for product image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
              {product.category}
            </span>
            <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-blue-600 transition">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">${product.price}</span>
              <span className="text-blue-600 group-hover:translate-x-1 transition inline-block">
                View details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
