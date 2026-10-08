"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="w-full bg-primary text-inverse-on-surface border-t" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
      <div className="section-container pt-10 md:pt-12 pb-6">
        {/* Main Grid: Collapsible Accordion on Mobile, 4 Equal Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 xl:gap-10 pb-8 md:pb-10 border-b items-start" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
          
          {/* Column 1: Brand (Always visible) */}
          <div className="flex flex-col gap-3.5 pb-6 md:pb-0 border-b md:border-b-0" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
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
              Leading industrial contractor delivering comprehensive EPC support, maintenance, technical staffing, and heavy fleet solutions in Jubail.
            </p>

            <div className="flex items-center gap-2 flex-wrap pt-0.5">
              {company.certifications.map((cert: string) => (
                <span
                  key={cert}
                  className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase whitespace-nowrap"
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

            <div className="text-body-sm flex flex-row md:flex-col gap-4 md:gap-1.5 pt-1 flex-wrap" style={{ color: "var(--color-surface-container)" }}>
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-on-tertiary transition-colors w-fit">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 16 }}>call</span>
                <span className="text-label-code">{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-on-tertiary transition-colors w-fit">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontSize: 16 }}>mail</span>
                <span className="text-label-code">{company.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Company (Accordion on Mobile, Static on Desktop) */}
          <div className="flex flex-col border-b md:border-b-0" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
            <button
              suppressHydrationWarning
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between py-3.5 md:py-0 md:min-h-[36px] text-left cursor-pointer md:cursor-default"
              aria-expanded={openSection === "company"}
            >
              <span className="text-title-md text-on-tertiary pb-0 md:pb-1 md:border-b border-on-tertiary-container inline-block font-semibold">
                Our Company
              </span>
              <span
                className="material-symbols-outlined text-on-surface-variant md:hidden transition-transform duration-200"
                style={{ transform: openSection === "company" ? "rotate(180deg)" : undefined }}
              >
                expand_more
              </span>
            </button>
            
            <nav
              className={`flex-col gap-2.5 text-body-sm pt-2 pb-3 md:pb-0 ${
                openSection === "company" ? "flex" : "hidden md:flex"
              }`}
              aria-label="Company links"
            >
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
                  className="transition-colors hover:underline hover:text-on-tertiary py-1 md:py-0 w-fit"
                  style={{ color: "var(--color-surface-container)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Our Services (Accordion on Mobile, Static on Desktop) */}
          <div className="flex flex-col border-b md:border-b-0" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
            <button
              suppressHydrationWarning
              onClick={() => toggleSection("services")}
              className="w-full flex items-center justify-between py-3.5 md:py-0 md:min-h-[36px] text-left cursor-pointer md:cursor-default"
              aria-expanded={openSection === "services"}
            >
              <span className="text-title-md text-on-tertiary pb-0 md:pb-1 md:border-b border-on-tertiary-container inline-block font-semibold">
                Our Services
              </span>
              <span
                className="material-symbols-outlined text-on-surface-variant md:hidden transition-transform duration-200"
                style={{ transform: openSection === "services" ? "rotate(180deg)" : undefined }}
              >
                expand_more
              </span>
            </button>
            
            <nav
              className={`flex-col gap-2.5 text-body-sm pt-2 pb-3 md:pb-0 ${
                openSection === "services" ? "flex" : "hidden md:flex"
              }`}
              aria-label="Services links"
            >
              {services.map((s: typeof services[0]) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:underline hover:text-on-tertiary py-1 md:py-0 w-fit"
                  style={{ color: "var(--color-surface-container)" }}
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Quick Links & Contact (Accordion on Mobile, Static on Desktop) */}
          <div className="flex flex-col">
            <button
              suppressHydrationWarning
              onClick={() => toggleSection("quick")}
              className="w-full flex items-center justify-between py-3.5 md:py-0 md:min-h-[36px] text-left cursor-pointer md:cursor-default"
              aria-expanded={openSection === "quick"}
            >
              <span className="text-title-md text-on-tertiary pb-0 md:pb-1 md:border-b border-on-tertiary-container inline-block font-semibold">
                Quick Links &amp; Contact
              </span>
              <span
                className="material-symbols-outlined text-on-surface-variant md:hidden transition-transform duration-200"
                style={{ transform: openSection === "quick" ? "rotate(180deg)" : undefined }}
              >
                expand_more
              </span>
            </button>
            
            <div
              className={`flex-col gap-2.5 text-body-sm pt-2 pb-2 md:pb-0 ${
                openSection === "quick" ? "flex" : "hidden md:flex"
              }`}
            >
              <nav className="flex flex-col gap-2" aria-label="Quick links">
                {[
                  { label: "Projects Gallery", href: "/projects" },
                  { label: "Client List", href: "/clients" },
                  { label: "Jubail Office Location", href: "/contact" },
                  { label: "Direct Inquiry / RFP", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:underline hover:text-on-tertiary py-1 md:py-0 w-fit"
                    style={{ color: "var(--color-surface-container)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Newsletter */}
              <div className="mt-2 pt-2 border-t w-full" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
                <span className="text-label-caps text-secondary-fixed block mb-1.5">Industry Newsletter</span>
                <form
                  className="flex items-center gap-1.5 w-full"
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
                    className="h-9 px-3.5 rounded text-label-code text-on-tertiary transition-colors shrink-0 font-semibold hover:opacity-90 active:scale-95 cursor-pointer"
                    style={{ background: "var(--color-on-tertiary-container)" }}
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 pb-16 md:pb-2 flex flex-col md:flex-row items-center justify-between gap-3 text-label-code text-center md:text-left" style={{ color: "var(--color-surface-container)" }}>
          <p className="w-full md:w-auto text-center md:text-left text-[11px] sm:text-label-code">
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
