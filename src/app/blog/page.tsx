'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Heart } from "lucide-react";

// Full Articles Data (with tags added)
const articles = [
  {
    slug: "rise-of-digital-transformation",
    title: "Sheikh Nabeel on the Rise of Digital Transformation",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "/images/featured-post.jpg",
    excerpt: "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
    likes: "892",
    tags: ["Digital", "AI", "Innovation", "Strategy"]
  },
  {
    slug: "future-of-crm-systems",
    title: "The Future of CRM Systems in Global Markets",
    category: "CRM SYSTEMS",
    readTime: "6 min read",
    date: "March 12, 2025",
    image: "/images/crm-future.jpg",
    excerpt: "CRM systems are becoming more intelligent with AI-driven insights.",
    likes: "443",
    tags: ["CRM", "Automation", "Sales", "AI"]
  },
  {
    slug: "authentic-leadership-digital",
    title: "Building Authentic Leadership in Digital Organizations",
    category: "LEADERSHIP",
    readTime: "5 min read",
    date: "March 10, 2025",
    image: "/images/digital-leadership.jpg",
    excerpt: "Leadership in the digital age requires adaptability and empathy.",
    likes: "678",
    tags: ["Leadership", "Culture", "Remote Work", "Trust"]
  },
  {
    slug: "automation-business-transformation",
    title: "Automation: Beyond Efficiency to Business Transformation",
    category: "AUTOMATION",
    readTime: "7 min read",
    date: "March 8, 2025",
    image: "/images/automation.jpg",
    excerpt: "Automation drives efficiency and creates new business opportunities.",
    likes: "521",
    tags: ["RPA", "Automation", "Efficiency", "AI"]
  },
  {
    slug: "technology-ethics-business",
    title: "Technology Ethics Through Business Lens",
    category: "TECHNOLOGY",
    readTime: "9 min read",
    date: "March 5, 2025",
    image: "/images/tech.jpg",
    excerpt: "Ethical considerations are critical in AI and blockchain adoption.",
    likes: "634",
    tags: ["Ethics", "AI", "Blockchain", "Responsibility"]
  },
  {
    slug: "growth-strategies-for-startups",
    title: "Growth Strategies for Startups in 2025",
    category: "BUSINESS STRATEGY",
    readTime: "5 min read",
    date: "March 2, 2025",
    image: "/images/startup-growth.jpg",
    excerpt: "Startups must focus on product-market fit and scalability.",
    likes: "421",
    tags: ["Startup", "Growth", "Strategy", "Marketing"]
  }
];

const categories = ["ALL", "DIGITAL TRANSFORMATION", "CRM SYSTEMS", "LEADERSHIP", "AUTOMATION", "TECHNOLOGY", "BUSINESS STRATEGY"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});

  // Initialize likes
  useEffect(() => {
    const initial: { [key: string]: number } = {};
    articles.forEach(a => {
      initial[a.slug] = parseInt(a.likes) || 0;
    });
    setLikeCounts(initial);
  }, []);

  const filteredArticles = selectedCategory === "ALL"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const featuredPost = articles[0];

  const handleLike = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(slug)) {
        newSet.delete(slug);
        setLikeCounts(c => ({ ...c, [slug]: c[slug] - 1 }));
      } else {
        newSet.add(slug);
        setLikeCounts(c => ({ ...c, [slug]: c[slug] + 1 }));
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Featured Post */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <article className="relative bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#0fb8af]/20">
              <div className="absolute inset-0 rounded-2xl border border-[#0fb8af]/10 group-hover:border-[#0fb8af]/40 transition-all duration-500 pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="px-4 py-1.5 bg-[#0fb8af] text-black text-xs font-bold uppercase rounded-full inline-block mb-4 font-inter">
                    {featuredPost.category}
                  </span>
                  <h1 className="text-3xl lg:text-5xl font-century-gothic-bold font-bold mb-6 group-hover:text-[#0fb8af] transition-colors duration-300">
                    {featuredPost.title}
                  </h1>
                  <p className="text-foreground/70 text-lg mb-8 line-clamp-3 font-inter">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-foreground/70 font-inter">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#0fb8af]" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#0fb8af]/10 flex items-center justify-center group-hover:bg-[#0fb8af] transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-[#0fb8af] group-hover:text-black transition-all group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb8af] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </article>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all font-inter ${
                selectedCategory === cat
                  ? "bg-[#0fb8af] text-black"
                  : "bg-transparent border border-gray-600 text-gray-400 hover:border-[#0fb8af] hover:text-[#0fb8af]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
              <article className="relative h-full bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#0fb8af]/20">
                <div className="absolute inset-0 rounded-2xl border border-[#0fb8af]/10 group-hover:border-[#0fb8af]/40 transition-all duration-500 pointer-events-none" />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 text-sm font-inter text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0fb8af]" />
                      <span>{article.date}</span>
                    </div>
                    <button
                      onClick={(e) => handleLike(article.slug, e)}
                      className="flex items-center gap-1.5 transition-all hover:scale-110"
                    >
                      <Heart
                        className={`w-5 h-5 transition-all duration-300 ${
                          likedPosts.has(article.slug)
                            ? "fill-red-500 text-red-500 scale-110"
                            : "text-foreground/50 hover:text-red-500"
                        }`}
                      />
                      <span className="text-sm font-medium">{likeCounts[article.slug] || 0}</span>
                    </button>
                  </div>

                  <h3 className="text-xl font-century-gothic-bold font-bold mb-3 line-clamp-2 group-hover:text-[#0fb8af] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-6 line-clamp-3 font-inter">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#0fb8af]/10 text-[#0fb8af] text-xs font-medium rounded-full font-inter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#0fb8af]/10 flex items-center justify-center group-hover:bg-[#0fb8af] transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-[#0fb8af] group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb8af] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
