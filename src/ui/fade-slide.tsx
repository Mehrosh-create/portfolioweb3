"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeSlideProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const FadeSlide: React.FC<FadeSlideProps> = ({
  children,
  delay = 0,
  direction = "up",
}) => {
  const variants: Variants = {
    hidden: (dir: string) => {
      switch (dir) {
        case "up":
          return { opacity: 0, y: 40 };
        case "down":
          return { opacity: 0, y: -40 };
        case "left":
          return { opacity: 0, x: 40 };
        case "right":
          return { opacity: 0, x: -40 };
        default:
          return { opacity: 0, y: 40 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeSlide;
