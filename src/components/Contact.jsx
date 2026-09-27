import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MapPin, Phone, Mail, Navigation, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const contactData = business.contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Dine-In Restaurant',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#0E131F] border-b border-[#222D42]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct contact actions & Address */}
          <div className="lg:col-span-5">
            <span className="section-eyebrow">
              {contactData.eyebrow}
            </span>

            <h2 className="text-[#F8FAFC] font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.2] tracking-[-0.015em] font-normal mb-4 [text-wrap:balance]">
              {contactData.title}
            </h2>

            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-8">
              {contactData.subtitle}
            </p>

            <div className="space-y-5">
              {/* Address Card */}
              <div className="bg-[#141A29] border border-[#222D42] rounded-xl p-5 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#F8FAFC] mb-1">
                      {contactData.addressTitle}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">
                      {business.fullAddress}
                    </p>
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{contactData.directionsButtonText}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#141A29] border border-[#222D42] rounded-xl p-5 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-serif text-base font-semibold text-[#F8FAFC] mb-1">
                      {contactData.phoneTitle}
                    </h3>
                    <p className="text-sm text-[#94A3B8] mb-3">
                      Direct line for table reservations, takeaway orders, and catering queries.
                    </p>
                    <Button
                      href={`tel:${business.phone}`}
                      variant="primary"
                      className="py-2.5 px-4 text-xs font-bold"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {business.phoneDisplay}</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#141A29] border border-[#222D42] rounded-xl p-5 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-serif text-base font-semibold text-[#F8FAFC] mb-1">
                      {contactData.emailTitle}
                    </h3>
                    <p className="text-sm text-[#94A3B8] mb-3 break-all">
                      {business.email}
                    </p>
                    <Button
                      href={`mailto:${business.email}`}
                      variant="secondary"
                      className="py-2.5 px-4 text-xs font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{contactData.emailButtonText}</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Render WhatsApp only if valid number is provided in business.js */}
              {business.whatsapp && (
                <div className="bg-[#141A29] border border-[#222D42] rounded-xl p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-semibold text-[#F8FAFC]">WhatsApp Enquiries</span>
                    <Button
                      href={`https://wa.me/${business.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="py-2 px-4 text-xs"
                    >
                      Message on WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Reservation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141A29] border border-[#222D42] rounded-2xl p-8 sm:p-10 shadow-2xl">
              <h3 className="font-serif text-2xl text-[#F8FAFC] font-medium mb-2">
                Send an Enquiry
              </h3>
              <p className="text-sm text-[#94A3B8] mb-8">
                Reserve dining, inquire about bespoke party catering, or order for your East Barnet gathering.
              </p>

              {submitted ? (
                <div className="bg-[#0B0F19] border border-[#222D42] rounded-xl p-8 text-center animate-in fade-in duration-200">
                  <CheckCircle2 className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-[#F8FAFC] font-medium mb-2">
                    Thank You for Contacting Foodie Fiasco
                  </h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed max-w-md mx-auto mb-6">
                    We have received your message and will be in touch shortly. For immediate reservations, feel free to ring us directly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Dine-In Restaurant',
                        message: ''
                      });
                    }}
                    variant="secondary"
                    className="text-xs"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 bg-[#080B11] border border-[#26334D] rounded-lg text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#F59E0B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. 07931 082242"
                        className="w-full px-4 py-3 bg-[#080B11] border border-[#26334D] rounded-lg text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#F59E0B] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 bg-[#080B11] border border-[#26334D] rounded-lg text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#F59E0B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="contact-service"
                      value={formState.serviceInterest}
                      onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#080B11] border border-[#26334D] rounded-lg text-sm text-[#F8FAFC] focus:border-[#F59E0B] focus:outline-none transition-colors"
                    >
                      <option value="Dine-In Restaurant" className="bg-[#080B11] text-[#F8FAFC]">Dine-In Restaurant Reservation</option>
                      <option value="Takeaway Food" className="bg-[#080B11] text-[#F8FAFC]">Takeaway Collection Order</option>
                      <option value="Food Delivery" className="bg-[#080B11] text-[#F8FAFC]">East Barnet Delivery</option>
                      <option value="Party Food Catering" className="bg-[#080B11] text-[#F8FAFC]">Party Food & Event Catering</option>
                      <option value="General Question" className="bg-[#080B11] text-[#F8FAFC]">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Your Message or Booking Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please let us know your preferred date, party size, or dietary preferences..."
                      className="w-full px-4 py-3 bg-[#080B11] border border-[#26334D] rounded-lg text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#F59E0B] focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" className="w-full py-3.5 text-base font-bold">
                      Submit Enquiry
                    </Button>
                    <p className="text-center text-xs text-[#64748B] mt-3">
                      We respect your privacy and will never share your details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
