"use client";


import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, Variants } from "framer-motion";


/* ---------------------- FadeSlide Component ---------------------- */
interface FadeSlideProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}


const fadeVariants: Variants = {
  hidden: (direction: string) => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      default: return { opacity: 0, y: 40 };
    }
  },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};


const FadeSlide: React.FC<FadeSlideProps> = ({ children, delay = 0, direction = "up" }) => (
  <motion.div
    custom={direction}
    variants={fadeVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);


/* ---------------------- HeroSection ---------------------- */
interface FeatureItem { id: number; text: string; }


const TITLES = [
  "Empowering Executive Decision-Making",
  "Shaping Future-Ready Organizations",
  "Driving Strategic Innovation",
  "Transforming Vision into Impact",
];


const HIGHLIGHT_WORDS = ["Empowering", "Future-Ready", "Strategic", "Impact"];


const features: FeatureItem[] = [
  { id: 1, text: "7+ Years Leadership Experience" },
  { id: 2, text: "Board & C-Suite Advisory" },
  { id: 3, text: "Digital Transformation Expert" },
];


const HeroSection: React.FC = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme ?? "light";


  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: NodeJS.Timeout;


    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }


    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);


  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${theme === "dark" ? "bg-[#0A0C0C]" : "bg-white"}`}>
      {/* Background floating shapes */}
      <div className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        theme === "dark" ? "bg-[#0FB8AF]/10" : "bg-[#0FB8AF]/5"
      }`} />
      <div className={`absolute -bottom-32 -right-24 w-[450px] h-[450px] rounded-full blur-2xl pointer-events-none ${
        theme === "dark" ? "bg-[#0FB8AF]/5" : "bg-[#0FB8AF]/3"
      }`} />


      {/* Top fade blend for light mode */}
      {theme === "light" && (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white to-transparent z-10 pointer-events-none" />
      )}
     
      {/* Bottom fade blend - different for light/dark mode */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none ${
        theme === "dark"
          ? "bg-gradient-to-t from-[#0A0C0C] to-transparent"
          : "bg-gradient-to-t from-white to-transparent"
      }`} />


      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <FadeSlide delay={0.3}>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-light min-h-[3.5rem] md:min-h-[4.5rem] ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Century Gothic', sans-serif" }}
              >
                {text.split(" ").map((word, idx) => (
                  <span key={idx} className={`${HIGHLIGHT_WORDS.some(hw => word.includes(hw)) ? "text-[#0FB8AF]" : ""}`}>
                    {word}{" "}
                  </span>
                ))}
                <span className="inline-block ml-1 animate-pulse">|</span>
              </h1>
            </FadeSlide>


            {/* Subheading */}
            <FadeSlide delay={0.5}>
              <p
                className={`max-w-xl mx-auto lg:mx-0 text-lg ${
                  theme === "dark" ? "text-white/60" : "text-gray-600"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Navigating digital transformation, AI governance, and board-level strategic growth for sustainable success.
              </p>
            </FadeSlide>


            {/* CTA Buttons */}
            <FadeSlide delay={0.7}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#0FB8AF] text-white rounded-xl font-medium text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Book a Consultation
                </a>
                <Link
                  href="/about"
                  className="px-6 py-3 border border-[#0FB8AF] text-[#0FB8AF] rounded-xl font-medium text-sm sm:text-base hover:bg-[#0FB8AF]/10 hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Experience
                </Link>
              </div>
            </FadeSlide>


            {/* Features */}
            <div className="space-y-3 mt-6">
              {features.map((f, i) => (
                <FadeSlide key={f.id} delay={0.9 + i * 0.15} direction="up">
                  <div className={`flex items-center gap-3 justify-center lg:justify-start px-4 py-2 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-black/20 border border-white/5"
                      : "bg-gray-50 border border-gray-100"
                  }`}>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                      className="text-[#0FB8AF] text-lg"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      ✔
                    </motion.span>
                    <span className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-gray-600"
                    }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      {f.text}
                    </span>
                  </div>
                </FadeSlide>
              ))}
            </div>
          </div>


          {/* Hero Image with fade blend overlay */}
          <div className="relative max-w-lg mx-auto w-full rounded-2xl overflow-hidden">
            {/* Image fade blend overlay */}
            <div className={`absolute bottom-0 left-0 right-0 h-32 z-10 ${
              theme === "dark"
                ? "bg-gradient-to-t from-[#0A0C0C] to-transparent"
                : "bg-gradient-to-t from-white to-transparent"
            }`} />
           
            {/* Image container */}
            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/sn.png"
                alt="Sheikh Nabeel"
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "65% center" }}
              />
            </div>
          </div>
        </div>
      </div>


      {/* Additional fade blend at the very bottom of the section */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${
        theme === "dark"
          ? "bg-gradient-to-t from-[#0A0C0C] via-[#0A0C0C]/70 to-transparent"
          : "bg-gradient-to-t from-white via-white/70 to-transparent"
      }`} />
    </section>
  );
};


export default HeroSection;


