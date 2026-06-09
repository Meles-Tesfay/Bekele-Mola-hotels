export const offerTheme = {
  badge: "from-orange-400 to-pink-500",
  accentLine: "from-orange-400 to-pink-500",
  btnAccent: "from-orange-400 to-orange-500",
  tag: "bg-orange-50 text-orange-600 border-orange-200",
};

export const exclusiveOffers = [
  {
    _id: 1,
    slug: "summer-escape-package",
    title: "Summer Escape Package",
    tagline: "Sun, sea, and savings on your perfect coastal getaway",
    description: "Enjoy a complimentary night and daily breakfast",
    longDescription:
      "Escape the ordinary with our Summer Escape Package — designed for travelers who crave golden beaches, ocean breezes, and effortless luxury. Book a minimum three-night stay at participating coastal resorts and unlock a complimentary fourth night plus chef-crafted breakfast each morning. Whether you are planning a family vacation or a solo recharge, this package layers premium perks onto an already exceptional stay.",
    priceOff: 25,
    expiryDate: "Aug 31",
    expiryFull: "August 31, 2026",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    detailGallery: [
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=1200&q=80",
    ],
    originalFrom: 320,
    discountedFrom: 240,
    currencyNote: "per night · participating properties",
    validNights: "3+ nights",
    maxGuests: 4,
    category: "Seasonal",
    destinations: ["Adama", "Arbaminch", "Addis Abeba", "Meki"],
    highlights: [
      {
        title: "4th Night Free",
        desc: "Stay 3 nights, get the 4th complimentary at select beachfront hotels.",
      },
      {
        title: "Daily Breakfast",
        desc: "Full buffet or à la carte breakfast for all registered guests.",
      },
      {
        title: "Late Checkout",
        desc: "Enjoy until 2 PM on your departure day — subject to availability.",
      },
      {
        title: "Resort Credit",
        desc: "$50 daily credit toward spa, dining, or activities.",
      },
    ],
    inclusions: [
      "Complimentary fourth night on 3+ night bookings",
      "Daily breakfast for up to 4 guests per room",
      "Welcome drink and fruit platter on arrival",
      "Access to private beach loungers",
      "Complimentary kids club (ages 4–12) at family resorts",
      "Free high-speed Wi-Fi throughout property",
    ],
    howToRedeem: [
      "Select a participating coastal property and choose your dates.",
      "Enter promo code SUMMER25 at checkout or mention the package when booking by phone.",
      "Complete payment — discount applies automatically to eligible nights.",
      "Present confirmation email at check-in to activate breakfast and resort credit.",
    ],
    terms: [
      "Valid for new bookings only; cannot be combined with other promotions.",
      "Blackout dates may apply during public holidays and peak weekends.",
      "Fourth night free applies to the lowest-priced night in the stay.",
      "Resort credit is non-transferable and expires at checkout.",
      "Cancellation policy follows the individual hotel's standard terms.",
    ],
  },
  {
    _id: 2,
    slug: "romantic-getaway",
    title: "Romantic Getaway",
    tagline: "Intimate moments, spa bliss, and memories made for two",
    description: "Special couples package including spa treatment",
    longDescription:
      "Celebrate love with our Romantic Getaway — a curated couples experience at our Bekele Mola Hotels branches across Ethiopia. From candlelit dinners to side-by-side spa rituals, every detail is designed to deepen connection and relaxation. This package pairs beautifully with anniversary trips, honeymoons, or spontaneous weekend escapes.",
    priceOff: 20,
    expiryDate: "Sep 20",
    expiryFull: "September 20, 2026",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    detailGallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    ],
    originalFrom: 450,
    discountedFrom: 360,
    currencyNote: "per night · couples suites",
    validNights: "2+ nights",
    maxGuests: 2,
    category: "Romance",
    destinations: ["Adama", "Arbaminch", "Addis Abeba", "Meki"],
    highlights: [
      {
        title: "Couples Spa",
        desc: "90-minute signature massage or facial for two at the hotel spa.",
      },
      {
        title: "Private Dinner",
        desc: "Reserved table with wine pairing at the property's signature restaurant.",
      },
      {
        title: "Room Upgrade",
        desc: "Complimentary upgrade to a suite when available at check-in.",
      },
      {
        title: "Turndown Ritual",
        desc: "Rose petals, chocolates, and aromatherapy each evening.",
      },
    ],
    inclusions: [
      "90-minute couples spa treatment (massage or facial)",
      "Three-course private dinner with sommelier-selected wine",
      "Daily breakfast in-room or at restaurant",
      "Champagne and artisan chocolates on arrival",
      "Late checkout until 3 PM",
      "Professional photography session (30 min) at select properties",
    ],
    howToRedeem: [
      'Browse couples-friendly hotels and filter by "Romantic Getaway" eligible.',
      "Book a minimum 2-night stay and add the package during checkout.",
      "Schedule spa and dinner times via the pre-arrival concierge link in your email.",
      "Arrive and present ID matching the lead guest on the reservation.",
    ],
    terms: [
      "Package is valid for two adults per room only.",
      "Spa appointments must be booked at least 48 hours before arrival.",
      "Dietary restrictions for dinner should be noted at booking.",
      "Photography session available at participating properties only.",
      "20% discount applies to room rate; add-ons priced separately.",
    ],
  },
  {
    _id: 3,
    slug: "luxury-retreat",
    title: "Luxury Retreat",
    tagline:
      "Book early, travel grand — exclusive savings on world-class stays",
    description:
      "Book 60 days in advance and save on your stay at any of our Bekele Mola Hotels branches.",
    longDescription:
      "The Luxury Retreat offer rewards planners who book ahead. Reserve any of our premium Bekele Mola Hotels branches at least 60 days before arrival and receive up to 30% off the best available rate, plus VIP touches reserved for our most discerning guests. Ideal for milestone celebrations, executive travel, and extended stays.",
    priceOff: 30,
    expiryDate: "Sep 25",
    expiryFull: "September 25, 2026",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    detailGallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d955e7f24?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    ],
    originalFrom: 580,
    discountedFrom: 406,
    currencyNote: "per night · luxury tier properties",
    validNights: "4+ nights",
    maxGuests: 6,
    category: "Luxury",
    destinations: ["Adama", "Arbaminch", "Addis Abeba", "Meki"],
    highlights: [
      {
        title: "30% Early-Bird",
        desc: "Substantial savings when you book 60+ days in advance.",
      },
      {
        title: "VIP Airport Transfer",
        desc: "Private sedan or SUV from airport to hotel, one way included.",
      },
      {
        title: "Executive Lounge",
        desc: "Complimentary lounge access for the duration of your stay.",
      },
      {
        title: "Personal Concierge",
        desc: "Dedicated concierge for itineraries, reservations, and requests.",
      },
    ],
    inclusions: [
      "Up to 30% off best available flexible rate",
      "One-way private airport transfer",
      "Executive lounge access with premium refreshments",
      "Daily à la carte breakfast for all guests",
      "Priority restaurant and spa reservations",
      "Complimentary pressing service (2 items per guest per day)",
    ],
    howToRedeem: [
      "Search luxury-tier hotels and select dates at least 60 days out.",
      'Choose "Flexible Rate" and apply code LUXURY30 at payment.',
      "Upload travel preferences via the VIP portal link sent after booking.",
      "Meet your concierge at check-in for lounge keys and transfer coordination.",
    ],
    terms: [
      "Booking must be made minimum 60 days before check-in date.",
      "Valid on luxury-tier properties only (marked with crown icon).",
      "30% discount capped at 14 consecutive nights per reservation.",
      "Airport transfer available within 50 km of property; surcharges may apply beyond.",
      "Modifications may forfeit early-bird pricing if dates move inside 60-day window.",
    ],
  },
];

export const getOfferById = (id) =>
  exclusiveOffers.find((o) => String(o._id) === String(id) || o.slug === id);
