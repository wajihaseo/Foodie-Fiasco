import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  const { eyebrow, title, subtitle, points } = business.whyChooseUs;

  return (
    <section id="why-us" className="section-padding bg-[#0E131F] border-b border-[#222D42]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-[#141A29] border border-[#222D42] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F59E0B]/10 hover:border-[#F59E0B]/50 group"
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#F59E0B] block mb-4 group-hover:scale-105 transition-transform origin-left">
                  {point.number}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#F8FAFC] font-medium tracking-tight mb-3 group-hover:text-[#F59E0B] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1F293D] flex items-center justify-between text-xs text-[#64748B] font-mono">
                <span>Foodie Fiasco</span>
                <span>East Barnet</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
