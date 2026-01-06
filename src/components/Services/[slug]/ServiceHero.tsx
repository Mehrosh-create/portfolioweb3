"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

interface ServiceHeroProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    icon: React.ReactNode;
  };
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const serviceImages: Record<string, string> = {
    "accuracy-verification": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "ecommerce-solutions": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "ai-solutions": "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "web-development": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "cloud-solutions": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "account-management": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "automated-workflow": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  };

  const defaultImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <section className={`relative overflow-hidden pt-32 pb-20 px-6 ${
      isDark 
        ? "bg-gradient-to-b from-black via-gray-900 to-black" 
        : "bg-gradient-to-b from-white via-gray-50 to-white"
    }`}>
      <style jsx>{`
        .heading-font {
          font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
        }
        .body-font {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="absolute inset-0">
        <Image
          src={serviceImages[service.title.toLowerCase().replace(/\s+/g, '-')] || defaultImage}
          alt={service.title}
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-8 body-font">
              {service.icon}
              <span className="text-[#0fb8af] text-sm font-medium">{service.title}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight heading-font">
              {service.title}
            </h1>

            <p className={`text-xl mb-8 leading-relaxed body-font ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-[#0fb8af] text-black font-semibold rounded-full transition-all flex items-center justify-center gap-3 body-font`}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 border-2 font-semibold rounded-full transition-all flex items-center justify-center gap-3 body-font ${
                  isDark 
                    ? "border-white text-white hover:bg-white hover:text-black" 
                    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <Clock className="w-5 h-5" />
                Book Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={`rounded-2xl p-8 ${
              isDark 
                ? "bg-gray-900/80 border border-gray-800 backdrop-blur-sm" 
                : "bg-white/80 border border-gray-200 shadow-xl backdrop-blur-sm"
            }`}>
              <h3 className="text-2xl font-bold mb-8 heading-font">
                Key <span className="text-[#0fb8af]">Benefits</span>
              </h3>

              <ul className="space-y-6">
                {[
                  "Increased efficiency and productivity",
                  "Reduced operational costs",
                  "Improved accuracy and quality",
                  "Scalable solutions for growth",
                  "Expert support and guidance",
                  "Proven results and ROI"
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0fb8af]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-[#0fb8af]" />
                    </div>
                    <span className={`body-font ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-800/30">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-[#0fb8af]">100+</div>
                    <div className="text-sm text-gray-500 body-font">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0fb8af]">4.9/5</div>
                    <div className="text-sm text-gray-500 body-font">Client Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0fb8af]">48h</div>
                    <div className="text-sm text-gray-500 body-font">Average Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;