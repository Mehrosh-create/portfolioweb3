// src/app/contact/page.tsx
"use client";

import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Adjusted outer padding to zero at top for no gap */}
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

          {/* Right: Map on top + Contact Info Cards below (same layout as before, but with exact card content & sizes) */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Google Map */}
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-[#0fb8af] transition-all flex-1 flex flex-col">
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 uppercase"
                style={{
                  fontFamily: '"Century Gothic", sans-serif',
                  letterSpacing: "0.05em",
                }}
              >
                VISIT OUR OFFICE
              </h3>
              <div className="rounded-lg overflow-hidden flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2671625831645!2d73.0432365749624!3d33.59837194156107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95237c77a5a1%3A0x3f4c08bddd97bf2b!2sEurosHub!5e0!3m2!1sen!2s!4v1762231799960!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Google Maps - EurosHub Rawalpindi"
                />
              </div>
            </div>

            {/* Contact Info Cards - Exact content & text sizes from your cards section, placed below map on the right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Office */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                    style={{ fontFamily: '"Century Gothic", sans-serif' }}
                  >
                    OFFICE
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    EurosHub, Rawalpindi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                    style={{ fontFamily: '"Century Gothic", sans-serif' }}
                  >
                    CALL US
                  </h3>
                  <p
                    className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed px-1"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    +923000369622
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                    style={{ fontFamily: '"Century Gothic", sans-serif' }}
                  >
                    EMAIL US
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1 break-words"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    hello@sheikhnabeel.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                    style={{ fontFamily: '"Century Gothic", sans-serif' }}
                  >
                    WORKING HOURS
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Mon - Sat, 24 Hours
                  </p>
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