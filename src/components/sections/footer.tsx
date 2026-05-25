"use client";

import MagneticButton from "../ui/magnetic-button";
import { ArrowUp, MessageSquare } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#02000b]/60 border-t border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Glow highlight particle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8">

        {/* Top footer row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-8">
          <div>
            <h3 className="font-display font-bold text-base md:text-lg tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              AZMI_ZEIN
            </h3>
            <p className="text-white/40 text-xs mt-1 max-w-sm tracking-wide">
              Crafting scalable digital solutions with visual elegance and intelligent backend architectures.
            </p>
          </div>

          {/* Social Anchors */}
          <div className="flex gap-3">
            {[
              { icon: <LinkedinIcon size={14} />, href: "https://www.linkedin.com/in/muhammad-azmi-zein-5aba681b5/" },
              { icon: <InstagramIcon size={14} />, href: "https://www.instagram.com/muhammadazmizein/" },
              { icon: <MessageSquare size={14} />, href: "mailto:muhammadazmizein10@gmail.com" },
            ].map((social, idx) => (
              <MagneticButton key={idx}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white/50 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Lower footer row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 tracking-widest uppercase font-mono">
          <div>
            &copy; {new Date().getFullYear()} MUHAMMAD AZMI ZEIN. ALL RIGHTS RESERVED.
          </div>

          {/* Network systems diagnostics mockup */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEMS_OPERATIONAL</span>
            </div>
            <span className="hidden sm:inline">PING // 12MS</span>
            <MagneticButton>
              <button
                onClick={handleScrollTop}
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-neon-blue/30 hover:text-neon-blue transition-all duration-300"
              >
                <ArrowUp size={14} />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
