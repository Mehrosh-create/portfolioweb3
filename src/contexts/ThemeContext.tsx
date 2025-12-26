"use client";

import React, { createContext, useContext, useEffect, useState } from "react";


type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Create context with default values to avoid undefined
const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        // Only run on client side
        const savedTheme = localStorage.getItem("theme") as Theme;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (theme: Theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("light", theme === "light");

        // Update CSS variables
        const root = document.documentElement;
        if (theme === "light") {
            root.style.setProperty("--background", "#ffffff");
            root.style.setProperty("--foreground", "#151515");
        } else {
            root.style.setProperty("--background", "#151515");
            root.style.setProperty("--foreground", "#ffffff");
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}