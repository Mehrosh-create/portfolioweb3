// src/components/Global/Navbar.tsx - UPDATED
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#151515]/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0"
              onClick={closeMenu}
            >
              <span
                className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-wider"
                style={{
                  fontFamily: '"Bebas Neue", Arial, sans-serif',
                  letterSpacing: "0.1em",
                }}
              >
                SHEIKH NABEEL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm lg:text-base font-medium uppercase tracking-wider transition-colors ${pathname === item.href
                    ? "text-[#0fb8af]"
                    : "text-white hover:text-[#0fb8af]"
                    }`}
                  style={{
                    fontFamily: '"Bebas Neue", Arial, sans-serif',
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-white hover:text-[#0fb8af] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#151515]/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block text-base font-medium uppercase tracking-wider transition-colors ${pathname === item.href
                  ? "text-[#0fb8af]"
                  : "text-white hover:text-[#0fb8af]"
                  }`}
                style={{
                  fontFamily: '"Bebas Neue", Arial, sans-serif',
                  letterSpacing: "0.05em",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;