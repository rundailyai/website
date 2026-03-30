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
      className="glass rounded-2xl p-8"
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Stay Updated
      </h2>
      <p className="text-gray-300 mb-6">
        Get the latest products, tools, and tips delivered to your inbox weekly
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 glow"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
