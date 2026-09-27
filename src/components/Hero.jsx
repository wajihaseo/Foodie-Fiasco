import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const heroData = business.hero;
  const imageSrc = imgError ? heroData.fallbackImage : heroData.image;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080B11]">
      {/* Background image container with single tonal overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={`${business.name} Restaurant in ${business.city}`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-700 ease-out"
        />
        {/* Measured dark caviar obsidian & warm amber atmospheric scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-[#080B11]/85 to-[#080B11]/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 container-custom w-full py-12 md:py-24">
        <div className="max-w-3xl text-left">
          {/* Eyebrow with gold accent */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#F59E0B] border-b border-[#F59E0B]/50 pb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              {heroData.eyebrow}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-serif text-[#F8FAFC] text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.08] font-normal tracking-[-0.02em] mb-6 [text-wrap:balance]">
            {heroData.headline}
          </h1>

          {/* Subheading */}
          <p className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-relaxed max-w-[62ch] mb-10">
            {heroData.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              href={heroData.primaryCta.href}
              variant="primary"
              className="px-8 py-3.5 text-base font-bold text-[#080B11]"
            >
              <span>{heroData.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            <Button
              href={heroData.quickContactAction.href}
              variant="outline"
              className="px-6 py-3.5 text-base"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>{heroData.quickContactAction.label}</span>
            </Button>
          </div>

          {/* Quiet Trust Line */}
          {heroData.trustLine && (
            <div className="pt-6 border-t border-white/10 flex items-center gap-2.5 text-sm text-[#94A3B8]">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>{heroData.trustLine}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
