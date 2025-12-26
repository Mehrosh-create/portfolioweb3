import type { Metadata } from "next";
import { Inter, Roboto_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import ThemeToggle from "@/components/Global/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";
// Remove StyledComponentsRegistry import from here

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sheikh Nabeel - Entrepreneur & Digital Growth Expert",
  description: "Serial Entrepreneur, Founder & CEO of Euroshub, Business Strategist, & Digital Transformation Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Century Gothic Font (using Montserrat as a modern alternative) */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Inter font is already loaded from next/font, but adding for consistency */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font fallback styles */}
        <style>{`
          /* Century Gothic font classes */
          .font-century-gothic {
            font-family: 'Montserrat', 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
          }
          
          .font-century-gothic-bold {
            font-family: 'Montserrat', 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
            font-weight: 700;
          }
          
          /* Inter font classes */
          .font-inter {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          }
          
          /* If you want to use actual Century Gothic from CDN */
          @import url('https://fonts.cdnfonts.com/css/century-gothic');
          
          /* Override if Century Gothic CDN is loaded */
          @supports (font-family: 'Century Gothic') {
            .font-century-gothic {
              font-family: 'Century Gothic', 'Montserrat', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
            }
            
            .font-century-gothic-bold {
              font-family: 'Century Gothic', 'Montserrat', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
              font-weight: 700;
            }
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} ${bebasNeue.variable} antialiased overflow-x-hidden`}>
        {/* ThemeProvider MUST be the first thing after body */}
        <ThemeProvider>
          {/* Theme Toggle */}
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>

          {/* Client Layout - Now contains StyledComponentsRegistry inside */}
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}