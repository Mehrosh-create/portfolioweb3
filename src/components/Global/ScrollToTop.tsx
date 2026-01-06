"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Using Lucide instead of Font Awesome

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - viewportHeight;

      setIsVisible(scrolled > 300);

      if (fullHeight > 0) {
        const percent = Math.min((scrolled / fullHeight) * 100, 100);
        setProgress(percent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  // Water fill: 100% = full (top), 0% = empty (bottom)
  const waterHeight = progress; // 0 to 100%

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-10 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {/* Up Arrow - Using Lucide */}
      <ArrowUp className="h-7 w-7 text-white relative z-10" strokeWidth={3} />

      {/* Water Fill Container */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        style={{
          clipPath: `inset(${100 - waterHeight}% 0 0 0)`, // Crops from top, reveals water as progress increases
        }}
      >
        <div className="absolute inset-0 bg-[#0FB8AF] opacity-90">
          {/* Back wave layer */}
          <svg
            className="absolute bottom-0 left-0 w-full h-32 animate-wave-back"
            viewBox="0 0 560 80"
            preserveAspectRatio="none"
          >
            <use xlinkHref="#wave" />
          </svg>

          {/* Front wave layer */}
          <svg
            className="absolute bottom-0 left-0 w-full h-32 animate-wave-front"
            viewBox="0 0 560 80"
            preserveAspectRatio="none"
          >
            <use xlinkHref="#wave" />
          </svg>
        </div>
      </div>

      {/* Hidden Wave Definition */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wave" x="0" y="0" width="560" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M0,40 Q140,0 280,40 T560,40 L560,80 L0,80 Z
                 M0,40 Q140,80 280,40 T560,40"
              fill="none"
              stroke="#0FB8AF"
              strokeWidth="20"
              opacity="0.6"
            />
            <path
              d="M0,40 Q140,20 280,40 T560,40"
              fill="none"
              stroke="#0FB8AF"
              strokeWidth="15"
              opacity="0.8"
            />
          </pattern>
        </defs>
        <symbol id="wave">
          <rect width="560" height="80" fill="url(#wave)" />
        </symbol>
      </svg>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave-back {
          0% { transform: translateX(0); }
          100% { transform: translateX(-560px); }
        }
        @keyframes wave-front {
          0% { transform: translateX(0); }
          100% { transform: translateX(-560px); }
        }
        .animate-wave-back {
          animation: wave-back 14s linear infinite;
        }
        .animate-wave-front {
          animation: wave-front 9s linear infinite;
        }
      `}</style>
    </button>
  );
}