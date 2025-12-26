"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  Calendar,
  Building,
  Users,
  MapPin,
  FileText,
  Home,
  Briefcase,
  TrendingUp,
  Rocket
} from "lucide-react";

// Reusable fade+slide wrapper
const FadeSlide = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Sliding highlight component
const SlidingHighlight = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="relative inline-block mx-auto mb-6 overflow-hidden"
    >
      <span
        className={`absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out ${
          inView ? "w-full" : "w-0"
        }`}
      ></span>
      <span
        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-4 py-2 inline-block text-sm"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default function EuroCons() {
  const { theme } = useTheme();

  const keyServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Tax Consultancy & Compliance",
      description: "Income tax returns filing, company registration, document processing, and business/chamber registration."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Real Estate & Investment Advisory",
      description: "Providing market-driven property and investment solutions tailored to current trends."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Development & Strategic Consulting",
      description: "Helping businesses grow through smart, scalable strategies."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Client Success & Market Expansion",
      description: "Successfully handled and closed 1,000+ clients in real estate, construction, consultancy, and tourism sectors."
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#151515]' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: theme === 'dark'
                ? 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")'
                : 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <SlidingHighlight text="DISCOVERING INSIGHTFUL SOLUTIONS" />
            <FadeSlide delay={0.1}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/icons/Euroscon.jpg"
                    alt="Euro Cons"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase mb-4 leading-tight">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                  EURO<span className="text-[#0fb8af]">CONS</span>
                </span>
              </h1>
            </FadeSlide>
            <FadeSlide delay={0.2}>
              <p className={`text-xl lg:text-2xl max-w-3xl mx-auto mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Discovering Insightful Consultancy Solutions
              </p>
            </FadeSlide>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeSlide delay={0.1}>
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  <span className="text-[#0fb8af]">Overview</span>
                </h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Eurocons is the creator of novel ideas, the guardian of superior strategic execution, and the coordinator of revolutionary transformation. Our consultancy is a thriving center of knowledge and innovation. We are always committed to redefining possibilities and assisting companies in achieving unmatched success. Eurocons serve as a driving force for your progress, encouraging expansion, and influencing the course of global business through creative and perceptive solutions.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Building className="w-5 h-5 text-[#0fb8af]" />
                    <div>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Specialties:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Software House Registrations and Call Center Registrations</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-[#0fb8af]" />
                    <div>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Founded:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2018</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-[#0fb8af]" />
                    <div>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Company Size:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2-10 employees</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSlide>

            <FadeSlide delay={0.2}>
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  <span className="text-[#0fb8af]">Key Services & Expertise</span>
                </h2>
                <div className="space-y-6">
                  {keyServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-[#0fb8af] mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {service.title}
                        </h4>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <SlidingHighlight text="OUR LOCATION" />
            <FadeSlide delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                  HEADQUARTERS <span className="text-[#0fb8af]">LOCATION</span>
                </span>
              </h2>
            </FadeSlide>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeSlide delay={0.2}>
              <div className={`p-6 rounded-lg border ${
                theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'
              }`}>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0fb8af] mt-1" />
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Headquarters
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Office # 1 Sheikh&apos;s Mall Chakri Road Rawalpindi, Rawalpindi, Punjab 46000, PK
                    </p>
                  </div>
                </div>
              </div>
            </FadeSlide>

            <FadeSlide delay={0.3}>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13300.947757491953!2d72.98423840681069!3d33.54721971510515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df938cee5219b3%3A0xc99f92d03ee94391!2sSheikh%E2%80%99s%20Mall%20Chakri%20Road!5e0!3m2!1sen!2s!4v1761893575137!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </FadeSlide>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeSlide>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                READY TO <span className="text-[#0fb8af]">TRANSFORM?</span>
              </span>
            </h2>
            <p className={`text-xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <Rocket className="w-5 h-5 inline mr-2 text-[#0fb8af]" />
              Committed to delivering excellence, efficiency, and growth-driven solutions across industries.
              <br />
              As the Founder & CEO of Euro Cons, I lead a team of experts delivering comprehensive business consultancy, tax advisory, and real estate solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#0fb8af] text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#00a89f] transition-colors"
              >
                Start Consultation
              </Link>
             
            </div>
          </FadeSlide>
        </div>
      </section>
    </div>
  );
}