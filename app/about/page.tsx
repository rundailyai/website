import Link from "next/link";

export const metadata = {
  title: "About - RunDailyAI",
  description: "Learn about RunDailyAI and our mission to provide AI-powered tools and templates.",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About RunDailyAI</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed">
            RunDailyAI is your trusted source for AI-powered tools, templates, and resources designed
            to boost productivity and streamline your workflow.
          </p>

          <section className="bg-white rounded-lg shadow-sm p-8 my-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We believe that everyone should have access to powerful productivity tools without the
              steep learning curve. Our mission is to make AI technology accessible and practical for
              professionals, entrepreneurs, and creators of all skill levels.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8 my-8">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">📝 Templates</h3>
                <p className="text-gray-600">
                  Ready-to-use templates for Notion, email campaigns, content calendars, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🤖 AI Tools</h3>
                <p className="text-gray-600">
                  Intelligent tools that leverage AI to automate repetitive tasks and generate ideas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🆓 Free Resources</h3>
                <p className="text-gray-600">
                  Useful web tools and utilities available for free, no signup required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📚 Educational Content</h3>
                <p className="text-gray-600">
                  Blog posts, guides, and tutorials to help you get the most out of our tools.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8 my-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  <strong>Quality First:</strong> Every product is carefully crafted and tested
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  <strong>Instant Access:</strong> Download and start using immediately after purchase
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  <strong>Lifetime Updates:</strong> Get updates and improvements at no extra cost
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  <strong>Great Support:</strong> Our team is here to help when you need it
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-blue-600 text-white rounded-lg p-8 my-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Explore our products or try our free tools to see what RunDailyAI can do for you.
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
          </section>
        </div>
      </div>
    </div>
  );
}
