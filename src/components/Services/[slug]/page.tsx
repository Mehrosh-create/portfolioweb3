// app/services/[slug]/page.tsx
"use client";

import { notFound } from 'next/navigation';
import { 
  CheckCircle, 
  ShoppingCart, 
  Users, 
  Workflow, 
  Briefcase, 
  Target, 
  Mail, 
  BarChart, 
  Cpu, 
  Shield, 
  Layout, 
  Code, 
  Cloud, 
  Rocket,
  Database,
  Zap,
  Globe,
  Lock,
  Headphones,
  FileText,
  Wrench,
  PieChart,
  Settings,
  Monitor,
  Server,
  Package
} from 'lucide-react';
import ServiceHero from '@/components/Services/[slug]/ServiceHero';
import ServiceDetails from '@/components/Services/[slug]/ServiceDetails';
import ServiceFeatures from '@/components/Services/[slug]/ServiceFeatures';
import ServiceWorkflow from '@/components/Services/[slug]/ServiceWorkflow';
import ServicePricing from '@/components/Services/[slug]/ServicePricing';
import ServicesCTA from '@/components/Services/ServicesCTA';

// Service data type
interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: string[];
  processes: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  pricingTiers: Array<{
    name: string;
    price: string;
    features: string[];
    cta: string;
  }>;
  benefits?: string[];
  deliverables?: string[];
  technologies?: string[];
}

// Service icons mapping
const serviceIcons: Record<string, React.ReactNode> = {
  "accuracy-verification": <CheckCircle className="w-8 h-8" />,
  "ecommerce-solutions": <ShoppingCart className="w-8 h-8" />,
  "account-management": <Users className="w-8 h-8" />,
  "automated-workflow": <Workflow className="w-8 h-8" />,
  "project-management": <Briefcase className="w-8 h-8" />,
  "program-management": <Target className="w-8 h-8" />,
  "email-marketing": <Mail className="w-8 h-8" />,
  "data-analysis": <BarChart className="w-8 h-8" />,
  "ai-solutions": <Cpu className="w-8 h-8" />,
  "cybersecurity": <Shield className="w-8 h-8" />,
  "ui-ux-design": <Layout className="w-8 h-8" />,
  "web-development": <Code className="w-8 h-8" />,
  "cloud-solutions": <Cloud className="w-8 h-8" />,
  "saas-development": <Rocket className="w-8 h-8" />,
  "data-migration": <Database className="w-8 h-8" />,
  "devops-cicd": <Zap className="w-8 h-8" />,
  "google-workspace": <Globe className="w-8 h-8" />,
  "hubspot-crm": <Settings className="w-8 h-8" />,
  "administrative-support": <Headphones className="w-8 h-8" />,
  "staff-augmentation": <Users className="w-8 h-8" />,
  "business-operations": <Monitor className="w-8 h-8" />,
  "crm-automation": <Server className="w-8 h-8" />,
  "compliance-services": <Shield className="w-8 h-8" />,
  "technical-documentation": <FileText className="w-8 h-8" />
};

