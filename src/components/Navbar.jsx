import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B11]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-[#222D42]'
          : 'bg-[#080B11]/85 backdrop-blur-sm border-b border-[#222D42]/60'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark with subtle gold glow */}
          <a
            href="#"
            className="text-2xl md:text-[1.75rem] font-serif font-bold tracking-tight text-[#F8FAFC] hover:text-[#F59E0B] transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-sm shadow-[#F59E0B]/80 group-hover:scale-125 transition-transform" />
            <span>{business.name}</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#CBD5E1]">
            {business.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F59E0B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F59E0B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + call affordance */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#FBBF24] transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              title={`Call ${business.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span className="hidden xl:inline">{business.phoneDisplay}</span>
            </a>
            <Button href={business.navigation.cta.href} variant="primary">
              {business.navigation.cta.label}
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${business.phone}`}
              className="p-2 text-[#F59E0B] hover:bg-white/10 rounded-md"
              aria-label="Call business"
            >
              <Phone className="w-5 h-5 text-[#F59E0B]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F8FAFC] hover:bg-white/10 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F59E0B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19] border-b border-[#222D42] px-6 py-6 shadow-2xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-4">
            {business.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#F8FAFC] hover:text-[#F59E0B] transition-colors py-2 border-b border-[#1E293B]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href={business.navigation.cta.href}
                variant="primary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {business.navigation.cta.label}
              </Button>
              <Button
                href={`tel:${business.phone}`}
                variant="secondary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call {business.phoneDisplay}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
