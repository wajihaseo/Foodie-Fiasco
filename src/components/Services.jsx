import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services() {
  const { eyebrow, title, subtitle, items } = business.services;

  return (
    <section id="services" className="section-padding bg-[#080B11] border-b border-[#222D42]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="left"
        />

        {/* 3-column desktop, 2-column tablet, 1-column mobile grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              image={service.image}
              fallbackImage={service.fallbackImage}
              actionText={service.actionText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
