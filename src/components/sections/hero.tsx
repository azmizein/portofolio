"use client";

import { motion } from "framer-motion";
import MagneticButton from "../ui/magnetic-button";
import TextTyping from "../ui/text-typing";

export default function Hero() {
  const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500", x: "-28%", y: "-25%", delay: 0 },
    { name: "Next.js", color: "from-white to-gray-400", x: "28%", y: "-22%", delay: 1 },
    { name: "TypeScript", color: "from-blue-500 to-indigo-600", x: "-32%", y: "12%", delay: 2 },
    { name: "Node.js", color: "from-green-400 to-emerald-600", x: "26%", y: "18%", delay: 3 },
    { name: "Docker", color: "from-blue-400 to-sky-500", x: "-12%", y: "-36%", delay: 1.5 },
    { name: "AWS", color: "from-orange-400 to-amber-500", x: "12%", y: "-35%", delay: 2.5 },
    { name: "MySQL", color: "from-blue-600 to-indigo-700", x: "0%", y: "30%", delay: 0.5 },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid overlay */}
      <div className="absolute inset-0 interactive-grid opacity-[0.2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/65 to-bg-dark pointer-events-none" />

      {/* Floating swirled gradient orbs */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -45, 25, 0],
          scale: [1, 1.12, 0.92, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[320px] md:w-[480px] h-[320px] md:h-[480px] bg-gradient-to-r from-neon-blue to-blue-600/10 blur-[120px] rounded-full opacity-30 pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 35, -35, 0],
          scale: [1, 0.95, 1.08, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-gradient-to-r from-neon-purple to-neon-pink/10 blur-[120px] rounded-full opacity-30 pointer-events-none -z-10"
      />

      {/* Layout Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center select-none">

        {/* Neon dot subtitle status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/60">
            Open for Fullstack Engineering Opportunities
          </span>
        </motion.div>

        {/* Cinematic Big Header */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight leading-none mb-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="block text-white"
          >
            CRAFTING DIGITAL
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
          >
            INTELLIGENCE
          </motion.span>
        </h1>

        {/* Text typing effect */}
        <div className="max-w-2xl min-h-[48px] md:min-h-[auto] mb-10">
          <TextTyping
            text="Fullstack Developer specializing in Javascript, Nest.js, Python, and AI systems."
            className="text-white/50 text-xs sm:text-sm md:text-base leading-relaxed tracking-wider font-sans"
            delay={0.8}
          />
        </div>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <MagneticButton>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-bold text-[10px] tracking-widest uppercase shadow-[0_0_20px_rgba(157,78,221,0.35)] hover:shadow-[0_0_30px_rgba(157,78,221,0.55)] hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
            >
              View Projects
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[10px] tracking-widest uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Me
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating 3D floating tech chips (visible on desktop) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 0.8,
              scale: 1,
              y: ["0%", "-12%", "0%"]
            }}
            transition={{
              opacity: { duration: 0.8, delay: tech.delay + 0.8 },
              scale: { duration: 0.8, delay: tech.delay + 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tech.delay
              }
            }}
            style={{
              position: "absolute",
              left: `calc(50% + ${tech.x})`,
              top: `calc(50% + ${tech.y})`,
            }}
            className="px-3.5 py-2 rounded-2xl glass-panel border-white/5 shadow-2xl flex items-center justify-center gap-2"
          >
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
            <span className="text-[9px] font-bold tracking-widest text-white/70 font-mono uppercase">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
