// src/app/contact/page.tsx
"use client";

import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-28 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-12 md:pb-16 lg:pb-20 bg-background flex flex-col">
      <div className="flex-grow max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto w-full">

        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 uppercase leading-tight"
            style={{ fontFamily: '"Century Gothic", sans-serif' }}
          >
            <span className="text-foreground">GET IN </span>
            <span className="text-[#0fb8af]">TOUCH</span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Ready to start your next project? Reach out and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Contact Form */}
          <div>
           <h2
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 uppercase"
  style={{
    fontFamily: '"Century Gothic", Inter, sans-serif',
    letterSpacing: "0.05em",
  }}
>
  SEND US A MESSAGE
</h2>
            <ContactForm />
          </div>

          {/* Map & Links */}
          <div className="flex flex-col gap-8 sm:gap-10">

            {/* Google Map */}
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-[#0fb8af] transition-all flex-1 flex flex-col">
            <h3
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 uppercase"
  style={{
    fontFamily: '"Century Gothic", Inter, sans-serif',
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

            {/* Quick Links */}
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-[#0fb8af] transition-all">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 uppercase"
                style={{ fontFamily: '"Century Gothic", sans-serif' }}
              >
                QUICK LINKS
              </h2>

              <div className="space-y-3">
                {[
                  ["Home", "/"],
                  ["Our Services", "/services"],
                  ["About Sheikh Nabeel", "/about"],
                  ["Client Testimonials", "/testimonials"],
                  ["Blog & Insights", "/blog"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center text-[#0fb8af] group py-3 px-4 rounded-lg hover:bg-accent/50"
                  >
                    <span className="mr-3 group-hover:translate-x-1 transition-transform">→</span>
                    <span
                      className="text-base font-medium"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
