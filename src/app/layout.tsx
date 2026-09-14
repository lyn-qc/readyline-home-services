import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Fraunces, Oswald } from "next/font/google";
import { DemoBanner } from "@/components/demo-banner";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ReadyLine · Heating, plumbing, and cleaning",
  description:
    "Portfolio demos of fictional local shops. Same-day HVAC in Phoenix, leak repair in Houston, and recurring cleaning in Austin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${oswald.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)]">
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}
