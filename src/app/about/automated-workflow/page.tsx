"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Workflow, Zap } from "lucide-react";

const FadeSlide = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up"|"down"|"left"|"right" }) => {
  const v = { hidden: { opacity: 0, y: direction === "up" ? 40 : direction === "down" ? -40 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 }, visible: { opacity: 1, x: 0, y: 0 } };
  return <motion.div variants={v} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>{children}</motion.div>;
};

const AutomatedWorkflowPage = () => {
  const features = ["Custom workflow design and architecture", "Automation setup and configuration", "Process documentation and standardization", "Integration with existing systems", "Performance monitoring and analytics", "Continuous optimization and updates"];
  const benefits = ["Eliminate 80% of manual repetitive tasks", "Reduce human error by 95%", "Increase team productivity by 3x", "24/7 automated process execution", "Real-time performance tracking", "Scalable solutions that grow with your business"];
  const areas = [{ title: "Sales & CRM", desc: "Lead scoring, follow-up sequences, data enrichment" }, { title: "Marketing", desc: "Campaign automation, social media posting, email workflows" }, { title: "Operations", desc: "Invoice processing, report generation, task assignments" }, { title: "Customer Service", desc: "Ticket routing, response templates, feedback collection" }];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeSlide>
          <div className="text-center mb-12">
            <div className="relative inline-block mx-auto mb-6 overflow-hidden"><span className="absolute top-0 left-0 h-full w-0 bg-[#0fb8af] animate-slideRight"></span><span className="relative z-10 text-black font-bold tracking-wider uppercase px-4 py-2 inline-block" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>AUTOMATED WORKFLOW</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground mb-6">Intelligent <span className="text-[#0fb8af]">Automation</span></h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto mb-8">Transform manual processes into intelligent, automated workflows that boost efficiency and eliminate errors.</p>
            <div className="relative w-full max-w-sm mx-auto h-56 bg-background rounded-2xl overflow-hidden border border-gray-600"><Image src="/services/Automated Workflow.png" alt="Automated Workflow" fill className="object-contain p-4" priority /></div>
          </div>
        </FadeSlide>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FadeSlide direction="right"><div className="bg-gray-dark rounded-2xl p-8 border border-gray-600 h-full"><h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"><Workflow className="text-[#0fb8af]" /> Service Features</h2><div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#0fb8af] mt-1 flex-shrink-0" /><span className="text-gray-light">{f}</span></div>)}</div></div></FadeSlide>
          <FadeSlide direction="left"><div className="bg-gray-dark rounded-2xl p-8 border border-gray-600 h-full"><h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"><Target className="text-[#0fb8af]" /> Key Benefits</h2><div className="space-y-4">{benefits.map((b, i) => <div key={i} className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#0fb8af] mt-1 flex-shrink-0" /><span className="text-gray-light">{b}</span></div>)}</div></div></FadeSlide>
        </div>

        <FadeSlide><h2 className="text-3xl font-bold text-foreground text-center mb-10">Automation <span className="text-[#0fb8af]">Areas</span></h2></FadeSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">{areas.map((a, i) => (<FadeSlide key={i} delay={i * 0.1}><div className="bg-gray-dark rounded-xl p-6 border border-gray-600 hover:border-[#0fb8af] transition-all"><h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2"><Zap className="w-5 h-5 text-[#0fb8af]" /> {a.title}</h3><p className="text-gray-light text-sm">{a.desc}</p></div></FadeSlide>))}</div>

        <FadeSlide><div className="text-center bg-gray-dark rounded-2xl p-8 border border-gray-600"><h2 className="text-2xl font-bold text-foreground mb-4">Ready to Automate Your Workflows?</h2><p className="text-gray-light mb-6 max-w-2xl mx-auto">Implement intelligent workflows that save time and drive efficiency.</p><Link href="/contact"><button className="px-6 py-3 border-2 border-[#0fb8af] text-[#0fb8af] font-semibold hover:bg-[#0fb8af] hover:text-black transition-all">Get Started</button></Link></div></FadeSlide>
      </div>
      <style jsx>{`@keyframes slideRight{from{width:0%}to{width:100%}}.animate-slideRight{animation:slideRight 2s forwards}`}</style>
    </div>
  );
};
export default AutomatedWorkflowPage;

