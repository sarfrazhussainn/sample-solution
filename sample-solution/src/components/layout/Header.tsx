"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navItems } from "@/data/nav";
import { company } from "@/data/company";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(e.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openDropdown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ boxShadow: "0 2px 8px rgba(11,37,69,0.06)" }}>
        {/* Top Bar */}
        <div className="bg-primary-container text-on-primary border-b" style={{ borderColor: "rgba(116,119,127,0.2)" }}>
          <div className="section-container h-10 flex items-center justify-between text-label-code">
            {/* Left: contact info */}
            <div className="hidden md:flex items-center gap-6 text-primary-fixed">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>call</span>
                {company.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>mail</span>
                {company.email}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>location_on</span>
                Jubail Industrial City, KSA
              </span>
            </div>
            {/* Right: WhatsApp + hours */}
            <div className="flex items-center gap-4 ml-auto md:ml-0">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg touch-target"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: 15 }}>chat</span>
                <span className="text-label-code text-on-primary">{company.mobile}</span>
              </a>
              <span className="hidden lg:inline text-primary-fixed-dim text-label-code">{company.hours.weekdays}</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div
          className="bg-surface-container-lowest transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            boxShadow: scrolled ? "0 4px 16px rgba(11,37,69,0.1)" : undefined,
          }}
        >
          <div className="section-container flex items-center justify-between gap-4" style={{ height: scrolled ? 64 : 80, transition: "height 0.3s ease" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--color-primary-container)" }}>
                <span className="material-symbols-outlined text-on-primary" style={{ fontSize: 20 }}>apartment</span>
              </div>
              <div className="flex flex-col">
                <span className="text-headline-sm text-primary-container uppercase leading-tight">Sample Solution</span>
                <span className="text-label-caps text-on-surface-variant">Contracting &amp; Services Jubail</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1 text-title-md" aria-label="Main navigation">
              {navItems.map((item: typeof navItems[0]) => {
                const active = isActive(item.href);
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      ref={(el) => { dropdownRefs.current[item.label] = el; }}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        suppressHydrationWarning
                        className={`px-3 py-2 flex items-center gap-1 rounded-lg transition-colors ${
                          active
                            ? "bg-surface-container-high text-primary-container font-semibold"
                            : "text-on-surface-variant hover:text-primary-container hover:bg-surface-container"
                        }`}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>expand_more</span>
                      </button>
                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 top-full nav-dropdown ${openDropdown === item.label ? "open" : ""}`}
                        style={{ zIndex: 100 }}
                      >
                        <div className="mt-1 w-56 py-2 bg-surface-container-lowest rounded-xl border shadow-lg"
                          style={{ borderColor: "rgba(196,198,207,0.3)", boxShadow: "0 10px 24px rgba(11,37,69,0.08)" }}>
                          {item.children!.map((child: { label: string; href: string }) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      active
                        ? "bg-surface-container-high text-primary-container font-semibold"
                        : "text-on-surface-variant hover:text-primary-container hover:bg-surface-container"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-on-tertiary text-title-md transition-all hover:-translate-y-px"
                style={{
                  background: "var(--color-on-tertiary-container)",
                  boxShadow: "0 2px 4px rgba(11,37,69,0.08)",
                }}
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
              <button
                suppressHydrationWarning
                className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-surface-container touch-target"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <span className="material-symbols-outlined text-on-surface">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