// Complete Service Data Mapping
const serviceData: Record<string, Service> = {
  "accuracy-verification": {
    title: "Accuracy Verification",
    description: "99.9% accuracy guarantee with quality control systems",
    longDescription: "Our Accuracy Verification service ensures your data and processes maintain the highest standards of precision. We implement comprehensive quality control systems, automated validation checks, and compliance monitoring to guarantee 99.9% accuracy across all operations.",
    icon: serviceIcons["accuracy-verification"],
    features: [
      "Automated data validation systems",
      "Real-time quality monitoring",
      "Compliance verification (GDPR, SOC2, ISO)",
      "Error detection & alert systems",
      "Audit trail documentation",
      "Performance reporting dashboards"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Evaluate data quality and identify accuracy gaps" },
      { step: 2, title: "Implementation", description: "Deploy validation systems and quality protocols" },
      { step: 3, title: "Monitoring", description: "24/7 accuracy monitoring with real-time alerts" },
      { step: 4, title: "Optimization", description: "Continuous improvement based on performance data" }
    ],
    pricingTiers: [
      { name: "Basic", price: "$1,500/mo", features: ["Basic validation", "Monthly reports", "Email support"], cta: "Start Basic" },
      { name: "Pro", price: "$3,500/mo", features: ["Advanced validation", "Real-time monitoring", "Priority support"], cta: "Start Pro" },
      { name: "Enterprise", price: "Custom", features: ["Full automation", "Custom integrations", "SLA guarantee"], cta: "Contact Sales" }
    ],
    deliverables: ["Quality Control Framework", "Validation Rulebook", "Monitoring Dashboard"],
    technologies: ["Python", "SQL", "Tableau", "AWS S3", "GitHub Actions"]
  },
  
  "ecommerce-solutions": {
    title: "Ecommerce Solutions",
    description: "Complete online store development and optimization",
    longDescription: "End-to-end ecommerce solutions from platform selection to launch. We build scalable online stores with seamless payment integrations, inventory management, and marketing automation.",
    icon: serviceIcons["ecommerce-solutions"],
    features: [
      "Platform setup (Shopify, WooCommerce, Magento)",
      "Payment gateway integration",
      "Inventory management systems",
      "Shopping cart optimization",
      "Mobile-responsive design",
      "SEO and marketing integration"
    ],
    processes: [
      { step: 1, title: "Discovery", description: "Understand business goals and technical requirements" },
      { step: 2, title: "Platform Setup", description: "Configure ecommerce platform with custom themes" },
      { step: 3, title: "Integration", description: "Connect payment, shipping, and inventory systems" },
      { step: 4, title: "Launch & Optimize", description: "Go live and implement conversion optimization" }
    ],
    pricingTiers: [
      { name: "Starter", price: "$2,500", features: ["Basic store setup", "Theme installation", "Essential plugins"], cta: "Get Started" },
      { name: "Professional", price: "$5,000", features: ["Custom design", "Payment integration", "Inventory setup", "Basic SEO"], cta: "Choose Professional" },
      { name: "Enterprise", price: "$10,000+", features: ["Full customization", "Multi-channel integration", "Advanced analytics", "Ongoing support"], cta: "Contact for Quote" }
    ],
    technologies: ["Shopify", "WooCommerce", "React", "Next.js", "Stripe", "PayPal"]
  },
  
  "account-management": {
    title: "Account Management",
    description: "Dedicated success managers for long-term growth",
    longDescription: "Our Account Management service provides dedicated success managers who work closely with your team to ensure long-term growth and customer retention.",
    icon: serviceIcons["account-management"],
    features: [
      "Dedicated account manager",
      "Strategic planning sessions",
      "Performance reviews",
      "Growth strategy development",
      "Quarterly business reviews",
      "Risk mitigation planning"
    ],
    processes: [
      { step: 1, title: "Onboarding", description: "Comprehensive onboarding and goal setting" },
      { step: 2, title: "Strategy", description: "Develop customized growth strategies" },
      { step: 3, title: "Execution", description: "Implement strategies with regular check-ins" },
      { step: 4, title: "Optimization", description: "Continuously optimize based on results" }
    ],
    pricingTiers: [
      { name: "Basic", price: "$1,000/mo", features: ["Monthly check-ins", "Email support", "Basic reporting"], cta: "Start Basic" },
      { name: "Professional", price: "$2,500/mo", features: ["Weekly check-ins", "Strategic planning", "Advanced reporting"], cta: "Start Pro" },
      { name: "Enterprise", price: "Custom", features: ["Dedicated manager", "24/7 support", "Custom integrations"], cta: "Contact Sales" }
    ],
    technologies: ["Salesforce", "HubSpot", "Slack", "Zoom", "Google Workspace"]
  },
  
  "automated-workflow": {
    title: "Automated Workflow",
    description: "Eliminate manual tasks with intelligent automation",
    longDescription: "Streamline your business processes with our automated workflow solutions. We identify repetitive tasks and implement intelligent automation to save time and reduce errors.",
    icon: serviceIcons["automated-workflow"],
    features: [
      "Process analysis and mapping",
      "Workflow automation design",
      "Integration with existing systems",
      "Error handling and notifications",
      "Performance analytics",
      "Continuous optimization"
    ],
    processes: [
      { step: 1, title: "Discovery", description: "Identify automation opportunities" },
      { step: 2, title: "Design", description: "Create automated workflow blueprints" },
      { step: 3, title: "Implementation", description: "Build and deploy automation solutions" },
      { step: 4, title: "Monitoring", description: "Track performance and optimize" }
    ],
    pricingTiers: [
      { name: "Starter", price: "$1,500", features: ["Basic workflow setup", "3 automations", "Email support"], cta: "Get Started" },
      { name: "Professional", price: "$3,500", features: ["Advanced workflows", "10 automations", "Priority support"], cta: "Choose Pro" },
      { name: "Enterprise", price: "Custom", features: ["Unlimited automations", "Custom development", "24/7 support"], cta: "Contact Us" }
    ],
    technologies: ["Zapier", "Make.com", "n8n", "Python", "JavaScript"]
  },
  
  "ai-solutions": {
    title: "AI Solutions",
    description: "Intelligent automation and predictive analytics",
    longDescription: "Leverage artificial intelligence to transform your business operations. From custom ChatGPT agents to predictive analytics and automation bots, we build AI solutions that drive efficiency and insights.",
    icon: serviceIcons["ai-solutions"],
    features: [
      "Custom AI chatbots and virtual assistants",
      "Predictive analytics and forecasting models",
      "Process automation with machine learning",
      "Natural language processing systems",
      "Computer vision applications",
      "AI-powered data analysis"
    ],
    processes: [
      { step: 1, title: "AI Strategy", description: "Identify AI opportunities and define use cases" },
      { step: 2, title: "Data Preparation", description: "Clean and prepare data for AI model training" },
      { step: 3, title: "Model Development", description: "Build and train AI models for your specific needs" },
      { step: 4, title: "Integration & Deployment", description: "Implement AI solutions into your workflows" }
    ],
    pricingTiers: [
      { name: "Consultation", price: "$500", features: ["AI strategy session", "Use case identification", "Feasibility analysis"], cta: "Book Consultation" },
      { name: "Project", price: "$5,000+", features: ["Custom AI solution", "Model development", "Basic integration", "30-day support"], cta: "Start Project" },
      { name: "Enterprise AI", price: "Custom", features: ["Multiple AI agents", "Advanced integrations", "Ongoing optimization", "Dedicated support"], cta: "Schedule Demo" }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain"]
  },
  
  "web-development": {
    title: "Web Development",
    description: "Modern, scalable web applications",
    longDescription: "We build high-performance web applications using cutting-edge technologies like Next.js, React, and Node.js. From responsive frontends to robust backends, we deliver solutions that scale with your business.",
    icon: serviceIcons["web-development"],
    features: [
      "Responsive frontend development",
      "Backend API development",
      "Database design & optimization",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive Web Apps"
    ],
    processes: [
      { step: 1, title: "Planning", description: "Define requirements and architecture" },
      { step: 2, title: "Design", description: "Create wireframes and user interfaces" },
      { step: 3, title: "Development", description: "Build with modern frameworks and best practices" },
      { step: 4, title: "Testing & Launch", description: "Quality assurance and deployment" }
    ],
    pricingTiers: [
      { name: "Basic Website", price: "$3,000", features: ["5 pages", "Responsive design", "Basic CMS"], cta: "Get Quote" },
      { name: "Web Application", price: "$10,000+", features: ["Custom features", "Database", "API integration"], cta: "Start Project" },
      { name: "Enterprise Platform", price: "Custom", features: ["Scalable architecture", "Advanced features", "Maintenance"], cta: "Contact Us" }
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
  },
  
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "AWS, GCP, Azure — architecture & migration",
    longDescription: "Transform your infrastructure with our expert cloud solutions. We design, migrate, and optimize cloud environments for maximum performance, security, and cost-efficiency across AWS, Google Cloud, and Azure.",
    icon: serviceIcons["cloud-solutions"],
    features: [
      "Cloud architecture design",
      "Migration planning & execution",
      "Cost optimization strategies",
      "Security & compliance setup",
      "DevOps automation",
      "Monitoring & alerting systems"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Analyze current infrastructure and requirements" },
      { step: 2, title: "Planning", description: "Design cloud architecture and migration strategy" },
      { step: 3, title: "Migration", description: "Execute migration with zero downtime" },
      { step: 4, title: "Optimization", description: "Continuous monitoring and cost optimization" }
    ],
    pricingTiers: [
      { name: "Consultation", price: "$750", features: ["Cloud assessment", "Migration strategy"], cta: "Book Call" },
      { name: "Migration", price: "$5,000+", features: ["Full migration", "Testing", "Documentation"], cta: "Start Migration" },
      { name: "Managed Cloud", price: "$2,000/mo", features: ["24/7 monitoring", "Cost optimization", "Security"], cta: "Learn More" }
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"]
  },
  
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Pen testing, compliance, and threat monitoring",
    longDescription: "Protect your business from cyber threats with our comprehensive security solutions. We implement robust security measures, conduct penetration testing, and ensure compliance with industry standards.",
    icon: serviceIcons["cybersecurity"],
    features: [
      "Penetration testing & vulnerability assessment",
      "Security monitoring & threat detection",
      "Compliance management (GDPR, SOC 2, ISO)",
      "Incident response planning",
      "Security awareness training",
      "Continuous security updates"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Evaluate current security posture and identify risks" },
      { step: 2, title: "Planning", description: "Develop comprehensive security strategy" },
      { step: 3, title: "Implementation", description: "Deploy security measures and monitoring" },
      { step: 4, title: "Maintenance", description: "Continuous monitoring and updates" }
    ],
    pricingTiers: [
      { name: "Basic Security", price: "$1,000/mo", features: ["Basic monitoring", "Monthly reports", "Email support"], cta: "Get Started" },
      { name: "Advanced Security", price: "$3,000/mo", features: ["24/7 monitoring", "Pen testing", "Compliance support"], cta: "Upgrade Now" },
      { name: "Enterprise Security", price: "Custom", features: ["Full security suite", "Dedicated team", "SLA guarantee"], cta: "Contact Us" }
    ],
    technologies: ["SIEM", "Firewalls", "IDS/IPS", "VPN", "Encryption", "Multi-factor Auth"]
  },
  
  "data-migration": {
    title: "Data Migration",
    description: "Zero-downtime transfers with full validation",
    longDescription: "Seamlessly migrate your data between systems with zero downtime. Our data migration services ensure complete data integrity, validation, and minimal business disruption.",
    icon: serviceIcons["data-migration"],
    features: [
      "Zero-downtime migration planning",
      "Data validation and integrity checks",
      "Backup and rollback strategies",
      "Performance optimization",
      "Post-migration support",
      "Comprehensive documentation"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Analyze source and target systems" },
      { step: 2, title: "Planning", description: "Develop migration strategy and timeline" },
      { step: 3, title: "Migration", description: "Execute migration with validation checks" },
      { step: 4, title: "Verification", description: "Verify data integrity and performance" }
    ],
    pricingTiers: [
      { name: "Small Migration", price: "$2,500", features: ["Up to 10GB data", "Basic validation", "Email support"], cta: "Get Quote" },
      { name: "Medium Migration", price: "$5,000+", features: ["Up to 100GB data", "Advanced validation", "Priority support"], cta: "Start Migration" },
      { name: "Enterprise Migration", price: "Custom", features: ["Unlimited data", "Custom solutions", "24/7 support"], cta: "Contact Sales" }
    ],
    technologies: ["ETL Tools", "SQL", "Python", "AWS DMS", "Apache Kafka"]
  },
  
  "staff-augmentation": {
    title: "Staff Augmentation",
    description: "Vetted developers, designers, PMs — ready in 48h",
    longDescription: "Quickly scale your team with our vetted professionals. We provide developers, designers, and project managers who are ready to integrate with your team in 48 hours.",
    icon: serviceIcons["staff-augmentation"],
    features: [
      "48-hour onboarding guarantee",
      "Vetted professionals",
      "Flexible engagement models",
      "Direct team integration",
      "Performance monitoring",
      "Easy scaling up/down"
    ],
    processes: [
      { step: 1, title: "Requirement Analysis", description: "Understand your team needs and skills required" },
      { step: 2, title: "Candidate Matching", description: "Match with pre-vetted professionals" },
      { step: 3, title: "Onboarding", description: "Rapid onboarding and team integration" },
      { step: 4, title: "Ongoing Support", description: "Continuous performance monitoring and support" }
    ],
    pricingTiers: [
      { name: "Part-time", price: "$40/hour", features: ["20 hours/week", "Single professional", "Basic support"], cta: "Hire Now" },
      { name: "Full-time", price: "$5,000/mo", features: ["40 hours/week", "Dedicated professional", "Priority support"], cta: "Get Started" },
      { name: "Team", price: "Custom", features: ["Multiple professionals", "Team management", "24/7 support"], cta: "Build Team" }
    ],
    technologies: ["Various based on needs"]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <ServiceFeatures service={service} />
      <ServiceWorkflow service={service} />
      <ServicePricing service={service} />
      <ServicesCTA />
    </main>
  );
}