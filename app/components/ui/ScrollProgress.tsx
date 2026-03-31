'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScrollable = documentHeight - windowHeight
      const scrollPercentage = (scrollTop / totalScrollable) * 100

      setProgress(Math.min(scrollPercentage, 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#0061FF] via-[#8B5CF6] to-[#06B6D4] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
