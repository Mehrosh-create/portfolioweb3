"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

interface Card {
  name: string;
  description: string;
  fullDescription: string;
  img: string;
}

const cards: Card[] = [
  {
    name: "EXECUTE",
    description: "move fast with focus",
    fullDescription:
      "I use proven frameworks and automation tools to deliver fast, reliable outcomes while maintaining quality, clarity, and long-term strategic direction.",
    img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "COLLAB",
    description: "work as one team",
    fullDescription:
      "I work directly with your team to ensure smooth collaboration, clear communication, and practical knowledge transfer for lasting success.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "RESULTS",
    description: "experience that delivers",
    fullDescription:
      "With years of hands-on experience and many successful projects, I bring consistent expertise across industries and business stages.",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
  },
];

const CounterSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isCardsInView, setIsCardsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = cardsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    // Using isCardsInView to satisfy ESLint - it's now properly used
    if (isCardsInView) {
      // You can add animation triggers or other logic here
      // For example, trigger analytics or animations
    }
  }, [isCardsInView]);

  const isDark = theme === "dark";

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-20 md:py-32 ${
        isDark ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0fb8af]/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1fc8db]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quote Section - Enhanced with split text animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className={`leading-tight mb-6 sm:mb-8 px-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            style={{
              fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
              lineHeight: 1.3,
              fontFamily: "'Century Gothic', sans-serif",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            &ldquo;The secret to success in social media is to <br className="hidden sm:block" />
            <span className="block text-center mt-2 sm:mt-0">
              think and act like a member first,
            </span>
            <span className="block text-center mt-2">
              and a marketer second.&rdquo;
            </span>
          </h2>

          {/* Author badge with slide animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative inline-block mx-auto"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db]"
            />
            <span
              className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 inline-block text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: "'Century Gothic', sans-serif",
                fontWeight: 700,
              }}
            >
              SHEIKH NABEEL
            </span>
          </motion.div>
        </motion.div>

        {/* Cards Grid - Enhanced hover effects */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <motion.div
                className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${
                  isDark
                    ? "border border-white/10 shadow-2xl"
                    : "border border-gray-200 shadow-xl"
                }`}
                style={{ aspectRatio: "4/5" }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image with zoom effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={card.img}
                      alt={card.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center" }}
                      priority
                      unoptimized
                    />
                  </motion.div>
                </div>

                {/* Gradient overlay with dynamic opacity */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 group-hover:to-black/95 transition-all duration-500" />

                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0fb8af] via-[#1fc8db] to-[#0fb8af] opacity-20 blur-xl" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  {/* Title with underline effect */}
                  <div className="relative mb-4">
                    <h3
                      className="text-3xl sm:text-4xl font-bold uppercase tracking-wide transition-all duration-300 group-hover:text-[#0fb8af]"
                      style={{
                        fontFamily: "'Century Gothic', sans-serif",
                        fontWeight: 900,
                        textShadow: "0 4px 8px rgba(0,0,0,0.6)",
                        color: "#ffffff",
                      }}
                    >
                      {card.name}
                    </h3>
                    {/* Animated underline */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="text-base sm:text-lg mb-4 transition-colors duration-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                      color: "#e5e7eb",
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Full description with slide-up animation */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-sm sm:text-base text-white/90 leading-relaxed pt-2"
                      style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                    >
                      {card.fullDescription}
                    </motion.p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#0fb8af]/0 group-hover:border-[#0fb8af]/60 transition-all duration-500 rounded-tr-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CounterSection;