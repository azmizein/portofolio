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
          <div className="max-w-xl self-start space-y-3 mt-16 md:mt-24">
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
