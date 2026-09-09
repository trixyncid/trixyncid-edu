export const siteConfig = {
  name: "Trixync",
  productName: "Trixync Education",
  domain: "trixync.id",
  tagline: "Technology & Systems Studio",
  lockup: "Built in Sync",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://edu.trixync.id",
  studioUrl: "https://www.trixync.id",
  email: "hello@trixync.id",
  telephone: "+62 811 6359 119",
  whatsapp: "628116359119",
  location: "Medan · North Sumatra · Indonesia",
  hours: {
    weekdays: { id: "Senin–Jumat 09.00–17.00", en: "Mon–Fri 9:00 AM – 5:00 PM" },
    saturday: { id: "Sabtu 09.00–15.00", en: "Sat 9:00 AM – 3:00 PM" },
    sunday: { id: "Minggu tutup", en: "Sun · Closed" },
  },
  partners: {
    yanksAndBrits: {
      name: "Yanks and Brits Study Abroad Program",
      url: "https://www.yanksandbrits.co.id",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/trixync",
    github: "https://github.com/trixync",
    instagram: "https://instagram.com/trixync.id",
    instagramHandle: "@trixync.id",
  },
} as const;

export const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Tutors", href: "/tutors" },
  { label: "Approach", href: "/#approach" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Collaborate", href: "/#collaboration" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const enrollMessage =
  "Halo Trixync! Saya tertarik mendaftar program coding education. Mohon info cohort berikutnya dan cara enroll.";
