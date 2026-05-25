"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../ui/magnetic-button";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    // Simulate secure telemetry messaging trigger
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1100);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark">

      {/* Background ambient orbs */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-neon-blue/5 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-neon-blue font-mono"
          >
            06 // SECURE COMMUNICATION PORTAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            CONTACT PORTAL
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column portal info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-widest leading-snug">
                LET'S CREATE THE FUTURE TOGETHER
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed tracking-wider">
                Have a concept, contract offer, or dynamic startup application you want to deploy? Connect directly using the portal secure channels or email. Let's make it happen.
              </p>
            </div>

            {/* Direct Cards channels */}
            <div className="space-y-4">

              <div className="flex items-center gap-4 glass-panel border border-white/5 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-neon-blue flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[9px] text-white/35 tracking-widest uppercase font-mono">EMAIL ADDR</span>
                  <p className="text-xs md:text-sm font-bold text-white tracking-wider">muhammadazmizein10@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-panel border border-white/5 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-neon-purple flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[9px] text-white/35 tracking-widest uppercase font-mono">LOCATION</span>
                  <p className="text-xs md:text-sm font-bold text-white tracking-wider">Tangerang, Banten, Indonesia // Remote</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel border border-white/5 p-6 md:p-8 rounded-3xl space-y-6 relative">

              {/* Submitted secure feedback overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#030014]/95 backdrop-blur-md rounded-3xl z-20 flex flex-col items-center justify-center text-center p-6 space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-emerald-400"
                  >
                    <CheckCircle size={44} />
                  </motion.div>
                  <h4 className="font-display font-bold text-base md:text-lg text-white uppercase tracking-widest">
                    TRANSMISSION SECURED
                  </h4>
                  <p className="text-white/40 text-xs max-w-xs leading-relaxed tracking-wider">
                    Your transmission data has cleared verification. I will establish contact shortly.
                  </p>
                </motion.div>
              )}

              {/* Form Input Elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-[9px] font-bold tracking-widest uppercase text-white/45 font-mono">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full glass-input px-4 py-3.5 rounded-2xl text-xs text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold tracking-widest uppercase text-white/45 font-mono">
                    EMAIL ADDR
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter email"
                    className="w-full glass-input px-4 py-3.5 rounded-2xl text-xs text-white"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-widest uppercase text-white/45 font-mono">
                  TRANSMISSION MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Draft transmission..."
                  className="w-full glass-input px-4 py-3.5 rounded-2xl text-xs text-white resize-none"
                />
              </div>

              {/* Submit portal trigger */}
              <div className="pt-2">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_28px_rgba(157,78,221,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 active:scale-[0.98]"
                  >
                    <span>{loading ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                    <Send size={12} className={loading ? "animate-pulse" : ""} />
                  </button>
                </MagneticButton>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
