"use client";

import { motion } from "framer-motion";
import CardTilt from "../ui/card-tilt";
import { Cpu, Layout, Server, Database } from "lucide-react";

export default function TechStack() {
  const row1 = [
    "JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "Nest.js", "MySQL",
    "Python", "FastAPI", "Celery", "Redis", "Sass", "HTML/CSS", "Redux Toolkit"
  ];
  
  const row2 = [
    "Gemini API", "Whisper V3", "LLaMA Models", "Groq API", "PyAnnote D.", "Selenium", "Web Scraping",
    "Kubernetes", "GitLab", "GitHub", "Jenkins", "VS Code", "Jira", "Confluence"
  ];

  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-neon-blue" size={20} />,
      skills: ["React & Redux Toolkit", "TypeScript Codebases", "Interactive Component Logic", "Responsive Visual Layouts", "Vibrant Micro-animations"],
      color: "border-neon-blue/20 hover:border-neon-blue/40"
    },
    {
      title: "Backend Architectures",
      icon: <Server className="text-neon-purple" size={20} />,
      skills: ["Express.js & Nest.js Engines", "Python FastAPI Web Modules", "Relational MySQL Designs", "Websocket Messaging Portals", "Worker Tasks (Celery, Redis)"],
      color: "border-neon-purple/20 hover:border-neon-purple/40"
    },
    {
      title: "Cloud & Automation Systems",
      icon: <Database className="text-neon-pink" size={20} />,
      skills: ["Selenium Web Scrapers", "GitLab & GitHub Versionings", "Automated Cluster Managers", "VS Code & Jira Workflows", "Jenkins CI/CD Integrations"],
      color: "border-neon-pink/20 hover:border-neon-pink/40"
    },
    {
      title: "Intelligent Systems",
      icon: <Cpu className="text-emerald-400" size={20} />,
      skills: ["Speech-to-Text (Whisper V3)", "Speaker Diarization (PyAnnote)", "LLM Conversational Assistants", "Gemini & Groq APIs", "Automated Doc Summarization"],
      color: "border-emerald-400/20 hover:border-emerald-400/40"
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/40">
      
      {/* Background Interactive Dots */}
      <div className="absolute inset-0 interactive-dots opacity-[0.12] pointer-events-none" />

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
            02 // EXPERTISE MATRIX
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            TECH STACK & EXPERTISE
          </motion.h2>
        </div>

        {/* Dual Infinite Marquees */}
        <div className="w-full flex flex-col gap-4.5 mb-20 overflow-hidden select-none">
          
          {/* Row 1: Leftwards */}
          <div className="relative flex overflow-x-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 28, repeat: Infinity }}
              className="flex gap-4 pr-4 text-[10px] font-bold font-mono tracking-widest uppercase text-white/50"
            >
              {[...row1, ...row1].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Rightwards */}
          <div className="relative flex overflow-x-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 32, repeat: Infinity }}
              className="flex gap-4 pr-4 text-[10px] font-bold font-mono tracking-widest uppercase text-white/50"
            >
              {[...row2, ...row2].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-neon-pink hover:border-neon-pink/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
            >
              <CardTilt className={`glass-panel border rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[280px] glass-panel-hover ${cat.color}`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display font-bold text-base md:text-lg text-white tracking-wide">
                      {cat.title}
                    </h3>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                      {cat.icon}
                    </div>
                  </div>
                  
                  {/* Skills lists */}
                  <ul className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-xs text-white/50 tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
