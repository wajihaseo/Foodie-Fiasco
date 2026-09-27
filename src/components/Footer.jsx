import React from 'react';
import { business } from '../config/business.js';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] text-[#F8FAFC] pt-16 pb-12 border-t border-[#1C253B]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1C253B]">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a
              href="#"
              className="text-2xl font-serif font-bold text-white tracking-tight hover:text-[#F59E0B] transition-colors inline-flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span>{business.name}</span>
            </a>
            <p className="text-sm text-[#F59E0B] font-serif italic mb-6">
              "{business.tagline}"
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Refined dining, authentic comfort food, fresh takeaway, and bespoke event catering in East Barnet, Hertfordshire.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              {business.navigation.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Table Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-4">
              East Barnet Location
            </h4>
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F59E0B] transition-colors leading-relaxed"
                >
                  {business.fullAddress}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-[#F59E0B] transition-colors font-medium"
                >
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  {business.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {currentYear} {business.footer.copyrightNote}
          </div>
          <div className="flex items-center gap-6">
            <span>{business.footer.locationNote}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-[#F59E0B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
