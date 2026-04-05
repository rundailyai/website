'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as THREE from 'three';

interface Product3DCardProps {
  position: [number, number, number];
  product: {
    id: string;
    title: string;
    price: number;
    category: string;
    color: string;
  };
  index: number;
}

function Product3DCard({ position, product, index }: Product3DCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;

      // Rotate slightly on hover
      if (hovered) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          Math.sin(state.clock.elapsedTime * 2) * 0.2,
          0.1
        );
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <RoundedBox
          ref={meshRef}
          args={[2, 2.5, 0.2]}
          radius={0.1}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? product.color : '#1a1a2e'}
            emissive={product.color}
            emissiveIntensity={hovered ? 0.4 : 0.15}
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Scene({ products }: { products: any[] }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[0, 0, 10]} intensity={0.8} color="#0061FF" />

      {products.slice(0, 3).map((product, index) => (
        <Product3DCard
          key={product.id}
          position={[(index - 1) * 3, 0, 0]}
          product={{
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            color: index === 0 ? '#0061FF' : index === 1 ? '#8B5CF6' : '#06B6D4'
          }}
          index={index}
        />
      ))}
    </>
  );
}

export function ProductShowcase3D({ products }: { products: any[] }) {
  return (
    <div className="relative w-full py-20">
      {/* 3D Canvas */}
      <div className="h-[600px] w-full">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <Scene products={products} />
        </Canvas>
      </div>

      {/* Product Cards Overlay */}
      <div className="container mx-auto max-w-6xl mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="block glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-white group-hover:text-blue-400 transition">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition inline-block">
                    View details →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
