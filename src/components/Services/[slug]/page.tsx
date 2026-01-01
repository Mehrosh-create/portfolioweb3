'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Heart, Clock } from "lucide-react";

const articles = [
  {
    slug: "rise-of-digital-transformation",
    title: "The Rise of Digital Transformation",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "/images/featured-post.jpg",
    excerpt:
      "Digital transformation is reshaping modern industries through automation, artificial intelligence, and innovative technology-driven.",
    likes: "892",
    tags: ["Digital", "AI", "Innovation"]
  },
  {
    slug: "future-of-crm-systems",
    title: "The Future of CRM Systems",
    category: "CRM SYSTEMS",
    readTime: "6 min read",
    date: "March 12, 2025",
    image: "/images/crm-future.jpg",
    excerpt:
      "Customer relationship platforms are evolving with intelligent automation, data insights, and smarter decision-making capabilities for teams.",
    likes: "443",
    tags: ["CRM", "Automation", "AI"]
  },
  {
    slug: "authentic-leadership-digital",
    title: "Authentic Leadership in Digital Era",
    category: "LEADERSHIP",
    readTime: "5 min read",
    date: "March 10, 2025",
    image: "/images/digital-leadership.jpg",
    excerpt:
      "Leadership today requires adaptability, trust, and emotional intelligence to guide distributed teams in digital-first environments.",
    likes: "678",
    tags: ["Leadership", "Culture", "Trust"]
  },
  {
    slug: "automation-business-transformation",
    title: "Automation in Business Strategy",
    category: "AUTOMATION",
    readTime: "7 min read",
    date: "March 8, 2025",
    image: "/images/automation.jpg",
    excerpt:
      "Automation extends beyond efficiency by enabling scalable growth, operational clarity, and new value creation opportunities.",
    likes: "521",
    tags: ["Automation", "Efficiency", "AI"]
  },
  {
    slug: "technology-ethics-business",
    title: "Technology Ethics in Business",
    category: "TECHNOLOGY",
    readTime: "9 min read",
    date: "March 5, 2025",
    image: "/images/tech.jpg",
    excerpt:
      "Ethical responsibility is becoming critical as organizations adopt artificial intelligence, blockchain, and emerging technologies.",
    likes: "634",
    tags: ["Ethics", "AI", "Responsibility"]
  },
  {
    slug: "growth-strategies-for-startups",
    title: "Growth Strategies for Startups",
    category: "BUSINESS STRATEGY",
    readTime: "5 min read",
    date: "March 2, 2025",
    image: "/images/startup-growth.jpg",
    excerpt:
      "Startups succeed by focusing on product-market fit, scalable systems, and sustainable long-term business growth strategies.",
    likes: "421",
    tags: ["Startup", "Growth", "Strategy"]
  }
];

const categories = ["ALL", "DIGITAL TRANSFORMATION", "CRM SYSTEMS", "LEADERSHIP", "AUTOMATION", "TECHNOLOGY", "BUSINESS STRATEGY"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initial: { [key: string]: number } = {};
    articles.forEach(a => {
      initial[a.slug] = parseInt(a.likes) || 0;
    });
    setLikeCounts(initial);
    
    // Trigger animations after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const filteredArticles =
    selectedCategory === "ALL"
      ? articles
      : articles.filter(a => a.category === selectedCategory);

  const featuredPost = articles[0];

  const handleLike = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
        setLikeCounts(c => ({ ...c, [slug]: c[slug] - 1 }));
      } else {
        next.add(slug);
        setLikeCounts(c => ({ ...c, [slug]: c[slug] + 1 }));
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#0fb8af] via-white to-[#0fb8af] bg-clip-text text-transparent">
              Latest Insights
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Discover the latest trends in digital transformation, leadership, and technology
            </p>
          </div>

          {/* FEATURED POST */}
          <Link 
            href={`/blog/${featuredPost.slug}`} 
            className={`block transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <article className="group relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-foreground/10 hover:border-[#0fb8af]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0fb8af]/20">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* IMAGE SECTION */}
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-2 bg-[#0fb8af] text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-[#0fb8af]/10 border border-[#0fb8af]/30 text-[#0fb8af] text-xs font-bold rounded-full mb-6 w-fit">
                    {featuredPost.category}
                  </span>

                  <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight group-hover:text-[#0fb8af] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="w-5 h-5 text-[#0fb8af]" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="w-5 h-5 text-[#0fb8af]" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button
                      onClick={(e) => handleLike(featuredPost.slug, e)}
                      className="flex items-center gap-2 text-sm hover:scale-110 transition-transform"
                    >
                      <Heart
                        className={`w-5 h-5 transition-all ${
                          likedPosts.has(featuredPost.slug)
                            ? "fill-red-500 text-red-500 scale-110"
                            : "text-foreground/50"
                        }`}
                      />
                      <span className="font-medium">{likeCounts[featuredPost.slug] || 0}</span>
                    </button>
                  </div>

                  <div className="flex gap-2 flex-wrap mb-6">
                    {featuredPost.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full bg-[#0fb8af]/10 text-[#0fb8af] border border-[#0fb8af]/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-[#0fb8af] font-semibold group/btn">
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300">
                      Read Full Article
                    </span>
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0fb8af] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </article>
          </Link>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div 
        className={`sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-8 bg-background/80 backdrop-blur-xl border-y border-foreground/5 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#0fb8af] text-black shadow-lg shadow-[#0fb8af]/30 scale-105"
                    : "border border-foreground/10 text-foreground/60 hover:border-[#0fb8af] hover:text-[#0fb8af] hover:bg-[#0fb8af]/5 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link 
                key={article.slug} 
                href={`/blog/${article.slug}`} 
                className="block group"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <article className="h-full bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-foreground/10 hover:border-[#0fb8af]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0fb8af]/20 hover:-translate-y-2 flex flex-col">
                  
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0fb8af] text-black text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                        {article.category.split(' ')[0]}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0fb8af]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-4 text-xs text-foreground/60">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0fb8af]" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0fb8af]" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#0fb8af] transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-sm text-foreground/70 mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-foreground/5 mt-auto">
                      <div className="flex gap-2">
                        {article.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-[#0fb8af]/10 text-[#0fb8af] border border-[#0fb8af]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <button
                          onClick={(e) => handleLike(article.slug, e)}
                          className="flex items-center gap-1.5 hover:scale-110 transition-transform"
                        >
                          <Heart
                            className={`w-4 h-4 transition-all ${
                              likedPosts.has(article.slug)
                                ? "fill-red-500 text-red-500"
                                : "text-foreground/40 group-hover:text-red-400"
                            }`}
                          />
                          <span className="text-xs font-medium">{likeCounts[article.slug] || 0}</span>
                        </button>
                        
                        <ArrowRight className="w-5 h-5 text-[#0fb8af] transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#0fb8af] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}