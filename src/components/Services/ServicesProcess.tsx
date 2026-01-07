// components/services/ServicesProcess.tsx
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Layout, Code, Rocket, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import { useRef } from 'react';

const ServicesProcess = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const processes = [
    {
      step: 1,
      icon: Search,
      title: "Discovery & Analysis",
      description: "We deeply understand your business goals, challenges, and technical requirements.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 2,
      icon: Layout,
      title: "Planning & Design",
      description: "Create detailed roadmaps, wireframes, and architecture for your solution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 3,
      icon: Code,
      title: "Development & Implementation",
      description: "Build robust solutions with clean code and modern technologies.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Smooth deployment with zero downtime and thorough testing.",
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 5,
      icon: CheckCircle,
      title: "Support & Optimization",
      description: "Continuous monitoring, optimization, and support for ongoing success.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* Background gradient blur effect - matching the reference section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0fb8af]/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1fc8db]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-4">
            <CheckCircle className="w-4 h-4 text-[#0fb8af]" />
            <span className="text-[#0fb8af] text-sm font-medium tracking-wide">WORKFLOW</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Our <span className="text-[#0fb8af]">Structured</span> Process
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            A methodical approach ensuring quality and transparency at every project stage
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line with proper distance */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block">
            <div className={`h-full w-full ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`} />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0fb8af] flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{process.step}</span>
                    </div>
                  </div>

                  {/* Compact Content Card */}
                  <div className={`flex-1 w-full max-w-md ${
                    isEven ? "lg:pr-6" : "lg:pl-6"
                  }`}>
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className={`rounded-xl p-6 ${
                        isDark 
                          ? "bg-gray-900/60 border border-gray-800" 
                          : "bg-white border border-gray-200 shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0fb8af]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#0fb8af]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{process.title}</h3>
                          <span className="text-xs font-medium text-[#0fb8af]">STEP {process.step}</span>
                        </div>
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {process.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Professional Image */}
                  <div className={`flex-1 w-full max-w-md ${
                    isEven ? "lg:pl-6" : "lg:pr-6"
                  }`}>
                    <div className="relative h-56 rounded-lg overflow-hidden">
                      <Image
                        src={process.image}
                        alt={process.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0fb8af]" />
              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Discovery Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0fb8af]/70" />
              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Planning Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0fb8af]/50" />
              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Execution Phase</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcess;