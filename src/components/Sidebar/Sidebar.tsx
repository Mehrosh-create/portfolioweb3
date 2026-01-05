
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaSnapchatGhost,
  FaDiscord,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext";

interface SidebarProps {
  onSearchClick?: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] =
    useState<"mobile" | "tablet" | "desktop">("desktop");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
        setIsOpen(false);
      } else if (width < 1024) {
        setScreenSize("tablet");
        setIsOpen(false);
      } else {
        setScreenSize("desktop");
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const socialLinks = [
    { href: "https://x.com/nabeel1sheikh", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", icon: FaFacebookF, label: "Facebook" },
    { href: "https://www.upwork.com/freelancers/sheikhnabeelofficial", icon: SiUpwork, label: "Upwork" },
    { href: "https://pk.linkedin.com/in/sheikhnabeelofficial", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://www.youtube.com/@EurosHub", icon: FaYoutube, label: "YouTube" },
    { href: "https://www.instagram.com/sheikhnabeel.official/?hl=en", icon: FaInstagram, label: "Instagram" },
    { href: "https://snapchat.com/add/sheikhnabeel.official", icon: FaSnapchatGhost, label: "Snapchat" },
    { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
    { href: "https://www.tiktok.com/@sheikhnabeel.official", icon: FaTiktok, label: "TikTok" },
    { href: "https://wa.me/923000369622", icon: FaWhatsapp, label: "WhatsApp" },
  ];

  const themeStyles = {
    dark: {
      sidebar: "bg-black text-white",
      overlay: "bg-black/70 backdrop-blur-sm",
      navText: "text-white",
      socialIcon: "text-white",
      border: "border-[#0fb8af]/40",
      logoFilter: "filter-none",
    },
    light: {
      sidebar: "bg-white text-black",
      overlay: "bg-black/50 backdrop-blur-sm",
      navText: "text-black",
      socialIcon: "text-black",
      border: "border-[#0fb8af]/40",
      logoFilter: "filter invert",
    },
  };

  const currentTheme = theme === "dark" ? themeStyles.dark : themeStyles.light;

  const getFontSize = () => {
    if (screenSize === "mobile") return "0.95rem";
    if (screenSize === "tablet") return "1rem";
    return "1.1rem";
  };

  const getSocialGridCols = () => {
    if (screenSize === "mobile") return "grid-cols-4";
    return "grid-cols-5";
  };

  return (
    <>
      {screenSize !== "desktop" && isOpen && (
        <div
          className={`fixed inset-0 z-40 ${currentTheme.overlay}`}
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 ${currentTheme.sidebar} z-50
        transition-transform duration-300 shadow-xl
        ${isOpen || screenSize === "desktop" ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">

          {/* Logo */}
          <div className="px-4 py-4 flex justify-center">
            <Link href="/">
              <Image
                src="/images/sign.png"
                alt="Logo"
                width={160}
                height={50}
                className={`object-contain ${currentTheme.logoFilter}`}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-2 flex-1 flex items-center">
            <ul className="space-y-2 w-full">
              {[
                { href: "/", label: "HOME" },
                { href: "/about", label: "ABOUT" },
                { href: "/services", label: "SERVICES" },
                { href: "/testimonials", label: "TESTIMONIALS" },
                { href: "/contact", label: "CONTACT" },
              ].map((item) => {
                const isActive = pathname === item.href;
                const shouldHighlight =
                  hoveredNav === item.href || (isActive && hoveredNav === null);

                return (
                  <li key={item.href} className="relative overflow-hidden">
                    <div
                      className={`pointer-events-none absolute inset-y-0 left-0 w-[85%]
                      bg-[#0fb8af] rounded-r-lg transform transition-all duration-500 ease-out
                      ${shouldHighlight
                        ? "scale-x-100 opacity-100 origin-left"
                        : "scale-x-0 opacity-80 origin-left"}`}
                      style={{ zIndex: -1 }}
                    />

                    <Link
                      href={item.href}
                      className={`block px-4 py-2 relative ${currentTheme.navText}`}
                      onMouseEnter={() => setHoveredNav(item.href)}
                      onMouseLeave={() => setHoveredNav(null)}
                      style={{
                        fontFamily: "Century Gothic, sans-serif",
                        fontWeight: 600,
                        fontSize: getFontSize(),
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-3 pl-4">
                <button onClick={onSearchClick}>
                  <Search className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </nav>

          {/* ✅ Social Icons — ORIGINAL VERSION (UNCHANGED) */}
          <div className={`p-4 border-t ${currentTheme.border}`}>
            <ul
              className={`grid ${getSocialGridCols()} justify-items-center`}
              style={{ gap: "0.5rem" }}
            >
              {socialLinks
                .slice(0, screenSize === "mobile" ? 8 : socialLinks.length)
                .map((social, i) => (
                  <li key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`relative ${
                        screenSize === "mobile" ? "w-6 h-6" : "w-10 h-10"
                      } overflow-hidden group flex items-center justify-center`}
                    >
                      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                        <social.icon
                          className={`${
                            screenSize === "mobile" ? "w-4 h-4" : "w-6 h-6"
                          } ${currentTheme.socialIcon}`}
                        />
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-300 group-hover:translate-y-0">
                        <social.icon
                          className={`${
                            screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"
                          } text-[#0fb8af]`}
                        />
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
