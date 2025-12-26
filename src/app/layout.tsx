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
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
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