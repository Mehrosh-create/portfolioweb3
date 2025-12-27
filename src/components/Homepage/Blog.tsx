"use client";

import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogArticles } from "@/data/blogArticles";

// Fade + Slide Animation
const FadeSlide = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Blog = () => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initial: { [key: string]: number } = {};
    blogArticles.forEach((a) => {
      initial[a.slug] = parseInt(a.likes) || 0;
    });
    setLikeCounts(initial);
  }, []);

  const handleLikeClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(slug)) {
        newSet.delete(slug);
        setLikeCounts((c) => ({ ...c, [slug]: c[slug] - 1 }));
      } else {
        newSet.add(slug);
        setLikeCounts((c) => ({ ...c, [slug]: c[slug] + 1 }));
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeSlide>
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-5 font-century-gothic-bold"
              style={{
                letterSpacing: "0.02em",
              }}
            >
              LATEST <span className="text-[#0fb8af]">INSIGHTS</span>
            </h2>
          </FadeSlide>
          <FadeSlide delay={0.2}>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
              Explore expert perspectives on digital transformation, leadership, CRM systems, and business innovation.
            </p>
          </FadeSlide>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <FadeSlide key={article.slug}>
              <Link href={`/blog/${article.slug}`} className="group block h-full">
                <article className="relative h-full bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#0fb8af]/20">
                  <div className="absolute inset-0 rounded-2xl border border-[#0fb8af]/10 group-hover:border-[#0fb8af]/40 transition-all duration-500 pointer-events-none" />
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-foreground/70 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0fb8af]" />
                        <span>{article.date}</span>
                      </div>

                      <button
                        onClick={(e) => handleLikeClick(article.slug, e)}
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

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#0fb8af] transition-colors duration-300 font-century-gothic-bold">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-foreground/70 text-sm mb-6 line-clamp-3 font-inter">
                      {article.excerpt}
                    </p>

                    {/* Tags + Arrow */}
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
                        <ArrowRight className="w-5 h-5 text-[#0fb8af] group-hover:text-black transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb8af] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </article>
              </Link>
            </FadeSlide>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <FadeSlide delay={0.4}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0fb8af] text-black font-bold uppercase tracking-wider rounded-lg hover:bg-[#00a89a] transition-all duration-300 font-inter"
            >
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default Blog;
