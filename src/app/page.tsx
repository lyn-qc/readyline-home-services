import Link from "next/link";
import { HubFooter, HubHeader } from "@/components/hub/chrome";
import { homeServices } from "@/data/pitch";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0e1116] text-[#f4f0e6]">
      <HubHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-300">
            Local trades that answer
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl leading-[1.1] sm:text-6xl">
            The house should not wait on a voicemail.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Three licensed shops for heat, water, and a clean house. You talk to dispatch — not a lead mill that sells your address.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#shops"
              className="inline-flex h-12 items-center rounded-full bg-amber-300 px-5 text-sm font-semibold text-black"
            >
              Choose a shop
            </Link>
            <a
              href="tel:+16025550148"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-5 text-sm font-semibold"
            >
              Call Summit Air
            </a>
          </div>
        </section>

        <section id="shops" className="border-t border-white/10 bg-[#12161d] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl">What do you need fixed?</h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Pick the trade. Each shop posts a real phone number on the first screen.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {homeServices.map((service) => (
                <article key={service.id} className="flex flex-col rounded-3xl border border-white/10 bg-[#0e1116] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                    {service.name} · {service.city}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl">{service.brand}</h3>
                  <a href={`tel:${service.phoneTel}`} className="mt-2 text-lg font-semibold">
                    {service.phone}
                  </a>
                  <p className="mt-5 text-sm leading-7 text-white/75">{service.blurb}</p>
                  <ul className="mt-5 space-y-2 text-sm text-white/65">
                    {service.points.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-black"
                  >
                    {service.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <HubFooter />
    </div>
  );
}
