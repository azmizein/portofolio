"use client";

import { motion } from "framer-motion";
import CardTilt from "../ui/card-tilt";
import { Code, Server, Brain, Activity } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="text-neon-blue" size={24} />,
      description: "Crafting modern, high-performance web applications using React.js, Next.js, Redux Toolkit, and Sass, focused on responsive, clean, and interactive interfaces.",
      color: "hover:border-neon-blue/30"
    },
    {
      title: "Backend Architecture",
      icon: <Server className="text-neon-purple" size={24} />,
      description: "Designing robust server modules, REST APIs, and microservices using Node.js, Express, Nest.js, and Python FastAPI, with relational MySQL datastore integrations.",
      color: "hover:border-neon-purple/30"
    },
    {
      title: "AI Integration",
      icon: <Brain className="text-neon-pink" size={24} />,
      description: "Orchestrating conversational AI (Gemini API), speech-to-text (Whisper Large V3), speaker diarization (PyAnnote), and summarization engines (LLaMA).",
      color: "hover:border-neon-pink/30"
    },
    {
      title: "Scraping & Automation",
      icon: <Activity className="text-emerald-400" size={24} />,
      description: "Building automated data scrapers utilizing Selenium Chrome drivers, parsing Excel spreadsheets, and compiling competitor pricing analytics dashboards.",
      color: "hover:border-emerald-400/30"
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark">
      {/* Background visual highlight */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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
            05 // DEVELOPER CAPABILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            SERVICES OFFERED
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              key={idx}
            >
              <CardTilt className={`glass-panel border rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px] glass-panel-hover ${service.color}`}>
                <div className="space-y-6">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-base md:text-lg text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm leading-relaxed tracking-wider">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
