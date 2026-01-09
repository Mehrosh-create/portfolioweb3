// src/app/contact/page.tsx
"use client";

import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-12 md:pb-16 lg:pb-20">

        {/* Hero Section - Kept exactly as is */}
        <div className="relative -mx-3 xs:-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 overflow-hidden rounded-none mb-12 sm:mb-16 md:mb-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Us - Digital Transformation Background"
            fill
            className="object-cover object-center w-full h-full"
            sizes="100vw"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0fb8af] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center py-32 sm:py-36 md:py-40 lg:py-44 text-center px-6">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-tight text-white drop-shadow-2xl"
              style={{
                fontFamily: '"Century Gothic", sans-serif',
                textShadow: '0 4px 30px rgba(0,0,0,0.9)',
                letterSpacing: '0.1em'
              }}
            >
              Contact
            </h1>
            <nav className="mt-8 flex justify-center items-center gap-4 text-base sm:text-lg text-white/85">
              <Link href="/" className="hover:text-[#0fb8af] transition-colors font-medium">
                Home
              </Link>
              <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white font-semibold">Contact</span>
            </nav>
          </div>
        </div>

        {/* Form + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Left: Contact Form */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 uppercase"
              style={{
                fontFamily: '"Century Gothic", sans-serif',
                letterSpacing: "0.05em",
              }}
            >
              SEND US A MESSAGE
            </h2>
            <ContactForm />
          </div>

          {/* Right: Map on top + Contact Info below */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Google Map Container - Enhanced for better content visibility & brand match */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              {/* Premium abstract teal waves background (perfect #0fb8af match, dark base with glow) */}
              <Image
                src="https://images.unsplash.com/photo-1727283274675-BNfRWhuUw8E?auto=format&fit=crop&w=1920&q=80"
                alt="Abstract teal waves background"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Stronger brand teal tint + reduced dark overlay for clearer content visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fb8af]/60 via-[#0fb8af]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-black/35 backdrop-blur-md"></div>

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-12 uppercase drop-shadow-2xl"
                  style={{
                    fontFamily: '"Century Gothic", sans-serif',
                    letterSpacing: "0.05em",
                  }}
                >
                  VISIT OUR OFFICE
                </h3>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2671625831645!2d73.0432365749624!3d33.59837194156107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95237c77a5a1%3A0x3f4c08bddd97bf2b!2sEurosHub!5e0!3m2!1sen!2s!4v1762231799960!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                    title="Google Maps - EurosHub Rawalpindi"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info Container - Same enhancements */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1727283274675-BNfRWhuUw8E?auto=format&fit=crop&w=1920&q=80"
                alt="Abstract teal waves background"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fb8af]/60 via-[#0fb8af]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-black/35 backdrop-blur-md"></div>

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                <div className="text-center mb-8 sm:mb-10">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase drop-shadow-2xl"
                    style={{
                      fontFamily: '"Century Gothic", sans-serif',
                      letterSpacing: "0.05em",
                    }}
                  >
                    GET IN TOUCH
                  </h3>
                  <p
                    className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Ready to start your next project? Reach out and let&apos;s create something amazing together.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#0fb8af] drop-shadow-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider drop-shadow-lg" style={{ fontFamily: '"Century Gothic", sans-serif' }}>
                      OFFICE
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed px-1 drop-shadow-md" style={{ fontFamily: '"Inter", sans-serif' }}>
                      EurosHub, Rawalpindi
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-[#0fb8af] drop-shadow-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider drop-shadow-lg" style={{ fontFamily: '"Century Gothic", sans-serif' }}>
                      CALL US
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed px-1 drop-shadow-md" style={{ fontFamily: '"Inter", sans-serif' }}>
                      +923000369622
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#0fb8af] drop-shadow-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider drop-shadow-lg" style={{ fontFamily: '"Century Gothic", sans-serif' }}>
                      EMAIL US
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed px-1 break-words drop-shadow-md" style={{ fontFamily: '"Inter", sans-serif' }}>
                      hello@sheikhnabeel.com
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#0fb8af] drop-shadow-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider drop-shadow-lg" style={{ fontFamily: '"Century Gothic", sans-serif' }}>
                      WORKING HOURS
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed px-1 drop-shadow-md" style={{ fontFamily: '"Inter", sans-serif' }}>
                      Mon - Sat, 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;