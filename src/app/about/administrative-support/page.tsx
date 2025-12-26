"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, UserCog } from "lucide-react";

const FadeSlide = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up"|"down"|"left"|"right" }) => {
  const v = { hidden: { opacity: 0, y: direction === "up" ? 40 : direction === "down" ? -40 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 }, visible: { opacity: 1, x: 0, y: 0 } };
  return <motion.div variants={v} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>{children}</motion.div>;
};

const AdministrativeSupportPage = () => {
  const features = ["Virtual assistance and executive support", "Calendar management and scheduling", "Document preparation and formatting", "Email management and correspondence", "Travel arrangements and itinerary planning", "Meeting coordination and minute taking"];
  const benefits = ["Free up 15+ hours per week for strategic work", "Reduce administrative overhead costs by 40%", "Improve organization and task completion rates", "Enhanced professional image and communication", "Better work-life balance for executives", "Scalable support that grows with your needs"];
  const services = [{ title: "Executive Assistance", items: ["Calendar management", "Email filtering", "Travel planning"] }, { title: "Document Management", items: ["Report preparation", "Presentation design", "Data entry"] }, { title: "Communication Support", items: ["Email drafting", "Client correspondence", "Meeting coordination"] }, { title: "Operational Support", items: ["Expense reporting", "Vendor coordination", "Project tracking"] }];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeSlide>
          <div className="text-center mb-12">
            <div className="relative inline-block mx-auto mb-6 overflow-hidden"><span className="absolute top-0 left-0 h-full w-0 bg-[#0fb8af] animate-slideRight"></span><span className="relative z-10 text-black font-bold tracking-wider uppercase px-4 py-2 inline-block" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>ADMINISTRATIVE SUPPORT</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground mb-6">Professional <span className="text-[#0fb8af]">Administrative Support</span></h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto mb-8">Comprehensive administrative and virtual assistance services that free up your time for strategic priorities.</p>
            <div className="relative w-full max-w-sm mx-auto h-56 bg-background rounded-2xl overflow-hidden border border-gray-600"><Image src="/services/Administrative Support.png" alt="Administrative Support" fill className="object-contain p-4" priority /></div>
          </div>
        </FadeSlide>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FadeSlide direction="right"><div className="bg-gray-dark rounded-2xl p-8 border border-gray-600 h-full"><h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"><UserCog className="text-[#0fb8af]" /> Service Features</h2><div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#0fb8af] mt-1 flex-shrink-0" /><span className="text-gray-light">{f}</span></div>)}</div></div></FadeSlide>
          <FadeSlide direction="left"><div className="bg-gray-dark rounded-2xl p-8 border border-gray-600 h-full"><h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"><Target className="text-[#0fb8af]" /> Key Benefits</h2><div className="space-y-4">{benefits.map((b, i) => <div key={i} className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#0fb8af] mt-1 flex-shrink-0" /><span className="text-gray-light">{b}</span></div>)}</div></div></FadeSlide>
        </div>

        <FadeSlide><h2 className="text-3xl font-bold text-foreground text-center mb-10">Comprehensive <span className="text-[#0fb8af]">Support Services</span></h2></FadeSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">{services.map((s, i) => (<FadeSlide key={i} delay={i * 0.1}><div className="bg-gray-dark rounded-xl p-6 border border-gray-600 hover:border-[#0fb8af] transition-all"><h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3><div className="space-y-2">{s.items.map((item, idx) => <div key={idx} className="flex items-center gap-2 text-gray-light text-sm"><div className="w-1.5 h-1.5 bg-[#0fb8af] rounded-full"></div>{item}</div>)}</div></div></FadeSlide>))}</div>

        <FadeSlide><div className="text-center bg-gray-dark rounded-2xl p-8 border border-gray-600"><h2 className="text-2xl font-bold text-foreground mb-4">Ready to Reclaim Your Time?</h2><p className="text-gray-light mb-6 max-w-2xl mx-auto">Handle administrative tasks so you can focus on growth.</p><Link href="/contact"><button className="px-6 py-3 border-2 border-[#0fb8af] text-[#0fb8af] font-semibold hover:bg-[#0fb8af] hover:text-black transition-all">Get Started</button></Link></div></FadeSlide>
      </div>
      <style jsx>{`@keyframes slideRight{from{width:0%}to{width:100%}}.animate-slideRight{animation:slideRight 2s forwards}`}</style>
    </div>
  );
};
export default AdministrativeSupportPage;