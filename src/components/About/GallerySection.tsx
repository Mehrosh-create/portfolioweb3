// components/About/GallerySection.tsxxxx
'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// FadeSlide animation component
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

// Sliding highlights labels with animation behind text
const SlidingHighlight = ({ text }: { text: string }) => {
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
        className="relative z-10 text-black dark:text-white font-bold tracking-wider uppercase whitespace-nowrap px-3 sm:px-4 py-1 sm:py-2 inline-block text-sm sm:text-base"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        {text}
      </span>
    </div>
  );
};

// HoveredNav state with 65% width adjustment
const HoveredNav = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, width: 0 });
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    setHovered(true);
    setMousePosition({
      x: rect.left,
      width: rect.width * 0.65, // 65% width adjustment
    });
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  return (
    <nav className="relative">
      <ul className="flex space-x-8">
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <li
            key={item}
            className="relative py-2 px-4 cursor-pointer text-foreground"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item}
            {hovered && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#0fb8af]"
                initial={{ width: 0 }}
                animate={{ width: mousePosition.width }}
                transition={{ duration: 0.3 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface GalleryItem {
  id: number;
  href: string;
  title: string;
  src: string;
  width: number;
  height: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    href: "/images/Business-Strategy-Brand-Consulting-1.jpg",
    title: "BUSINESS STRATEGY",
    src: "/images/Business-Strategy-Brand-Consulting-1.jpg",
    width: 900,
    height: 900
  },
  {
    id: 2,
    href: "/images/CRM-Client-Experience.jpg",
    title: "CRM CLIENT EXPERIENCE",
    src: "/images/CRM-Client-Experience.jpg",
    width: 900,
    height: 900
  },
  {
    id: 3,
    href: "/images/Business-Systems-Operations.jpg",
    title: "BUSINESS SYSTEMS OPERATIONS",
    src: "/images/Business-Systems-Operations.jpg",
    width: 900,
    height: 900
  },
  {
    id: 4,
    href: "/images/Account-Team-Management1-scaled.jpg",
    title: "ACCOUNT TEAM MANAGEMENT",
    src: "/images/Account-Team-Management1-scaled.jpg",
    width: 2560,
    height: 2560
  },
  {
    id: 5,
    href: "/images/CRM-Client-Experience1-scaled.jpg",
    title: "CRM CLIENT",
    src: "/images/CRM-Client-Experience1-scaled.jpg",
    width: 2560,
    height: 2560
  },
  {
    id: 6,
    href: "/images/digital-markiting-3.jpg",
    title: "DIGITAL MARKETING",
    src: "/images/digital-markiting-3.jpg",
    width: 900,
    height: 900
  }
];

const GallerySection = () => {
  const openLightbox = (index: number) => {
    console.log("Open lightbox for item:", index);
  };

  // Statistics hover animation state
  const [] = useState<number | null>(null);

  return (
    <FadeSlide direction="up" delay={0.5}>
      <section className="gallery-section py-12 md:py-16 lg:py-20 bg-background">
          <div className="text-center mb-12">
            <SlidingHighlight text="OUR EXPERTISE" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Visual Showcase of Our Work
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore our portfolio of successful projects and business transformations
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Column - Single Large Image */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-lg group cursor-pointer"
                   onClick={() => openLightbox(0)}>
                <div 
                  className="aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${galleryItems[0].src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{galleryItems[0].title}</h3>
                    <div className="w-12 h-1 bg-[#0fb8af] mb-3"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - 2x2 Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
              {galleryItems.slice(1, 5).map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openLightbox(index + 1)}
                >
                  <div 
                    className="aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.src}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base font-bold mb-1">{item.title}</h3>
                      <div className="w-8 h-1 bg-[#0fb8af]"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

         
        </section>
    </FadeSlide>
  );
};

export default GallerySection;
export { HoveredNav, SlidingHighlight };