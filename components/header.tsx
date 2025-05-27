"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Menu, Users, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-purple-600 p-1.5 sm:p-2 rounded-lg">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">QuirkyFinds</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Categories
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Contact Button */}
            <Button variant="outline" size="sm" className="hidden lg:flex items-center space-x-2 px-4 py-2">
              <Users className="h-4 w-4" />
              <span>Contact</span>
            </Button>

            {/* Tablet Contact Button (icon only) */}
            <Button variant="outline" size="sm" className="hidden md:flex lg:hidden p-2">
              <Users className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
            <div className="container mx-auto px-4 sm:px-6 py-4 space-y-3">
              <Link
                href="#"
                className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
              <Link
                href="#"
                className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
              <Link
                href="#"
                className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Mobile Contact Button */}
              <div className="pt-2">
                <Button variant="outline" className="w-full justify-center space-x-2" onClick={closeMobileMenu}>
                  <Users className="h-4 w-4" />
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
