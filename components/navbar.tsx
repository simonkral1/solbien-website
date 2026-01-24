"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/solbien-website/images/solbien-logo.png"
              alt="Solbien Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-sm font-medium hover:text-green-600 transition-colors">
              {t("products")}
            </Link>
            <Link href="/solutions" className="text-sm font-medium hover:text-green-600 transition-colors">
              {t("solutions")}
            </Link>
            <Link href="/implementations" className="text-sm font-medium hover:text-green-600 transition-colors">
              {t("implementations")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
              {t("about")}
            </Link>
            <Link href="/contacts" className="text-sm font-medium hover:text-green-600 transition-colors">
              {t("contacts")}
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/products"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("products")}
            </Link>
            <Link
              href="/solutions"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("solutions")}
            </Link>
            <Link
              href="/implementations"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("implementations")}
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/contacts"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contacts")}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
