"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";

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
    "accuracy-verification":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    "ecommerce-solutions":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    "ai-solutions":
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    "web-development":
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80",
    "cloud-solutions":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    "cybersecurity":
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    "account-management":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    "automated-workflow":
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  };

  const defaultImage =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80";

  return (
    <section
      className={`relative overflow-hidden pt-32 pb-20 px-6 ${
        isDark
          ? "bg-gradient-to-b from-black via-gray-900 to-black"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={
            serviceImages[
              service.title.toLowerCase().replace(/\s+/g, "-")
            ] || defaultImage
          }
          alt={service.title}
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-8">
              {service.icon}
              <span className="text-[#0fb8af] text-sm font-medium">
                {service.title}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>

            <p
              className={`text-xl mb-10 leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {service.longDescription}
            </p>

            {/* Contact Me Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#0fb8af] text-black font-semibold rounded-full transition-all flex items-center gap-3"
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`rounded-2xl p-8 ${
                isDark
                  ? "bg-gray-900/80 border border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border border-gray-200 shadow-xl backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8">
                Key <span className="text-[#0fb8af]">Benefits</span>
              </h3>

              <ul className="space-y-6">
                {[
                  "Increased efficiency and productivity",
                  "Reduced operational costs",
                  "Improved accuracy and quality",
                  "Scalable solutions for growth",
                  "Expert support and guidance",
                  "Proven results and ROI",
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0fb8af]/20 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-[#0fb8af]" />
                    </div>
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    >
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
