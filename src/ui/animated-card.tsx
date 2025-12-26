"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0fb8af]/0 via-[#0fb8af]/10 to-[#0fb8af]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Inner glow corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#0fb8af]/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#0fb8af]/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#0fb8af]/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#0fb8af]/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {children}
    </motion.div>
  );
};