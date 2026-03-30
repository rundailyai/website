import Link from "next/link";

export function Header() {
  return (
    <header className="glass border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            RunDailyAI
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-gray-300 hover:text-blue-400 transition">
              Products
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition">
              Blog
            </Link>
            <Link href="/free-tools" className="text-gray-300 hover:text-purple-400 transition">
              Free Tools
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-blue-400 transition">
              Support
            </Link>
          </nav>

          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
