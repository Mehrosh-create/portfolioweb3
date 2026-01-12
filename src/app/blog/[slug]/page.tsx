'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "rise-of-digital-transformation",
    title: "Sheikh Nabeel on the Rise of Digital Transformation",
    category: "DIGITAL TRANSFORMATION",
    date: "March 15, 2025",
    author: "Sheikh Nabeel",
    image: "/images/featured-post.jpg",
    excerpt: "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
    likes: 892,
    contents: [
      "Digital transformation is no longer a choice — it's a necessity for survival and growth in today's hyper-connected world.",
      "From AI-powered automation to blockchain-enabled transparency, businesses that embrace digital evolution are leading the future.",
      "The future belongs to those who act today. Digital transformation isn't about technology — it's about reimagining what's possible.",
      "Cloud-first infrastructure, data-driven decision making, customer-centric experiences, and agile culture form the core pillars of modern transformation."
    ]
  },
  {
    slug: "future-of-crm-systems",
    title: "The Future of CRM Systems in Global Markets",
    category: "CRM SYSTEMS",
    date: "March 12, 2025",
    author: "Sheikh Nabeel",
    image: "/images/crm-future.jpg",
    excerpt: "CRM systems are becoming more intelligent with AI-driven insights.",
    likes: 443,
    contents: [
      "The next generation of CRM isn't just about managing relationships — it's about predicting them.",
      "AI, predictive analytics, and hyper-personalization are redefining how businesses connect with customers globally.",
      "Tomorrow's CRM will anticipate needs before customers even express them."
    ]
  },
  {
    slug: "authentic-leadership-digital",
    title: "Building Authentic Leadership in Digital Organizations",
    category: "LEADERSHIP",
    date: "March 10, 2025",
    author: "Sheikh Nabeel",
    image: "/images/digital-leadership.jpg",
    excerpt: "Leadership in the digital age requires adaptability and empathy.",
    likes: 678,
    contents: [
      "In a world of remote teams and digital-first cultures, authentic leadership has never been more important.",
      "Trust, transparency, and empathy are the new currency of great leaders.",
      "The best leaders today don't command — they connect."
    ]
  },
  {
    slug: "automation-business-transformation",
    title: "Automation: Beyond Efficiency to Business Transformation",
    category: "AUTOMATION",
    date: "March 8, 2025",
    author: "Sheikh Nabeel",
    image: "/images/automation.jpg",
    excerpt: "Automation drives efficiency and creates new business opportunities.",
    likes: 521,
    contents: [
      "True automation isn't about replacing humans — it's about empowering them to do what they do best.",
      "When routine tasks disappear, creativity and innovation rise.",
      "The companies winning today aren't automating jobs — they're transforming them."
    ]
  },
  {
    slug: "technology-ethics-business",
    title: "Technology Ethics Through Business Lens",
    category: "TECHNOLOGY",
    date: "March 5, 2025",
    author: "Sheikh Nabeel",
    image: "/images/tech.jpg",
    excerpt: "Ethical considerations are critical in AI and blockchain adoption.",
    likes: 634,
    contents: [
      "As technology advances faster than regulation, business leaders must champion ethical innovation.",
      "Profit and purpose are not mutually exclusive.",
      "The most successful companies of tomorrow will be the most responsible ones today."
    ]
  },
  {
    slug: "growth-strategies-for-startups",
    title: "Growth Strategies for Startups in 2025",
    category: "BUSINESS STRATEGY",
    date: "March 2, 2025",
    author: "Sheikh Nabeel",
    image: "/images/startup-growth.jpg",
    excerpt: "Startups must focus on product-market fit and scalability.",
    likes: 421,
    contents: [
      "Sustainable growth in 2025 requires more than funding — it demands vision, execution, and relentless focus.",
      "Product-market fit isn't found — it's built, tested, and refined.",
      "The startups that win won't be the fastest — they'll be the most focused."
    ]
  }
];

