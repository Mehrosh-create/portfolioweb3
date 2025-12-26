// components/services/ServicesGrid.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import styled from 'styled-components';

const FadeSlide = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const ServicesGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showAllServices, setShowAllServices] = useState(false);

  const serviceCards = [
    { 
      id: 1,
      title: "Accuracy Verification", 
      description: "99.9% accuracy guarantee with quality control, data validation, and compliance verification systems.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce1f6f855821383d1c14_Quality%20Assurance%20.avif",
      href: "/services/accuracy-verification"
    },
    { 
      id: 2,
      title: "Ecommerce Solutions", 
      description: "Shopify, WooCommerce, Magento full-store builds with payment, inventory & marketing.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce2de7c668dd873f6ef6_SaaS.avif",
      href: "/services/ecommerce-solutions" 
    },
    { 
      id: 3,
      title: "Account Management", 
      description: "Dedicated success managers for long-term growth and retention.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67bce7eff5d9e573cacb93d1_Overview-Section-Driving-Ecommerce_11zon.webp",
      href: "/services/account-management" 
    },
    { 
      id: 4,
      title: "Automated Workflow", 
      description: "Zapier, Make.com, n8n eliminate manual tasks forever.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67c5c1f213fe8086fc311cd2_Mobile-Automation--min.avif",
      href: "/services/automated-workflow" 
    },
    { 
      id: 5,
      title: "Project Management", 
      description: "Asana, ClickUp, Jira structured delivery with transparency.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c0241c66269762456ad870_compressed_ongoing-enhancement.webp",
      href: "/services/project-management" 
    },
    { 
      id: 6,
      title: "Program Management", 
      description: "Multi-project alignment with business strategy and KPIs.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023e72f27c271ccbefd30_compressed_Third-party-integrations.webp",
      href: "/services/program-management" 
    },
    { 
      id: 7,
      title: "Email Marketing", 
      description: "Klaviyo flows, segmentation, deliverability, A/B testing.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c0238e76216b3d45ace1fa_compressed_Audit-optimization.webp",
      href: "/services/email-marketing" 
    },
    { 
      id: 8,
      title: "Data Analysis", 
      description: "Dashboards, KPIs, forecasting in Looker, Power BI, Sheets.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cc482db1606ad0aab120_Data%20Analytics.avif",
      href: "/services/data-analysis" 
    },
    { 
      id: 9,
      title: "AI Solutions", 
      description: "ChatGPT agents, predictive analytics, automation bots.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd1fd5d31e9286475e66_GenAi3.avif",
      href: "/services/ai-solutions" 
    },
    { 
      id: 10,
      title: "Cybersecurity", 
      description: "Pen testing, SOC 2, GDPR compliance, monitoring.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ccb5852804634ccbdcd0_Cyber%20Security%20%20copy.avif",
      href: "/services/cybersecurity" 
    },
    { 
      id: 11,
      title: "UI/UX Design", 
      description: "Figma, user research, prototyping, design systems.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ccfe797228be2c253ec9_UI_UX.avif",
      href: "/services/ui-ux-design" 
    },
    { 
      id: 12,
      title: "Web Development", 
      description: "Next.js, React, Node.js fast, scalable apps.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cca947f72f4be4c576ef_Web%20%26%20App%20dev.avif",
      href: "/services/web-development" 
    },
    { 
      id: 13,
      title: "Cloud Solutions", 
      description: "AWS, GCP, Azure architecture, migration, cost control.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd6f18df7367c4bfe810_cloud%20application.avif",
      href: "/services/cloud-solutions" 
    },
    { 
      id: 14,
      title: "SaaS Development", 
      description: "Subscription platforms, billing, multi-tenancy.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce2de7c668dd873f6ef6_SaaS.avif",
      href: "/services/saas-development" 
    },
    { 
      id: 15,
      title: "Data Migration", 
      description: "Zero-downtime transfers with full validation.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd80bbd823d4a8b89c59_Cloud%20maintenance%20%26%20integration.avif",
      href: "/services/data-migration" 
    },
    { 
      id: 16,
      title: "DevOps & CI/CD", 
      description: "GitHub Actions, Docker, Kubernetes, Terraform.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd081fcad6db7e6e9a4e_DevOps.avif",
      href: "/services/devops-cicd" 
    },
    { 
      id: 17,
      title: "Google Workspace", 
      description: "Migration, security, shared drives, admin training.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/688a882108161fd009c13722_businessman-interacting-with-futuristic-graphics-min.avif",
      href: "/services/google-workspace" 
    },
    { 
      id: 18,
      title: "HubSpot CRM", 
      description: "End-to-end implementation, automation & training.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023b3fbe2476a5a36af5f_compressed_Compliance.webp",
      href: "/services/hubspot-crm" 
    },
    { 
      id: 19,
      title: "Administrative Support", 
      description: "Virtual assistants, scheduling, inbox zero, executive ops.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67bcea0f323a459406cbb1ea_Shopify%20App%20Configurations-min.webp",
      href: "/services/administrative-support" 
    },
    { 
      id: 20,
      title: "Staff Augmentation", 
      description: "Vetted developers, designers, PMs ready in 48h.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce0fb9160e7c31f33a55_Staff%20Augmentation.avif",
      href: "/services/staff-augmentation" 
    },
    { 
      id: 21,
      title: "Business Operations", 
      description: "Optimize and streamline your business processes for maximum efficiency and growth.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68bad64eba2d82367ecca257_compressed_Design-Development.avif",
      href: "/services/business-operations" 
    },
    { 
      id: 22,
      title: "CRM Automation", 
      description: "Automate customer relationship management for enhanced engagement and retention.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67c5c1f213fe8086fc311cd2_Mobile-Automation--min.avif",
      href: "/services/crm-automation" 
    },
    { 
      id: 23,
      title: "Compliance Services", 
      description: "GDPR, SOC 2, ISO compliance and audits.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ccb5852804634ccbdcd0_Cyber%20Security%20%20copy.avif",
      href: "/services/compliance-services" 
    },
    { 
      id: 24,
      title: "Technical Documentation", 
      description: "Documentation and knowledge bases.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023e72f27c271ccbefd30_compressed_Third-party-integrations.webp",
      href: "/services/technical-documentation" 
    }
  ];

  // Show 2 rows initially (6 cards per row on large screens = 12 cards)
  const initialServices = serviceCards.slice(0, 12);
  const remainingServices = serviceCards.slice(12);

  const ServiceCard = ({ service, index }: { service: typeof serviceCards[0]; index: number }) => (
    <StyledWrapper>
      <Link href={service.href}>
        <div className="card-container">
          <div className="card">
            {/* Background Image */}
            <div className="card-image">
              <Image
                src={service.image}
                alt={service.title}
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Overlay */}
            <div className="card-overlay" />

            {/* Content */}
            <div className="card-content">
              {/* Title */}
              <h3 className="card-heading">
                {service.title}
              </h3>

              {/* Description */}
              <p className="card-description">
                {service.description}
              </p>

              {/* CTA */}
              <div className="card-cta">
                Learn more
                <ArrowRight className="card-arrow" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </StyledWrapper>
  );

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#0fb8af]">Services</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Comprehensive solutions designed to address your specific business challenges
          </p>
        </motion.div>

        {/* First 2 Rows of Services (12 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {initialServices.map((service, i) => (
            <FadeSlide key={service.id} delay={i * 0.1}>
              <ServiceCard service={service} index={i} />
            </FadeSlide>
          ))}
        </div>

        {/* View All Button */}
        {!showAllServices && remainingServices.length > 0 && (
          <div className="text-center mb-4">
            <button
              onClick={() => setShowAllServices(true)}
              className="group px-10 py-4 border-2 border-[#0fb8af] text-[#0fb8af] text-base font-semibold uppercase tracking-wider hover:bg-[#0fb8af] hover:text-black transition-all duration-300 rounded-full relative overflow-hidden"
            >
              <span className="relative z-10">
                View All {serviceCards.length} Services
                <ChevronDown className="inline ml-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#0fb8af] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        )}

        {/* Remaining Services Grid */}
        <AnimatePresence>
          {showAllServices && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-4"
            >
              {remainingServices.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ServiceCard service={service} index={i + initialServices.length} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    width: 100%;
    height: 400px;
    cursor: pointer;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 24px;
    gap: 12px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    color: white;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -8px;
    margin: auto;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    border-radius: 20px;
    background: linear-gradient(-45deg, #0fb8af 0%, #0da39a 50%, #0c8c84 100%);
    z-index: 0;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: 1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #0fb8af 0%, #0da39a 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    opacity: 0.7;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card-image {
    position: absolute;
    inset: 2px;
    border-radius: 14px;
    overflow: hidden;
    z-index: 2;
  }

  .card-overlay {
    position: absolute;
    inset: 2px;
    border-radius: 14px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 60%);
    z-index: 3;
    transition: all 0.3s ease;
  }

  .card-content {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }

  .card-heading {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  .card-description {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-cta {
    display: flex;
    align-items: center;
    color: #0fb8af;
    font-weight: 500;
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }

  .card-arrow {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }

  .card:hover .card-cta {
    transform: translateX(8px);
  }

  .card:hover .card-arrow {
    transform: translateX(4px);
  }

  .card:hover::after {
    filter: blur(30px);
    opacity: 0.9;
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  .card:hover .card-image img {
    transform: scale(1.1);
    transition: transform 0.7s ease;
  }

  /* Ensure Image component gets the hover effect */
  .card .card-image img {
    transition: transform 0.7s ease;
  }
`;

export default ServicesGrid;