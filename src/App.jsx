import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

/**
 * Foodie Fiasco — Premium Luxury Restaurant One-Page Application
 * All content, copy, colors, and configuration sourced strictly from src/config/business.js.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B11] text-[#F8FAFC] selection:bg-[#F59E0B] selection:text-[#080B11]">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Testimonials Section (rendered only if reviews exist in business.js) */}
        <Testimonials />

        {/* 7. FAQ Section (clean, genuinely helpful for diners) */}
        <Faq />

        {/* 8. Contact & Reservation Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
