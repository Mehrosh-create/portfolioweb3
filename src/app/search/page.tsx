'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Focus on search input when component mounts
    const searchInput = document.getElementById('search-input')
    if (searchInput) {
      searchInput.focus()
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
    // You can redirect to search results or perform search action here
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      router.back()
    } else if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-12 lg:pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 sm:mb-6"
            style={{
              fontFamily: '"Bebas Neue", Arial, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            # <span className="text-[#0fb8af]">SEARCH</span>
          </h1>

          {/* Search description */}
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-light max-w-2xl"
            style={{
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
            }}
          >
            Find exactly what you&apos;re looking for across all content and resources
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          <div className="relative">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hit enter to search or ESC to close ______."
              className="w-full bg-gray-dark border-2 border-gray-700 rounded-lg py-3 sm:py-4 px-4 sm:px-6 text-foreground placeholder-gray-400 focus:outline-none focus:border-[#0fb8af] focus:ring-2 focus:ring-[#0fb8af]/20 text-base sm:text-lg lg:text-xl transition-all duration-300"
              autoFocus
            />

            {/* Search icon */}
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-800 rounded text-xs border border-gray-700">Enter</kbd>
              <span>to search</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-800 rounded text-xs border border-gray-700">ESC</kbd>
              <span>to close</span>
            </p>
          </div>
        </div>

        {/* Search Results */}
        <div className="bg-gray-dark rounded-lg border border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="text-center py-8 sm:py-12 lg:py-16">
            {/* Search illustration */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <h2
              className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4"
              style={{
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              }}
            >
              Start Searching
            </h2>

            <p
              className="text-sm sm:text-base lg:text-lg text-gray-light max-w-md mx-auto mb-6 sm:mb-8"
              style={{
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              }}
            >
              Enter your search terms above to find articles, resources, and content across the site.
            </p>

            {/* Popular searches */}
            <div className="max-w-md mx-auto">
              <p
                className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: '"Bebas Neue", Arial, sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                Try searching for:
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['Digital Transformation', 'CRM Systems', 'Business Strategy', 'Growth Marketing', 'Leadership', 'Automation'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 hover:bg-[#0fb8af] hover:text-black text-gray-300 rounded-full text-xs sm:text-sm transition-all duration-300 border border-gray-700 hover:border-[#0fb8af]"
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results placeholder - will be populated when searching */}
          {searchQuery && (
            <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-6 sm:pt-8">
              <h3
                className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                }}
              >
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Sample result items */}
                <div className="bg-background rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-[#0fb8af] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0fb8af] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-black font-bold text-sm sm:text-base"
                        style={{
                          fontFamily: '"Bebas Neue", Arial, sans-serif',
                        }}
                      >
                        A
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-2"
                        style={{
                          fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                      >
                        Article about {searchQuery}
                      </h4>
                      <p
                        className="text-xs sm:text-sm text-gray-light mb-2"
                        style={{
                          fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                      >
                        Learn how {searchQuery.toLowerCase()} can transform your business operations and drive growth through innovative strategies and modern approaches.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>Blog Post</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back button for mobile */}
        <div className="mt-8 sm:mt-12 text-center sm:text-left">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-foreground rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-600 text-sm sm:text-base"
            style={{
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}