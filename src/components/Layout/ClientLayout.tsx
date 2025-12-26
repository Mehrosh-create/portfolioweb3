"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Global/Footer";
import { X, Calendar, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import StyledComponentsRegistry from "@/lib/registry"; // Add this import

// Create Search Context
interface SearchContextType {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType>({
    showSearch: false,
    setShowSearch: () => { },
});

export const useSearch = () => useContext(SearchContext);

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showSearch, setShowSearch] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([]);

    const handleSearchClick = () => {
        setShowSearch(true);
        setIsClosing(false);
    };

    const handleSearchClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowSearch(false);
            setIsClosing(false);
            setSearchQuery("");
        }, 400);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Search logic is handled by the useEffect below
    };

    // Filter articles based on search query
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredArticles([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = blogArticles.filter((article) => {
            return (
                article.title.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query)
            );
        });

        setFilteredArticles(filtered);
    }, [searchQuery]);

    // ESC key closes search
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleSearchClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <StyledComponentsRegistry> {/* Wrap everything with the registry */}
            <SearchContext.Provider value={{ showSearch, setShowSearch }}>
                <div className="flex min-h-screen flex-col">
                    {/* Fixed Sidebar */}
                    <Sidebar onSearchClick={handleSearchClick} />

                    {/* Search Bar */}
                    {showSearch && (
                        <div className={`fixed top-0 left-0 lg:left-64 right-0 bg-background py-16 px-8 z-40 ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}>
                            <div className="max-w-7xl mx-auto">
                                <div className="relative mt-6">
                                    <form onSubmit={handleSearchSubmit}>
                                        <input
                                            type="text"
                                            placeholder="SEARCH"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full bg-transparent text-foreground border-0 text-3xl font-bold focus:outline-none focus:ring-0 py-4 placeholder-foreground tracking-wider pr-16"
                                            autoFocus
                                            style={{
                                                fontSize: "2.5rem",
                                                fontWeight: 900,
                                                letterSpacing: "0.1em",
                                            }}
                                        />
                                        {/* Green underline */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0FB8AF]" />

                                        {/* Close button above green line */}
                                        <button
                                            type="button"
                                            onClick={handleSearchClose}
                                            className="absolute bottom-4 right-0 text-foreground hover:text-gray-300 group transition-colors duration-300"
                                        >
                                            <X className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90" />
                                        </button>
                                    </form>
                                </div>

                                {/* Instruction text */}
                                <p className="text-gray-light text-lg mt-6 font-light">
                                    Type to search or press{" "}
                                    <span className="font-semibold">ESC</span> to close
                                </p>

                                {/* Search Results */}
                                {searchQuery.trim() !== "" && (
                                    <div className="mt-8">
                                        {filteredArticles.length > 0 ? (
                                            <>
                                                <h3 className="text-foreground text-xl font-bold mb-6">
                                                    Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {filteredArticles.map((article) => (
                                                        <Link
                                                            key={article.slug}
                                                            href={`/blog/${article.slug}`}
                                                            onClick={handleSearchClose}
                                                            className="group cursor-pointer block"
                                                        >
                                                            <div
                                                                className="bg-gray-dark border overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col"
                                                                style={{ borderColor: "#1F2937" }}
                                                                onMouseEnter={(e) =>
                                                                    (e.currentTarget.style.borderColor = "#0fb8af")
                                                                }
                                                                onMouseLeave={(e) =>
                                                                    (e.currentTarget.style.borderColor = "#1F2937")
                                                                }
                                                            >
                                                                <div className="relative h-48">
                                                                    <Image
                                                                        src={article.image}
                                                                        alt={article.title}
                                                                        fill
                                                                        className="object-cover"
                                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                    />
                                                                </div>
                                                                <div className="p-4 flex-1 flex flex-col">
                                                                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                                                                        <span
                                                                            className="px-2 py-1 text-xs font-bold uppercase rounded"
                                                                            style={{ backgroundColor: "#0fb8af", color: "#000" }}
                                                                        >
                                                                            {article.category}
                                                                        </span>
                                                                        <span className="text-gray-500 text-xs">
                                                                            {article.readTime}
                                                                        </span>
                                                                    </div>
                                                                    <h4
                                                                        className="text-lg font-bold mb-2 line-clamp-2 transition-colors flex-1 text-foreground"
                                                                        onMouseEnter={(e) =>
                                                                            (e.currentTarget.style.color = "#0fb8af")
                                                                        }
                                                                        onMouseLeave={(e) =>
                                                                            (e.currentTarget.style.color = "var(--foreground)")
                                                                        }
                                                                    >
                                                                        {article.title}
                                                                    </h4>
                                                                    <p className="text-gray-light text-sm mb-3 line-clamp-2">
                                                                        {article.excerpt}
                                                                    </p>
                                                                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                                                                        <div className="flex items-center gap-1">
                                                                            <Calendar className="w-3 h-3" />
                                                                            <span>{article.date}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="flex items-center gap-1">
                                                                                <Heart className="w-3 h-3" /> {article.likes}
                                                                            </div>
                                                                            <div className="flex items-center gap-1">
                                                                                <MessageCircle className="w-3 h-3" />{" "}
                                                                                {article.comments}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center py-12">
                                                <p className="text-gray-light text-xl">
                                                    No articles found for &ldquo;{searchQuery}&rdquo;
                                                </p>
                                                <p className="text-gray-500 text-sm mt-2">
                                                    Try searching with different keywords
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Main content */}
                    <main className="flex-1 ml-0 lg:ml-64">{children}</main>

                    {/* Footer */}
                    <Footer />
                </div>
            </SearchContext.Provider>
        </StyledComponentsRegistry>
    );
}