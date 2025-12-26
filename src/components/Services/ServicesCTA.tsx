// components/services/ServicesCTA.tsx
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const ServicesCTA = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section 
      className="relative py-16 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#0a0a0a' : '#f9fafb',
      }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent"
        style={{
          backgroundImage: isDark 
            ? 'linear-gradient(135deg, rgba(15,184,175,0.03) 0%, rgba(0,0,0,0) 50%, rgba(15,184,175,0.02) 100%)'
            : 'linear-gradient(135deg, rgba(15,184,175,0.02) 0%, rgba(255,255,255,0) 50%, rgba(15,184,175,0.01) 100%)'
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%230fb8af' fill-opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
              style={{
                backgroundColor: isDark ? 'rgba(15, 184, 175, 0.1)' : 'rgba(15, 184, 175, 0.08)',
                borderColor: isDark ? 'rgba(15, 184, 175, 0.2)' : 'rgba(15, 184, 175, 0.15)',
              }}
            >
              <span 
                className="text-xs font-medium tracking-wider uppercase"
                style={{ color: '#0FB8AF' }}
              >
                Get Started
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: isDark
                    ? 'linear-gradient(to right, #f8fafc, #0FB8AF)'
                    : 'linear-gradient(to right, #1f2937, #0FB8AF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Elevate Your Business Today
              </span>
            </h2>
          </div>

          {/* Description */}
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: isDark ? 'rgba(255, 255, 255, 0.75)' : 'rgba(55, 65, 81, 0.9)'
            }}
          >
            Transform your operations with our comprehensive service solutions and expert guidance. Join industry leaders who trust our proven process.
          </p>

          {/* Button Group - Compact - UPDATED WITH ANIMATIONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {/* Primary Button - Smaller - UPDATED */}
            <Link href="/contact" className="group">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 font-semibold text-sm rounded-full transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
                style={{
                  backgroundColor: '#0FB8AF',
                  color: isDark ? '#000000' : '#ffffff',
                  boxShadow: isDark 
                    ? '0 20px 25px -5px rgba(15, 184, 175, 0.1), 0 10px 10px -5px rgba(15, 184, 175, 0.04)'
                    : '0 10px 15px -3px rgba(15, 184, 175, 0.1), 0 4px 6px -2px rgba(15, 184, 175, 0.05)'
                }}
              >
                <span className="relative z-10">Start Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>
            </Link>

            {/* Secondary Button - Smaller - UPDATED */}
            <Link href="/about" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-[#0fb8af] text-[#0fb8af] text-sm font-semibold uppercase tracking-wider hover:bg-[#0fb8af] hover:text-black transition-all duration-300 rounded-full relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-[#0fb8af] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background accents */}
      <div 
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
        style={{
          backgroundColor: '#0FB8AF',
          opacity: isDark ? 0.03 : 0.01
        }}
      />
      <div 
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
        style={{
          backgroundColor: '#0FB8AF',
          opacity: isDark ? 0.03 : 0.01
        }}
      />

      {/* Add animation styles */}
      <style jsx>{`
        /* Secondary button hover text color change */
        .group:hover button[class*="border-[#0fb8af]"] {
          color: ${isDark ? '#ffffff' : '#000000'} !important;
        }
        
        /* Secondary button hover border color change */
        .group:hover button[class*="border-[#0fb8af]"] {
          border-color: #70bdca !important;
          box-shadow: 4px 5px 17px -4px rgba(15, 184, 175, 0.5) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesCTA;