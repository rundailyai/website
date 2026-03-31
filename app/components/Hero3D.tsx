'use client'

import { HeroScene } from './3d/HeroScene'
import { Button } from './ui/Button'

export function Hero3D() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            <span className="text-sm text-gray-300">AI-Powered Productivity Tools</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-[#0061FF] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Transform Your Day
            </span>
            <br />
            <span className="text-white">
              With AI Automation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Premium AI templates and tools designed to supercharge your productivity.
            Build workflows, automate tasks, and achieve more with cutting-edge AI technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <Button variant="primary" size="lg" onClick={scrollToProducts}>
              Explore Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            <Button variant="outline" size="lg">
              View Free Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0061FF] mb-1">10K+</div>
              <div className="text-sm text-gray-500">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B5CF6] mb-1">4.9★</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#06B6D4] mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0061FF] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
