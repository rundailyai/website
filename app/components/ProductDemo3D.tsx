'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function FloatingDocument({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1.5, 2, 0.1]}
      position={position}
      radius={0.05}
      smoothness={4}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? '#8B5CF6' : '#3B82F6'}
        emissive={hovered ? '#8B5CF6' : '#3B82F6'}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </RoundedBox>
  );
}

function FloatingEmail({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
      groupRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.6) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Box
        args={[2, 1.4, 0.1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? '#10B981' : '#3B82F6'}
          emissive={hovered ? '#10B981' : '#3B82F6'}
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </Box>
      {/* Envelope flap */}
      <Box args={[2, 0.7, 0.05]} position={[0, 0.35, 0.1]} rotation={[Math.PI / 6, 0, 0]}>
        <meshStandardMaterial
          color={hovered ? '#059669' : '#2563EB'}
          emissive={hovered ? '#059669' : '#2563EB'}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Box>
    </group>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.6, 32, 32]} position={position}>
      <meshStandardMaterial
        color="#8B5CF6"
        emissive="#8B5CF6"
        emissiveIntensity={0.4}
        transparent
        opacity={0.6}
        wireframe
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

      <FloatingDocument position={[-2, 0, 0]} />
      <FloatingEmail position={[2, 0, 0]} />
      <FloatingSphere position={[0, 0, -2]} />
      <FloatingSphere position={[-3, 1, -1]} />
      <FloatingSphere position={[3, -1, -1]} />
    </>
  );
}

export function ProductDemo3D() {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See what&apos;s inside
        </motion.h2>

        <motion.p
          className="text-center mb-12 text-xl"
          style={{ color: 'rgb(148, 163, 184)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Interactive digital products that work for you
        </motion.p>

        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
}
