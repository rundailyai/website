'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, ReactNode } from 'react'

interface Scene3DProps {
  children: ReactNode
  className?: string
}

export function Scene3D({ children, className = '' }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
