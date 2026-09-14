import type { VerticalId } from "@/data/pitch";

export type LeadField = {
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

export type DemoSite = {
  id: VerticalId;
  brand: string;
  shortBrand: string;
  tagline: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  city: string;
  metro: string;
  hours: string;
  license: string;
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  heroProof: string[];
  emergencyLabel: string;
  primaryCta: string;
  secondaryCta: string;
  formSubmit: string;
  servicesTitle: string;
  services: { name: string; detail: string; priceFrom: string }[];
  whyTitle: string;
  why: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  reviews: { name: string; area: string; quote: string; stars: number }[];
  areas: string[];
  faqs: { q: string; a: string }[];
  formTitle: string;
  formHint: string;
  fields: LeadField[];
  imageHero: string;
  imageSecondary: string;
};

export const demoSites: Record<VerticalId, DemoSite> = {
  hvac: {
    id: "hvac",
    brand: "Summit Air Heating & Cooling",
    shortBrand: "Summit Air",
    tagline: "Phoenix same-day AC repair",
    phoneDisplay: "(602) 555-0148",
    phoneTel: "+16025550148",
    email: "dispatch@summitair.example",
    city: "Phoenix",
    metro: "Phoenix · Scottsdale · Mesa · Tempe",
    hours: "24/7 emergency dispatch",
    license: "AZ ROC #329184 · EPA certified",
    heroKicker: "AC down in this heat?",
    heroTitle: "A licensed tech on the way — often within 60 minutes.",
    heroBody:
      "If the house is warming up, do not wait on a callback form buried in a menu. Call Summit Air. We diagnose, repair, and tell you the price before we start.",
    heroProof: ["4.9 Google", "Same-day repair", "Upfront pricing"],
    emergencyLabel: "24/7 AC & furnace emergency",
    primaryCta: "Call now for dispatch",
    secondaryCta: "Book a same-day window",
    formSubmit: "Send dispatch request",
    servicesTitle: "Repair first. Replace only when it pays off.",
    services: [
      {
        name: "Emergency AC repair",
        detail: "No cool air, frozen coil, breaker tripping, strange noise.",
        priceFrom: "Diagnostic $89, waived with repair",
      },
      {
        name: "Furnace & heat pump",
        detail: "No heat, burner smell, short cycling before a desert cold snap.",
        priceFrom: "Same-day heat restore",
      },
      {
        name: "System replacement",
        detail: "Honest load calc, not a scare quote. Financing on qualifying systems.",
        priceFrom: "Written options, not one number",
      },
      {
        name: "Maintenance club",
        detail: "Two tune-ups a year so summer does not start with a dead compressor.",
        priceFrom: "From $29/mo",
      },
    ],
    whyTitle: "Why Phoenix homeowners call us instead of a lead mill",
    why: [
      {
        title: "You talk to dispatch, not a marketplace",
        body: "The number on this page rings our shop. No sold leads, no three contractors texting you.",
      },
      {
        title: "Price before the work",
        body: "We photograph the issue, explain the fix, and get a yes before tools come out.",
      },
      {
        title: "Stocked trucks",
        body: "Capacitors, contactors, capacitors, motors, and common condensers ride with the tech.",
      },
    ],
    steps: [
      { title: "Call or request a window", body: "Tell us: no cool air, no heat, or it just sounds wrong." },
      { title: "Tech arrives with a real clock", body: "We text an ETA. Most metro jobs land inside an hour in summer." },
      { title: "Fix it or map the replace", body: "Repair on the spot when it is sane. Replacement only with written options." },
    ],
    reviews: [
      {
        name: "Marisol G.",
        area: "Arcadia",
        quote: "115 degrees and the AC died at 2pm. They answered, gave a two-hour window, and the house was cold before dinner.",
        stars: 5,
      },
      {
        name: "Derek P.",
        area: "Chandler",
        quote: "Last company wanted a full system. Summit Air replaced a capacitor and we were running in 40 minutes.",
        stars: 5,
      },
      {
        name: "Priya S.",
        area: "Scottsdale",
        quote: "Straight about the age of the unit. We did maintenance this year and a replace plan for next spring.",
        stars: 5,
      },
    ],
    areas: ["Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Glendale", "Peoria", "Gilbert"],
    faqs: [
      {
        q: "Do you really answer after 9pm?",
        a: "Yes. Night and weekend calls go to on-call dispatch, not voicemail. After-hours rates are stated before we roll.",
      },
      {
        q: "Will you try to sell me a new system?",
        a: "Only if repair cost is close to replacement value. You will see both numbers.",
      },
      {
        q: "Are you licensed in Arizona?",
        a: "Yes. ROC #329184, insured, EPA 608 certified techs.",
      },
    ],
    formTitle: "Need air today? Give dispatch the address.",
    formHint: "Emergency calls skip the form. If you can wait a window, we will text a tech ETA.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Jordan Hale" },
      { name: "phone", label: "Mobile", type: "tel", required: true, placeholder: "(602) 555-0148" },
      {
        name: "issue",
        label: "What failed",
        type: "select",
        required: true,
        options: ["No cooling", "No heat", "Strange noise", "Water around indoor unit", "Maintenance / tune-up"],
      },
      { name: "zip", label: "ZIP", type: "text", required: true, placeholder: "85016" },
      { name: "notes", label: "Anything the tech should know", type: "textarea", placeholder: "Unit on the roof, gate code 4412…" },
    ],
    imageHero:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    imageSecondary:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  plumbing: {
    id: "plumbing",
    brand: "Harborline Plumbing",
    shortBrand: "Harborline",
    tagline: "Houston leak, clog & water heater repair",
    phoneDisplay: "(713) 555-0192",
    phoneTel: "+17135550192",
    email: "jobs@harborline.example",
    city: "Houston",
    metro: "Houston · Katy · Sugar Land · The Woodlands",
    hours: "24/7 leak & backup response",
    license: "TX Master Plumber #43821",
    heroKicker: "Water where it should not be?",
    heroTitle: "Stop the leak first. Price the repair before we open walls.",
    heroBody:
      "Burst line, sewer smell, or a water heater that quit in the middle of showers — Harborline answers the phone. Licensed plumbers, not a call center that sells your address.",
    heroProof: ["Master plumber on staff", "Photo + price before demo", "Insured for occupied homes"],
    emergencyLabel: "Live leak or sewer backup",
    primaryCta: "Call the leak line",
    secondaryCta: "Schedule a repair window",
    formSubmit: "Send this plumbing request",
    servicesTitle: "The jobs Houston actually calls about",
    services: [
      {
        name: "Burst pipe & leak search",
        detail: "Slab leaks, pinhole copper, upstairs showers soaking the ceiling.",
        priceFrom: "Emergency stop-leak, then a written fix",
      },
      {
        name: "Drain & sewer",
        detail: "Kitchen stack, tub backup, camera + jet — not just another chemical flush.",
        priceFrom: "Camera locate from $189",
      },
      {
        name: "Water heaters",
        detail: "No hot water, popping tank, tankless error codes after a freeze.",
        priceFrom: "Same-day tank swap when stocked",
      },
      {
        name: "Repipe & remodel rough-in",
        detail: "Whole-home PEX, bathroom gut, landlord turnover. Quoted, not guessed.",
        priceFrom: "Site visit, then a scope",
      },
    ],
    whyTitle: "High-intent plumbing leads do not need a brochure",
    why: [
      {
        title: "Emergency and planned are two doors",
        body: "A backed-up toilet should not wait behind a faucet quote. Call for live water. Book a window for everything else.",
      },
      {
        title: "We show you the pipe",
        body: "Camera clip or photo on your phone before we cut tile. That is how you keep trust when the invoice is not tiny.",
      },
      {
        title: "Landlords can send us the lockbox",
        body: "Turnover leaks and tenant no-hot-water calls are normal. We invoice the owner, text the resident.",
      },
    ],
    steps: [
      { title: "Tell us if water is still moving", body: "If it is, we talk shutoff first, then roll a plumber." },
      { title: "Stabilize, then scope", body: "Stop damage. Camera or moisture meter next. No exploratory demolition on a hunch." },
      { title: "Repair with a number", body: "You approve the option. We do not discover a second invoice after lunch." },
    ],
    reviews: [
      {
        name: "Luis M.",
        area: "EaDo",
        quote: "Upstairs shower was raining into the kitchen. They answered at 8:40pm, isolated the line, and came back next morning to re-pipe the run.",
        stars: 5,
      },
      {
        name: "Hannah R.",
        area: "Katy",
        quote: "Water heater died on a Sunday. Harborline had a 50-gallon in the truck. No runaround.",
        stars: 5,
      },
      {
        name: "Owen T.",
        area: "The Woodlands",
        quote: "Camera showed a belly in the sewer, not a mystery clog. That quote was the one I could take to the HOA.",
        stars: 5,
      },
    ],
    areas: ["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress", "Spring", "Bellaire"],
    faqs: [
      {
        q: "Should I shut the water off?",
        a: "If water is actively spreading, shut the main. We will walk you through the valve on the call.",
      },
      {
        q: "Do you work for landlords?",
        a: "Yes. Send the unit address, lockbox, and who pays. We keep a photo log for the file.",
      },
      {
        q: "Are after-hours rates different?",
        a: "Night and Sunday dispatch has a stated emergency fee. You hear it before we drive.",
      },
    ],
    formTitle: "Not a flood — but you still need a plumber?",
    formHint: "Live leak or sewage in the tub: call. For water heaters, clogged lines, and remodel rough-in, send this.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Casey Nguyen" },
      { name: "phone", label: "Mobile", type: "tel", required: true, placeholder: "(713) 555-0192" },
      {
        name: "issue",
        label: "Job type",
        type: "select",
        required: true,
        options: ["Active leak", "Drain / sewer", "Water heater", "Repipe / remodel", "Landlord turnover"],
      },
      { name: "zip", label: "ZIP", type: "text", required: true, placeholder: "77006" },
      { name: "notes", label: "What you are seeing", type: "textarea", placeholder: "Ceiling stain is growing, main is still on…" },
    ],
    imageHero:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    imageSecondary:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  },
  cleaning: {
    id: "cleaning",
    brand: "BrightNest Cleaning",
    shortBrand: "BrightNest",
    tagline: "Austin home & office cleaning on a calendar, not a panic",
    phoneDisplay: "(512) 555-0164",
    phoneTel: "+15125550164",
    email: "hello@brightnest.example",
    city: "Austin",
    metro: "Austin · Round Rock · Cedar Park · South Congress",
    hours: "Mon–Sat 8:00–6:00",
    license: "Bonded · insured · background-checked",
    heroKicker: "The house should already look like this on Thursday.",
    heroTitle: "Recurring cleaning with a named team, not a rotating surprise.",
    heroBody:
      "Residential weekly/biweekly, move-in resets, and small offices. You pick the cadence, we send the same people, and you know the price before we bring the supplies.",
    heroProof: ["Same team when we can", "Supplies included", "Photo checklist after each visit"],
    emergencyLabel: "Need a reset before guests Friday?",
    primaryCta: "Call to lock a recurring slot",
    secondaryCta: "Get a 60-second estimate",
    formSubmit: "Send my estimate request",
    servicesTitle: "Clear packages. No mystery add-ons at the door.",
    services: [
      {
        name: "Recurring home",
        detail: "Kitchen, baths, floors, and the surfaces you actually live on. Weekly or every other week.",
        priceFrom: "From $149 / visit",
      },
      {
        name: "Deep / move-in",
        detail: "Baseboards, inside oven, fridge, windows you can reach. The job people book once and remember.",
        priceFrom: "From $289",
      },
      {
        name: "Airbnb turnover",
        detail: "Same-day linen + reset between guests. Checklist lives in your listing, not in a text thread.",
        priceFrom: "From $129 / turnover",
      },
      {
        name: "Small office",
        detail: "Suites under 4,000 sq ft. Night or early morning so staff never watch someone mop around a meeting.",
        priceFrom: "Evening crew, monthly invoice",
      },
    ],
    whyTitle: "Cleaning closes faster when the scope is boringly clear",
    why: [
      {
        title: "You are not buying a personality, you are buying a checklist",
        body: "Every first visit includes a walkthrough photo set. Recurring visits follow that list unless you change it.",
      },
      {
        title: "Background-checked, bonded, insured",
        body: "The sentence offices and families actually ask. We send names, not a van with a different logo each week.",
      },
      {
        title: "Recurring is the product",
        body: "One-off deep cleans are fine. The business is Thursday mornings that never slip.",
      },
    ],
    steps: [
      { title: "Tell us beds, baths, pets, cadence", body: "Sixty seconds. We price from that, then confirm on a walkthrough if the home is unusual." },
      { title: "Meet the team on visit one", body: "We label products, lockbox, alarm, and the rooms you care about most." },
      { title: "Stay on the calendar", body: "Skip a week when you travel. The slot stays yours." },
    ],
    reviews: [
      {
        name: "Elena V.",
        area: "Mueller",
        quote: "We tried two apps. BrightNest just shows up Thursday, sends photos, and the fridge handles are actually clean.",
        stars: 5,
      },
      {
        name: "Chris D.",
        area: "Domain office",
        quote: "Small suite, 12 people, kitchenette that was a disaster. Evening crew, invoice on the 1st, no drama.",
        stars: 5,
      },
      {
        name: "Aisha K.",
        area: "South Congress STR",
        quote: "Turnovers between Friday checkout and 4pm check-in. They text if a guest left a mess that needs extra time.",
        stars: 5,
      },
    ],
    areas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "South Congress", "East Austin", "Tarrytown", "Dripping Springs"],
    faqs: [
      {
        q: "Do I have to be home?",
        a: "No. Lockbox or smart lock is normal. We text on arrival and send the checklist when we leave.",
      },
      {
        q: "What about extras like oven or windows?",
        a: "They are on the deep-clean menu, not silently skipped on a maintenance visit. You choose.",
      },
      {
        q: "Can you clean an office and a home?",
        a: "Yes. Different crews, different invoices. Recurring commercial is quoted from square footage and kitchen use.",
      },
    ],
    formTitle: "Get a number before you commit the calendar.",
    formHint: "This is an estimate, not a surprise invoice. We confirm after the first visit if the home needs a deep-clean start.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Sam Ortiz" },
      { name: "phone", label: "Mobile", type: "tel", required: true, placeholder: "(512) 555-0164" },
      {
        name: "service",
        label: "Service",
        type: "select",
        required: true,
        options: ["Weekly home", "Every other week", "Deep / move-in", "Airbnb turnover", "Small office"],
      },
      {
        name: "size",
        label: "Beds / baths or sq ft",
        type: "text",
        required: true,
        placeholder: "3 bed / 2 bath",
      },
      { name: "notes", label: "Pets, extras, timing", type: "textarea", placeholder: "Dog crate in office, prefer Thursday mornings…" },
    ],
    imageHero:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    imageSecondary:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  },
};

export const demoList = Object.values(demoSites);
