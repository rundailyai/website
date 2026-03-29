import Link from "next/link";

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
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/products?category=${category.slug}`}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group"
        >
          <div className="text-4xl mb-3">{category.icon}</div>
          <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition">
            {category.name}
          </h3>
          <p className="text-xs text-gray-500">{category.count} products</p>
        </Link>
      ))}
    </div>
  );
}
