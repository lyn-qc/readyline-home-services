export type VerticalId = "hvac" | "plumbing" | "cleaning";

export type HomeService = {
  id: VerticalId;
  name: string;
  brand: string;
  city: string;
  phone: string;
  phoneTel: string;
  href: string;
  blurb: string;
  points: string[];
  cta: string;
};

export const homeServices: HomeService[] = [
  {
    id: "hvac",
    name: "Heating & cooling",
    brand: "Summit Air",
    city: "Phoenix, AZ",
    phone: "(602) 555-0148",
    phoneTel: "+16025550148",
    href: "/hvac",
    blurb: "AC down in this heat? A licensed tech is usually on the way within the hour.",
    points: ["24/7 dispatch", "Price before the work", "Same-day repair"],
    cta: "Get cooling help",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    brand: "Harborline",
    city: "Houston, TX",
    phone: "(713) 555-0192",
    phoneTel: "+17135550192",
    href: "/plumbing",
    blurb: "Burst pipe, backup, or no hot water — we stop the damage first, then quote the fix.",
    points: ["Live leak line", "Camera before we cut", "Landlord jobs welcome"],
    cta: "Stop a leak",
  },
  {
    id: "cleaning",
    name: "Home & office cleaning",
    brand: "BrightNest",
    city: "Austin, TX",
    phone: "(512) 555-0164",
    phoneTel: "+15125550164",
    href: "/cleaning",
    blurb: "Recurring cleans with a named team. You pick the cadence. We bring the supplies.",
    points: ["Weekly or biweekly", "Background-checked", "Clear packages"],
    cta: "Book a clean",
  },
];
