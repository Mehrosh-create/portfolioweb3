"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

import Stats from "@/components/About/Stats";
import GallerySection from "@/components/About/GallerySection";
import { FadeSlide, SlidingHighlight } from "@/components/About/ReusableComponents";
import { InfiniteMovingCards } from "@/ui/infinite-moving-cards";
import Cursor from "@/components/Global/CursorEffect";

/* ---------------- LOGOS SECTION ---------------- */
const LogosSection: React.FC = () => {
  const { theme } = useTheme();

  const logos = [
    { id: 1, src: "/Logo/logo-2.png", alt: "Logo 2", width: 300, height: 115 },
    { id: 2, src: "/Logo/logo-5-1.png", alt: "Logo 5", width: 300, height: 115 },
    { id: 3, src: "/Logo/logo-11.png", alt: "Logo 11", width: 300, height: 115 },
    { id: 4, src: "/Logo/logo-7.png", alt: "Logo 7", width: 515, height: 186 },
  ];

  return (
    <section className="logos-section py-12 relative overflow-hidden bg-background">
      {theme === "light" && (
        <>
          <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 h-14 bg-[#0fb8af] -z-10" />
          <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 h-28 bg-[#0fb8af]/40 blur-3xl -z-20" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <SlidingHighlight text="TRUSTED BY INDUSTRY LEADERS" />
          <h2
            className="text-xl sm:text-2xl font-bold text-foreground mb-2"
            style={{ fontFamily: "'Century Gothic', sans-serif" }}
          >
            Featured Partnerships & Collaborations
          </h2>
          <p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Working with industry leaders to deliver exceptional results and drive digital transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="relative w-[150px] h-[70px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="150px"
                  className={`object-contain ${
                    theme === "light" ? "brightness-0 invert" : "grayscale hover:grayscale-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- ABOUT PAGE ---------------- */
export default function About2() {
  const services = [
    "Business Operations & Process Optimization",
    "Automated Workflow Systems",
    "Project & Program Management",
    "Administrative Support & Virtual Assistance",
    "Accuracy Verification & Quality Control",
    "HubSpot CRM Implementation & Management",
    "Email Marketing Platform Support",
    "Google Workspace Integration",
    "Data Migration & Management",
    "Ecommerce Solutions & Optimization",
    "Data Analysis & Business Intelligence",
    "Account Management & Client Relations",
    "CRM Automation & Integration",
  ];

  const [showCursor, setShowCursor] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const profileImageRef = useRef<HTMLDivElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme();

  /* ---------------- MOUSE EVENTS ---------------- */
  useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const down = () => setIsDragging(true);
    const up = () => setIsDragging(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  /* ---------------- RESPONSIVE HEIGHT FOR TEXT/IMAGE ---------------- */
  useEffect(() => {
    const updateHeights = () => {
      if (!profileImageRef.current || !textContentRef.current) return;
      const width = profileImageRef.current.offsetWidth;
      profileImageRef.current.style.height = `${width}px`; // keep square aspect
      textContentRef.current.style.minHeight = `${width}px`;
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16 overflow-x-hidden">
      {/* HERO */}
      <FadeSlide>
        <div className="text-center mb-12 px-6">
          <h1
            className="uppercase text-foreground font-bold text-2xl sm:text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Century Gothic', sans-serif" }}
          >
            I <span className="text-[#0fb8af]">Transform</span> Businesses
          </h1>
          <span
            className="inline-block px-4 py-1 bg-[#0fb8af] text-black text-sm font-bold"
            style={{ fontFamily: "'Century Gothic', sans-serif" }}
          >
            DIGITAL TRANSFORMATION EXPERT
          </span>
        </div>
      </FadeSlide>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 mb-14">
        <FadeSlide direction="right">
          <div ref={textContentRef} className="flex flex-col justify-center">
            <h2
              className="text-xl sm:text-2xl font-bold mb-4"
              style={{ fontFamily: "'Century Gothic', sans-serif" }}
            >
              I&apos;m a Global Strategist & Digital Transformation Leader
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I&apos;m Sheikh Nabeel — Entrepreneur, Business Strategist & CEO of EurosHub. With 7+ years of experience, I help founders, startups, and global teams simplify complex operations, implement scalable systems, and grow through digital innovation.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              My mission is to empower businesses with the tools and strategies they need to thrive in the digital age. Through strategic consulting, digital transformation, and growth marketing, I&apos;ve helped countless organizations achieve unprecedented success.
            </p>
          </div>
        </FadeSlide>

        <FadeSlide direction="left">
          <div className="flex justify-center">
            <div
              ref={profileImageRef}
              className="relative w-full max-w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-profile.jpg"
                alt="Sheikh Nabeel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeSlide>
      </div>

      {/* LOGOS */}
      <LogosSection />

      {/* MOVING CARDS */}
      <div className="relative my-14 px-6">
        <h2
          className="text-center uppercase text-xl sm:text-2xl mb-6 font-bold"
          style={{ fontFamily: "'Century Gothic', sans-serif" }}
        >
          Technologies & Platforms
        </h2>

        <div
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <InfiniteMovingCards items={services} direction="right" speed="slow" />
        </div>

        {showCursor && <Cursor mousePos={mousePos} isDragging={isDragging} showCursor />}
      </div>

      {/* GALLERY */}
      <GallerySection />

      {/* STATS */}
      <div className="mt-14 px-6">
        <Stats />
      </div>
    </div>
  );
}
