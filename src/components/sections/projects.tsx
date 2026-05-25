"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CardTilt from "../ui/card-tilt";

export default function Projects() {
  const projects = [
    {
      title: "AI Notulensi",
      category: "AI Speech-to-Text Platform",
      description: "Meeting transcription and analysis portal featuring high-accuracy Whisper Large V3 models, PyAnnote speaker diarization, automated summarizations (LLaMA), and custom dictionaries.",
      image: "/projects/ai_notulensi.png",
      tags: ["Python", "FastAPI", "React", "Whisper V3", "Celery", "Redis"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      color: "hover:border-neon-blue/35 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)]"
    },
    {
      title: "AI Assistant Chat",
      category: "Internal Conversational AI",
      description: "Secure, company-wide chat client modeled similar to Gemini and ChatGPT to reduce reliance on third-party licenses, featuring context management and custom API designs.",
      image: "/projects/ai_assistant.png",
      tags: ["Node.js", "Express", "MySQL", "Gemini API", "React", "Redux"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      color: "hover:border-neon-purple/35 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]"
    },
    {
      title: "E-Commerce Scraper",
      category: "Data Analytics & Scraping",
      description: "Dynamic web scraping system leveraging Selenium Chrome and dynamic scrapers to extract e-commerce data, compare datasets, and parse Excel documents for lowest pricing lists.",
      image: "/projects/scrapper.png",
      tags: ["React", "Redux", "Express", "MySQL", "Selenium", "ChromeDriver"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      color: "hover:border-neon-pink/35 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)]"
    },
    {
      title: "Raisecall CRM",
      category: "Enterprise CRM Portal",
      description: "Delivered scalable customer relationship management capabilities for enterprise clients, structuring dynamic dashboards, account features, and API modules end-to-end.",
      image: "/projects/raisecall_crm.png",
      tags: ["React", "Nest.js", "MySQL", "Phintraco", "CRM Flows", "API Deployments"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      color: "hover:border-emerald-400/35 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
    },
    {
      title: "My Telkomsel Web",
      category: "Telecom Digital Services",
      description: "Optimized transaction server modules, completed robust performance auditing, resolved system vulnerabilities, and integrated secure customer payment gateways.",
      image: "/projects/mytsl.png",
      tags: ["React", "Express", "MySQL", "Payment Gateway", "Telkomsel Web", "Security"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      color: "hover:border-red-500/35 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
    }
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark">
      {/* Glow ambient highlight */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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
            03 // RECENT BATCH DEPLOYMENTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-white mt-1.5"
          >
            FEATURED PROJECTS
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: idx * 0.15 }}
              key={idx}
            >
              <CardTilt className={`glass-panel border rounded-3xl overflow-hidden h-full flex flex-col justify-between transition-all duration-500 cursor-default ${proj.color}`}>

                {/* Visual Preview Container */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden border-b border-white/5 group">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#02000c]/85 border border-white/10 backdrop-blur-md rounded-full">
                    <span className="text-[9px] font-bold tracking-widest text-white/70 uppercase font-mono">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base md:text-lg text-white tracking-wide">
                      {proj.title}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm leading-relaxed tracking-wider">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-6">
                    {/* Badge row */}
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[9px] font-bold font-mono tracking-widest uppercase rounded bg-white/5 border border-white/5 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Removed action anchors */}
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
