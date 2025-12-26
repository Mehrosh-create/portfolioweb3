// components/services/[slug]/ServiceDetails.tsx
"use client";

import { motion } from 'framer-motion';
import { CheckCircle, FileText, BarChart, Shield } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

interface ServiceDetailsProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    deliverables?: string[];
    technologies?: string[];
  };
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 px-6 ${
      isDark 
        ? "bg-gradient-to-b from-gray-900 to-black" 
        : "bg-gradient-to-b from-gray-50 to-white"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-8">
              <FileText className="w-4 h-4 text-[#0fb8af]" />
              <span className="text-[#0fb8af] text-sm font-medium">Service Details</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Our <span className="text-[#0fb8af]">{service.title}</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {service.longDescription}
            </p>

            {/* Key Highlights */}
            <div className={`p-6 rounded-xl mb-8 ${
              isDark 
                ? "bg-gray-900/50 border border-gray-800" 
                : "bg-white border border-gray-200"
            }`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-[#0fb8af]" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {service.deliverables?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0fb8af] mt-0.5 flex-shrink-0" />
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`p-8 rounded-2xl ${
              isDark 
                ? "bg-gray-900/50 border border-gray-800" 
                : "bg-white border border-gray-200 shadow-xl"
            }`}>
              <h3 className="text-2xl font-bold mb-8">
                <span className="text-[#0fb8af]">Technologies</span> We Use
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {service.technologies?.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-4 py-3 rounded-lg text-center ${
                      isDark 
                        ? "bg-gray-800 hover:bg-gray-700" 
                        : "bg-gray-100 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>

              {/* Security Badge */}
              <div className={`p-6 rounded-xl ${
                isDark 
                  ? "bg-gray-800/50 border border-gray-700" 
                  : "bg-gray-100 border border-gray-300"
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#0fb8af]" />
                  <h4 className="text-lg font-bold">Security & Compliance</h4>
                </div>
                <p className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  All our services include enterprise-grade security measures, regular audits, and compliance with industry standards including GDPR, SOC 2, and ISO 27001.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;