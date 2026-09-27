import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Section.
 * Rendered strictly and only when valid verified customer testimonials exist in business.js.
 * Returns null if the testimonials array is empty.
 */
export default function Testimonials() {
  const testimonials = business.testimonials;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Guest Impressions"
          title="Reflections from our diners"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E0D5] p-8 rounded-2xl shadow-xs"
            >
              <p className="font-serif italic text-[#111827] text-lg leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <div className="text-sm font-medium text-[#0F1E36]">{item.author}</div>
              {item.role && <div className="text-xs text-[#6B7280]">{item.role}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
