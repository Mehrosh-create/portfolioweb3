/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    
    qualities: [25, 50, 75, 95, 100], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
  // In Next.js 15+, eslint config is moved to a separate top-level handling
  // or handled via the CLI. To ignore it during builds now:
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
