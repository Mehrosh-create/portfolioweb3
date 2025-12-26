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
  Settings,
  Monitor,
  Server,
  Package,
  ClipboardCheck,
  Calendar,
  FolderOpen,
  PenTool,
  Bell,
  Cog,
  Tag,
  Filter
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
  "technical-documentation": <FileText className="w-8 h-8" />,
  "content-marketing": <PenTool className="w-8 h-8" />,
  "social-media-management": <Bell className="w-8 h-8" />,
  "seo-optimization": <Filter className="w-8 h-8" />,
  "brand-strategy": <Tag className="w-8 h-8" />,
  "event-management": <Calendar className="w-8 h-8" />,
  "it-support": <Cog className="w-8 h-8" />,
  "quality-assurance": <ClipboardCheck className="w-8 h-8" />,
  "vendor-management": <FolderOpen className="w-8 h-8" />
};

// Complete Service Data Mapping - ALL 24 SERVICES
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
    title: "Ecommerce Solutionss",
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
  
  "saas-development": {
    title: "SaaS Development",
    description: "Subscription platforms & billing systems",
    longDescription: "We build scalable Software-as-a-Service platforms with subscription management, billing systems, and multi-tenancy architecture. Our solutions are designed to grow with your business.",
    icon: serviceIcons["saas-development"],
    features: [
      "Subscription management systems",
      "Recurring billing & invoicing",
      "Multi-tenant architecture",
      "User management & roles",
      "API development & documentation",
      "Scalable cloud infrastructure"
    ],
    processes: [
      { step: 1, title: "Planning", description: "Define requirements and architecture" },
      { step: 2, title: "Development", description: "Build core features and billing systems" },
      { step: 3, title: "Testing", description: "Quality assurance and security testing" },
      { step: 4, title: "Launch", description: "Deploy and monitor performance" }
    ],
    pricingTiers: [
      { name: "MVP", price: "$15,000", features: ["Basic features", "Simple billing", "3 months support"], cta: "Start MVP" },
      { name: "Standard", price: "$30,000+", features: ["Advanced features", "Recurring billing", "6 months support"], cta: "Choose Standard" },
      { name: "Enterprise", price: "Custom", features: ["Custom features", "White-label", "1 year support"], cta: "Contact Sales" }
    ],
    deliverables: ["SaaS Platform", "Billing System", "Admin Dashboard", "API Documentation"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"]
  },
  
  "account-management": {
    title: "Account Management",
    description: "Dedicated success managers for long-term growth",
    longDescription: "Our Account Management service provides dedicated success managers who work closely with your team to ensure long-term growth, customer retention, and strategic alignment with business goals.",
    icon: serviceIcons["account-management"],
    features: [
      "Dedicated account manager",
      "Strategic planning sessions",
      "Performance reviews & reporting",
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
    longDescription: "Streamline your business processes with our automated workflow solutions. We identify repetitive tasks and implement intelligent automation to save time, reduce errors, and improve efficiency across your organization.",
    icon: serviceIcons["automated-workflow"],
    features: [
      "Process analysis and mapping",
      "Workflow automation design",
      "Integration with existing systems",
      "Error handling and notifications",
      "Performance analytics dashboard",
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
    longDescription: "Leverage artificial intelligence to transform your business operations. From custom ChatGPT agents to predictive analytics and automation bots, we build AI solutions that drive efficiency, insights, and competitive advantage.",
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
    longDescription: "We build high-performance web applications using cutting-edge technologies like Next.js, React, and Node.js. From responsive frontends to robust backends, we deliver solutions that scale with your business and provide exceptional user experiences.",
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
    longDescription: "Transform your infrastructure with our expert cloud solutions. We design, migrate, and optimize cloud environments for maximum performance, security, and cost-efficiency across AWS, Google Cloud, and Azure platforms.",
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
    longDescription: "Protect your business from cyber threats with our comprehensive security solutions. We implement robust security measures, conduct penetration testing, and ensure compliance with industry standards to safeguard your digital assets.",
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
    longDescription: "Seamlessly migrate your data between systems with zero downtime. Our data migration services ensure complete data integrity, validation, and minimal business disruption during the transition process.",
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
    longDescription: "Quickly scale your team with our vetted professionals. We provide developers, designers, and project managers who are ready to integrate with your team in 48 hours, bringing expertise and flexibility to your projects.",
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
  },
  
  "data-analysis": {
    title: "Data Analysis",
    description: "Business intelligence & analytics",
    longDescription: "Transform your raw data into actionable insights with our data analysis services. We create comprehensive dashboards, establish KPIs, and implement predictive analytics to drive data-informed decision making.",
    icon: serviceIcons["data-analysis"],
    features: [
      "Interactive dashboards",
      "KPI development & tracking",
      "Predictive analytics",
      "Data visualization",
      "Statistical analysis",
      "Business intelligence reporting"
    ],
    processes: [
      { step: 1, title: "Data Assessment", description: "Review data sources and quality" },
      { step: 2, title: "Requirements Gathering", description: "Identify key metrics and reporting needs" },
      { step: 3, title: "Dashboard Development", description: "Build interactive analytics dashboards" },
      { step: 4, title: "Deployment & Training", description: "Implement solutions and train users" }
    ],
    pricingTiers: [
      { name: "Basic Analysis", price: "$2,000", features: ["Basic dashboard", "Monthly reports", "Email support"], cta: "Get Started" },
      { name: "Advanced Analytics", price: "$5,000+", features: ["Custom dashboards", "Predictive models", "Priority support"], cta: "Choose Advanced" },
      { name: "Enterprise BI", price: "Custom", features: ["Full BI suite", "Real-time analytics", "Dedicated support"], cta: "Contact Sales" }
    ],
    technologies: ["Tableau", "Power BI", "Python", "SQL", "Looker", "Google Data Studio"]
  },
  
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User experience & interface design",
    longDescription: "Create exceptional user experiences with our UI/UX design services. We conduct user research, create wireframes and prototypes, and develop design systems that enhance usability and drive engagement.",
    icon: serviceIcons["ui-ux-design"],
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design systems",
      "Usability testing",
      "Interaction design",
      "Design documentation"
    ],
    processes: [
      { step: 1, title: "Research", description: "Conduct user research and analysis" },
      { step: 2, title: "Wireframing", description: "Create wireframes and user flows" },
      { step: 3, title: "Design", description: "Develop visual designs and prototypes" },
      { step: 4, title: "Testing", description: "Usability testing and iteration" }
    ],
    pricingTiers: [
      { name: "Basic Design", price: "$3,000", features: ["Wireframes", "Basic UI design", "3 revisions"], cta: "Get Quote" },
      { name: "Full Design", price: "$8,000+", features: ["Complete UI/UX", "Prototypes", "Design system"], cta: "Start Project" },
      { name: "Enterprise Design", price: "Custom", features: ["Multiple products", "Design system", "Ongoing support"], cta: "Contact Us" }
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin"]
  },
  
  "devops-cicd": {
    title: "DevOps & CI/CD",
    description: "Automation & deployment pipelines",
    longDescription: "Accelerate your development lifecycle with our DevOps and CI/CD solutions. We implement automated pipelines, infrastructure as code, and monitoring systems to improve deployment frequency and reliability.",
    icon: serviceIcons["devops-cicd"],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Security scanning",
      "Performance optimization"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Evaluate current development workflow" },
      { step: 2, title: "Pipeline Design", description: "Design CI/CD pipelines and infrastructure" },
      { step: 3, title: "Implementation", description: "Set up automation and deployment systems" },
      { step: 4, title: "Monitoring", description: "Implement monitoring and optimization" }
    ],
    pricingTiers: [
      { name: "Basic Setup", price: "$4,000", features: ["Basic CI/CD", "Docker setup", "Email support"], cta: "Get Started" },
      { name: "Advanced DevOps", price: "$10,000+", features: ["Full automation", "Kubernetes", "Priority support"], cta: "Choose Advanced" },
      { name: "Enterprise DevOps", price: "Custom", features: ["Complete DevOps", "24/7 monitoring", "Dedicated team"], cta: "Contact Sales" }
    ],
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins"]
  },
  
  "google-workspace": {
    title: "Google Workspace",
    description: "Migration & management",
    longDescription: "Streamline your collaboration with Google Workspace implementation and management. We handle migration from other platforms, security configuration, and user training for optimal productivity.",
    icon: serviceIcons["google-workspace"],
    features: [
      "Migration from other platforms",
      "Security & compliance setup",
      "Shared drives & collaboration",
      "Admin training & support",
      "Email configuration",
      "User management"
    ],
    processes: [
      { step: 1, title: "Planning", description: "Assess needs and plan migration strategy" },
      { step: 2, title: "Migration", description: "Execute data migration with minimal disruption" },
      { step: 3, title: "Configuration", description: "Set up security and collaboration tools" },
      { step: 4, title: "Training", description: "Train administrators and users" }
    ],
    pricingTiers: [
      { name: "Basic Setup", price: "$1,500", features: ["Email migration", "Basic setup", "Email support"], cta: "Get Started" },
      { name: "Full Migration", price: "$3,500+", features: ["Complete migration", "Security setup", "Admin training"], cta: "Start Migration" },
      { name: "Managed Service", price: "$500/mo", features: ["Ongoing management", "24/7 support", "Regular updates"], cta: "Learn More" }
    ],
    technologies: ["Google Workspace", "Gmail", "Google Drive", "Google Meet", "Google Calendar"]
  },
  
  "hubspot-crm": {
    title: "HubSpot CRM",
    description: "Implementation & automation",
    longDescription: "Maximize your customer relationships with HubSpot CRM implementation. We set up the platform, create automation workflows, and provide training to help your sales and marketing teams work more effectively.",
    icon: serviceIcons["hubspot-crm"],
    features: [
      "CRM implementation & setup",
      "Sales pipeline configuration",
      "Marketing automation",
      "Integration with other tools",
      "Reporting & analytics",
      "Team training"
    ],
    processes: [
      { step: 1, title: "Discovery", description: "Understand business processes and needs" },
      { step: 2, title: "Implementation", description: "Configure HubSpot CRM and integrations" },
      { step: 3, title: "Automation", description: "Set up automation workflows" },
      { step: 4, title: "Training", description: "Train team members and provide documentation" }
    ],
    pricingTiers: [
      { name: "Basic Setup", price: "$2,500", features: ["CRM setup", "Basic automations", "Email support"], cta: "Get Started" },
      { name: "Advanced Setup", price: "$5,000+", features: ["Full implementation", "Advanced automations", "Priority support"], cta: "Choose Advanced" },
      { name: "Managed CRM", price: "$1,000/mo", features: ["Ongoing management", "24/7 support", "Regular optimizations"], cta: "Contact Sales" }
    ],
    technologies: ["HubSpot CRM", "Sales Hub", "Marketing Hub", "Service Hub", "HubSpot APIs"]
  },
  
  "administrative-support": {
    title: "Administrative Support",
    description: "Virtual assistance & operations",
    longDescription: "Streamline your administrative tasks with our virtual assistance services. We provide scheduling, email management, document preparation, and executive support to help you focus on core business activities.",
    icon: serviceIcons["administrative-support"],
    features: [
      "Email & calendar management",
      "Document preparation",
      "Meeting scheduling",
      "Travel arrangements",
      "Data entry & organization",
      "Executive support"
    ],
    processes: [
      { step: 1, title: "Onboarding", description: "Understand your workflow and preferences" },
      { step: 2, title: "Setup", description: "Configure systems and access" },
      { step: 3, title: "Service Delivery", description: "Provide daily administrative support" },
      { step: 4, title: "Review", description: "Regular performance reviews and adjustments" }
    ],
    pricingTiers: [
      { name: "Part-time", price: "$800/mo", features: ["20 hours/month", "Email management", "Basic support"], cta: "Get Started" },
      { name: "Full-time", price: "$2,500/mo", features: ["40 hours/month", "Comprehensive support", "Priority access"], cta: "Choose Full-time" },
      { name: "Dedicated Assistant", price: "Custom", features: ["Dedicated professional", "24/7 availability", "Custom tasks"], cta: "Contact Sales" }
    ],
    technologies: ["Microsoft Office", "Google Workspace", "Calendly", "Zoom", "Slack"]
  },
  
  "business-operations": {
    title: "Business Operations",
    description: "Process optimization & improvement",
    longDescription: "Optimize your business operations with our process improvement services. We analyze your workflows, identify inefficiencies, and implement solutions to enhance productivity and reduce costs across your organization.",
    icon: serviceIcons["business-operations"],
    features: [
      "Process analysis & mapping",
      "Workflow optimization",
      "Cost reduction strategies",
      "Efficiency improvements",
      "Performance metrics",
      "Continuous improvement"
    ],
    processes: [
      { step: 1, title: "Assessment", description: "Analyze current operations and identify issues" },
      { step: 2, title: "Planning", description: "Develop optimization strategies" },
      { step: 3, title: "Implementation", description: "Execute improvements and changes" },
      { step: 4, title: "Monitoring", description: "Track results and make adjustments" }
    ],
    pricingTiers: [
      { name: "Consultation", price: "$1,500", features: ["Process analysis", "Recommendations", "Basic report"], cta: "Book Consultation" },
      { name: "Project", price: "$5,000+", features: ["Full optimization", "Implementation support", "3 months follow-up"], cta: "Start Project" },
      { name: "Ongoing Support", price: "$2,000/mo", features: ["Continuous optimization", "Regular reviews", "Priority support"], cta: "Contact Sales" }
    ],
    technologies: ["Process mapping tools", "Analytics platforms", "Project management software"]
  },
  
  "crm-automation": {
    title: "CRM Automation",
    description: "Customer relationship automation",
    longDescription: "Automate your customer relationship management processes to improve engagement, increase sales, and enhance customer satisfaction. We create custom automation workflows that work seamlessly with your existing CRM systems.",
    icon: serviceIcons["crm-automation"],
    features: [
      "Lead nurturing automation",
      "Sales pipeline automation",
      "Customer onboarding workflows",
      "Support ticket routing",
      "Marketing campaign automation",
      "Reporting & analytics"
    ],
    processes: [
      { step: 1, title: "Analysis", description: "Review current CRM processes and identify automation opportunities" },
      { step: 2, title: "Design", description: "Create automation workflow blueprints" },
      { step: 3, title: "Implementation", description: "Build and deploy automation solutions" },
      { step: 4, title: "Optimization", description: "Monitor performance and make improvements" }
    ],
    pricingTiers: [
      { name: "Basic Automation", price: "$2,000", features: ["Lead nurturing", "Basic workflows", "Email support"], cta: "Get Started" },
      { name: "Advanced Automation", price: "$5,000+", features: ["Full automation", "Custom workflows", "Priority support"], cta: "Choose Advanced" },
      { name: "Enterprise Automation", price: "Custom", features: ["Complete automation", "Integration with multiple systems", "24/7 support"], cta: "Contact Sales" }
    ],
    technologies: ["HubSpot", "Salesforce", "Zoho CRM", "ActiveCampaign", "Zapier"]
  },
  
  "compliance-services": {
    title: "Compliance Services",
    description: "GDPR, SOC 2, ISO compliance",
    longDescription: "Ensure your business meets regulatory requirements with our compliance services. We help you achieve and maintain certifications like GDPR, SOC 2, and ISO, providing peace of mind and building trust with your customers.",
    icon: serviceIcons["compliance-services"],
    features: [
      "GDPR compliance",
      "SOC 2 certification",
      "ISO standards compliance",
      "Audit preparation",
      "Policy development",
      "Staff training"
    ],
    processes: [
      { step: 1, title: "Gap Analysis", description: "Identify compliance gaps and requirements" },
      { step: 2, title: "Remediation", description: "Address identified gaps and implement controls" },
      { step: 3, title: "Documentation", description: "Prepare documentation and policies" },
      { step: 4, title: "Certification", description: "Support through audit and certification" }
    ],
    pricingTiers: [
      { name: "Consultation", price: "$2,000", features: ["Gap analysis", "Recommendations", "Basic roadmap"], cta: "Book Consultation" },
      { name: "Certification", price: "$15,000+", features: ["Full compliance", "Audit support", "Certification"], cta: "Start Certification" },
      { name: "Managed Compliance", price: "$3,000/mo", features: ["Ongoing compliance", "Regular audits", "Policy updates"], cta: "Contact Sales" }
    ],
    technologies: ["Compliance management software", "Document management systems", "Security tools"]
  },
  
  "technical-documentation": {
    title: "Technical Documentation",
    description: "Knowledge bases & documentation",
    longDescription: "Create comprehensive technical documentation that helps users understand and use your products effectively. We develop user guides, API documentation, and knowledge bases that improve user experience and reduce support requests.",
    icon: serviceIcons["technical-documentation"],
    features: [
      "API documentation",
      "User guides & manuals",
      "Knowledge base creation",
      "Process documentation",
      "Technical writing",
      "Documentation maintenance"
    ],
    processes: [
      { step: 1, title: "Requirements", description: "Understand documentation needs and audience" },
      { step: 2, title: "Content Creation", description: "Write and organize documentation content" },
      { step: 3, title: "Review", description: "Review with stakeholders and subject matter experts" },
      { step: 4, title: "Publication", description: "Publish and maintain documentation" }
    ],
    pricingTiers: [
      { name: "Basic Docs", price: "$2,500", features: ["User guide", "Basic API docs", "Email support"], cta: "Get Started" },
      { name: "Complete Docs", price: "$6,000+", features: ["Full documentation", "Knowledge base", "6 months updates"], cta: "Choose Complete" },
      { name: "Ongoing Documentation", price: "$1,500/mo", features: ["Continuous updates", "New feature docs", "Priority support"], cta: "Contact Sales" }
    ],
    technologies: ["GitBook", "ReadMe", "Swagger", "Markdown", "Confluence"]
  },
  
  "email-marketing": {
    title: "Email Marketing",
    description: "Campaign management & automation",
    longDescription: "Drive engagement and conversions with our email marketing services. We create targeted campaigns, set up automation workflows, and provide analytics to help you build lasting relationships with your audience.",
    icon: serviceIcons["email-marketing"],
    features: [
      "Email campaign strategy",
      "Automation workflow setup",
      "List segmentation",
      "A/B testing",
      "Performance analytics",
      "Deliverability optimization"
    ],
    processes: [
      { step: 1, title: "Strategy", description: "Develop email marketing strategy and goals" },
      { step: 2, title: "Setup", description: "Configure email platform and automations" },
      { step: 3, title: "Campaign Creation", description: "Design and create email campaigns" },
      { step: 4, title: "Optimization", description: "Analyze performance and optimize campaigns" }
    ],
    pricingTiers: [
      { name: "Basic Campaigns", price: "$1,500/mo", features: ["Monthly campaigns", "Basic automations", "Email support"], cta: "Get Started" },
      { name: "Advanced Marketing", price: "$3,500/mo", features: ["Multiple campaigns", "Advanced automations", "Priority support"], cta: "Choose Advanced" },
      { name: "Enterprise Marketing", price: "Custom", features: ["Full strategy", "Custom solutions", "Dedicated manager"], cta: "Contact Sales" }
    ],
    technologies: ["Klaviyo", "Mailchimp", "HubSpot", "ActiveCampaign", "SendGrid"]
  },
  
  "project-management": {
    title: "Project Management",
    description: "Professional PM solutions",
    longDescription: "Ensure successful project delivery with our professional project management services. We use proven methodologies, risk management techniques, and transparent communication to keep your projects on track and within budget.",
    icon: serviceIcons["project-management"],
    features: [
      "Project planning & scheduling",
      "Risk management",
      "Stakeholder communication",
      "Budget tracking",
      "Progress reporting",
      "Quality assurance"
    ],
    processes: [
      { step: 1, title: "Initiation", description: "Define project scope and objectives" },
      { step: 2, title: "Planning", description: "Develop detailed project plan" },
      { step: 3, title: "Execution", description: "Manage project execution and team" },
      { step: 4, title: "Closure", description: "Deliver project and conduct review" }
    ],
    pricingTiers: [
      { name: "Project Setup", price: "$2,500", features: ["Project planning", "Basic setup", "Email support"], cta: "Get Started" },
      { name: "Full Management", price: "$5,000+/project", features: ["Complete management", "Regular reporting", "Risk management"], cta: "Start Management" },
      { name: "Ongoing PMO", price: "$3,000/mo", features: ["Portfolio management", "Multiple projects", "Dedicated PM"], cta: "Contact Sales" }
    ],
    technologies: ["Asana", "Jira", "ClickUp", "Monday.com", "Microsoft Project"]
  },
  
  "program-management": {
    title: "Program Management",
    description: "Multi-project strategy & alignment",
    longDescription: "Coordinate multiple related projects with our program management services. We ensure strategic alignment, optimize resource allocation, and provide executive visibility to maximize the value of your project portfolio.",
    icon: serviceIcons["program-management"],
    features: [
      "Program strategy & planning",
      "Resource optimization",
      "Stakeholder alignment",
      "Risk management",
      "Performance tracking",
      "Executive reporting"
    ],
    processes: [
      { step: 1, title: "Strategy", description: "Define program goals and alignment" },
      { step: 2, title: "Planning", description: "Develop program roadmap and governance" },
      { step: 3, title: "Execution", description: "Coordinate multiple projects and teams" },
      { step: 4, title: "Optimization", description: "Monitor program performance and adjust" }
    ],
    pricingTiers: [
      { name: "Program Setup", price: "$5,000", features: ["Program strategy", "Basic setup", "Email support"], cta: "Get Started" },
      { name: "Full Program Management", price: "$10,000+/program", features: ["Complete management", "Executive reporting", "Strategic alignment"], cta: "Start Management" },
      { name: "Enterprise PMO", price: "$8,000/mo", features: ["Portfolio management", "Multiple programs", "Dedicated team"], cta: "Contact Sales" }
    ],
    technologies: ["Enterprise PM tools", "Portfolio management software", "Advanced analytics"]
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