import React from 'react';
import { 
  CheckCircle, ShoppingCart, Users, Workflow, Briefcase, Target, 
  Mail, BarChart, Cpu, Shield, Layout, Code, Cloud, Rocket, 
  Database, Zap, Globe, Headphones, Monitor, Server, FileText, Settings, 
  PenTool, Bell, Filter, Tag, Calendar, Cog, ClipboardCheck, FolderOpen
} from 'lucide-react';

// Service icons mapping
export const serviceIcons: Record<string, React.ReactNode> = {
  "accuracy-verification": React.createElement(CheckCircle, { className: "w-8 h-8" }),
  "ecommerce-solutions": React.createElement(ShoppingCart, { className: "w-8 h-8" }),
  "account-management": React.createElement(Users, { className: "w-8 h-8" }),
  "automated-workflow": React.createElement(Workflow, { className: "w-8 h-8" }),
  "project-management": React.createElement(Briefcase, { className: "w-8 h-8" }),
  "program-management": React.createElement(Target, { className: "w-8 h-8" }),
  "email-marketing": React.createElement(Mail, { className: "w-8 h-8" }),
  "data-analysis": React.createElement(BarChart, { className: "w-8 h-8" }),
  "ai-solutions": React.createElement(Cpu, { className: "w-8 h-8" }),
  "cybersecurity": React.createElement(Shield, { className: "w-8 h-8" }),
  "ui-ux-design": React.createElement(Layout, { className: "w-8 h-8" }),
  "web-development": React.createElement(Code, { className: "w-8 h-8" }),
  "cloud-solutions": React.createElement(Cloud, { className: "w-8 h-8" }),
  "saas-development": React.createElement(Rocket, { className: "w-8 h-8" }),
  "data-migration": React.createElement(Database, { className: "w-8 h-8" }),
  "devops-cicd": React.createElement(Zap, { className: "w-8 h-8" }),
  "google-workspace": React.createElement(Globe, { className: "w-8 h-8" }),
  "hubspot-crm": React.createElement(Settings, { className: "w-8 h-8" }),
  "administrative-support": React.createElement(Headphones, { className: "w-8 h-8" }),
  "staff-augmentation": React.createElement(Users, { className: "w-8 h-8" }),
  "business-operations": React.createElement(Monitor, { className: "w-8 h-8" }),
  "crm-automation": React.createElement(Server, { className: "w-8 h-8" }),
  "compliance-services": React.createElement(Shield, { className: "w-8 h-8" }),
  "technical-documentation": React.createElement(FileText, { className: "w-8 h-8" }),
  "content-marketing": React.createElement(PenTool, { className: "w-8 h-8" }),
  "social-media-management": React.createElement(Bell, { className: "w-8 h-8" }),
  "seo-optimization": React.createElement(Filter, { className: "w-8 h-8" }),
  "brand-strategy": React.createElement(Tag, { className: "w-8 h-8" }),
  "event-management": React.createElement(Calendar, { className: "w-8 h-8" }),
  "it-support": React.createElement(Cog, { className: "w-8 h-8" }),
  "quality-assurance": React.createElement(ClipboardCheck, { className: "w-8 h-8" }),
  "vendor-management": React.createElement(FolderOpen, { className: "w-8 h-8" })
};

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  image: string;
  overview: {
    whatWeDo: string[];
    whyItMatters: string;
    coreCapabilities: string[];
    image: string;
  };
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
  deliverables?: string[];
  technologies?: string[];
  theme?: {
    isDark?: boolean;
    heroImage: string;
  };
}

