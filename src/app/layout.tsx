import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Azmi Zein | Fullstack Developer & AI Integrator",
  description: "Premium cinematic portfolio of Muhammad Azmi Zein, a Fullstack Developer specializing in JavaScript, React, Node.js, Nest.js, Express, Python, FastAPI, and conversational AI integrations.",
  keywords: ["Muhammad Azmi Zein", "Fullstack Developer", "Software Engineer", "AI speech to text", "Whisper Large V3", "React Nest.js", "PT Niagamas Lestari Gemilang", "Tangerang Banten"],
  authors: [{ name: "Muhammad Azmi Zein" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full antialiased`}
    >
      <body className="bg-bg-dark text-foreground min-h-full flex flex-col font-sans overflow-x-hidden selection:bg-neon-purple/30 selection:text-neon-blue">
        {children}
      </body>
    </html>
  );
}
