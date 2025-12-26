// components/Global/SectionDivider.tsx
"use client";

interface SectionDividerProps {
  title?: string;
  subtitle?: string;
}

const SectionDivider = ({ title, subtitle }: SectionDividerProps) => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative">
          {/* Main divider line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#0fb8af] to-transparent"></div>
          
          {/* Optional title */}
          {(title || subtitle) && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4 sm:px-6 py-2">
              {title && (
                <h3 className="text-lg sm:text-xl font-bold text-[#0fb8af] text-center">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-500 text-center mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;