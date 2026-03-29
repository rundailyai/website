import Link from "next/link";
import { getAllBlogPosts } from "@/app/lib/blog";

export const metadata = {
  title: "Blog - RunDailyAI",
  description: "Tips, guides, and insights about AI, productivity, and digital tools.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Tips, guides, and insights about AI, productivity, and digital tools.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <time>{new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</time>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>

                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                <span className="text-blue-600 font-semibold group-hover:underline">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
