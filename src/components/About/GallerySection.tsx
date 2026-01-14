'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

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
      <div className="absolute inset-0 bg-[#0FB8AF] rounded-full" />
      <div
        className="absolute inset-0 bg-white rounded-full origin-left transition-transform duration-1000 ease-out"
        style={{
          transform: inView ? "scaleX(0)" : "scaleX(1)",
        }}
      />
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

const leftColumn = galleryItems.filter((_, i) => i % 2 === 0);
const rightColumn = galleryItems.filter((_, i) => i % 2 === 1);
const duplicatedLeft = [...leftColumn, ...leftColumn, ...leftColumn];
const duplicatedRight = [...rightColumn, ...rightColumn, ...rightColumn];

/* ---------------------- Component ---------------------- */
const InsightsSection = () => {
  const themeContext = useTheme();
  const theme = themeContext.theme;
  const isDark = theme === "dark";

  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background font-['Inter',sans-serif]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <div className="relative text-left space-y-10 lg:sticky lg:top-20">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

            <div className="relative z-0">
              <FadeSlide>
                <SlidingHighlight text="Featured Insights" />
              </FadeSlide>

              <FadeSlide delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-foreground font-['Century_Gothic',sans-serif]">
                  From{" "}
                  <span className="text-[#0FB8AF]">Concept</span> to Completion
                </h2>
              </FadeSlide>

              <FadeSlide delay={0.4}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mt-8 lg:mt-10">
                  Explore our portfolio of successful projects and business transformations.
                  We help companies turn early ideas into scalable, market-leading solutions through strategy, operations, and digital innovation.
                </p>
              </FadeSlide>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Gallery Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left Column - Scrolls Down */}
            <div className="relative overflow-hidden h-[800px] rounded-2xl">
              {/* Strong top fade - always black based */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 sm:h-40 z-20 pointer-events-none bg-gradient-to-b ${isDark ? "from-black via-black/65" : "from-white via-white/65"
                  } via-40% to-transparent`}
              />

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
                onMouseEnter={() => setHoveredCol(0)}
                onMouseLeave={() => setHoveredCol(null)}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90" />
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

              {/* Strong bottom fade - same style as top */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-32 sm:h-40 z-20 pointer-events-none bg-gradient-to-t ${isDark ? "from-black via-black/65" : "from-white via-white/65"
                  } via-40% to-transparent`}
              />
            </div>

            {/* Right Column - Scrolls Up */}
            <div className="relative overflow-hidden h-[800px] rounded-2xl">
              {/* Strong top fade - always black based */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 sm:h-40 z-20 pointer-events-none bg-gradient-to-b ${isDark ? "from-black via-black/65" : "from-white via-white/65"
                  } via-40% to-transparent`}
              />

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
                onMouseEnter={() => setHoveredCol(1)}
                onMouseLeave={() => setHoveredCol(null)}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90" />
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

              {/* Strong bottom fade - same style as top */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-32 sm:h-40 z-20 pointer-events-none bg-gradient-to-t ${isDark ? "from-black via-black/65" : "from-white via-white/65"
                  } via-40% to-transparent`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;