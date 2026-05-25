"use client";

import React, { useRef, useState } from "react";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardTilt({ children, className = "" }: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Exact cursor positions within the container boundary
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Translate to scale ranges [-0.5, 0.5]
    const normalizedX = (x / width) - 0.5;
    const normalizedY = (y / height) - 0.5;

    // Tilt limits: 12 degrees max for seamless non-jarring visuals
    const tiltX = -normalizedY * 12;
    const tiltY = normalizedX * 12;

    setRotateX(tiltX);
    setRotateY(tiltY);

    // Apply high-fidelity responsive glare flare
    setShineStyle({
      opacity: 0.18,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.4) 0%, transparent 65%)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShineStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out transform-gpu ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {/* Glare spotlight layer */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={shineStyle}
      />
      {children}
    </div>
  );
}
