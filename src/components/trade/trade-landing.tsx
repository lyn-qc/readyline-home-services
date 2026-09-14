import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { LeadForm } from "@/components/trade/lead-form";
import { StickyCallBar } from "@/components/trade/sticky-call-bar";
import type { DemoSite } from "@/data/demos";

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="size-3.5 fill-current" />
      ))}
    </span>
  );
}

export function TradeLanding({ site }: { site: DemoSite }) {
  const themeClass =
    site.id === "hvac" ? "theme-hvac" : site.id === "plumbing" ? "theme-plumbing" : "theme-cleaning";

  return (
    <div className={`${themeClass} min-h-screen bg-[color:var(--trade-bg)] text-[color:var(--trade-ink)] pb-24 md:pb-0`}>
      <header className="border-b border-black/10 bg-[color:var(--trade-header)] text-[color:var(--trade-header-ink)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-lg font-semibold tracking-tight">{site.shortBrand}</p>
            <p className="text-xs opacity-70">{site.metro}</p>
          </div>
          <nav className="hidden items-center gap-5 text-sm opacity-80 md:flex">
            <a href="#services" className="hover:opacity-100">
              Services
            </a>
            <a href="#reviews" className="hover:opacity-100">
              Reviews
            </a>
            <a href="#book" className="hover:opacity-100">
              Book
            </a>
          </nav>
          <div className="hidden text-right lg:block">
            <p className="text-xs uppercase tracking-[0.18em] opacity-70">{site.hours}</p>
            <a href={`tel:${site.phoneTel}`} className="text-xl font-semibold tracking-tight">
              {site.phoneDisplay}
            </a>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[color:var(--trade-accent)] px-4 text-sm font-semibold text-[color:var(--trade-accent-ink)]"
          >
            <Phone className="size-4" />
            {site.primaryCta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden text-[color:var(--trade-hero-ink)]">
        <div className="absolute inset-0">
          <Image
            src={site.imageHero}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[color:var(--trade-hero-veil)]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="inline-flex rounded-full bg-[color:var(--trade-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--trade-accent-ink)]">
              {site.emergencyLabel}
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] opacity-80">{site.heroKicker}</p>
            <h1 className="mt-3 max-w-xl font-[family-name:var(--trade-display)] text-4xl leading-[1.05] sm:text-5xl">
              {site.heroTitle}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 opacity-90">{site.heroBody}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.heroProof.map((item) => (
                <span key={item} className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--trade-accent)] px-6 text-base font-semibold text-[color:var(--trade-accent-ink)]"
              >
                {site.primaryCta}
              </a>
              <a
                href="#book"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-base font-semibold"
              >
                {site.secondaryCta}
              </a>
            </div>
            <p className="mt-4 text-xs opacity-70">
              {site.license} · {site.hours}
            </p>
          </div>
          <div id="book" className="rounded-3xl bg-[color:var(--trade-panel)] p-6 text-[color:var(--trade-panel-ink)] shadow-2xl">
            <h2 className="text-2xl font-semibold">{site.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 opacity-80">{site.formHint}</p>
            <LeadForm site={site} className="mt-5" />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-[family-name:var(--trade-display)] text-3xl">{site.servicesTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {site.services.map((service) => (
            <article key={service.name} className="rounded-2xl border border-black/10 bg-[color:var(--trade-card)] p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <span className="text-xs font-medium uppercase tracking-wide opacity-70">{service.priceFrom}</span>
              </div>
              <p className="mt-2 text-sm leading-6 opacity-80">{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--trade-band)] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--trade-display)] text-3xl">{site.whyTitle}</h2>
            <ul className="mt-8 space-y-5">
              {site.why.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 opacity-80">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-3xl">
            <Image src={site.imageSecondary} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-[family-name:var(--trade-display)] text-3xl">How a job actually runs</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {site.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-black/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] opacity-60">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 opacity-80">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="reviews" className="bg-[color:var(--trade-band)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-[family-name:var(--trade-display)] text-3xl">Reviews from {site.city}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {site.reviews.map((review) => (
              <figure key={review.name} className="rounded-2xl bg-[color:var(--trade-card)] p-5">
                <Stars count={review.stars} />
                <blockquote className="mt-3 text-sm leading-6">{review.quote}</blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {review.name} · {review.area}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-[family-name:var(--trade-display)] text-3xl">Service area</h2>
        <p className="mt-2 text-sm opacity-70">If you can drive it in 40 minutes, we take the call.</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.areas.map((area) => (
            <li key={area} className="rounded-full border border-black/15 px-3 py-1 text-sm">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="font-[family-name:var(--trade-display)] text-3xl">Questions before you call</h2>
        <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
          {site.faqs.map((faq) => (
            <details key={faq.q} className="group py-3">
              <summary className="cursor-pointer list-none text-base font-medium marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-lg leading-none opacity-50 group-open:hidden">+</span>
                  <span className="hidden text-lg leading-none opacity-50 group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-2 text-sm leading-6 opacity-80">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[color:var(--trade-header)] px-4 py-10 text-[color:var(--trade-header-ink)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{site.brand}</p>
            <p className="text-sm opacity-70">{site.tagline}</p>
            <p className="mt-2 text-sm">{site.license}</p>
          </div>
          <div className="text-sm">
            <a href={`tel:${site.phoneTel}`} className="block font-semibold">
              {site.phoneDisplay}
            </a>
            <p>{site.email}</p>
            <p className="mt-2 opacity-60">Licensed and insured. Serving {site.metro}.</p>
          </div>
        </div>
      </footer>
      <StickyCallBar site={site} />
    </div>
  );
}
