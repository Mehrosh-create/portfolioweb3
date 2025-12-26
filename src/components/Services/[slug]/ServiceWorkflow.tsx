// components/services/[slug]/ServiceWorkflow.tsx
"use client";

import { motion } from 'framer-motion';
import { Search, Layout, Code, Rocket, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ServiceWorkflowProps {
  service: {
    title: string;
    processes: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
}

const ServiceWorkflow = ({ service }: ServiceWorkflowProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const processIcons = [Search, Layout, Code, Rocket, CheckCircle];

  return (
    <section className={`py-20 px-6 ${
      isDark 
        ? "bg-gradient-to-b from-gray-900 to-black" 
        : "bg-gradient-to-b from-white to-gray-50"
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-6">
            <Rocket className="w-4 h-4 text-[#0fb8af]" />
            <span className="text-[#0fb8af] text-sm font-medium">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-[#0fb8af]">Deliver</span> {service.title}
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            A structured, transparent process that ensures quality and success at every stage
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block">
            <div className={`h-full w-full ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`} />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-20">
            {service.processes.map((process, index) => {
              const Icon = processIcons[index] || CheckCircle;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#0fb8af] flex items-center justify-center flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{process.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 max-w-lg ${
                    isEven ? "lg:text-left lg:pr-8" : "lg:text-right lg:pl-8"
                  }`}>
                    <div className={`rounded-2xl p-8 ${
                      isDark 
                        ? "bg-gray-900/50 border border-gray-800" 
                        : "bg-white border border-gray-200 shadow-xl"
                    }`}>
                      <div className={`flex items-center gap-4 mb-4 ${
                        isEven ? "justify-start" : "justify-end"
                      }`}>
                        <div className="w-12 h-12 rounded-xl bg-[#0fb8af]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#0fb8af]" />
                        </div>
                        <h3 className="text-2xl font-bold">{process.title}</h3>
                      </div>
                      <p className={`leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {process.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWorkflow;