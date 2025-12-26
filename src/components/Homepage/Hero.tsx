// src/components/Homepage/Hero.tsx
"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image – Full cover on all devices, slightly right of center */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/ceo.png"
          alt="Sheikh Nabeel"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectPosition: "65% center" }}
        />
      </div>

      {/* Gradient overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:from-black/40"></div>

      {/* Description Text – Bottom Left */}
      <div className="relative z-10 min-h-screen flex items-end w-full pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16">
        <div className="w-full">
          <div className="flex flex-col items-start text-left w-full">
            <div className="w-full">
              <div
                className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                           text-white font-bold
                           space-y-1 drop-shadow-[0_6px_20px_rgba(0,0,0,1)]
                           max-w-3xl leading-tight
                           pl-2 xs:pl-3 sm:pl-4 md:pl-6 lg:pl-8"
                style={{ 
                  fontFamily: '"Bebas Neue", sans-serif',
                  textShadow: '0 3px 6px rgba(0,0,0,0.85), 0 6px 12px rgba(0,0,0,0.75)'
                }}
              >
                <p className="lowercase tracking-wider">serial entrepreneur, founder & ceo of</p>
                <p className="lowercase tracking-wider">euroshub, business strategist,</p>
                <p className="lowercase tracking-wider">& digital transformation expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-3 xs:top-4 sm:top-6 md:top-8 left-3 xs:left-4 sm:left-6 md:left-8 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-30"></div>
      <div className="absolute bottom-12 xs:bottom-14 sm:bottom-16 md:bottom-20 left-6 xs:left-8 sm:left-12 md:left-16 lg:left-20 w-2 xs:w-3 h-2 xs:h-3 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-12 xs:top-14 sm:top-16 md:top-20 right-6 xs:right-8 sm:right-12 md:right-16 lg:right-20 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 right-3 xs:right-4 sm:right-6 md:right-8 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-25"></div>
    </section>
  );
};

export default HeroSection;