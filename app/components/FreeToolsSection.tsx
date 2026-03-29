import Link from "next/link";

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
      {freeTools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
        >
          <div className="text-4xl mb-3">{tool.icon}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
            {tool.title}
          </h3>
          <p className="text-gray-600 text-sm">{tool.description}</p>
        </Link>
      ))}
    </div>
  );
}
