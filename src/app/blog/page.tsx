'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Heart } from "lucide-react";

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

  useEffect(() => {
    const initial: { [key: string]: number } = {};
    articles.forEach(a => {
      initial[a.slug] = parseInt(a.likes) || 0;
    });
    setLikeCounts(initial);
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
    <div className="min-h-screen bg-background text-foreground font-inter">

      {/* FEATURED POST */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <article className="relative bg-card rounded-2xl overflow-hidden">
              <div className="absolute inset-0 border border-[#0fb8af]/10 rounded-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* IMAGE ONLY HOVER */}
                <div className="relative h-96 lg:h-full overflow-hidden group">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* CONTENT — NO HOVER */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="px-4 py-1.5 bg-[#0fb8af] text-black text-xs font-bold rounded-full mb-4">
                    {featuredPost.category}
                  </span>

                  <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                    {featuredPost.title}
                  </h1>

                  <p className="text-foreground/70 text-lg mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Calendar className="w-5 h-5 text-[#0fb8af]" />
                      {featuredPost.date}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#0fb8af]/10 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-[#0fb8af]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb8af]" />
            </article>
          </Link>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-[#0fb8af] text-black"
                  : "border border-gray-600 text-gray-400 hover:border-[#0fb8af] hover:text-[#0fb8af]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="block">
              <article className="bg-card rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 border border-[#0fb8af]/10 rounded-2xl pointer-events-none" />

                {/* IMAGE ONLY HOVER */}
                <div className="relative h-56 overflow-hidden group">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0fb8af]" />
                      {article.date}
                    </div>
                    <button
                      onClick={(e) => handleLike(article.slug, e)}
                      className="flex items-center gap-1.5"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts.has(article.slug)
                            ? "fill-red-500 text-red-500"
                            : "text-foreground/50"
                        }`}
                      />
                      {likeCounts[article.slug] || 0}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {article.title}
                  </h3>

                  <p className="text-sm text-foreground/70 mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 flex-wrap">
                      {article.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-[#0fb8af]/10 text-[#0fb8af]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0fb8af]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb8af]" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
