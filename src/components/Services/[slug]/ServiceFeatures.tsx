"use client";

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Clock, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ServiceFeaturesProps {
  service: {
    title: string;
    features: string[];
  };
}

const ServiceFeatures = ({ service }: ServiceFeaturesProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const featureIcons = [Zap, Shield, Clock, TrendingUp, Users, Check];

  return (
    <section className={`py-20 px-6 ${
      isDark 
        ? "bg-gradient-to-b from-black to-gray-900" 
        : "bg-gradient-to-b from-white to-gray-50"
    }`}>
      <style jsx>{`
        .heading-font {
          font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
        }
        .body-font {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-6 body-font">
            <Check className="w-4 h-4 text-[#0fb8af]" />
            <span className="text-[#0fb8af] text-sm font-medium">Key Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-font">
            {service.title} <span className="text-[#0fb8af]">Features</span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto body-font ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Comprehensive features designed to address your specific needs and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, _index) => {
            const IconComponent = featureIcons[_index] || Check;
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: _index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl transition-all duration-300 group ${
                  isDark 
                    ? "bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800" 
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0fb8af] to-[#0da39a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 heading-font">Feature {_index + 1}</h3>
                
                <p className={`leading-relaxed body-font ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {feature}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-800/30">
                  <div className="flex items-center text-[#0fb8af] text-sm font-medium body-font">
                    <span>Learn More</span>
                    <div className="w-8 h-0.5 bg-[#0fb8af] ml-2 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mt-16 p-8 rounded-2xl ${
            isDark 
              ? "bg-gradient-to-r from-gray-900 to-black border border-gray-800" 
              : "bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Support Available" },
              { value: "48h", label: "Avg. Response Time" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0fb8af] mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm font-medium body-font ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;