import React from 'react';

/**
 * Reusable Luxury Button component adhering to the Molten Gold & Obsidian palette.
 * Supports anchor link or standard button.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'gold' | 'beige' | 'outline'
  className = '',
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium text-[15px] px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantClasses = {
    primary: "bg-[#F59E0B] hover:bg-[#FBBF24] text-[#080B11] font-semibold shadow-md shadow-[#F59E0B]/25 hover:shadow-lg hover:shadow-[#F59E0B]/35 hover:-translate-y-0.5 focus-visible:outline-[#F59E0B]",
    secondary: "bg-[#141A29] hover:bg-[#1E283D] text-[#F8FAFC] border border-[#2B3852] hover:border-[#F59E0B]/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus-visible:outline-[#F59E0B]",
    gold: "bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C] hover:brightness-110 text-[#080B11] font-bold shadow-md shadow-[#F59E0B]/30 hover:-translate-y-0.5 focus-visible:outline-[#F59E0B]",
    beige: "bg-[#F59E0B] hover:bg-[#FBBF24] text-[#080B11] font-semibold shadow-md shadow-[#F59E0B]/25 hover:-translate-y-0.5 focus-visible:outline-[#F59E0B]",
    outline: "bg-white/[0.04] hover:bg-white/[0.08] text-[#F8FAFC] hover:text-[#FBBF24] border border-white/20 hover:border-[#F59E0B] hover:-translate-y-0.5 focus-visible:outline-[#F59E0B]"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
