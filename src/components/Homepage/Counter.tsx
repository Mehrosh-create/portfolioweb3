"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import FadeSlide from "@/components/Common/FadeSlide";

interface Card {
  name: string;
  description: string;
  fullDescription: string;
  img: string;
}

const CounterSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const cards: Card[] = [
  {
    name: "EXECUTE",
    description: "move fast with focus",
    fullDescription:
      "I use proven frameworks and automation tools to deliver fast, reliable outcomes while maintaining quality, clarity, and long-term strategic direction.",
    img: "/images/card1.jpeg",
  },
  {
    name: "COLLAB",
    description: "work as one team",
    fullDescription:
      "I work directly with your team to ensure smooth collaboration, clear communication, and practical knowledge transfer for lasting success.",
    img: "/images/card2.jpeg",
  },
  {
    name: "RESULTS",
    description: "experience that delivers",
    fullDescription:
      "With years of hands-on experience and many successful projects, I bring consistent expertise across industries and business stages.",
    img: "/images/card3.jpg",
  },
];

  return (
    <section
      className={`py-12 sm:py-16 relative overflow-hidden px-4 sm:px-6 lg:px-8 ${
        theme === "dark" ? "bg-[#151515]" : "bg-white"
      }`}
    >
    

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Quote */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeSlide delay={0.1}>
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
              <span className="block text-center mt-2 sm:mt-0">think and act like a member first,</span>
              <span className="block text-center mt-2">and a marketer second.&rdquo;</span>
            </h2>
          </FadeSlide>

          <div className="relative inline-block mx-auto">
            <span
              className={`absolute top-0 left-0 h-full bg-[#0fb8af] ${
                inView ? "animate-slideRight" : ""
              }`}
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
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.name}
              className={`group inspire-card relative overflow-hidden rounded-lg transition-all duration-500 cursor-default border ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
              style={{ aspectRatio: "4/5" }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.img}
                  alt={card.name}
                  fill
                  priority
                  quality={100}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 group-hover:to-black/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="mb-4">
                  <h3
  className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 uppercase tracking-wide group-hover:text-[#0fb8af] transition-colors duration-300"
                    style={{
                      fontFamily: "'Century Gothic', sans-serif",
                      fontWeight: 900,
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      color: "#ffffff",
                    }}
                  >
                    {card.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      color: theme === "dark" ? "#d1d5db" : "#e5e7eb",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="w-12 h-0.5 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db] mb-4 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="overflow-hidden">
                  <div
                    className="text-xs sm:text-sm text-white/90 leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      lineHeight: 1.6,
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    {card.fullDescription}
                  </div>
                </div>
              </div>

              {/* Shine */}
              <div className="absolute top-0 -inset-x-full h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-slideRight {
          animation: slideRight 2s forwards;
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }

        .inspire-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          cursor: default;
        }

        .inspire-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 184, 175, 0.15);
        }
      `}</style>
    </section>
  );
};

export default CounterSection;
