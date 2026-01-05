"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Global/Footer";
import ScrollToTop from "@/components/Global/ScrollToTop";
import CustomCursor from "@/components/Global/CustomCursor"; // ← Already added
import { X } from "lucide-react";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import StyledComponentsRegistry from "@/lib/registry";

// -------------------- Search Context --------------------
interface SearchContextType {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType>({
  showSearch: false,
  setShowSearch: () => {},
});

export const useSearch = () => useContext(SearchContext);

// -------------------- Layout --------------------
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
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredArticles([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    setFilteredArticles(
      blogArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSearchClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <StyledComponentsRegistry>
      <SearchContext.Provider value={{ showSearch, setShowSearch }}>
        <div className="flex min-h-screen flex-col">
          {/* Custom Cursor - Active on ALL pages */}
          <CustomCursor />

          {/* Sidebar */}
          <Sidebar onSearchClick={handleSearchClick} />

          {/* Search Overlay */}
          {showSearch && (
            <div
              className={`fixed top-0 left-0 lg:left-64 right-0 bg-background py-16 px-8 z-40 ${
                isClosing ? "animate-slideUp" : "animate-slideDown"
              }`}
            >
              <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSearchSubmit} className="relative mt-6">
                  <input
                    type="text"
                    placeholder="SEARCH"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-foreground border-0 text-3xl font-black tracking-widest focus:outline-none pr-16"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0FB8AF]" />

                  <button
                    type="button"
                    onClick={handleSearchClose}
                    className="absolute bottom-4 right-0 transition-transform hover:rotate-90"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </form>

                {filteredArticles.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                      <a
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        onClick={handleSearchClose}
                        className="group"
                      >
                        <div className="border border-gray-800 hover:border-[#0fb8af] transition">
                          <div className="relative h-48">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          <div className="p-4">
                            <h4 className="font-bold text-lg group-hover:text-[#0fb8af] transition">
                              {article.title}
                            </h4>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Page Content */}
          <main className="flex-1 ml-0 lg:ml-64">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Scroll To Top Button */}
          <ScrollToTop />
        </div>
      </SearchContext.Provider>
    </StyledComponentsRegistry>
  );
}