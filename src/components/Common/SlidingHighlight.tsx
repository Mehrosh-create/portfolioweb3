// src/components/Common/SlidingHighlight.tsx
"use client";

import { useInView } from "react-intersection-observer";

export const SlidingHighlight = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="relative inline-block mx-auto mb-6 overflow-hidden"
    >
      <span
        className={`absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out ${
          inView ? "w-full" : "w-0"
        }`}
      ></span>

      <span
        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-4 py-2 inline-block text-base"
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