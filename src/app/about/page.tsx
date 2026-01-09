"use client";

import Stats from "@/components/About/Stats";
import GallerySection from "@/components/About/GallerySection";
import { FadeSlide } from "@/components/About/ReusableComponents";
import Cursor from "@/components/Global/CursorEffect";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const LogosSection = () => {
  const { theme } = useTheme();

  const logos = [
    { id: 1, src: "/Logo/logo-2.png", alt: "Logo 2", width: 300, height: 115 },
    { id: 2, src: "/Logo/logo-5-1.png", alt: "Logo 5", width: 300, height: 115 },
    { id: 3, src: "/Logo/logo-11.png", alt: "Logo 11", width: 300, height: 115 },
    { id: 4, src: "/Logo/logo-7.png", alt: "Logo 7", width: 515, height: 186 },
  ];

  return (
    <section className="logos-section py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {theme === "light" && (
        <div className="absolute inset-0 -z-20">
          <div className="w-full h-full bg-gradient-to-br from-[#0fb8af] via-[#0ea59d] to-[#0d928a]">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              Featured Partnerships & Collaborations
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2 sm:px-3">
              Working with industry leaders to deliver exceptional results and drive digital transformation
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center">
            {logos.map((logo) => (
              <div key={logo.id} className="flex justify-center items-center group">
                <div className="relative w-full max-w-[110px] xs:max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] h-auto">
                  <div className="relative w-full h-auto aspect-[300/115]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className={`object-contain transition-all duration-500 drop-shadow-md sm:drop-shadow-lg hover:drop-shadow-xl ${
                        theme === "light" ? "brightness-0 invert-0" : "grayscale hover:grayscale-0"
                      }`}
                      sizes="(max-width: 280px) 40vw, (max-width: 640px) 45vw, (max-width: 768px) 45vw, 22vw"
                      quality={95}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About2() {
  // Using your exact image paths with /imagess/
  const services = [
    { name: "Business Operations & Process Optimization", img: "/imagess/process-optimization.jpg" },
    { name: "Automated Workflow Systems", img: "/imagess/automated-workflow.jpg" },
    { name: "Project & Program Management", img: "/imagess/project-management.jpg" },
    { name: "Administrative Support & Virtual Assistance", img: "/imagess/virtual-assistant.jpg" },
    { name: "Accuracy Verification & Quality Control", img: "/imagess/quality-control.jpg" },
    { name: "HubSpot CRM Implementation & Management", img: "/imagess/hubspot-crm.jpg" },
    { name: "Email Marketing Platform Support", img: "/imagess/email-marketing.jpg" },
    { name: "Google Workspace Integration", img: "/imagess/google-workspace.jpg" },
    { name: "Data Migration & Management", img: "/imagess/data-migration.jpg" },
    { name: "Ecommerce Solutions & Optimization", img: "/imagess/ecommerce.jpg" },
    { name: "Data Analysis & Business Intelligence", img: "/imagess/data-analysis.jpg" },
    { name: "Account Management & Client Relations", img: "/imagess/client-relations.jpg" },
    { name: "CRM Automation & Integration", img: "/imagess/crm-automation.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const profileImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 3 >= services.length ? 0 : prev + 3));
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(services.length - 3, 0) : prev - 3));
  };

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextService, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Drag state
  useEffect(() => {
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Responsive profile card
  useEffect(() => {
    const updateHeights = () => {
      const viewportWidth = window.innerWidth;
      let cardHeight = "500px";
      let cardMaxWidth = "580px";

      if (viewportWidth <= 320) { cardHeight = "280px"; cardMaxWidth = "280px"; }
      else if (viewportWidth <= 375) { cardHeight = "320px"; cardMaxWidth = "320px"; }
      else if (viewportWidth <= 414) { cardHeight = "350px"; cardMaxWidth = "350px"; }
      else if (viewportWidth <= 768) { cardHeight = "380px"; cardMaxWidth = "400px"; }
      else if (viewportWidth <= 880) { cardHeight = "420px"; cardMaxWidth = "450px"; }
      else if (viewportWidth <= 1024) { cardHeight = "440px"; cardMaxWidth = "480px"; }
      else if (viewportWidth <= 1366) { cardHeight = "460px"; cardMaxWidth = "500px"; }

      if (profileImageRef.current) {
        profileImageRef.current.style.height = cardHeight;
        profileImageRef.current.style.maxWidth = cardMaxWidth;
      }
      if (textContentRef.current) {
        textContentRef.current.style.minHeight = cardHeight;
      }
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  return (
    <div className="about-page min-h-screen bg-background flex flex-col w-full overflow-x-hidden pt-10 sm:pt-14 md:pt-16 lg:pt-20">
      <div className="flex-grow w-full max-w-full mx-auto px-0 py-3 sm:py-5 md:py-7 lg:py-9">
        {/* HERO SECTION */}
        <FadeSlide direction="up" delay={0.1}>
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6 lg:px-8">
            <h1 className="font-black uppercase text-foreground leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 px-1"
              style={{ fontFamily: '"Century Gothic", Inter, sans-serif', letterSpacing: "0.02em" }}>
              I <span className="text-[#0fb8af]">TRANSFORM</span> BUSINESSES
            </h1>
            <div className="relative inline-block mx-auto max-w-full">
              <div className="relative overflow-hidden">
                <span className="absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out"
                  style={{ animation: "slideRight 2s forwards" }}></span>
                <span className="relative z-10 text-black font-semibold uppercase inline-block text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 leading-tight whitespace-nowrap"
                  style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}>
                  DIGITAL TRANSFORMATION EXPERT
                </span>
              </div>
            </div>
          </div>
        </FadeSlide>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <FadeSlide direction="right" delay={0.2}>
            <div ref={textContentRef} className="order-2 lg:order-1 flex flex-col justify-center px-1 sm:px-2 md:px-3"
              style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="w-full">
                <h2 className="font-bold text-foreground leading-tight text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4"
                  style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}>
                  I&apos;m a Global Strategist & Digital Transformation Leader.
                </h2>
                <p className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                  I&apos;m Sheikh Nabeel Entrepreneur, Business Strategist & CEO of EurosHub. With over 7 years of experience, I help founders, startups, and global teams simplify complex operations, implement scalable systems, and grow through digital innovation.
                </p>
                <p className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                  My mission is to empower businesses with the tools and strategies they need to thrive in the digital age. Through strategic consulting, digital transformation, and growth marketing, I&apos;ve helped countless organizations achieve unprecedented success.
                </p>
              </div>
            </div>
          </FadeSlide>

          <FadeSlide direction="left" delay={0.3}>
            <div className="order-1 lg:order-2 flex justify-center items-center px-1 sm:px-2 md:px-3">
              <div className="w-full flex justify-center">
                <div ref={profileImageRef} className="tc-elementor-card group relative" style={{ minHeight: "280px" }}>
                  <Image
                    src="/images/about-profile.jpg"
                    alt="Sheikh Nabeel - Digital Transformation Expert"
                    fill
                    className="object-cover w-full h-full rounded-xl sm:rounded-2xl"
                    sizes="(max-width: 768px) 90vw, 500px"
                    priority
                    quality={95}
                  />
                  <div className="tc-elementor-content"></div>
                </div>
              </div>
            </div>
          </FadeSlide>
        </div>

        <FadeSlide direction="up" delay={0.4}>
          <div className="mb-8 sm:mb-10 md:mb-12"><LogosSection /></div>
        </FadeSlide>

        <FadeSlide direction="up" delay={0.45}>
          <div className="mb-8 sm:mb-10 md:mb-12"><GallerySection /></div>
        </FadeSlide>

        {/* TECHNOLOGIES & PLATFORMS - Full Carousel (matching Testimonials page) */}
        <FadeSlide direction="up" delay={0.5}>
          <div className="relative py-12">
            {/* Header with sliding teal bar */}
            <div className="text-center mb-12 lg:mb-16">
              <h2
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase text-foreground mb-6 leading-tight"
                style={{ fontFamily: '"Century Gothic", Inter, sans-serif', letterSpacing: "0.02em" }}
              >
                TECHNOLOGIES & <span className="text-[#0fb8af]">PLATFORMS</span>
              </h2>

              <div className="relative inline-block mx-auto">
                <span
                  className="absolute top-0 left-0 h-full bg-[#0fb8af] inline-block"
                  style={{ width: "0%", animation: "slideRight 2s forwards" }}
                ></span>
                <span
                  className="relative z-10 text-black text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase px-3 sm:px-4 lg:px-6 py-1 sm:py-2"
                  style={{ fontFamily: '"Century Gothic", Inter, sans-serif', letterSpacing: "0.05em" }}
                >
                  MY EXPERTISE TOOLKIT
                </span>
              </div>
            </div>

            {/* Carousel */}
            <div
              className="relative max-w-5xl mx-auto"
              onMouseEnter={() => !isTouchDevice && setIsPaused(true)}
              onMouseLeave={() => !isTouchDevice && setIsPaused(false)}
            >
              <div className="bg-gray-dark rounded-lg p-6 sm:p-8 lg:p-12 relative border border-gray-600 hover:border-[#0fb8af] transition-all duration-300 overflow-hidden">
                {/* Subtle background pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: "60px 60px",
                  }}
                ></div>

                {/* Responsive grid: 1–3 cards - INFINITE LOOP (no end point) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                  {/* Always show 3 cards by wrapping around */}
                  {[
                    services[(currentIndex + 0) % services.length],
                    services[(currentIndex + 1) % services.length],
                    services[(currentIndex + 2) % services.length],
                  ].map((service, idx) => (
                    <div key={idx} className="glass-card-wrapper">
                      <div className="glass-card relative rounded-lg overflow-hidden" data-text={service.name}>
                        <Image
                          src={service.img}
                          alt={service.name}
                          fill
                          className="object-cover brightness-75 contrast-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={95}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

               {/* Navigation Arrows */}
                       {/* Navigation Arrows */}
                        <button
                            onClick={prevService}
                            className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 bg-[#0FB8AF] p-1.5 sm:p-2 rounded-full hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Previous Service"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>
                        <button
                            onClick={nextService}
                            className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 bg-[#0FB8AF] p-1.5 sm:p-2 rounded-full hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Next Service"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>

                {/* Dot indicators - grouped by 3, infinite loop */}
                <div className="flex justify-center mt-6 sm:mt-8 gap-2 relative z-10">
                  {Array(Math.ceil(services.length / 3)).fill(null).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * 3)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === Math.floor(currentIndex / 3)
                          ? "bg-[#0fb8af] scale-125"
                          : "bg-gray-500 hover:bg-[#0fb8af]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeSlide>

        <FadeSlide direction="up" delay={0.6}>
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <div className="stats-hover-container"><Stats /></div>
          </div>
        </FadeSlide>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .glass-card-wrapper {
          padding: 0 8px;
        }

        .glass-card {
          position: relative !important;
          width: 240px;
          height: 280px;
          background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
        }

        .glass-card::before {
          content: attr(data-text);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 65px;
          background: linear-gradient(transparent, rgba(0,0,0,0.65));
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          text-align: center;
          padding: 0 14px;
          line-height: 1.3;
          letter-spacing: 0.4px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.8);
          z-index: 2;
          pointer-events: none;
        }

        @keyframes slideRight {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 640px) {
          .glass-card { width: 200px; height: 240px; }
          .glass-card::before { font-size: 0.8rem; height: 60px; }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .glass-card { width: 220px; height: 260px; }
        }
      `}</style>

      <style jsx>{`
        .tc-elementor-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          width: 100%;
          margin: 0 auto;
          min-height: 280px;
        }
        .tc-elementor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}