"use client";
import Stats from "@/components/About/Stats";
import GallerySection from "@/components/About/GallerySection";
import { FadeSlide, SlidingHighlight } from "@/components/About/ReusableComponents";
import { InfiniteMovingCards } from "@/ui/infinite-moving-cards";
import Cursor from "@/components/Global/CursorEffect";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";


// UPDATED LOGOS SECTION — FULL-WIDTH DARK #0fb8af + SLIM + ZERO GAPS
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
      {/* UPDATED GRADIENT BACKGROUND FOR LIGHT MODE */}
      {theme === "light" && (
        <div className="absolute inset-0 -z-20">
          <div className="w-full h-full bg-gradient-to-br from-[#0fb8af] via-[#0ea59d] to-[#0d928a]">
            {/* Optional subtle pattern overlay */}
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
            <SlidingHighlight text="TRUSTED BY INDUSTRY LEADERS" />
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              Featured Partnerships & Collaborations
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2 sm:px-3">
              Working with industry leaders to deliver exceptional results and drive digital transformation
            </p>
          </div>

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                className="flex justify-center items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
              >
               <div className="relative w-full max-w-[110px] xs:max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] h-auto">
                  <div className="relative w-full h-auto aspect-[300/115]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className={`object-contain transition-all duration-500 drop-shadow-md sm:drop-shadow-lg hover:drop-shadow-xl ${
                        theme === "light" 
                          ? "brightness-0 invert-0"  // Changed from "invert" to "invert-0"
                          : "grayscale hover:grayscale-0"
                      }`}
                      sizes="(max-width: 280px) 40vw, (max-width: 640px) 45vw, (max-width: 768px) 45vw, 22vw"
                      quality={95}
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Add hoveredNav state (if you still need it)


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
  useTheme();
  const profileImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


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


  // Handle responsive image card height
  useEffect(() => {
    const updateHeights = () => {
      const viewportWidth = window.innerWidth;


      let cardHeight = "500px";
      let cardMaxWidth = "580px";


      if (viewportWidth <= 320) {
        cardHeight = "280px";
        cardMaxWidth = "280px";
      } else if (viewportWidth <= 375) {
        cardHeight = "320px";
        cardMaxWidth = "320px";
      } else if (viewportWidth <= 414) {
        cardHeight = "350px";
        cardMaxWidth = "350px";
      } else if (viewportWidth <= 768) {
        cardHeight = "380px";
        cardMaxWidth = "400px";
      } else if (viewportWidth <= 880) {
        cardHeight = "420px";
        cardMaxWidth = "450px";
      } else if (viewportWidth <= 1024) {
        cardHeight = "440px";
        cardMaxWidth = "480px";
      } else if (viewportWidth <= 1366) {
        cardHeight = "460px";
        cardMaxWidth = "500px";
      }


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
      <div className="flex-grow w-full max-w-full mx-auto px-0 py-3 sm:py-5 md:py-7 lg:py-9 xl:py-11">
       {/* HERO SECTION */}
<FadeSlide direction="up" delay={0.1}>
  <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6 lg:px-8">
    <h1
      className="font-black uppercase text-foreground leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 px-1"
      style={{
        fontFamily: '"Century Gothic", Inter, sans-serif',
        letterSpacing: "0.02em",
        wordWrap: "break-word",
        overflowWrap: "break-word",
      }}
    >
      I <span className="text-[#0fb8af]">TRANSFORM</span> BUSINESSES
    </h1>

    <div className="relative inline-block mx-auto max-w-full">
      <div className="relative overflow-hidden">
        <span
          className="absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out"
          style={{
            animation: "slideRight 2s forwards",
          }}
        ></span>

        <span
          className="relative z-10 text-black font-semibold uppercase inline-block text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 leading-tight whitespace-nowrap"
          style={{
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          DIGITAL TRANSFORMATION EXPERT
        </span>
      </div>
    </div>
  </div>
</FadeSlide>


        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6 lg:px-8">
          {/* TEXT CONTENT */}
          <FadeSlide direction="right" delay={0.2}>
            <div
              ref={textContentRef}
              className="order-2 lg:order-1 flex flex-col justify-center px-1 sm:px-2 md:px-3"
              style={{
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div className="w-full">
                <h2
                  className="font-bold text-foreground leading-tight text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4"
                  style={{
                    fontFamily: '"Century Gothic", Inter, sans-serif',
                  }}
                >
                  I&apos;m a Global Strategist & Digital Transformation Leader.
                </h2>
                <p
                  className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
                  style={{
                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                  }}
                >
                  I&apos;m Sheikh Nabeel Entrepreneur, Business Strategist & CEO
                  of EurosHub. With over 7 years of experience, I help founders,
                  startups, and global teams simplify complex operations, implement
                  scalable systems, and grow through digital innovation.
                </p>
                <p
                  className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                  }}
                >
                  My mission is to empower businesses with the tools and strategies
                  they need to thrive in the digital age. Through strategic
                  consulting, digital transformation, and growth marketing, I&apos;ve
                  helped countless organizations achieve unprecedented success.
                </p>
              </div>
            </div>
          </FadeSlide>


          {/* PROFILE IMAGE CARD - WITH HOVER REVEAL EFFECT */}
         <FadeSlide direction="left" delay={0.3}>
  <div className="order-1 lg:order-2 flex justify-center items-center px-1 sm:px-2 md:px-3">
    <div className="w-full flex justify-center">
      <div
        ref={profileImageRef}
        className="tc-elementor-card group"
        style={{
          minHeight: "280px",
        }}
      >
        {/* Use Image component instead of background-image */}
        <Image
          src="/images/about-profile.jpg" // <-- updated image path
          alt="Profile Image"
          fill
          className="object-cover w-full h-full rounded-xl sm:rounded-2xl"
          sizes="(max-width: 768px) 90vw, 500px"
          quality={95}
          loading="lazy"
        />


        {/* Content container - shows on hover */}
        <div className="tc-elementor-content">
       
        </div>
      </div>
    </div>
  </div>
</FadeSlide>
        </div>


        {/* LOGOS SECTION */}
        <FadeSlide direction="up" delay={0.4}>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <LogosSection />
          </div>
        </FadeSlide>


        {/* GALLERY SECTION */}
        <FadeSlide direction="up" delay={0.45}>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <GallerySection />
          </div>
        </FadeSlide>


        {/* MOVING CARDS SECTION */}
        <FadeSlide direction="up" delay={0.5}>
          <div className="relative mb-8 sm:mb-10 md:mb-12">
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-4 sm:mb-6">
              <h2
                className="font-bold text-foreground text-center uppercase leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={{
                  fontFamily: '"Century Gothic", Inter, sans-serif',
                  letterSpacing: "0.05em",
                }}
              >
                TECHNOLOGIES & PLATFORMS
              </h2>
            </div>


            <div className="relative overflow-hidden mx-1 sm:mx-2 md:mx-3 lg:mx-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0fb8af]/30 via-[#0fb8af]/50 to-[#0fb8af]/30 opacity-80 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-b from-background/90 via-background/80 to-background/90 backdrop-blur-sm border-y border-[#0fb8af]/10 dark:border-[#0fb8af]/20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#0fb8af]/10 to-transparent animate-shimmer"></div>
                </div>


                <div className="relative py-2 sm:py-3 md:py-4" onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
                  <InfiniteMovingCards items={services} direction="right" speed="slow" />
                  <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 md:h-4 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 md:h-4 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
                </div>
              </div>
              <div className="absolute top-1 sm:top-2 left-2 sm:left-4 w-1 h-1 rounded-full bg-[#0fb8af] animate-ping opacity-30"></div>
              <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 w-1 h-1 rounded-full bg-[#0fb8af] animate-ping opacity-30" style={{ animationDelay: "0.5s" }}></div>
            </div>


            {showCursor && <Cursor mousePos={mousePos} isDragging={isDragging} showCursor={showCursor} />}
          </div>
        </FadeSlide>


        {/* STATS SECTION with hover animation */}
        <FadeSlide direction="up" delay={0.6}>
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <div className="stats-hover-container">
              <Stats />
            </div>
          </div>
        </FadeSlide>
      </div>


      {/* ALL STYLES */}
      <style jsx global>{`
        .infinite-moving-cards-item {
          padding: 0.5rem 0.75rem !important;
          font-size: 0.75rem !important;
          border-radius: 0.375rem !important;
          border: 1px solid #e5e7eb !important;
          background-color: white !important;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
          transition: all 300ms ease !important;
        }
        .dark .infinite-moving-cards-item {
          border-color: #374151 !important;
          background-color: #1f2937 !important;
        }
        .infinite-moving-cards-item:hover {
          border-color: #0fb8af !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          transform: scale(1.02) !important;
        }
        @media (min-width: 640px) {
          .infinite-moving-cards-item {
            font-size: 0.875rem !important;
          }
        }


        /* Statistics hover animation */
        .stats-hover-container {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          transition: all 0.3s ease;
        }


        .stats-hover-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(15, 184, 175, 0.2);
        }


        .stats-hover-container:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(15, 184, 175, 0.1), transparent);
          animation: slideLeftToRight 1.5s ease-in-out;
        }


        /* Stats item hover effect */
        .stat-item {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }


        .stat-item:hover {
          background-color: rgba(15, 184, 175, 0.05);
        }


        .stat-item:hover .stat-number {
          color: #0fb8af;
          transform: scale(1.05);
          transition: all 0.3s ease;
        }


        .stat-item:hover .stat-label {
          color: #0fb8af;
          transition: all 0.3s ease;
        }


        .stat-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0fb8af;
          transition: width 0.3s ease;
        }


        .stat-item:hover::after {
          width: 100%;
        }


        /* Navigation hover effects */
        .nav-item {
          position: relative;
          overflow: hidden;
        }


        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0fb8af;
          transition: width 0.3s ease;
        }


        .nav-item:hover::after {
          width: 65%;
        }


        .nav-item.active::after {
          width: 65%;
          background-color: #0fb8af;
        }


        /* Animation keyframes */
        @keyframes slideLeftToRight {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }


        @keyframes slideRight {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }


        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(15deg);
          }
          100% {
            transform: translateX(100%) rotate(15deg);
          }
        }


        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }


        /* Accent stroke animation - from center outward */
        @keyframes expandFromCenter {
          0% {
            width: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          100% {
            width: 50px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>


      <style jsx>{`
        .tc-elementor-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          background-size: cover;
          backgroundPosition: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          width: 100%;
          margin: 0 auto;
          min-height: 280px;
        }


        .tc-elementor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
        }


        /* Fade overlay - appears on hover */
        .tc-elementor-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
          transition: all 400ms ease;
          opacity: 0;
          z-index: 1;
        }


        .tc-elementor-card:hover .tc-elementor-fade-overlay {
          opacity: 1;
        }


        /* Content container - reveals on hover */
        .tc-elementor-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          text-align: center;
          color: white;
          z-index: 2;
          transition: all 400ms ease;
          opacity: 0;
          transform: translateY(20px);
        }


        .tc-elementor-card:hover .tc-elementor-content {
          opacity: 1;
          transform: translateY(0);
        }


        .tc-elementor-speaker-name {
          font-size: 20px;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 10px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          letter-spacing: 1px;
          font-family: "Bebas Neue", Arial, sans-serif;
          transition: all 300ms ease;
        }


        /* Single accent stroke that appears on hover */
        .tc-elementor-content::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #0fb8af;
          border-radius: 2px;
          transition: all 400ms ease;
          z-index: 3;
        }


        .tc-elementor-card:hover .tc-elementor-content::after {
          width: 50px;
          animation: expandFromCenter 0.4s ease-out forwards;
        }


        /* Responsive adjustments */
        @media (max-width: 320px) {
          .tc-elementor-card {
            border-radius: 12px;
          }
          .tc-elementor-speaker-name {
            font-size: 18px;
          }
          .tc-elementor-content {
            padding: 16px;
          }
          .tc-elementor-fade-overlay {
            height: 120px;
          }
          .tc-elementor-card:hover .tc-elementor-content::after {
            width: 40px;
          }
        }


        @media (min-width: 321px) and (max-width: 375px) {
          .tc-elementor-speaker-name {
            font-size: 19px;
          }
          .tc-elementor-fade-overlay {
            height: 130px;
          }
        }


        @media (min-width: 376px) and (max-width: 414px) {
          .tc-elementor-speaker-name {
            font-size: 20px;
          }
        }


        @media (min-width: 768px) and (max-width: 1024px) {
          .tc-elementor-card {
            border-radius: 20px;
          }
          .tc-elementor-speaker-name {
            font-size: 22px;
          }
          .tc-elementor-fade-overlay {
            height: 160px;
          }
          .tc-elementor-card:hover .tc-elementor-content::after {
            width: 60px;
          }
        }


        @media (min-width: 1025px) {
          .tc-elementor-card {
            border-radius: 24px;
          }
          .tc-elementor-speaker-name {
            font-size: 24px;
          }
          .tc-elementor-fade-overlay {
            height: 180px;
          }
          .tc-elementor-card:hover .tc-elementor-content::after {
            width: 70px;
          }
        }
      `}</style>


      <style jsx global>{`
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-slide-left-to-right {
          animation: slideLeftToRight 1.5s ease-in-out;
        }


        /* Specific device fixes */
        @media (max-width: 320px) {
          .about-page {
            padding-top: 12px;
          }
          .logos-section .grid {
            gap: 12px;
          }
          .logos-section img {
            max-width: 100px;
          }
        }


        /* Galaxy Z Fold5 specific */
        @media (min-width: 700px) and (max-width: 880px) {
          .tc-elementor-card {
            max-width: 400px !important;
          }
        }


        /* Nest Hub (1024px) */
        @media (min-width: 1024px) and (max-width: 1030px) {
          .tc-elementor-card {
            max-width: 480px !important;
          }
        }


        /* iPad Pro 12.9" */
        @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
          .tc-elementor-card {
            max-width: 500px !important;
          }
        }


        /* Samsung Galaxy S8+ */
        @media (min-width: 360px) and (max-width: 740px) and (orientation: portrait) {
          .tc-elementor-card {
            max-width: 320px !important;
          }
        }
      `}</style>
    </div>
  );
}