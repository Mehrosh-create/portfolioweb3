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
        hostname: "*.unsplash.com", // Covers all Unsplash subdomains
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;