import Link from "next/link";

export function HubHeader() {
  return (
    <header className="border-b border-white/10 bg-[#0e1116]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.16em] uppercase">
          ReadyLine
        </Link>
        <nav className="flex items-center gap-5 text-sm text-white/70">
          <Link href="/hvac" className="hover:text-white">
            HVAC
          </Link>
          <Link href="/plumbing" className="hover:text-white">
            Plumbing
          </Link>
          <Link href="/cleaning" className="hover:text-white">
            Cleaning
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function HubFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>ReadyLine local shops · Phoenix · Houston · Austin</p>
        <p>Licensed crews. You call the shop, not a marketplace.</p>
      </div>
    </footer>
  );
}
