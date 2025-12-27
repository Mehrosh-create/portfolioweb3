"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import FadeSlide from "@/components/Common/FadeSlide";

interface FeatureItem {
  id: number;
  text: string;
}

/* 🔁 NEW TITLES TO LOOP */
const TITLES = [
  "Empowering Executive Decision-Making",
  "Shaping Future-Ready Organizations",
  "Driving Strategic Innovation",
  "Transforming Vision into Impact",
];

const HeroSection: React.FC = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme ?? "light";

  /* 🔤 TYPEWRITER STATES */
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ✨ TYPE + ERASE EFFECT */
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

  const features: FeatureItem[] = [
    { id: 1, text: "7+ Years Leadership Experience" },
    { id: 2, text: "Board & C-Suite Advisory" },
    { id: 3, text: "Digital Transformation Expert" },
  ];

  const trustedBy = [
    { id: 1, text: "Fortune 500 Companies" },
    { id: 2, text: "Global Enterprises" },
  ];

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 ${
        theme === "dark" ? "bg-[#151515]" : "bg-gray-50"
      } overflow-hidden`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <FadeSlide delay={0.3}>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-light min-h-[3.5rem] md:min-h-[4.5rem] ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {text}
                <span className="inline-block ml-1 animate-pulse">|</span>
              </h1>
            </FadeSlide>

            <p
              className={`max-w-xl mx-auto lg:mx-0 ${
                theme === "dark" ? "text-white/60" : "text-gray-600"
              }`}
            >
              Navigating digital transformation, AI governance, and strategic
              growth for sustainable success.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {features.map((f, i) => (
                <FadeSlide key={f.id} delay={0.5 + i * 0.1}>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    {/* ✅ Tick color updated to #0FB8AF */}
                    <span className="text-[#0FB8AF]">✔</span>
                    <span
                      className={`text-sm ${
                        theme === "dark"
                          ? "text-white/70"
                          : "text-gray-600"
                      }`}
                    >
                      {f.text}
                    </span>
                  </div>
                </FadeSlide>
              ))}
            </div>

            {/* Trusted By */}
            <FadeSlide delay={1}>
              <div className="flex gap-6 justify-center lg:justify-start text-xs uppercase tracking-widest">
                {trustedBy.map((t) => (
                  <span
                    key={t.id}
                    className={
                      theme === "dark" ? "text-white/60" : "text-gray-600"
                    }
                  >
                    {t.text}
                  </span>
                ))}
              </div>
            </FadeSlide>
          </div>

          {/* Image */}
          <FadeSlide delay={0.1}>
            <div className="relative max-w-lg mx-auto w-full">
              <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl">
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
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
