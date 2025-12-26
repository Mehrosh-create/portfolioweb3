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
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 uppercase leading-tight"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        <span className="text-foreground">GET IN </span>
                        <span className="text-[#0fb8af]">TOUCH</span>
                    </h1>
                    <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12"
                        style={{
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        Ready to start your next project? Reach out and let&apos;s create something amazing together.
                    </p>
                </div>

                {/* Contact Information Cards - Above Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {/* Location Card */}
                    <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                        <div className="text-center">
                            <div className="flex justify-center items-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                            </div>
                            <h3
                                className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                OFFICE
                            </h3>
                            <p 
                                className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                EurosHub, Rawalpindi
                            </p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                        <div className="text-center">
                            <div className="flex justify-center items-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                            </div>
                            <h3
                                className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                CALL US
                            </h3>
                            <p 
                                className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                +923000369622
                            </p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                        <div className="text-center">
                            <div className="flex justify-center items-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                            </div>
                            <h3
                                className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                EMAIL US
                            </h3>
                            <p 
                                className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1 break-words"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                hello@sheikhnabeel.com
                            </p>
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 group">
                        <div className="text-center">
                            <div className="flex justify-center items-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#0fb8af]" />
                            </div>
                            <h3
                                className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                WORKING HOURS
                            </h3>
                            <p 
                                className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                Mon - Sat, 24 Hours
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                    {/* Left Column - Contact Form */}
                    <div className="space-y-8 sm:space-y-10">
                        <div>
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                SEND US A MESSAGE
                            </h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Right Column - Additional Info & Map */}
                    <div className="flex flex-col gap-8 sm:gap-10 h-full">
                        {/* Google Maps - Full height */}
                        <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 flex-1 flex flex-col">
                            <h3
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                VISIT OUR OFFICE
                            </h3>
                            <div className="rounded-lg overflow-hidden flex-1">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2671625831645!2d73.0432365749624!3d33.59837194156107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95237c77a5a1%3A0x3f4c08bddd97bf2b!2sEurosHub!5e0!3m2!1sen!2s!4v1762231799960!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '250px' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                    title="Google Maps - EurosHub Rawalpindi"
                                />
                            </div>
                        </div>
                        {/* Quick Links Card - Full height */}
                        <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-[#0fb8af] transition-all duration-300 flex-1 flex flex-col">
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                QUICK LINKS
                            </h2>
                            <div className="space-y-3 text-sm sm:text-base md:text-lg flex-1 flex flex-col justify-center">
                                <Link href="/" className="flex items-center text-[#0fb8af] hover:underline transition-colors group py-3 px-4 rounded-lg hover:bg-accent/50">
                                    <span className="mr-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                    <span 
                                        className="text-base font-medium"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        Home
                                    </span>
                                </Link>
                                <Link href="/services" className="flex items-center text-[#0fb8af] hover:underline transition-colors group py-3 px-4 rounded-lg hover:bg-accent/50">
                                    <span className="mr-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                    <span 
                                        className="text-base font-medium"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        Our Services
                                    </span>
                                </Link>
                               
                                <Link href="/about" className="flex items-center text-[#0fb8af] hover:underline transition-colors group py-3 px-4 rounded-lg hover:bg-accent/50">
                                    <span className="mr-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                    <span 
                                        className="text-base font-medium"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        About Sheikh Nabeel
                                    </span>
                                </Link>
                                <Link href="/testimonials" className="flex items-center text-[#0fb8af] hover:underline transition-colors group py-3 px-4 rounded-lg hover:bg-accent/50">
                                    <span className="mr-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                    <span 
                                        className="text-base font-medium"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        Client Testimonials
                                    </span>
                                </Link>
                                <Link href="/blog" className="flex items-center text-[#0fb8af] hover:underline transition-colors group py-3 px-4 rounded-lg hover:bg-accent/50">
                                    <span className="mr-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                    <span 
                                        className="text-base font-medium"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        Blog & Insights
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;