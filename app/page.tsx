import Link from "next/link";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Categories } from "./components/Categories";
import { FreeToolsSection } from "./components/FreeToolsSection";
import { EmailSignup } from "./components/EmailSignup";
import { BlogPreview } from "./components/BlogPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Tools & Templates
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Supercharge your productivity with our curated collection of AI products and free tools
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/free-tools"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <Categories />
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Free Tools</h2>
          <p className="text-center text-gray-600 mb-8">
            Try our free tools - no signup required
          </p>
          <FreeToolsSection />
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <EmailSignup />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest from the Blog</h2>
            <Link href="/blog" className="text-blue-600 hover:underline">
              View all posts →
            </Link>
          </div>
          <BlogPreview />
        </div>
      </section>
    </div>
  );
}
