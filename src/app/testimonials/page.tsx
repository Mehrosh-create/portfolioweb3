"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Reserved for future touch enhancements if needed
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            company: "TechStart Inc.",
            role: "CEO",
            image: "/images/client1.jpg",
            content:
                "Sheikh Nabeel transformed our digital infrastructure completely. His strategic approach to digital transformation helped us increase efficiency by 40% and reduce operational costs significantly.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
        {
            id: 2,
            name: "Sarah Williams",
            company: "ZuriBella Jewelry",
            role: "Marketing Director",
            image: "/images/client2.jpg",
            content:
                "Thank you for the outstanding work you did with ZuriBella Jewelry. I truly appreciate your commitment, expertise, and professionalism throughout the project. Your communication and engagement were exceptional, and your recommendations on how to strengthen the brand were invaluable. I would highly recommend and I look forward to future engagement with you. Thank you.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
        {
            id: 3,
            name: "Michael Chen",
            company: "Global Solutions",
            role: "Operations Manager",
            image: "/images/client3.jpg",
            content:
                "Euroshub, was very diligent and communication was clear and consistent from the start. I was pleased with the outcome.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            company: "InnovateTech",
            role: "Founder",
            image: "/images/client4.jpg",
            content:
                "Nabeel did a great job for me. He helped me get a lot of projects completed and new systems built. He was easy to work with, good communication, and well versed in the systems.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
        {
            id: 5,
            name: "David Kim",
            company: "NextGen Apps",
            role: "CTO",
            image: "/images/client5.jpg",
            content:
                "The team management systems implemented by Sheikh Nabeel have dramatically improved our productivity and collaboration. Our project delivery times have decreased by 35% since working with him.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
        {
            id: 6,
            name: "Lisa Thompson",
            company: "Digital Dynamics",
            role: "Product Manager",
            image: "/images/client6.jpg",
            content:
                "Sheikh Nabeel's expertise in product strategy and digital innovation helped us launch our flagship product ahead of schedule. His insights into user experience design resulted in a 50% increase in user engagement.",
            rating: 5,
            hoverBg: "from-[#0fb8af] to-[#0fb8af]"
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-12 lg:pb-16 bg-background flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase text-foreground mb-4 sm:mb-6 lg:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Century Gothic", Inter, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        CLIENT <span className="text-[#0fb8af]">TESTIMONIALS</span>
                    </h1>

                    <div className="relative inline-block mx-auto mb-4 sm:mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#0fb8af] inline-block"
                            style={{
                                width: "0%",
                                animation: "slideRight 2s forwards",
                            }}
                        />
                        <span
                            className="relative z-10 text-black text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase px-3 sm:px-4 lg:px-6 py-1 sm:py-2 inline-block"
                            style={{
                                fontFamily: '"Century Gothic", Inter, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            SUCCESS STORIES
                        </span>
                    </div>
                </div>

            
                {/* Grid of All Testimonials */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <h2
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 text-center uppercase"
                        style={{
                            fontFamily: '"Century Gothic", Inter, sans-serif',
                            letterSpacing: "0.05em",
                        }}
                    >
                        More Client Feedback
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="relative bg-gray-dark rounded-lg border border-gray-600 hover:border-[#0fb8af] transition-all duration-200 group cursor-pointer overflow-hidden h-64 sm:h-72 lg:h-80 shadow-lg hover:shadow-xl"
                            >
                                {/* Default View */}
                                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-gray-500 hover:border-[#0fb8af] transition-all duration-500 mb-4 sm:mb-5 lg:mb-6">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-[#0fb8af] font-semibold uppercase tracking-wider text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-gray-light text-xs sm:text-sm font-medium tracking-wide">
                                        {testimonial.company}
                                    </p>
                                </div>

                                {/* Hover View */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.hoverBg} p-4 sm:p-5 lg:p-6 transition-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0 flex flex-col justify-center`}>
                                    <div className="text-center">
                                        <div className="flex justify-center mb-3 sm:mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-200 fill-current mx-0.5"
                                                />
                                            ))}
                                        </div>
                                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white/30 mb-3 sm:mb-4 mx-auto" />
                                        <p className="text-white text-xs sm:text-sm leading-relaxed italic font-light px-1 max-h-32 sm:max-h-36 lg:max-h-40 overflow-y-auto scrollbar-hide">
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0fb8af] group-hover:w-full transition-all duration-700 delay-200" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-16 px-6 bg-gray-dark">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-background border border-gray-600 rounded-lg p-8 lg:p-12 text-center">
                            <h2
                                className="text-xl lg:text-2xl font-bold text-foreground mb-4 uppercase"
                                style={{
                                    fontFamily: '"Century Gothic", Inter, sans-serif',
                                    letterSpacing: "0.05em",
                                }}
                            >
                                Ready to Join Our Success Stories?
                            </h2>

                            <p
                                className="text-gray-light text-base mb-6 max-w-2xl mx-auto"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                Transform your business like our satisfied clients. Let&apos;s discuss
                                your project and create your success story.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/contact">
                                    <button
                                        className="relative px-6 py-3 border-2 border-[#0fb8af] text-[#0fb8af] font-semibold transition-all duration-300 ease-in-out hover:bg-[#0fb8af] hover:text-black active:bg-[#0fb8af] active:text-black"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        Contact Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideRight {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Testimonials;