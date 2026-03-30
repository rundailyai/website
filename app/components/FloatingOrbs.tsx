'use client';

import { motion } from 'framer-motion';

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 - Blue */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '10%', y: '20%' }}
      />

      {/* Orb 2 - Purple */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '70%', y: '10%' }}
      />

      {/* Orb 3 - Green */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '50%', y: '60%' }}
      />
    </div>
  );
}
