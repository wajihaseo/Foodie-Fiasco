import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { ArrowRight, MapPin } from 'lucide-react';

export default function About() {
  const [imgError, setImgError] = useState(false);
  const aboutData = business.about;
  const imageSrc = imgError ? aboutData.fallbackImage : aboutData.image;

  return (
    <section id="about" className="section-padding bg-[#0E131F] border-b border-[#222D42]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image showcase with single elevation & architectural frame */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#222D42] shadow-2xl shadow-black/60 bg-[#141A29]">
                <img
                  src={imageSrc}
                  alt={`${business.name} dining room ambiance`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Quiet editorial location card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#141A29] border border-[#2B3852] p-5 rounded-xl shadow-2xl max-w-[280px]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F59E0B] block mb-1">
                      {aboutData.highlightBadge}
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {business.fullAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="section-eyebrow">
              {aboutData.eyebrow}
            </span>

            <h2 className="text-[#F8FAFC] font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.2] tracking-[-0.015em] font-normal mb-6 [text-wrap:balance]">
              {aboutData.title}
            </h2>

            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-5">
              {aboutData.descriptionParagraph1}
            </p>

            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-8">
              {aboutData.descriptionParagraph2}
            </p>

            {/* Clean metadata summary, zero-pill discipline */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-[#222D42] mb-8">
              {aboutData.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xs font-semibold text-[#F59E0B] tracking-wider uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="font-serif text-base sm:text-lg text-[#F8FAFC] font-medium">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button href="#contact" variant="primary">
                <span>Visit Us in East Barnet</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
