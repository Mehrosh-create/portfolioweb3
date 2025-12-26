// data/blogArticles.ts
export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  likes: string;
  comments: string;
  excerpt: string;
  tags?: string[]; // ← Now optional string array (most important fix)
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "rise-of-digital-transformation",
    title: "Sheikh Nabeel on the Rise of Digital Transformation",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "/images/featured-post.jpg",
    likes: "892",
    comments: "156",
    excerpt: "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
    tags: ["Digital", "AI", "Innovation"], // ← Added real tags
  },
  {
    slug: "future-of-crm-systems",
    title: "The Future of CRM Systems in Global Markets",
    category: "CRM SYSTEMS",
    readTime: "6 min read",
    date: "March 12, 2025",
    image: "/images/crm-future.jpg",
    likes: "443",
    comments: "89",
    excerpt: "CRM systems are becoming more intelligent with AI-driven insights.",
    tags: ["CRM", "Automation", "Business"],
  },
  {
    slug: "authentic-leadership-digital",
    title: "Building Authentic Leadership in Digital Organizations",
    category: "LEADERSHIP",
    readTime: "5 min read",
    date: "March 10, 2025",
    image: "/images/digital-leadership.jpg",
    likes: "678",
    comments: "124",
    excerpt: "Leadership in the digital age requires adaptability and empathy.",
    tags: ["Leadership", "Culture", "Remote Work"],
  },
];