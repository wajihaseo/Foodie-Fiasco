import React, { useState } from 'react';
import { ArrowUpRight, Utensils } from 'lucide-react';

/**
 * Elevated Service Card for Foodie Fiasco.
 * Top aspect-ratio image container with subtle hover zoom and eye-catching gold accents.
 */
export default function ServiceCard({
  number,
  title,
  description,
  image,
  fallbackImage,
  actionText = "Enquire Now",
  onActionClick
}) {
  const [imageError, setImageError] = useState(false);

  const imgSrc = imageError ? (fallbackImage || image) : image;

  return (
    <div className="group flex flex-col h-full overflow-hidden bg-[#141A29] border border-[#222D42] rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F59E0B]/10 hover:border-[#F59E0B]/50">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1523]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#141A29] to-[#0A0E17] text-[#F59E0B]/40 p-6 text-center">
            <Utensils className="w-8 h-8 mb-2 stroke-[1.5]" />
            <span className="text-xs uppercase tracking-wider font-medium text-[#94A3B8]">{title}</span>
          </div>
        )}

        {/* Gradient shadow overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141A29] via-transparent to-black/20 pointer-events-none" />

        {/* Luminous editorial number marker */}
        <div className="absolute top-4 left-4 bg-[#080B11]/90 backdrop-blur-md text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-md shadow-sm">
          {number}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow justify-between bg-[#141A29]">
        <div>
          <h3 className="font-serif text-xl md:text-[1.35rem] text-[#F8FAFC] font-medium tracking-tight mb-2.5 transition-colors duration-200 group-hover:text-[#F59E0B]">
            {title}
          </h3>
          <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#1F293D] flex items-center justify-between">
          <a
            href="#contact"
            onClick={onActionClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:text-[#FBBF24] transition-colors group/link"
          >
            <span>{actionText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
          <span className="text-xs text-[#64748B] uppercase tracking-wider font-mono">
            East Barnet
          </span>
        </div>
      </div>
    </div>
  );
}
