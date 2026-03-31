"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          background: 'linear-gradient(90deg, #2563EB, #8B5CF6, #2563EB)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 10s ease infinite',
        }}
      />
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <h2
        className="text-3xl md:text-4xl font-bold mb-4 text-white"
        style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
      >
        Get smarter about AI in 5 minutes
      </h2>
      <p className="mb-6 text-lg" style={{ color: 'rgb(148, 163, 184)' }}>
        Weekly updates on new products, tools, and AI insights
      </p>

      {status === "success" ? (
        <div className="glass rounded-xl p-6 glow-green">
          <p className="text-lg text-green-400">✓ Thanks for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 glow hover:animate-pulse"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
            }}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
