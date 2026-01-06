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
      description: "Klaviyo flows, segmentation, deliverability, A/B testing, and compliance.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce1f6f855821383d1c14_Quality%20Assurance%20.avif",
      href: "/services/email-marketing" 
    },
    { 
      id: 8,
      title: "Data Analysis", 
      description: "Tableau, Power BI dashboards with predictive analytics and insights.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce2de7c668dd873f6ef6_SaaS.avif",
      href: "/services/data-analysis" 
    },
    { 
      id: 9,
      title: "AI Solutions", 
      description: "Custom ML models, chatbots, predictive systems with ethical AI.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67bce7eff5d9e573cacb93d1_Overview-Section-Driving-Ecommerce_11zon.webp",
      href: "/services/ai-solutions" 
    },
    { 
      id: 10,
      title: "Cybersecurity", 
      description: "Penetration testing, monitoring, compliance with SOC2/ISO standards.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67c5c1f213fe8086fc311cd2_Mobile-Automation--min.avif",
      href: "/services/cybersecurity" 
    },
    { 
      id: 11,
      title: "UI/UX Design", 
      description: "Figma prototypes, user research, accessibility-optimized interfaces.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c0241c66269762456ad870_compressed_ongoing-enhancement.webp",
      href: "/services/ui-ux-design" 
    },
    { 
      id: 12,
      title: "Web Development", 
      description: "Next.js, React progressive web apps with SEO and performance.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023e72f27c271ccbefd30_compressed_Third-party-integrations.webp",
      href: "/services/web-development" 
    },
    { 
      id: 13,
      title: "Cloud Solutions", 
      description: "AWS, Azure migration, serverless architecture, cost optimization.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce1f6f855821383d1c14_Quality%20Assurance%20.avif",
      href: "/services/cloud-solutions" 
    },
    { 
      id: 14,
      title: "SaaS Development", 
      description: "Multi-tenant apps, subscription billing, scalable infrastructure.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce2de7c668dd873f6ef6_SaaS.avif",
      href: "/services/saas-development" 
    },
    { 
      id: 15,
      title: "Data Migration", 
      description: "Zero-downtime transfers, data mapping, integrity validation.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67bce7eff5d9e573cacb93d1_Overview-Section-Driving-Ecommerce_11zon.webp",
      href: "/services/data-migration" 
    },
    { 
      id: 16,
      title: "DevOps & CI/CD", 
      description: "GitHub Actions, Kubernetes orchestration, automated deployments.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67c5c1f213fe8086fc311cd2_Mobile-Automation--min.avif",
      href: "/services/devops-cicd" 
    },
    { 
      id: 17,
      title: "Google Workspace", 
      description: "Setup, training, custom apps for collaboration and productivity.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c0241c66269762456ad870_compressed_ongoing-enhancement.webp",
      href: "/services/google-workspace" 
    },
    { 
      id: 18,
      title: "HubSpot CRM", 
      description: "Implementation, automation, sales/marketing alignment.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023e72f27c271ccbefd30_compressed_Third-party-integrations.webp",
      href: "/services/hubspot-crm" 
    },
    { 
      id: 19,
      title: "Administrative Support", 
      description: "Virtual assistants, scheduling, document management services.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce1f6f855821383d1c14_Quality%20Assurance%20.avif",
      href: "/services/administrative-support" 
    },
    { 
      id: 20,
      title: "Staff Augmentation", 
      description: "Skilled developers, designers on-demand for your team.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746ce2de7c668dd873f6ef6_SaaS.avif",
      href: "/services/staff-augmentation" 
    },
    { 
      id: 21,
      title: "Business Operations", 
      description: "Process optimization, KPI tracking, operational excellence.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67bce7eff5d9e573cacb93d1_Overview-Section-Driving-Ecommerce_11zon.webp",
      href: "/services/business-operations" 
    },
    { 
      id: 22,
      title: "CRM Automation", 
      description: "Salesforce, HubSpot custom automations and integrations.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67c5c1f213fe8086fc311cd2_Mobile-Automation--min.avif",
      href: "/services/crm-automation" 
    },
    { 
      id: 23,
      title: "Compliance Services", 
      description: "GDPR, HIPAA audits, risk assessment, compliance management.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c0241c66269762456ad870_compressed_ongoing-enhancement.webp",
      href: "/services/compliance-services" 
    },
    { 
      id: 24,
      title: "Technical Documentation", 
      description: "API docs, user manuals, knowledge base creation.", 
      image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/68c023e72f27c271ccbefd30_compressed_Third-party-integrations.webp",
      href: "/services/technical-documentation" 
    },
  ];

  return (
    <StyledWrapper>
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gradient-to-b from-gray-950 to-gray-900" : "bg-gradient-to-b from-white to-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto">
          <FadeSlide delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0fb8af]/10 border border-[#0fb8af]/20 mb-6">
                <ChevronDown className="w-4 h-4 text-[#0fb8af]" />
                <span className="text-[#0fb8af] text-sm font-medium body-font">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight heading-font">
                Comprehensive <span className="text-[#0fb8af]">Business Solutions</span>
              </h2>
              <p className={`text-base max-w-2xl mx-auto body-font ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                From AI-driven automation to enterprise cloud architecture - tailored solutions for modern business challenges.
              </p>
            </div>
          </FadeSlide>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.slice(0, showAllServices ? undefined : 6).map((card, index) => (
              <FadeSlide key={card.id} delay={index * 0.1}>
                <div className="card-container group">
                  <div className="card">
                    <div className="card-image">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="card-overlay" />
                    <div className="card-content">
                      <h3 className="card-heading heading-font">{card.title}</h3>
                      <p className="card-description body-font">{card.description}</p>
                      <Link href={card.href} className="card-cta body-font">
                        Learn More
                        <ArrowRight className="card-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeSlide>
            ))}
          </div>

          <AnimatePresence>
            {!showAllServices && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => setShowAllServices(true)}
                  className="px-8 py-4 border-2 border-[#0fb8af] text-[#0fb8af] font-semibold rounded-full transition-all flex items-center gap-3 mx-auto hover:bg-[#0fb8af] hover:text-black body-font"
                >
                  View All 24 Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .heading-font {
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  }

  .body-font {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

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

  .card .card-image img {
    transition: transform 0.7s ease;
  }
`;

export default ServicesGrid;