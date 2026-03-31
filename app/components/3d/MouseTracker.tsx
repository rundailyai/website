'use client'

import { useRef, ReactNode } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Group } from 'three'

interface MouseTrackerProps {
  children: ReactNode
}

export function MouseTracker({ children }: MouseTrackerProps) {
  const groupRef = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!groupRef.current) return

    // Smooth camera following mouse with lerp
    groupRef.current.rotation.y += (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-pointer.y * 0.2 - groupRef.current.rotation.x) * 0.05
  })

  return <group ref={groupRef}>{children}</group>
}
