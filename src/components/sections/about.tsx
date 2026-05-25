"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatCounter({ value, suffix = "", label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startCount = 0;
    const endCount = value;
    const duration = 1.6; // duration in seconds
    const totalFrames = 50;
    const increment = endCount / totalFrames;
    const frameTime = (duration * 1000) / totalFrames;

    const timer = setInterval(() => {
      startCount += increment;
      if (startCount >= endCount) {
        clearInterval(timer);
        setCount(endCount);
      } else {
        setCount(Math.floor(startCount));
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-3xl md:text-5xl font-black font-display bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
        {count}
        {suffix}
      </div>
      <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1.5 font-bold font-mono">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Backdrop glowing grid details */}
      <div className="absolute top-1/4 right-0 w-[280px] h-[280px] bg-neon-purple/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Title */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-neon-blue font-mono"
          >
            01 // PROFILE BACKGROUND
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Avatar Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-panel p-1 border-white/5">

              {/* Rotating neon glowing overlay border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-60 blur-[1px] animate-spin-slow group-hover:scale-105 transition-transform duration-500" />

              {/* Profile Image container */}
              <div className="relative w-full h-full bg-[#030014] rounded-2xl overflow-hidden group">
                <Image
                  src="/projects/azmi.png"
                  alt="Muhammad Azmi Zein"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                {/* Visual gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/30 via-transparent to-transparent opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Right Column details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/50 text-xs sm:text-sm md:text-base leading-relaxed tracking-wider font-sans"
            >
              I am a results-driven Full-Stack Developer specializing in building high-performance, scalable, and user-centric applications. With extensive professional deployments at PT Niagamas Lestari Gemilang and Phintraco Consulting, I specialize in designing modular front-end architectures and robust back-end systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-white/50 text-xs sm:text-sm md:text-base leading-relaxed tracking-wider font-sans"
            >
              My expertise centers around the JavaScript/TypeScript ecosystems (React, Next.js, Node.js, Nest.js, Express) combined with Python FastAPI engines, background worker queues (Celery, Redis), relational databases, and intelligent speech-to-text / conversational AI implementations.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5"
            >
              <StatCounter value={3} suffix="+" label="Years Experience" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
