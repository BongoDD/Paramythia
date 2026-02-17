'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/book-store", label: "Books" },
    { href: "/play-store", label: "Toys" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-[#F4E1D2] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl sm:text-3xl font-bold text-[#583101] hover:text-[#D4A373] transition-colors"
          >
            Paramythia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[#583101] hover:text-[#D4A373] transition-all duration-300 font-medium relative ${
                  isActive(link.href) ? "text-[#D4A373]" : ""
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D4A373] animate-scaleIn"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#583101] hover:text-[#D4A373] transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[#583101] hover:text-[#D4A373] hover:bg-[#FEFCF5] transition-all duration-300 px-4 py-2 rounded font-medium ${
                    isActive(link.href) ? "text-[#D4A373] bg-[#FEFCF5]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
