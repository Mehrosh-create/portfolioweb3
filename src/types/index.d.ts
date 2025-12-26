// src/types/index.d.ts

// Type for business data
interface Business {
    id: number;
    title: string;
    description: string;
    image: string;
    href: string;
    hoverColor: string;
}

// Type for Hero section props
interface HeroProps {
    onVideoPlay: () => void;
    bgColor?: string;
    customHeading?: string;
}

// Extend global window interface if needed (e.g., for custom properties)
interface Window {
    // Add specific properties here instead of leaving empty
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
}

// Declare module for global styles or assets if needed
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}