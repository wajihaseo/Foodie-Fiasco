import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const { eyebrow, title, items } = business.faq;
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#080B11] border-b border-[#222D42]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            align="center"
          />

          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#141A29] border border-[#222D42] rounded-xl overflow-hidden transition-all duration-200 hover:border-[#F59E0B]/50"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F59E0B]"
                  >
                    <span className="font-serif text-lg text-[#F8FAFC] font-medium">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F59E0B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-[#94A3B8] text-base leading-relaxed border-t border-[#1F293D]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
