"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticButton from "../ui/magnetic-button";

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
    setScrolled(latest > 50);
  });

  // Track active section triggers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-bg-dark/70 backdrop-blur-md border-b border-white/5 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollTo("hero")}
            className="cursor-pointer font-display font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple tracking-widest"
          >
            M. AZMI ZEIN
          </div>

          {/* Nav Items Capsules */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/5 py-1 px-1.5 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right CTA Button */}
          <MagneticButton>
            <button
              onClick={() => scrollTo("contact")}
              className="relative px-5 py-2 rounded-full overflow-hidden text-[10px] font-bold tracking-widest uppercase border border-neon-blue/30 text-neon-blue hover:text-white transition-all duration-500 group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10" />
              Hire Me
            </button>
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Responsive thin scroll bar indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
