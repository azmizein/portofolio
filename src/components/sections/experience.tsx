"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Active scroll coordinates inside this target element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const timelineData = [
    {
      year: "November 2025 - Present",
      role: "Fullstack Developer",
      company: "PT Niagamas Lestari Gemilang",
      description: "Deployed the AI Notulensi speech-to-text transcription engine using Whisper V3 models and PyAnnote speaker diarization platforms. Engineered company-wide conversational chat systems via Gemini APIs, secure context managers, and automated Selenium web scrapers.",
    },
    {
      year: "July 2023 - November 2025",
      role: "Fullstack Developer",
      company: "Phintraco Consulting",
      description: "Designed end-to-end CRM interfaces and scalable modules for the Raisecall CRM portal. Integrated secure merchant payment gateways and optimized security guidelines for My Telkomsel Web.",
    },
    {
      year: "June 2022 - January 2023",
      role: "Fullstack Developer Trainee",
      company: "Purwadhika Digital Technology School",
      description: "Completed intensive specialized training in fullstack engineering. Built complete functional e-commerce web applications, structured REST APIs, and relational datastores from scratch.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/40">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-10 w-[240px] h-[240px] bg-neon-purple/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-neon-blue font-mono"
          >
            04 // PROFESSIONAL CHRONOLOGY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            EXPERIENCE TIMELINE
          </motion.h2>
        </div>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="relative mt-12 pl-6 md:pl-0">
          
          {/* Vertical central tracking line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-[1px] pointer-events-none">
            {/* The active animated gradient path */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full origin-top"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16 relative z-10">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer margin grid alignment spacing */}
                  <div className="w-full md:w-1/2" />

                  {/* Bullet center dot trigger */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-neon-purple -translate-x-2 flex items-center justify-center z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                  </div>

                  {/* Milestone Card content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="glass-panel border border-white/5 p-6 rounded-2xl glass-panel-hover inline-block w-full max-w-md">
                      <span className="text-[9px] font-bold font-mono tracking-widest text-neon-blue uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-base md:text-lg text-white mt-1 leading-snug">
                        {item.role}
                      </h3>
                      <h4 className="text-xs font-semibold text-white/50 tracking-wider">
                        {item.company}
                      </h4>
                      <p className="text-white/40 text-xs md:text-sm mt-3 leading-relaxed tracking-wider">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
