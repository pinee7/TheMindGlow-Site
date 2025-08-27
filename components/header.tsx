"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MoonStar, Sun } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleContactClick = () => {
    console.log("[v0] Contact link clicked")
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="bg-[#C9F3DE]/30 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#0891B2] to-[#A7F3D0] bg-clip-text text-transparent"
          >
            TheMindGlow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
              onClick={handleContactClick}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.themindglow.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
              >
                Try It Now
              </Button>
            </a>

            {/* Let's Connect*/}
            <a href="https://api.whatsapp.com/message/EBFNYWFQHBWFH1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] hover:from-teal-600 hover:to-green-300 text-gray-900">
                Let's Connect
              </Button>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <MoonStar className="h-5 w-5 text-teal-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0891B2] hover:to-[#10B981] hover:bg-clip-text transition-all duration-300 transform hover:scale-105"
                onClick={handleContactClick}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
                >
                  Request Demo
                </Button>
                <Button className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] hover:from-teal-600 hover:to-green-300 text-gray-900">
                  Investor Deck
                </Button>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center justify-center p-2 rounded-full bg-white/20 backdrop-blur-sm dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-amber-400" />
                  ) : (
                    <MoonStar className="h-5 w-5 text-teal-600" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
