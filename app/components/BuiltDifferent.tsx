'use client';

import { motion } from 'framer-motion';

export function BuiltDifferent() {
  const agents = [
    {
      name: 'Atlas',
      role: 'CEO',
      icon: '🧭',
      description: 'Strategic vision and company direction',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Builder',
      role: 'CTO',
      icon: '⚡',
      description: 'Technical architecture and implementation',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Voice',
      role: 'CMO',
      icon: '📢',
      description: 'Brand voice and content strategy',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Canvas',
      role: 'Designer',
      icon: '🎨',
      description: 'Visual design and user experience',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Radar',
      role: 'Researcher',
      icon: '🔍',
      description: 'Market research and data analysis',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Ops',
      role: 'Operations',
      icon: '⚙️',
      description: 'Process optimization and execution',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Built Different
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our products are created by a team of specialized AI agents, each an expert in their domain
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.name}
            className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Gradient glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className="relative z-10">
              {/* Icon/Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {agent.icon}
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
              <div className={`inline-block text-sm font-semibold bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent mb-3`}>
                {agent.role}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{agent.description}</p>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${agent.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-500 italic">
          &ldquo;Made with AI, reviewed by humans&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
