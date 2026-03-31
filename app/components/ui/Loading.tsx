'use client'

import { useEffect, useState } from 'react'

export function Loading({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0E27]">
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0061FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
            RunDailyAI
          </h2>
          <p className="text-gray-400">Loading immersive experience...</p>
        </div>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0061FF] to-[#8B5CF6] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-2xl font-mono text-[#06B6D4]">{progress}%</p>
      </div>
    </div>
  )
}
