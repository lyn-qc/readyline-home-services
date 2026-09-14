import { TradeLanding } from "@/components/trade/trade-landing";
import { demoSites } from "@/data/demos";

export const metadata = {
  title: "BrightNest Cleaning | Austin home and office cleaning",
  description:
    "Recurring house cleaning, move-in resets, and small offices in Austin. Call (512) 555-0164.",
};

export default function CleaningPage() {
  return <TradeLanding site={demoSites.cleaning} />;
}