export default function BlogArticlePage() {
  const { slug } = useParams() as { slug: string };
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { theme } = useTheme();

  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    if (article) setLikeCount(article.likes || 0);
  }, [article]);

  const toggleLike = () => {
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!article) return null;

  // Theme-based text colors
  const textColors = {
    primary: theme === 'dark' ? 'text-white' : 'text-gray-900',
    secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    tertiary: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
    muted: theme === 'dark' ? 'text-gray-500' : 'text-gray-400',
  };

  // Theme-based background colors
  const bgColors = {
    card: theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/70',
    hover: theme === 'dark' ? 'hover:bg-gray-800/40' : 'hover:bg-gray-100/80',
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#151515]' : 'bg-white'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className={`absolute top-0 left-1/4 w-72 h-72 ${
            theme === 'dark' ? 'bg-[#0fb8af]' : 'bg-[#0fb8af]/20'
          } rounded-full blur-3xl`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute bottom-0 right-1/4 w-96 h-96 ${
            theme === 'dark' ? 'bg-[#0fb8af]' : 'bg-[#0fb8af]/15'
          } rounded-full blur-3xl`}
        ></motion.div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        {/* Back Link with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog" 
            className={`inline-flex items-center gap-2 ${textColors.tertiary} hover:text-[#0fb8af] mb-8 text-sm font-medium transition-all duration-300 hover:gap-3 group`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" /> 
            Back to Blog
          </Link>
        </motion.div>

        {/* Category with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db] text-black text-xs font-bold uppercase rounded-full tracking-wider shadow-lg shadow-[#0fb8af]/20">
            {article.category}
          </span>
        </motion.div>

        {/* Title with Gradient Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-3xl ${
            theme === 'dark' 
              ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" 
              : "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          }`}
        >
          {article.title}
        </motion.h1>

        {/* Meta Info with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-5 pb-6 mb-8"
        >
          <div className="flex items-center gap-5">
            <div className={`flex items-center gap-2 ${textColors.secondary}`}>
              <Calendar className="w-4 h-4 text-[#0fb8af]" />
              <span className="text-sm font-medium">{article.date}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLike} 
                className="flex items-center gap-2 transition-all group"
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${
                  isLiked ? 'fill-red-500 text-red-500 animate-pulse' : `${textColors.tertiary} group-hover:text-[#0fb8af]`
                }`} />
                <span className={`text-sm font-medium ${textColors.secondary} group-hover:text-[#0fb8af] transition-colors duration-300`}>
                  {likeCount}
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-1.5 ${bgColors.hover} rounded-lg transition-all duration-300`}
                title="Bookmark"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#0fb8af] text-[#0fb8af]' : textColors.tertiary}`} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareArticle}
                className={`p-1.5 ${bgColors.hover} rounded-lg transition-all duration-300`}
                title="Share"
              >
                <Share2 className={`w-4 h-4 ${textColors.tertiary}`} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Full Image with Animation - Properly Sized, No Cropping */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-[#0fb8af]/10 group"
        >
          <div className={`absolute inset-0 bg-gradient-to-t ${
            theme === 'dark' ? 'from-black/20' : 'from-white/20'
          } to-transparent pointer-events-none z-10`} />
          
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
            className="w-full h-auto max-h-[600px] object-contain transform group-hover:scale-105 transition-transform duration-700"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>

        {/* Content Section with Staggered Animation */}
        <div className="space-y-6">
          {/* Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative pl-6 border-l-2 border-[#0fb8af]">
              <p className={`text-lg md:text-xl ${textColors.secondary} font-medium leading-relaxed italic tracking-wide`}>
                &quot;{article.excerpt}&quot;
              </p>
            </div>
          </motion.div>

          {/* Article Content with Staggered Paragraph Animation */}
          <div className="space-y-4">
            {article.contents?.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                className={`text-base md:text-lg ${textColors.tertiary} leading-relaxed tracking-wide transition-colors duration-300`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Author Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0fb8af] to-[#1fc8db] flex items-center justify-center text-black text-xl font-bold shadow-lg">
                  S
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0fb8af] rounded-full border-4 border-gray-900"></div>
              </motion.div>
              
              <div>
                <h4 className={`text-xl font-bold ${textColors.primary} mb-1`}>Sheikh Nabeel</h4>
                <p className={`text-sm ${textColors.secondary} mb-1`}>Founder & CEO, Euroshub</p>
                <p className={`text-xs ${textColors.muted}`}>Digital Transformation Expert | Business Strategist</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLike}
                className={`flex items-center gap-2 px-5 py-2.5 border ${bgColors.border} rounded-lg ${
                  theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/50'
                } hover:border-[#0fb8af] hover:bg-[#0fb8af]/10 transition-all duration-300 group`}
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${
                  isLiked ? 'fill-red-500 text-red-500 animate-pulse' : `${textColors.tertiary} group-hover:text-[#0fb8af]`
                }`} />
                <span className={`font-medium ${textColors.secondary} group-hover:text-[#0fb8af] transition-colors duration-300`}>
                  {likeCount} Likes
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* View All Articles Button with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-12 pt-6 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blog"
              className="group relative px-8 py-3 bg-gradient-to-r from-[#0fb8af] to-[#1fc8db] text-black font-bold text-sm rounded-xl overflow-hidden inline-flex items-center gap-2 shadow-lg shadow-[#0fb8af]/20"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>View All Articles</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
}