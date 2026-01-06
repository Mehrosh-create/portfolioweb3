"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

interface ServiceProcess {
  step: number;
  title: string;
  description: ReactNode;
  image?: string;
}

interface Service {
  title: string;
  processes: ServiceProcess[];
}

interface ServiceWorkflowProps {
  service: Service;
}

export default function ServiceWorkflow({ service }: ServiceWorkflowProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .heading-font {
          font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
        }
        .body-font {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-4 body-font">
            <span className="text-[#0fb8af] text-sm font-medium tracking-wide">
              WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight heading-font">
            {service.title} <span className="text-[#0fb8af]">Process</span>
          </h2>
          <p className={`text-base max-w-2xl mx-auto body-font ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            A methodical approach ensuring quality and transparency at every stage
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block">
            <div className={`${isDark ? "bg-gray-800" : "bg-gray-200"} h-full w-full`} />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {service.processes.map((process, index) => {
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
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0fb8af] flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <span className="text-lg font-bold text-white heading-font">{process.step}</span>
                    </div>
                  </div>

                  <div className={`flex-1 w-full max-w-md ${isEven ? "lg:pr-6" : "lg:pl-6"}`}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`rounded-xl p-6 ${
                        isDark
                          ? "bg-gray-900/60 border border-gray-800"
                          : "bg-white border border-gray-200 shadow-lg"
                      }`}
                    >
                      <h3 className="text-lg font-bold mb-2 heading-font">{process.title}</h3>
                      <p className={`text-sm leading-relaxed body-font ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {process.description}
                      </p>
                    </motion.div>
                  </div>

                  {process.image && (
                    <div className={`flex-1 w-full max-w-md ${isEven ? "lg:pl-6" : "lg:pr-6"}`}>
                      <div className="relative h-56 rounded-lg overflow-hidden">
                        <Image
                          src={process.image}
                          alt={process.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}