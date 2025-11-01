// src/searchData.js

const searchData = [
  // ✅ Homepage sections
  {
    title: "Our Ethos",
    keywords: ["ethos", "values", "foundation", "mission", "care philosophy"],
    content:
      "Our ethos section reflects Seva Sai Nursing Bureau's values — blending medical precision with human compassion.",
    route: "/#ethos",
  },
  {
    title: "Our Services",
    keywords: [
      "services",
      "our services",
      "nursing",
      "home care",
      "patient care",
      "elder caretaker",
      "baby care",
      "male nurse",
      "female nurse",
      "tracheostomy",
      "gastrostomy",
      "injection on call",
      "physiotherapy",
      "caretaker",
      "medical assistance",
    ],
    content:
      "Comprehensive home nursing services including patient care, elder caretakers, baby care, and physiotherapy.",
    route: "/#services",
  },
  {
    title: "Our Impact in Numbers",
    keywords: [
      "impact",
      "numbers",
      "stats",
      "achievements",
      "certified nurses",
      "families served",
      "partner hospitals",
      "24x7 support",
    ],
    content:
      "Showcasing our service impact with 500+ nurses, 5000+ families served, and 24x7 support availability.",
    route: "/#impact",
  },

  // ✅ FAQ (Now under About Page)
  {
    title: "Frequently Asked Questions",
    keywords: [
      "faq",
      "questions",
      "support",
      "charges",
      "booking",
      "cancel booking",
      "service charges",
      "who can avail",
      "24/7",
      "how to book",
      "queries",
    ],
    content:
      "Answers to common questions like how to book nurses, service charges, and support availability.",
    route: "/about#faq", // ✅ Now points to FAQ inside About page
  },

  // ✅ Pages
  {
    title: "Home",
    keywords: ["home", "main", "welcome", "homepage"],
    content: "Welcome to Seva Sai Nursing Bureau.",
    route: "/",
  },
  {
    title: "About Us",
    keywords: ["about", "mission", "vision", "who we are", "our story"],
    content: "Learn about Seva Sai Nursing Bureau’s mission and vision.",
    route: "/about",
  },
  {
    title: "Gallery",
    keywords: ["gallery", "photos", "images", "pictures"],
    content: "View Seva Sai Nursing Bureau’s gallery.",
    route: "/gallery",
  },
  {
    title: "Contact Us",
    keywords: ["contact", "call", "reach us", "email", "get in touch"],
    content:
      "Contact Seva Sai Nursing Bureau for nursing and home care support.",
    route: "/#contact",
  },
  {
    title: "Feedback",
    keywords: ["feedback", "review", "rating", "suggestions"],
    content: "Share your experience or feedback with Seva Sai Nursing Bureau.",
    route: "/#feedback",
  },
];

export default searchData;
