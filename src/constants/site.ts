export const siteConfig = {
  name: "MindCastle Chess Academy",

  description:
    "Premium online chess coaching for students worldwide. Expert coaching, tournament preparation, strategic thinking, and measurable progress.",

  url: "https://mindcastlechess.com",

  contact: {
    email: "info@mindcastlechess.com",
    phone: "+91 XXXXX XXXXX",
  },

  cta: {
    primary: "Book Free Trial Class",
    secondary: "Explore Classes",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Classes",
      href: "/classes",
    },
    {
      label: "Achievements",
      href: "/achievements",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;