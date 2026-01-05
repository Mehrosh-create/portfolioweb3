'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------------------- FadeSlide ---------------------- */
export const FadeSlide = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------- Professional Capsule Badge ---------------------- */
const SlidingHighlight = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="relative inline-block mx-auto mb-8">
      {/* Solid #0FB8AF Capsule Background */}
      <div className="absolute inset-0 bg-[#0FB8AF] rounded-full" />

      {/* Sliding Reveal (white to teal) */}
      <div
        className="absolute inset-0 bg-white rounded-full origin-left transition-transform duration-1000 ease-out"
        style={{
          transform: inView ? "scaleX(0)" : "scaleX(1)",
        }}
      />

      {/* Text */}
      <span className="relative z-10 block px-8 py-3 text-sm font-bold tracking-widest uppercase text-white font-['Century_Gothic',sans-serif]">
        {text}
      </span>
    </div>
  );
};

/* ---------------------- Types & Data ---------------------- */
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Business Strategy", description: "Strategic consulting & brand development", src: "/images/Business-Strategy-Brand-Consulting-1.jpg" },
  { id: 2, title: "CRM Client Experience", description: "Customer relationship management", src: "/images/CRM-Client-Experience.jpg" },
  { id: 3, title: "Business Systems", description: "Operations & system optimization", src: "/images/Business-Systems-Operations.jpg" },
  { id: 4, title: "Team Management", description: "Account & team coordination", src: "/images/Account-Team-Management1-scaled.jpg" },
  { id: 5, title: "Client Solutions", description: "Comprehensive CRM solutions", src: "/images/CRM-Client-Experience1-scaled.jpg" },
  { id: 6, title: "Digital Marketing", description: "Modern marketing strategies", src: "/images/digital-markiting-3.jpg" },
];

/* ---------------------- Split into two columns ---------------------- */
const leftColumn = galleryItems.filter((_, i) => i % 2 === 0);
const rightColumn = galleryItems.filter((_, i) => i % 2 === 1);
const duplicatedLeft = [...leftColumn, ...leftColumn, ...leftColumn];
const duplicatedRight = [...rightColumn, ...rightColumn, ...rightColumn];

/* ---------------------- Component ---------------------- */
const InsightsSection = () => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background font-['Inter',sans-serif]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <div className="text-left space-y-8 lg:sticky lg:top-24">
            <FadeSlide>
              <SlidingHighlight text="Featured Insights" />
            </FadeSlide>

            <FadeSlide delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground font-['Century_Gothic',sans-serif]">
                From{" "}
                <span className="text-[#0FB8AF]">Concept </span>to Completion
              </h2>
            </FadeSlide>

            <FadeSlide delay={0.4}>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of successful projects and business transformations
              </p>
            </FadeSlide>

            <FadeSlide delay={0.6}>
              <Link
                href="/learning"
                className="inline-block px-8 py-4 bg-[#0FB8AF] text-white font-medium rounded-xl hover:scale-105 transition-transform duration-300 font-['Century_Gothic',sans-serif]"
              >
                Explore More
              </Link>
            </FadeSlide>
          </div>

          {/* Right: Scrolling Gallery Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left Column - Scrolls Down */}
            <div
              className="relative overflow-hidden h-[800px]"
              onMouseEnter={() => setHoveredCol(0)}
              onMouseLeave={() => setHoveredCol(null)}
            >
              <motion.div
                animate={{ y: ["0%", "-33.33%"] }}
                transition={{
                  y: {
                    duration: hoveredCol === 0 ? 80 : 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex flex-col gap-8"
              >
                {duplicatedLeft.map((item, idx) => (
                  <div
                    key={`${item.id}-left-${idx}`}
                    className="relative group rounded-3xl overflow-hidden bg-card text-card-foreground shadow-lg h-[420px]"
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 font-['Century_Gothic',sans-serif]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Scrolls Up */}
            <div
              className="relative overflow-hidden h-[800px]"
              onMouseEnter={() => setHoveredCol(1)}
              onMouseLeave={() => setHoveredCol(null)}
            >
              <motion.div
                animate={{ y: ["-33.33%", "0%"] }}
                transition={{
                  y: {
                    duration: hoveredCol === 1 ? 90 : 45,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex flex-col gap-8"
              >
                {duplicatedRight.map((item, idx) => (
                  <div
                    key={`${item.id}-right-${idx}`}
                    className="relative group rounded-3xl overflow-hidden bg-card text-card-foreground shadow-lg h-[420px]"
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 font-['Century_Gothic',sans-serif]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;