import React from 'react';

/**
 * Editorial Section Heading adhering to luxury restaurant design tokens.
 * Zero-pill, elegant typography pairing.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-[#F8FAFC] font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.2] tracking-[-0.015em] font-normal [text-wrap:balance]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-[65ch] ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
