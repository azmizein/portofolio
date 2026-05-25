"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const mockLogs = [
    "Initializing dark space ambient layout...",
    "Connecting AI neural core modules...",
    "Compiling glassmorphic styling components...",
    "Pre-rendering ultra-premium interface shaders...",
    "Systems online. Loading complete."
  ];

  useEffect(() => {
    // Speed-tuned random interval timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 650);
          return 100;
        }
        const delta = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + delta, 100);
      });
    }, 120);

    // Typing system diagnostics
    const logIntervals = mockLogs.map((log, idx) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, `> ${log}`]);
      }, idx * 450);
    });

    return () => {
      clearInterval(timer);
      logIntervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#02000c] flex flex-col justify-between p-8 md:p-16 select-none font-mono"
        >
          {/* Top Status */}
          <div className="flex justify-between items-center text-[10px] md:text-xs text-white/40 tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-blue animate-pulse" />
              <span>AZMI_ZEIN // PORTFOLIO_CORE</span>
            </div>
            <span>V3.0_QUANTUM</span>
          </div>

          {/* Middle Logs */}
          <div className="max-w-xl self-start space-y-4 mt-16 md:mt-24">
            {/* Cool Loading Logo */}
            <div className="relative w-14 h-14 flex items-center justify-center mb-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink rounded-xl opacity-50 blur-[6px] animate-pulse" />
              <div className="relative w-12 h-12 bg-[#02000c] border border-white/10 rounded-xl flex items-center justify-center z-10">
                <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15 L85 35 V75 L50 95 L15 75 V35 Z" stroke="url(#load-logo-grad)" strokeWidth="6" strokeLinejoin="round" />
                  <path d="M35 68 L50 32 L65 68" stroke="url(#load-logo-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 54 H58" stroke="url(#load-logo-grad-2)" strokeWidth="6" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="load-logo-grad" x1="0" y1="0" x2="100" y2="100">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#9b51e0" />
                    </linearGradient>
                    <linearGradient id="load-logo-grad-2" x1="100" y1="0" x2="0" y2="100">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#f355da" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink tracking-widest mb-6 font-display">
              AZMI ZEIN
            </h1>
            <div className="space-y-1.5 min-h-[140px] flex flex-col justify-end">
              {logs.map((log, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  key={idx}
                  className="font-mono text-xs text-white/80"
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Progress */}
          <div className="w-full space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] md:text-xs text-white/30 tracking-widest font-mono">LOADING SYSTEM ENVIRONMENT</span>
              <span className="text-3xl md:text-6xl font-bold text-white tracking-tighter">
                {progress}%
              </span>
            </div>
            {/* Elegant thin progress track */}
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
