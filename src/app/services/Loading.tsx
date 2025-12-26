// app/services/loading.tsx
"use client";

import { motion } from 'framer-motion';
import { Loader2, Grid3X3, BarChart3, Users, Shield } from 'lucide-react';

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Hero Section Skeleton */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge Skeleton */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse mb-8">
              <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            {/* Title Skeleton */}
            <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 max-w-3xl mx-auto animate-pulse"></div>
            <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 max-w-2xl mx-auto animate-pulse"></div>

            {/* Description Skeleton */}
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg mb-10 max-w-2xl mx-auto animate-pulse"></div>

            {/* Button Skeleton */}
            <div className="h-12 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto animate-pulse"></div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-gray-300 dark:border-gray-800">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800 mx-auto mb-3 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 animate-pulse w-24 mx-auto"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-20 mx-auto animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header Skeleton */}
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 max-w-md mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>

          {/* View More Button Skeleton */}
          <div className="text-center mt-12">
            <div className="h-12 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Process Section Skeleton */}
      <div className="px-6 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 max-w-md mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
          </div>

          {/* Process Steps Skeleton */}
          <div className="space-y-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-8 animate-pulse">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 w-48"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="fixed inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl text-center"
        >
          <Loader2 className="w-12 h-12 text-[#0fb8af] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading Services...</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              <Grid3X3 className="w-4 h-4 text-[#0fb8af]" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Services</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4 text-[#0fb8af]" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Process</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#0fb8af]" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Testimonials</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}