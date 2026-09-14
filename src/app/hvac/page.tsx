import { TradeLanding } from "@/components/trade/trade-landing";
import { demoSites } from "@/data/demos";

export const metadata = {
  title: "Summit Air Heating & Cooling | Phoenix same-day AC repair",
  description:
    "24/7 AC and furnace repair in Phoenix, Scottsdale, Mesa, and Tempe. Call (602) 555-0148 for dispatch.",
};

export default function HvacPage() {
  return <TradeLanding site={demoSites.hvac} />;
}
