// app/services/[slug]/loading.tsx
"use client";

import { motion } from 'framer-motion';
import { Loader2, Target, CheckCircle, TrendingUp, Zap } from 'lucide-react';

export default function ServiceLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Hero Section Skeleton */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Skeleton */}
            <div className="animate-pulse">
              {/* Badge Skeleton */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gray-200 dark:bg-gray-800"></div>
                <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              </div>

              {/* Title Skeleton */}
              <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6"></div>
              <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>

              {/* Stats Skeleton */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
                    <div>
                      <div className="h-6 w-12 bg-gray-200 dark:bg-gray-800 rounded mb-1"></div>
                      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons Skeleton */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-12 w-40 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                <div className="h-12 w-40 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Right Content Skeleton */}
            <div className="animate-pulse">
              <div className="h-[400px] bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section Skeleton */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column Skeleton */}
            <div className="animate-pulse">
              <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mb-6"></div>
              <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              </div>
              <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8"></div>
            </div>

            {/* Right Column Skeleton */}
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-8"></div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                ))}
              </div>
              <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="px-6 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16 animate-pulse">
            <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-6"></div>
            <div className="h-12 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-800 rounded mx-auto"></div>
          </div>

          {/* Features Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-52 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section Skeleton */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16 animate-pulse">
            <div className="h-12 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-800 rounded mx-auto"></div>
          </div>

          {/* Process Steps Skeleton */}
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 animate-pulse">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 w-48"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section Skeleton */}
      <div className="px-6 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16 animate-pulse">
            <div className="h-12 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-6"></div>
            <div className="h-8 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-10"></div>
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto"></div>
          </div>

          {/* Pricing Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      <div className="fixed inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl text-center max-w-md"
        >
          <Loader2 className="w-12 h-12 text-[#0fb8af] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-2">
            Loading Service Details...
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
            Preparing comprehensive information about this service
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#0fb8af]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Service Details</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#0fb8af] animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0fb8af]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Features</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#0fb8af]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Process</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0fb8af]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Pricing</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              This should only take a moment...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}