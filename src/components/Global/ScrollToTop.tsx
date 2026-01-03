"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className="
        fixed
        bottom-10
        right-6
        z-50
        flex
        items-center
        justify-center
        gap-2
        size-12
        rounded-full
        border
        border-neutral-200
        bg-secondary-0
        text-secondary-foreground-0
        transition
        duration-200
        ease-in-out
        hover:bg-secondary-1
        active:bg-secondary-2
        dark:border-neutral-700
      "
    >
      <span className="sr-only">Go up</span>

      <svg
        className="size-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 4l-7 7h4v9h6v-9h4z" />
      </svg>
    </button>
  );
}
