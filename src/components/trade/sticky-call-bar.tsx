import { Phone } from "lucide-react";
import type { DemoSite } from "@/data/demos";

export function StickyCallBar({ site }: { site: DemoSite }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[color:var(--trade-bar)] p-3 text-[color:var(--trade-bar-ink)] shadow-2xl md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[color:var(--trade-accent)] text-base font-semibold text-[color:var(--trade-accent-ink)]"
      >
        <Phone className="size-4" />
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
