'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { MeshDistortMaterial } from '@react-three/drei'

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.cos(time * speed) * 0.4
    meshRef.current.rotation.x = time * 0.3
    meshRef.current.rotation.z = time * 0.2
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.3, 32, 100]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export function FloatingObjects() {
  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />

      {/* Floating objects */}
      <FloatingSphere position={[-3, 0, -2]} color="#0061FF" speed={0.8} />
      <FloatingSphere position={[3, 1, -3]} color="#8B5CF6" speed={1.2} />
      <FloatingTorus position={[0, -1, -4]} color="#06B6D4" speed={1} />
      <FloatingSphere position={[2, -2, -5]} color="#A78BFA" speed={0.9} />
      <FloatingTorus position={[-2, 2, -3]} color="#0061FF" speed={1.1} />
    </>
  )
}
