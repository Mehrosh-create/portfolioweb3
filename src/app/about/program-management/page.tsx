"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Settings } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProgramManagementPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Portfolio Planning",
      description: "Strategic portfolio planning and alignment with business objectives for maximum ROI and impact.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=85"
    },
    {
      title: "Strategic Alignment",
      description: "Aligning programs with organizational strategy and ensuring all initiatives drive business value.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=85"
    },
    {
      title: "Cross-Team Coordination",
      description: "Seamless coordination across multiple teams and departments for unified program execution.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=85"
    },
    {
      title: "Budget Oversight",
      description: "Comprehensive budget management and financial oversight across all program components.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=85"
    },
    {
      title: "Performance Metrics",
      description: "Establishing and tracking key performance indicators for program success measurement.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=85"
    },
    {
      title: "Change Management",
      description: "Managing organizational change and ensuring smooth transition during program implementation.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=85"
    },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* HERO */}
      <header className="relative h-[68vh] min-h-[580px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=85"
          alt="Enterprise Program Management"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0FB8AF]/10 border border-[#0FB8AF]/30 mb-6">
              <Settings className="w-4 h-4 text-[#0FB8AF]" />
              <span className="text-sm font-medium text-[#0FB8AF]">PROGRAM MANAGEMENT</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white">
              Program Management
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-8">
              Multi-project alignment with business strategy and KPIs for enterprise-level coordination.
            </p>
          </motion.div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className={`py-16 lg:py-24 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Overview</h2>

              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mb-6 leading-relaxed`}>
                Coordinate multiple projects into a unified program that drives strategic business outcomes and organizational transformation. We ensure all initiatives work together harmoniously toward common objectives with measurable impact.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What we do</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#0fb8af] flex-shrink-0 mt-0.5" /> Strategic program planning</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#0fb8af] flex-shrink-0 mt-0.5" /> Resource optimization</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#0fb8af] flex-shrink-0 mt-0.5" /> Executive reporting</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Why it matters</h3>
                  <p className="text-sm leading-relaxed">
                    Effective program management aligns projects with business goals, maximizes ROI, and accelerates organizational success.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
                <div className="space-y-3 text-sm">
                  {[
                    "Strategic Program Planning",
                    "Multi-Project Dependencies",
                    "Resource Optimization",
                    "Executive Reporting",
                    "Benefits Realization",
                    "Risk & Issue Management"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#0fb8af] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=85"
                    alt="Strategic Program Leadership"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* UPDATED SERVICES GRID */}
      <section className={`py-24 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gradient-to-b from-white to-gray-100"}`}>
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0FB8AF]/10 border border-[#0FB8AF]/20 mb-6">
              <Settings className="w-5 h-5 text-[#0FB8AF]" />
              <span className="text-sm font-semibold text-[#0FB8AF]">SERVICES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Program Management Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              End-to-end program management solutions for enterprise transformation and strategic execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <Link key={i} href="/contact">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`
                      relative h-[400px] rounded-2xl overflow-hidden transition-all duration-500
                      ${isDark 
                        ? "bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm" 
                        : "bg-gradient-to-b from-white/70 to-white/50 backdrop-blur-sm"
                      }
                      border ${isDark ? "border-gray-800" : "border-gray-200"}
                      group-hover:border-[#0FB8AF]/50
                      shadow-lg group-hover:shadow-2xl group-hover:shadow-[#0FB8AF]/10
                    `}>
                      
                      <div className="absolute inset-0">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                        <div className={`absolute inset-0 transition-all duration-500
                          ${hoveredCard === i 
                            ? "bg-gradient-to-t from-[#0FB8AF]/95 via-[#0FB8AF]/85 to-transparent" 
                            : "bg-gradient-to-t from-black/80 via-black/60 to-transparent"
                          }`}
                        />
                      </div>

                      <div className="relative h-full p-8 flex flex-col justify-between">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 mb-4
                          ${hoveredCard === i 
                            ? "bg-black/20 text-white" 
                            : "bg-[#0FB8AF]/10 text-[#0FB8AF]"
                          }`}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>

                        <div className="flex-1"></div>

                        <div className="space-y-4">
                          <h3 className={`text-2xl font-bold transition-colors duration-300
                            ${hoveredCard === i ? "text-white" : "text-white"}
                          `}>
                            {service.title}
                          </h3>

                          <motion.div
                            initial={false}
                            animate={{
                              transform: hoveredCard === i 
                                ? "translate3d(0%, 0px, 0px) scale3d(1, 1, 1)"
                                : "translate3d(120%, 0px, 0px) scale3d(1, 1, 1)",
                              opacity: hoveredCard === i ? 1 : 0,
                              height: hoveredCard === i ? "auto" : "0px",
                              marginTop: hoveredCard === i ? "0.5rem" : "0px"
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            style={{
                              transformStyle: 'preserve-3d' as const,
                              willChange: 'transform'
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/90 leading-relaxed text-base">
                              {service.description}
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500
                        ${hoveredCard === i 
                          ? "border-2 border-white/20" 
                          : "border border-transparent"
                        }`}
                      />

                      <div className={`absolute top-4 right-4 transition-all duration-300
                        ${hoveredCard === i ? "opacity-100" : "opacity-0"}`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div className={`
                      absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-[#0FB8AF] via-[#0FB8AF] to-transparent 
                      blur-xl transition-opacity duration-500 -z-10
                    `} />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`mt-24 rounded-3xl p-12 ${isDark ? "bg-gray-900/50" : "bg-white/80"} backdrop-blur-sm border ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "95%", label: "On-Time Delivery" },
                { value: "98%", label: "Budget Accuracy" },
                { value: "100%", label: "Stakeholder Satisfaction" },
                { value: "50+", label: "Programs Managed" }
              ].map((stat, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-[#0FB8AF] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* REFINED CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-[#0FB8AF]/10" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0FB8AF]/10 border border-[#0FB8AF]/30 mb-6">
                <span className="text-sm font-semibold text-[#0FB8AF]">READY TO TRANSFORM?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-[#0FB8AF] to-white bg-clip-text text-transparent">
                  Transform Your Organization
                </span>
              </h2>
            </div>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s build a program structure that delivers strategic impact at scale and accelerates your organizational success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
              <Link href="/contact" className="group">
                <button className="px-12 py-5 bg-[#0FB8AF] hover:bg-[#0eaba3] text-black font-bold text-base rounded-full transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(15,184,175,0.3)] flex items-center gap-3">
                  <span>Launch Your Program</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>

              <Link href="/services">
                <button className="px-12 py-5 border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 font-medium text-base rounded-full transition-all duration-300">
                  All Services
                </button>
              </Link>
            </div>

            <p className="text-sm text-white/40 mt-12">
              Strategic alignment • Enterprise governance • Measurable impact
            </p>
          </motion.div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0FB8AF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0FB8AF]/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
}