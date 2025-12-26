// components/services/[slug]/ServicePricing.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Star, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ServicePricingProps {
  service: {
    title: string;
    pricingTiers: Array<{
      name: string;
      price: string;
      features: string[];
      cta: string;
    }>;
  };
}

const ServicePricing = ({ service }: ServicePricingProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={`py-20 px-6 ${
      isDark 
        ? "bg-gradient-to-b from-black to-gray-900" 
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
            <Star className="w-4 h-4 text-[#0fb8af]" />
            <span className="text-[#0fb8af] text-sm font-medium">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible <span className="text-[#0fb8af]">Pricing</span> for Every Need
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto mb-10 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Choose the plan that best fits your requirements. All plans include our core features with scalable options.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
            >
              <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-8" : "translate-x-1"
              }`} />
            </button>
            <span className={`font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              Annual <span className="text-[#0fb8af]">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {service.pricingTiers.map((tier, index) => {
            const isPopular = index === 1;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'border-2 border-[#0fb8af] transform scale-105'
                    : isDark
                    ? 'border border-gray-800'
                    : 'border border-gray-200'
                } ${isPopular ? 'shadow-2xl' : 'shadow-lg'}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-[#0fb8af] to-[#0da39a] text-black font-bold rounded-full flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}>
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-5xl font-bold mb-2">
                      {tier.price}
                      {tier.price.includes('/') && (
                        <span className="text-lg font-normal text-gray-500">
                          {isAnnual ? '/year' : '/month'}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {tier.price === 'Custom' ? 'Contact for custom quote' : 'Billed annually'}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0fb8af]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#0fb8af]" />
                        </div>
                        <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                      isPopular
                        ? 'bg-[#0fb8af] text-black hover:bg-[#0da39a]'
                        : isDark
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-16 p-8 rounded-2xl ${
            isDark 
              ? "bg-gray-900/50 border border-gray-800" 
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            All Plans Include
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "24/7 Customer Support",
              "Regular Security Updates",
              "Performance Monitoring",
              "Backup & Recovery",
              "SLA Guarantee",
              "Monthly Reports"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0fb8af]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0fb8af]" />
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;