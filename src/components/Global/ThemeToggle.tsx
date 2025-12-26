// src/components/Global/ThemeToggle.tsx
"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Safe wrapper component
function ThemeToggleContent() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle-btn relative flex items-center rounded-full p-1 w-16 h-8 transition-all duration-200 ease-out transform hover:scale-105 active:scale-95"
            style={{
                backgroundColor: "rgba(23, 182, 178, 0.19)",
                border: "1px solid rgba(23, 182, 178, 0.5)",
                boxShadow: "rgba(23, 182, 178, 0.15) 0px 2px 8px",
            }}
        >
            {/* Sun Icon */}
            <div
                className={`absolute left-2 transition-all duration-300 ease-out ${theme === "dark"
                    ? "opacity-0 scale-75 -rotate-180"
                    : "opacity-100 scale-100 rotate-0"
                    }`}
            >
                <Sun className="w-4 h-4 text-yellow-500" />
            </div>

            {/* Moon Icon */}
            <div
                className={`absolute right-2 transition-all duration-300 ease-out ${theme === "dark"
                    ? "opacity-60 scale-90 rotate-0"
                    : "opacity-0 scale-75 rotate-180"
                    }`}
            >
                <Moon className="w-4 h-4 text-blue-400" />
            </div>

            {/* Toggle Knob */}
            <div
                className="absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-out transform"
                style={{
                    transform:
                        theme === "dark"
                            ? "translateX(32px) scale(1)"
                            : "translateX(0px) scale(1)",
                    backgroundColor: theme === "dark" ? "rgb(30,41,59)" : "white",
                    border: "2px solid rgb(23,182,178)",
                    boxShadow: "rgba(23,182,178,0.2) 0px 2px 10px",
                }}
            >
                {theme === "dark" ? (
                    <Moon className="w-4 h-4" style={{ color: "rgb(23,182,178)" }} />
                ) : (
                    <Sun className="w-4 h-4" style={{ color: "rgb(23,182,178)" }} />
                )}
            </div>
        </button>
    );
}

// Main component with error handling
export default function ThemeToggle() {
    try {
        return <ThemeToggleContent />;
    } catch {
        // Fallback if theme context is not available - REMOVED 'error' PARAMETER
        console.warn("Theme context not available, showing fallback toggle");

        return (
            <button
                aria-label="Toggle Theme (Fallback)"
                className="relative flex items-center rounded-full p-1 w-16 h-8 bg-gray-300"
                onClick={() => {
                    // Simple fallback toggle
                    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    document.documentElement.classList.toggle('dark', newTheme === 'dark');
                    document.documentElement.classList.toggle('light', newTheme === 'light');
                    localStorage.setItem('theme', newTheme);
                }}
            >
                <div className="absolute w-6 h-6 rounded-full bg-white border border-gray-400 transform translate-x-0"></div>
            </button>
        );
    }
}