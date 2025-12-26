"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import FadeSlide from "@/components/Common/FadeSlide";

const CounterSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const cards = [
    {
      name: "VICE",
      description: "builds businesses",
      fullDescription: "I streamline and optimize business operations for maximum efficiency, scalability,and sustainable growth through strategic planning.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      
    },
    {
      name: "FRIENDS",
      description: "creates meaningful IP",
      fullDescription: "I implement intelligent automation systems and create valuable intellectual property that drives innovation.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
     
    },
    {
      name: "ACT",
      description: "day trades attention",
      fullDescription: "From platform strategy to digital marketing, I help businesses dominate where attention actually lives.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
     
    }
  ];

  return (
    <section className={`py-12 sm:py-16 ${theme === 'dark' ? 'bg-[#151515]' : 'bg-white'} relative overflow-hidden px-4 sm:px-6 lg:px-8`}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: theme === 'dark'
            ? 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Updated Quote section - Using the same font family as Sidebar */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeSlide delay={0.1}>
            <h2
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} leading-tight mb-6 sm:mb-8 px-4`}
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
                lineHeight: 1.3,
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 100, // Changed to match Sidebar (100 instead of 700)
                textTransform: "uppercase",
                letterSpacing: "0.02em", // Matches Sidebar
              }}
            >
              &ldquo;The secret to success in social media is to <br className="hidden sm:block" />
              <span className="block text-center mt-2 sm:mt-0">think and act like a member first,</span>
              <span className="block text-center mt-2">and a marketer second.&rdquo;</span>
            </h2>
          </FadeSlide>

          {/* Sliding background highlight - KEEPING "SHEIKH NABEEL" FONT THE SAME */}
          <div className="relative inline-block mx-auto">
            <span
              className={`absolute top-0 left-0 h-full bg-[#0fb8af] ${inView ? "animate-slideRight" : ""
                }`}
            ></span>

            <span
              className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 inline-block text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 700, // Keeping this as 700 (bold) like before
                letterSpacing: "0.08em",
              }}
            >
              SHEIKH NABEEL
            </span>
          </div>
        </div>

        {/* Cards Grid - Updated with hover description and mouse pointer cursor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.name}
              className={`group inspire-card relative overflow-hidden rounded-lg transition-all duration-500 cursor-default h-[320px] sm:h-[360px] lg:h-[400px] ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                }`}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 group-hover:to-black/90 transition-all duration-500"></div>

              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                 
                  mixBlendMode: 'overlay'
                }}
              ></div>

              {/* Content Container */}
              <div className="inspire-card-content absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                {/* Header and Description - Always visible */}
                <div className="mb-4">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-white'} mb-2 uppercase tracking-wide group-hover:text-[#0fb8af] transition-colors duration-300`}
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                      fontWeight: 900,
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {card.name}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'} transition-colors duration-300 group-hover:text-white`}
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Border Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db] mb-4 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Full Description - Reveals on hover */}
                <div className="overflow-hidden">
                  <div
                    className="inspire-card-description text-xs sm:text-sm text-white/90 leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                      lineHeight: '1.6',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {card.fullDescription}
                  </div>
                </div>

                {/* Removed the hover indicator/arrow section */}
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute top-0 -inset-x-full h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
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