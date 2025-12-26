// app/services/[slug]/layout.tsx
import type { Metadata } from 'next';

// Service metadata for SEO
const serviceMetadata: Record<string, Metadata> = {
  "accuracy-verification": {
    title: "Accuracy Verification Service | 99.9% Data Quality Guarantee",
    description: "Professional accuracy verification services with 99.9% data quality guarantee. Automated validation, compliance monitoring, and quality control systems.",
    keywords: ["accuracy verification", "data quality", "validation", "compliance", "quality control"],
  },
  "ecommerce-solutions": {
    title: "Ecommerce Solutions | Complete Online Store Development",
    description: "End-to-end ecommerce solutions with Shopify, WooCommerce, Magento. Payment integration, inventory management, and marketing automation.",
    keywords: ["ecommerce", "online store", "shopify", "woocommerce", "magento", "payment integration"],
  },
  "ai-solutions": {
    title: "AI Solutions | Artificial Intelligence Development Services",
    description: "Custom AI solutions including chatbots, predictive analytics, machine learning models, and automation systems for business transformation.",
    keywords: ["ai solutions", "artificial intelligence", "machine learning", "chatbots", "predictive analytics"],
  },
  "web-development": {
    title: "Web Development | Modern Web Applications & Solutions",
    description: "Professional web development services using Next.js, React, Node.js. Responsive design, performance optimization, and scalable architecture.",
    keywords: ["web development", "next.js", "react", "node.js", "responsive design", "web applications"],
  },
  "cloud-solutions": {
    title: "Cloud Solutions | AWS, GCP, Azure Migration & Architecture",
    description: "Cloud solutions including migration, architecture design, cost optimization, and security across AWS, Google Cloud, and Azure platforms.",
    keywords: ["cloud solutions", "aws", "google cloud", "azure", "cloud migration", "cloud architecture"],
  },
  "cybersecurity": {
    title: "Cybersecurity Services | Protection & Compliance Solutions",
    description: "Comprehensive cybersecurity services including penetration testing, threat monitoring, compliance management, and security infrastructure.",
    keywords: ["cybersecurity", "security", "penetration testing", "compliance", "threat monitoring"],
  },
  "account-management": {
    title: "Account Management | Dedicated Success Management",
    description: "Professional account management services with dedicated success managers for business growth, retention, and strategic planning.",
    keywords: ["account management", "success management", "client retention", "strategic planning"],
  },
  "automated-workflow": {
    title: "Automated Workflow Solutions | Process Automation",
    description: "Intelligent workflow automation solutions to streamline business processes, reduce manual tasks, and improve operational efficiency.",
    keywords: ["automated workflow", "process automation", "workflow optimization", "business automation"],
  },
  "data-analysis": {
    title: "Data Analysis Services | Business Intelligence & Analytics",
    description: "Data analysis and business intelligence services including dashboards, KPIs, predictive analytics, and data-driven insights.",
    keywords: ["data analysis", "business intelligence", "analytics", "dashboards", "kpis"],
  },
  "ui-ux-design": {
    title: "UI/UX Design Services | User Experience & Interface Design",
    description: "Professional UI/UX design services including user research, wireframing, prototyping, and design system development.",
    keywords: ["ui design", "ux design", "user experience", "interface design", "wireframing"],
  },
  "data-migration": {
    title: "Data Migration Services | Zero-Downtime Data Transfer",
    description: "Secure data migration services with zero downtime, complete validation, and integrity checks for seamless system transitions.",
    keywords: ["data migration", "data transfer", "database migration", "system migration"],
  },
  "devops-cicd": {
    title: "DevOps & CI/CD Solutions | Automation & Deployment",
    description: "DevOps and CI/CD solutions including GitHub Actions, Docker, Kubernetes, Terraform, and automated deployment pipelines.",
    keywords: ["devops", "ci/cd", "docker", "kubernetes", "terraform", "automation"],
  },
  "google-workspace": {
    title: "Google Workspace Services | Migration & Management",
    description: "Google Workspace implementation, migration, security configuration, and administration services for businesses.",
    keywords: ["google workspace", "g suite", "google apps", "cloud collaboration"],
  },
  "hubspot-crm": {
    title: "HubSpot CRM Services | Implementation & Automation",
    description: "Complete HubSpot CRM implementation, customization, automation, and training services for sales and marketing teams.",
    keywords: ["hubspot", "crm", "customer relationship management", "sales automation"],
  },
  "administrative-support": {
    title: "Administrative Support Services | Virtual Assistance",
    description: "Professional administrative support services including virtual assistance, scheduling, email management, and executive operations.",
    keywords: ["administrative support", "virtual assistant", "executive support", "office administration"],
  },
  "staff-augmentation": {
    title: "Staff Augmentation | On-Demand Tech Talent",
    description: "Staff augmentation services providing vetted developers, designers, and project managers ready to join your team.",
    keywords: ["staff augmentation", "tech talent", "developers", "designers", "project managers"],
  },
  "business-operations": {
    title: "Business Operations Optimization | Process Improvement",
    description: "Business operations optimization services to streamline processes, improve efficiency, and drive organizational growth.",
    keywords: ["business operations", "process improvement", "operational efficiency", "business optimization"],
  },
  "crm-automation": {
    title: "CRM Automation Services | Customer Relationship Automation",
    description: "CRM automation solutions to streamline customer relationship management, improve engagement, and automate sales processes.",
    keywords: ["crm automation", "sales automation", "customer automation", "marketing automation"],
  },
  "compliance-services": {
    title: "Compliance Services | GDPR, SOC 2, ISO Compliance",
    description: "Compliance services including GDPR, SOC 2, ISO certifications, audit preparation, and regulatory compliance management.",
    keywords: ["compliance", "gdpr", "soc 2", "iso", "regulatory compliance"],
  },
  "technical-documentation": {
    title: "Technical Documentation Services | Knowledge Management",
    description: "Professional technical documentation services including API documentation, user guides, knowledge bases, and process documentation.",
    keywords: ["technical documentation", "api documentation", "user guides", "knowledge base"],
  },
  "email-marketing": {
    title: "Email Marketing Services | Campaign Management & Automation",
    description: "Email marketing services including campaign strategy, automation setup, segmentation, A/B testing, and performance analytics.",
    keywords: ["email marketing", "email automation", "campaign management", "klaviyo", "mailchimp"],
  },
  "project-management": {
    title: "Project Management Services | Professional PM Solutions",
    description: "Professional project management services using agile methodologies, risk management, and transparent project delivery.",
    keywords: ["project management", "agile", "scrum", "project delivery", "risk management"],
  },
  "program-management": {
    title: "Program Management | Multi-Project Strategy & Alignment",
    description: "Program management services for multi-project alignment, strategic planning, and business goal achievement.",
    keywords: ["program management", "portfolio management", "strategic alignment", "multi-project management"],
  },
  "saas-development": {
    title: "SaaS Development | Software as a Service Solutions",
    description: "SaaS development services including subscription platforms, billing systems, multi-tenancy, and scalable architecture.",
    keywords: ["saas", "software as a service", "subscription platforms", "multi-tenancy"],
  }
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const unwrappedParams = await params;
  const service = serviceMetadata[unwrappedParams.slug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  const serviceUrl = `${baseUrl}/services/${unwrappedParams.slug}`;
  
  return {
    ...service,
    openGraph: {
      title: service.title as string,
      description: service.description as string,
      url: serviceUrl,
      siteName: 'Your Company Name',
      images: [
        {
          url: `${baseUrl}/api/og?title=${encodeURIComponent(service.title as string)}&description=${encodeURIComponent(service.description as string)}`,
          width: 1200,
          height: 630,
          alt: service.title as string,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title as string,
      description: service.description as string,
      images: [`${baseUrl}/api/og?title=${encodeURIComponent(service.title as string)}&description=${encodeURIComponent(service.description as string)}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: serviceUrl,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Services",
            "description": "Comprehensive business solutions and professional services",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name",
              "url": "https://yourdomain.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Global"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Service Catalog",
              "itemListElement": Object.keys(serviceMetadata).map((slug) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": serviceMetadata[slug]?.title,
                  "description": serviceMetadata[slug]?.description
                }
              }))
            }
          })
        }}
      />
      
      {children}
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourdomain.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://yourdomain.com/services"
              }
            ]
          })
        }}
      />
    </div>
  );
}