export const serviceData: Record<string, Service> = {
  "administrative-support": {
    slug: "administrative-support",
    title: "Administrative Support",
    description: "Virtual assistants, scheduling, inbox zero, and executive operations support.",
    longDescription: "Our administrative support services free you from time-consuming tasks so you can focus on what matters most. From managing your inbox to coordinating travel, we handle the details with professionalism and efficiency. We provide comprehensive virtual assistance, calendar management, email organization, document preparation, and executive support to streamline your operations.",
    icon: serviceIcons["administrative-support"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "Calendar coordination and scheduling",
        "Email management and organization",
        "Task coordination and follow-up",
        "Document preparation and management"
      ],
      whyItMatters: "Delegating administrative tasks gives you back valuable time to focus on strategic priorities and growth.",
      coreCapabilities: [
        "Virtual assistant services",
        "Meeting scheduling & coordination",
        "Document creation & management",
        "Expense tracking & reporting"
      ],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80"
    },
    features: [
      "Professional virtual assistant services",
      "Comprehensive calendar coordination",
      "Email organization & inbox management",
      "Document creation & formatting",
      "Travel planning & coordination",
      "Executive support & task management"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Evaluate your administrative needs and workflow requirements" },
      { step: 2, title: "Onboarding", description: "Configure systems and establish communication protocols" },
      { step: 3, title: "Service Delivery", description: "Provide daily administrative support and task management" },
      { step: 4, title: "Optimization", description: "Regular reviews and adjustments for continuous improvement" }
    ],
    pricingTiers: [
      { name: "Part-time Support", price: "$800/mo", features: ["20 hours/month", "Email management", "Calendar coordination", "Basic document prep"], cta: "Start Part-time" },
      { name: "Full-time Assistant", price: "$2,500/mo", features: ["40 hours/month", "Comprehensive support", "Travel coordination", "Executive assistance", "Priority access"], cta: "Choose Full-time" },
      { name: "Dedicated Team", price: "Custom", features: ["Multiple professionals", "24/7 availability", "Custom workflows", "Strategic support", "Dedicated manager"], cta: "Contact Sales" }
    ],
    deliverables: ["Administrative Workflow Framework", "Communication Protocol Guide", "Performance Dashboard", "Monthly Efficiency Report"],
    technologies: ["Microsoft Office Suite", "Google Workspace", "Calendly", "Zoom", "Slack", "Asana", "Trello", "Notion"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
    }
  },

  "ai-solutions": {
    slug: "ai-solutions",
    title: "AI Solutions",
    description: "ChatGPT integration, predictive analytics, and intelligent automation bots.",
    longDescription: "We implement cutting-edge AI solutions that transform business operations. From intelligent automation to predictive analytics, we help you leverage AI technologies to enhance decision-making and deliver exceptional experiences. Our solutions include custom AI chatbots, machine learning models, and automation systems tailored to your specific needs.",
    icon: serviceIcons["ai-solutions"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "ChatGPT and AI model integration",
        "Custom chatbot development",
        "Predictive analytics implementation",
        "Machine learning model training"
      ],
      whyItMatters: "AI solutions provide competitive advantages through automation, data insights, and enhanced customer experiences.",
      coreCapabilities: [
        "GPT-4 and Claude integration",
        "Custom AI model development",
        "Predictive analytics & forecasting",
        "24/7 intelligent automation"
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80"
    },
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
      { name: "AI Project", price: "$5,000+", features: ["Custom AI solution", "Model development", "Basic integration", "30-day support"], cta: "Start Project" },
      { name: "Enterprise AI", price: "Custom", features: ["Multiple AI agents", "Advanced integrations", "Ongoing optimization", "Dedicated support"], cta: "Schedule Demo" }
    ],
    deliverables: ["AI Strategy Document", "Trained AI Models", "Integration Guide", "Performance Dashboard"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "scikit-learn"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=80"
    }
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    description: "Modern, scalable web applications using cutting-edge technologies.",
    longDescription: "We build high-performance web applications using cutting-edge technologies like Next.js, React, and Node.js. From responsive frontends to robust backends, we deliver solutions that scale with your business and provide exceptional user experiences. Our development process ensures quality, performance, and maintainability.",
    icon: serviceIcons["web-development"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "Responsive web application development",
        "Backend API and database design",
        "Performance optimization",
        "Deployment and maintenance"
      ],
      whyItMatters: "A modern, high-performance website is essential for business growth, customer engagement, and competitive advantage.",
      coreCapabilities: [
        "Full-stack web development",
        "Progressive Web Apps",
        "E-commerce solutions",
        "API development"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80"
    },
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
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1800&q=80"
    }
  },

  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "Ecommerce Solutions",
    description: "Complete online store development and optimization.",
    longDescription: "End-to-end ecommerce solutions from platform selection to launch. We build scalable online stores with seamless payment integrations, inventory management, and marketing automation. Our solutions are designed to convert visitors into customers and grow your online business.",
    icon: serviceIcons["ecommerce-solutions"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "E-commerce platform setup",
        "Payment gateway integration",
        "Inventory management systems",
        "Shopping cart optimization"
      ],
      whyItMatters: "A professional e-commerce presence is crucial for reaching customers online and driving sales 24/7.",
      coreCapabilities: [
        "Multi-platform e-commerce",
        "Payment processing",
        "Inventory automation",
        "Conversion optimization"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
    },
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
      { name: "Starter Store", price: "$2,500", features: ["Basic store setup", "Theme installation", "Essential plugins"], cta: "Get Started" },
      { name: "Professional Store", price: "$5,000", features: ["Custom design", "Payment integration", "Inventory setup", "Basic SEO"], cta: "Choose Professional" },
      { name: "Enterprise Ecommerce", price: "$10,000+", features: ["Full customization", "Multi-channel integration", "Advanced analytics", "Ongoing support"], cta: "Contact for Quote" }
    ],
    technologies: ["Shopify", "WooCommerce", "React", "Next.js", "Stripe", "PayPal", "Magento"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=80"
    }
  },

  "cloud-solutions": {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "AWS, GCP, Azure — architecture & migration",
    longDescription: "Transform your infrastructure with our expert cloud solutions. We design, migrate, and optimize cloud environments for maximum performance, security, and cost-efficiency across AWS, Google Cloud, and Azure platforms.",
    icon: serviceIcons["cloud-solutions"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "Cloud architecture design and implementation",
        "Migration planning and execution",
        "Cost optimization strategies",
        "Security and compliance setup"
      ],
      whyItMatters: "Cloud solutions provide scalability, reliability, and cost-efficiency for modern businesses.",
      coreCapabilities: [
        "Multi-cloud strategy",
        "Infrastructure as Code",
        "DevOps automation",
        "Cloud security"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
    },
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
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
    }
  },

  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Pen testing, compliance, and threat monitoring",
    longDescription: "Protect your business from cyber threats with our comprehensive security solutions. We implement robust security measures, conduct penetration testing, and ensure compliance with industry standards to safeguard your digital assets.",
    icon: serviceIcons["cybersecurity"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    overview: {
      whatWeDo: [
        "Security assessment and penetration testing",
        "Compliance management and audits",
        "Threat monitoring and detection",
        "Incident response planning"
      ],
      whyItMatters: "Protecting your digital assets is critical for business continuity and customer trust.",
      coreCapabilities: [
        "Penetration testing",
        "Security monitoring",
        "Compliance management",
        "Incident response"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
    },
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
    technologies: ["SIEM", "Firewalls", "IDS/IPS", "VPN", "Encryption", "Multi-factor Auth"],
    theme: {
      heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80"
    }
  }
};

export const getAllServices = (): Service[] => Object.values(serviceData);