// components/About/ReusableComponents.tsx
'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable fade+slide wrapper
export const FadeSlide = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Reusable sliding highlight label
export const SlidingHighlight = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div
      ref={ref}
      className="relative inline-block mx-auto mb-4 sm:mb-6 overflow-hidden"
    >
      <span
        className={`absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out ${
          inView ? "w-full" : "w-0"
        }`}
      ></span>
      <span
        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 sm:px-4 py-1 sm:py-2 inline-block text-sm sm:text-base"
        style={{
          fontFamily: '"Century Gothic", sans-serif',
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        {text}
      </span>
    </div>
  );
};
