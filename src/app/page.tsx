"use client";

import LoadingScreen from "@/components/layout/loading-screen";
import CustomCursor from "@/components/ui/custom-cursor";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      {/* Cinematic Splash Loading Overlay */}
      <LoadingScreen />

      {/* Futuristic Cursor Halo */}
      <CustomCursor />

      {/* Core Layout Containers */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        
        {/* Sticky Glassmorphic Header */}
        <Navbar />

        {/* Cinematic Dashboard Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>

        {/* Minimalist Tech Footer */}
        <Footer />

      </div>

      {/* Subtle glowing noise texture overlays */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay" />
    </>
  );
}
