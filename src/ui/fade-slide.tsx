
"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeSlideProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeSlide: React.FC<FadeSlideProps> = ({ 
  children, 
  delay = 0, 
  direction = "up" 
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0, 
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0 
    },
  };
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};
