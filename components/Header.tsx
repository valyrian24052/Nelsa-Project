"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div
              className="text-2xl text-primary cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="font-semibold">Nelsa</span>
              <span className="text-gray-600"> Project Consultants LLP</span>
            </div>
          </div>

<nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection("about");
              }}
            >
              About
            </a>
                        <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:inline-flex"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Consultation
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg border-b border-gray-200">
          <nav className="flex flex-col items-center space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-primary transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection("about");
              }}
            >
              About
            </a>
            <Button
              size="lg"
              className="w-11/12 mt-4"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                toggleMobileMenu()
              }}
            >
              Get Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}