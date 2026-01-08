import type { Metadata } from "next";
import { Inter, Roboto_Mono, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import ThemeToggle from "@/components/Global/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Fonts from next/font (optimized - use this instead of <link> tags)
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

// Add Montserrat font using next/font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${robotoMono.variable} ${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        {/* REMOVE ALL <link> FONT IMPORTS FROM HERE */}
        {/* Only keep metadata and other essential tags */}
        
        {/* Font fallback styles - inline styles only */}
        <style>{`
          /* Century Gothic font classes with fallbacks */
          .font-century-gothic {
            font-family: var(--font-montserrat), 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
          }
          
          .font-century-gothic-bold {
            font-family: var(--font-montserrat), 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Futura', 'Trebuchet MS', sans-serif;
            font-weight: 700;
          }
          
          /* Inter font classes */
          .font-inter {
            font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          }
          
          /* Montserrat font class */
          .font-montserrat {
            font-family: var(--font-montserrat), 'Montserrat', sans-serif;
          }
          
          /* Bebas Neue font class */
          .font-bebas-neue {
            font-family: var(--font-bebas-neue), 'Bebas Neue', sans-serif;
          }
          
          /* Roboto Mono font class */
          .font-roboto-mono {
            font-family: var(--font-roboto-mono), 'Roboto Mono', monospace;
          }
        `}</style>
      </head>
      <body className="antialiased overflow-x-hidden">
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