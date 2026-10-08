"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function FooterAccordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b md:border-none" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
      {/* Mobile toggle header */}
      <button
        suppressHydrationWarning
        className="md:hidden w-full flex items-center justify-between py-3 text-title-md text-on-tertiary font-semibold"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span
          className="material-symbols-outlined transition-transform duration-200 text-on-tertiary-container"
          style={{ fontSize: 20, transform: open ? "rotate(180deg)" : undefined }}
        >
          expand_more
        </span>
      </button>

      {/* Desktop always-visible heading */}
      <div className="hidden md:flex items-center min-h-[36px]">
        <span className="text-title-md text-on-tertiary pb-1 border-b border-on-tertiary-container inline-block w-fit font-semibold">
          {title}
        </span>
      </div>

      {/* Content — always shown on desktop, toggled on mobile */}
      <div className={`${open ? "block" : "hidden"} md:block pb-3 md:pb-0 md:mt-4`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-inverse-on-surface border-t" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
      <div className="section-container pt-14 md:pt-20 lg:pt-24 pb-6 md:pb-8">

        {/* Mobile: Brand block top, full-width */}
        <div className="flex flex-col gap-4 pb-5 border-b md:hidden" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 22 }}>apartment</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-headline-sm text-on-tertiary font-bold tracking-tight leading-tight">Sample Solution</span>
              <span className="text-label-caps text-secondary-fixed">Jubail Industrial City, KSA</span>
            </div>
          </div>
          <div className="text-body-sm flex flex-row flex-wrap gap-x-5 gap-y-1.5" style={{ color: "var(--color-surface-container)" }}>
            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-on-tertiary transition-colors">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 15 }}>call</span>
              <span>{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-on-tertiary transition-colors">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 15 }}>mail</span>
              <span>{company.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {company.certifications.map((cert: string) => (
              <span
                key={cert}
                className="px-2 py-0.5 rounded text-label-caps whitespace-nowrap text-[10px]"
                style={{
                  background: "rgba(222,233,255,0.12)",
                  border: "1px solid rgba(196,198,207,0.35)",
                  color: cert.includes("ARAMCO") ? "var(--color-on-tertiary-container)" : "var(--color-surface-bright)",
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop: 4-column grid; Mobile: accordion list */}
        <div className="md:grid md:grid-cols-4 md:gap-8 xl:gap-10 md:pb-10 md:border-b md:items-start" style={{ borderColor: "rgba(116,119,127,0.2)" }}>

          {/* Desktop Brand Column */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex items-center gap-3 min-h-[36px]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 22 }}>apartment</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-headline-sm text-on-tertiary font-bold tracking-tight leading-tight">Sample Solution</span>
                <span className="text-label-caps text-secondary-fixed">Jubail Industrial City</span>
              </div>
            </div>
            <p className="text-body-sm leading-relaxed" style={{ color: "var(--color-surface-container)" }}>
              Leading industrial contractor delivering comprehensive EPC support, maintenance, technical staffing, and heavy fleet solutions in Jubail and the Eastern Province.
            </p>
            <div className="flex items-center gap-2 flex-wrap pt-1">
              {company.certifications.map((cert: string) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded text-label-caps whitespace-nowrap"
                  style={{
                    background: "rgba(222,233,255,0.12)",
                    border: "1px solid rgba(196,198,207,0.35)",
                    color: cert.includes("ARAMCO") ? "var(--color-on-tertiary-container)" : "var(--color-surface-bright)",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
            <div className="text-body-sm flex flex-col gap-1.5 pt-1" style={{ color: "var(--color-surface-container)" }}>
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-on-tertiary transition-colors w-fit">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 16 }}>call</span>
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-on-tertiary transition-colors w-fit">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 16 }}>mail</span>
                <span>{company.email}</span>
              </a>
            </div>
          </div>

          {/* Our Company */}
          <FooterAccordion title="Our Company">
            <nav className="flex flex-col gap-2 md:gap-2.5 text-body-sm" aria-label="Company links">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Vision & Mission", href: "/#vision" },
                { label: "Safety Policy", href: "/policy/safety" },
                { label: "Quality Policy", href: "/policy/quality" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:underline hover:text-on-tertiary w-fit"
                  style={{ color: "var(--color-surface-container)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </FooterAccordion>

          {/* Our Services */}
          <FooterAccordion title="Our Services">
            <nav className="flex flex-col gap-2 md:gap-2.5 text-body-sm" aria-label="Services links">
              {services.map((s: typeof services[0]) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:underline hover:text-on-tertiary w-fit"
                  style={{ color: "var(--color-surface-container)" }}
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </FooterAccordion>

          {/* Quick Links & Newsletter */}
          <FooterAccordion title="Quick Links & Contact">
            <nav className="flex flex-col gap-2 md:gap-2.5 text-body-sm mb-3 md:mb-0" aria-label="Quick links">
              {[
                { label: "Projects Gallery", href: "/projects" },
                { label: "Client List", href: "/clients" },
                { label: "Jubail Office Location", href: "/contact" },
                { label: "Direct Inquiry / RFP", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:underline hover:text-on-tertiary w-fit"
                  style={{ color: "var(--color-surface-container)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Newsletter — hidden on mobile (saves space), shown on desktop */}
            <div className="hidden md:block mt-3 pt-3 border-t w-full" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
              <span className="text-label-caps text-secondary-fixed block mb-2">Industry Newsletter</span>
              <form
                className="flex items-center gap-2 w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  (e.currentTarget.querySelector("input") as HTMLInputElement).value = "";
                }}
              >
                <input
                  type="email"
                  placeholder="Business Email"
                  className="h-9 px-3 rounded text-body-sm w-full flex-1 min-w-0 focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(196,198,207,0.35)",
                    color: "var(--color-on-tertiary)",
                  }}
                  aria-label="Newsletter email"
                />
                <button
                  suppressHydrationWarning
                  type="submit"
                  className="h-9 px-4 rounded text-label-code text-on-tertiary transition-colors shrink-0 font-semibold hover:opacity-90 cursor-pointer"
                  style={{ background: "var(--color-on-tertiary-container)" }}
                >
                  Join
                </button>
              </form>
            </div>
          </FooterAccordion>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-label-code text-center" style={{ color: "var(--color-surface-container)" }}>
          <p className="w-full md:w-auto md:text-left text-[11px] md:text-[12px]">
            © {year} Sample Solution Contracting &amp; Services Ltd. All Rights Reserved. | Jubail Industrial City, KSA
          </p>
          <div className="flex items-center justify-center md:justify-end gap-5 w-full md:w-auto shrink-0">
            <Link href="/policy/safety" className="hover:text-on-tertiary hover:underline transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/policy/quality" className="hover:text-on-tertiary hover:underline transition-colors py-1">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
