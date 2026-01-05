"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile/touch devices (no mouse = no custom cursor)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Hide the default browser cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small dot follows instantly
      gsap.set(cursor, { x: mouseX, y: mouseY });

      // Large ring follows smoothly with nice lag
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <>
      {/* Small sharp dot - instant follower */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-[#0fb8af] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* Large smooth trailing ring - constant size and style */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border-2 border-[#0fb8af]"
        style={{ backgroundColor: "transparent" }}
      />
    </>
  );
}