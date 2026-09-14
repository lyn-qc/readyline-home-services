import { TradeLanding } from "@/components/trade/trade-landing";
import { demoSites } from "@/data/demos";

export const metadata = {
  title: "Harborline Plumbing | Houston leak, drain & water heater repair",
  description:
    "Burst pipes, sewer backups, and water heaters in Houston. Call (713) 555-0192 for the leak line.",
};

export default function PlumbingPage() {
  return <TradeLanding site={demoSites.plumbing} />;
}
