"use client";

import { useRef, useState } from "react";
import type { DemoSite } from "@/data/demos";

type LeadFormProps = {
  site: DemoSite;
  className?: string;
};

const fieldClass =
  "h-10 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900";

export function LeadForm({ site, className }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [error, setError] = useState("");

  async function handleSubmit() {
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const missing = site.fields.find(
      (field) => field.required && !String(data.get(field.name) || "").trim()
    );
    if (missing) {
      setError(`Please fill in ${missing.label}.`);
      return;
    }
    setError("");
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("ok");
  }

  if (status === "ok") {
    return (
      <div className={`rounded-2xl border border-current/20 bg-black/5 p-6 ${className ?? ""}`}>
        <p className="text-sm font-semibold tracking-wide uppercase opacity-80">Request received</p>
        <h3 className="mt-2 text-2xl font-semibold">Dispatch has your details.</h3>
        <p className="mt-3 text-sm leading-6 opacity-80">
          We will text an arrival window shortly. If this cannot wait, call {site.phoneDisplay} now.
        </p>
        <p className="mt-3 text-sm font-medium leading-6">
          Demo only — this form does not notify a real dispatch desk.
        </p>
        <button
          type="button"
          className="mt-5 inline-flex h-11 items-center rounded-lg bg-[color:var(--trade-accent)] px-5 text-base font-semibold text-[color:var(--trade-accent-ink)]"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} autoComplete="off" className={`space-y-3 ${className ?? ""}`} onSubmit={(event) => event.preventDefault()}>
      {site.fields.map((field) => (
        <div key={field.name} className="space-y-1.5">
          <label htmlFor={`lead-${field.name}`} className="block text-sm font-medium">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={`lead-${field.name}`}
              name={field.name}
              placeholder={field.placeholder}
              className={`${fieldClass} min-h-24 py-2`}
            />
          ) : field.type === "select" ? (
            <select id={`lead-${field.name}`} name={field.name} defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`lead-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete="off"
              className={fieldClass}
            />
          )}
        </div>
      ))}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="button"
        data-testid="lead-submit"
        disabled={status === "sending"}
        onClick={handleSubmit}
        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[color:var(--trade-accent)] text-base font-semibold text-[color:var(--trade-accent-ink)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : site.formSubmit}
      </button>
      <p className="text-xs leading-5 opacity-70">{site.formHint}</p>
    </form>
  );
}
