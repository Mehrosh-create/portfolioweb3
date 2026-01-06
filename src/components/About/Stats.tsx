// components/Homepage/CounterSection.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const yearsOfExperience = 25; // Change to your desired number

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom smooth counting animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; // 3 seconds
    const steps = 60;
    const increment = yearsOfExperience / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= yearsOfExperience) {
        setCount(yearsOfExperience);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, yearsOfExperience]);

  return (
    <section
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#151515]" : "bg-white"
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === "dark" ? "bg-[#0FB8AF]" : "bg-[#0FB8AF]/20"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            theme === "dark" ? "bg-[#0da39a]" : "bg-[#0da39a]/20"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Counter Card */}
          <div className="order-2 lg:order-1">
            <div
              className={`year-of-expariance-wrapper p-12 rounded-2xl backdrop-blur-md border shadow-2xl transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                theme === "dark"
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white/70 border-gray-200"
              }`}
              style={{
                background: theme === "dark" ? "rgba(30, 30, 30, 0.4)" : "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="year-expariance-wrap text-center lg:text-left">
                <h2 className="year-number mb-4 flex items-end justify-center lg:justify-start gap-2">
                  {/* Animated Number */}
                  <span className="inline-block text-8xl lg:text-9xl font-bold text-[#0FB8AF] tabular-nums">
                    <span className="inline-block min-w-[180px] text-right">
                      {count}
                    </span>
                  </span>
                  <span className="text-6xl lg:text-8xl font-bold text-[#0FB8AF] pb-4">
                    +
                  </span>
                </h2>

                <h3
                  className={`year-title text-4xl lg:text-5xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Years Of <br className="hidden sm:block" /> Experience
                </h3>

                <p
                  className={`year-para text-lg leading-relaxed max-w-lg ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src="https://img.freepik.com/premium-photo/portrait-mature-business-man-smile-office-with-corporate-confidence-pride-professional-broker-australia-face-happy-ceo-manager-financial-trader-with-experience-consulting_590464-209091.jpg"
              alt="Experienced Business Professional"
              className="rounded-xl object-cover w-full max-w-md h-96 shadow-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;