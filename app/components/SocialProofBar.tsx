'use client';

import { motion } from 'framer-motion';

export function SocialProofBar() {
  const stats = [
    { label: 'Products Shipped', value: '8' },
    { label: 'Free Tools Available', value: '12' },
    { label: 'Happy Customers', value: '500+' },
  ];

  return (
    <div className="relative border-y border-white/10 bg-slate-900/50 backdrop-blur-sm py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-12 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
