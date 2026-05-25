"use client";

import { motion } from "framer-motion";
import CardTilt from "../ui/card-tilt";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Aurelius",
      role: "CTO, Quantum Flow Systems",
      feedback: "Azmi deployed our AI automation backend within tight guidelines. His clean Next.js architecture and modular APIs made integrations absolute smooth sailing. Highly recommended engineer.",
    },
    {
      name: "Sophia Vance",
      role: "Product Director, Stellar Web3",
      feedback: "The glassmorphic visual system Azmi constructed for our Web3 portal exceeded client aesthetic standards. Smooth scroll animations and magnetic mouse triggers made a massive impact on our UI presentation.",
    },
    {
      name: "John Miller",
      role: "Founder, Aether Tech Inc",
      feedback: "I am deeply impressed by Azmi's DevOps containerization workflows. Our microservices cluster now scales flawlessly under Kubernetes, dramatically reducing latency spikes. Exceptional execution.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/40">
      
      {/* Background neon orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-pink/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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
            06 // SYSTEM FEEDBACK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            CLIENT TESTIMONIALS
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}
            >
              <CardTilt className="glass-panel border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[200px] glass-panel-hover hover:border-neon-purple/20">
                <div className="space-y-4">
                  <span className="text-4xl font-serif text-neon-blue/20 select-none block leading-none">“</span>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed tracking-wider italic">
                    {t.feedback}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-xs md:text-sm text-white tracking-wide">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-white/30 tracking-wider">
                      {t.role}
                    </span>
                  </div>
                  {/* Glowing active node */}
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,242,254,0.8)] animate-pulse" />
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
