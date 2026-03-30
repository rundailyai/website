'use client';

import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Browse',
      description: 'Explore our curated collection of premium templates and tools',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Download',
      description: 'Get instant access to your purchase—no waiting, no hassle',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Use Instantly',
      description: 'Start working immediately with professionally crafted, ready-to-use products',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Connecting Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden md:block" style={{ transform: 'translateY(-50%)' }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

              <div className="relative z-10">
                {/* Number Badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Animated connecting dot */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute -right-2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-20"
                  style={{ transform: 'translateY(-50%)' }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
