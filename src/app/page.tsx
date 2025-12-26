"use client";

import Hero from "@/components/Homepage/Hero";
import CounterSection from "@/components/Homepage/Counter";
import Blog from "@/components/Homepage/Blog";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <section id="home">
           <Hero />
        </section>

        <section id="counter">
          <CounterSection />
        </section>

        {/* THIN DIVIDER LINE */}
        <div className="w-full">
          <div className="h-px w-full bg-[#0fb8af]/70"></div>
        </div>

        <section id="blog">
          <Blog />
        </section>
      </div>
    </main>
  );
}