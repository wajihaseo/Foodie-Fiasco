/**
 * Central Business Configuration for Foodie Fiasco
 * Non-technical owner configuration file.
 * All text, contact details, services, images, and brand settings are managed here.
 */

// Image assets (both locally generated high-fidelity assets and resilient fallback references)
import heroImg from '../assets/images/hero_restaurant_dining_1790537795241.jpg';
import serviceDineInImg from '../assets/images/service_dine_in_1790537814433.jpg';
import serviceBurgersImg from '../assets/images/service_burgers_1790537828986.jpg';
import serviceChickenFriesImg from '../assets/images/service_chicken_fries_1790537842705.jpg';
import servicePartyCateringImg from '../assets/images/service_party_catering_1790537856040.jpg';
import aboutAmbianceImg from '../assets/images/about_restaurant_ambiance_1790537870366.jpg';

export const business = {
  // Core Business Identity
  name: "Foodie Fiasco",
  type: "Restaurant",
  tagline: "Where Every Bite Starts a Fiasco",
  city: "East Barnet",
  fullAddress: "8 Albermarie Road, East Barnet, Hertfordshire, United Kingdom, EN4 8EG",
  phone: "447931082242",
  phoneDisplay: "+44 7931 082242",
  email: "arslanseo049@gmail.com",
  whatsapp: null, // Only rendered if a valid WhatsApp number is provided
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8+Albermarie+Road,+East+Barnet,+Hertfordshire,+EN4+8EG",

  // Brand Palette - Nocturnal Obsidian & Radiant Molten Gold Luxury
  brandStyle: "Luxury",
  colors: {
    primary: "#F59E0B",        // Radiant Molten Amber Gold
    primaryHover: "#FBBF24",   // Luminous Gold Glow
    primaryDark: "#080B11",    // Deep Obsidian Caviar
    secondary: "#141A29",      // Satin Midnight Card Surface
    secondaryLight: "#0E131F", // Midnight Slate Section Bed
    accent: "#F59E0B",         // Warm Gold Eye-Catch Accent
    accentWarm: "#EA580C",     // Fiery Saffron Embers
    ink: "#F8FAFC",            // Crisp Alabaster White
    muted: "#94A3B8",          // Legible Slate Muted Text
    surface: "#141A29",
    surfaceSubtle: "#0E131F",
    border: "#222D42"
  },

  // Navigation Links
  navigation: {
    links: [
      { label: "Experience", href: "#about" },
      { label: "Our Offerings", href: "#services" },
      { label: "Why Us", href: "#why-us" },
      { label: "Questions", href: "#faq" },
      { label: "Visit & Contact", href: "#contact" }
    ],
    cta: {
      label: "Reserve / Enquire",
      href: "#contact"
    }
  },

  // Hero Section
  hero: {
    eyebrow: "East Barnet · Hertfordshire",
    headline: "Where Every Bite Starts a Fiasco",
    subheadline: "An elevated dining experience in East Barnet. From intimate candlelit tables to masterfully prepared burgers, loaded fries, and bespoke party catering.",
    primaryCta: {
      label: "View Services",
      href: "#services"
    },
    secondaryCta: {
      label: "Find Us in East Barnet",
      href: "#contact"
    },
    quickContactAction: {
      label: "Call to Book",
      href: "tel:447931082242"
    },
    trustLine: "8 Albermarie Road, East Barnet · Dine-In, Takeaway & Delivery",
    image: heroImg,
    fallbackImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
  },

  // About Section
  about: {
    eyebrow: "Our Heritage & Craft",
    title: "A refined culinary retreat in the heart of East Barnet",
    descriptionParagraph1: "At Foodie Fiasco, we believe great dining should be both sophisticated and deeply satisfying. Situated on Albermarie Road, we curate an inviting sanctuary where every dish is prepared with premium ingredients and genuine culinary passion.",
    descriptionParagraph2: "Whether you join us for an evening of relaxed dining, pick up a freshly packed takeaway, or host an unforgettable celebration with our catering team, our commitment remains constant: uncompromised flavour and thoughtful hospitality.",
    highlightBadge: "East Barnet Kitchen",
    image: aboutAmbianceImg,
    fallbackImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { label: "Location", value: "East Barnet" },
      { label: "Kitchen", value: "Fresh to Order" },
      { label: "Service", value: "Dine-In & Catering" }
    ]
  },

  // Services Section
  services: {
    eyebrow: "Culinary Offerings",
    title: "Crafted for dining in, taking home, or celebrating together",
    subtitle: "Every dish is cooked fresh to order with prime ingredients and meticulous attention to flavour.",
    items: [
      {
        id: "dine-in",
        number: "01",
        title: "Dine-In Restaurant",
        description: "Freshly prepared meals and a welcoming, candlelit dining experience crafted for memorable evenings in East Barnet.",
        image: serviceDineInImg,
        fallbackImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        actionText: "Book Dining Table"
      },
      {
        id: "takeaway",
        number: "02",
        title: "Takeaway Food",
        description: "Delicious restaurant-standard meals packed fresh and kept hot for effortless collection whenever you desire.",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1600&q=80",
        fallbackImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1600&q=80",
        actionText: "Order for Collection"
      },
      {
        id: "delivery",
        number: "03",
        title: "Food Delivery",
        description: "Convenient local delivery bringing your favourite Foodie Fiasco meals straight to your door in peak condition.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
        fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
        actionText: "Arrange Delivery"
      },
      {
        id: "burgers",
        number: "04",
        title: "Burgers & Fast Food",
        description: "Juicy handcrafted burgers on toasted brioche, crisp sides, and satisfying luxury comfort food.",
        image: serviceBurgersImg,
        fallbackImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
        actionText: "Explore Burgers"
      },
      {
        id: "chicken-fries",
        number: "05",
        title: "Chicken & Loaded Fries",
        description: "Flavour-packed crispy chicken dishes and generously loaded fries topped with house specialties.",
        image: serviceChickenFriesImg,
        fallbackImage: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=1600&q=80",
        actionText: "Explore Loaded Fries"
      },
      {
        id: "catering",
        number: "06",
        title: "Party Food Catering",
        description: "Tailored food spreads and warm hospitality options for gatherings, private celebrations, and special occasions.",
        image: servicePartyCateringImg,
        fallbackImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80",
        actionText: "Enquire for Catering"
      }
    ]
  },

  // Why Choose Us Section (derived strictly from provided USPs, services, and local address)
  whyChooseUs: {
    eyebrow: "The Foodie Fiasco Standard",
    title: "Honest hospitality and food prepared without shortcuts",
    subtitle: "Built around four core principles that make us an East Barnet favourite.",
    points: [
      {
        number: "01",
        title: "Freshly Prepared to Order",
        description: "Every order is cooked fresh in our kitchen, guaranteeing rich flavour and optimal texture from first bite to last."
      },
      {
        number: "02",
        title: "Comfort Food Elevated",
        description: "From our gourmet burgers and seasoned loaded fries to refined dine-in courses, we balance comfort with luxury."
      },
      {
        number: "03",
        title: "Flexible Dining Across East Barnet",
        description: "Enjoy our full culinary repertoire whether you sit down at our Albermarie Road tables, collect takeaway, or order home delivery."
      },
      {
        number: "04",
        title: "Specialised Event Catering",
        description: "Full catering solutions with versatile options designed to delight guests at family celebrations, birthdays, and parties."
      }
    ]
  },

  // Testimonials (Omitted cleanly if none provided in prompt)
  testimonials: [],

  // FAQ Section (Clean, relevant, helpful for local diners)
  faq: {
    eyebrow: "Frequently Asked",
    title: "Helpful details before your visit or order",
    items: [
      {
        question: "Where is Foodie Fiasco located?",
        answer: "We are located at 8 Albermarie Road in East Barnet, Hertfordshire, EN4 8EG. We welcome local guests for dine-in, takeaway collection, and delivery."
      },
      {
        question: "How can I place a takeaway or delivery order?",
        answer: "You can place orders or request direct delivery by contacting us directly by phone on +44 7931 082242 or submitting the enquiry form below."
      },
      {
        question: "Do you cater for private parties and group gatherings?",
        answer: "Yes, our Party Food Catering service provides custom menu spreads for birthdays, family get-togethers, and special events across East Barnet."
      },
      {
        question: "Can I reserve a table for dine-in in advance?",
        answer: "Table reservations are warmly recommended, particularly for evening dining. You can call us directly on +44 7931 082242 to reserve."
      }
    ]
  },

  // Contact Section
  contact: {
    eyebrow: "Visit & Get in Touch",
    title: "We look forward to welcoming you",
    subtitle: "Drop in to our East Barnet restaurant, telephone our team, or send us a message for reservations and catering enquiries.",
    addressTitle: "Our Location",
    phoneTitle: "Direct Telephone",
    emailTitle: "Email Enquiries",
    directionsButtonText: "Get Directions on Google Maps",
    callButtonText: "Call Now",
    emailButtonText: "Send Email"
  },

  // Footer Section
  footer: {
    tagline: "Where Every Bite Starts a Fiasco",
    copyrightNote: "Foodie Fiasco. All rights reserved.",
    locationNote: "East Barnet, Hertfordshire, United Kingdom"
  }
};
