"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/nav";
import { company } from "@/data/company";

type Props = { open: boolean; onClose: () => void; pathname: string };

export default function MobileMenu({ open, onClose, pathname }: Props) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement>(null);

  // Focus trap
  useEffect(() => {
    if (!open) return;
    firstFocusable.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'button, a, input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: "rgba(0,16,38,0.6)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          backdropFilter: "blur(2px)",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-drawer fixed top-0 right-0 h-full w-80 max-w-[90vw] z-[70] flex flex-col ${open ? "open" : ""}`}
        style={{ background: "var(--color-surface-container-lowest)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--color-outline-variant)" }}>
          <div className="flex flex-col">
            <span className="text-headline-sm text-primary-container">Sample Solution</span>
            <span className="text-label-caps text-on-surface-variant">Jubail Industrial City</span>
          </div>
          <button
            suppressHydrationWarning
            ref={firstFocusable}
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-surface-container touch-target"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item: typeof navItems[0]) => {
            const active = isActive(item.href);
            if (item.children) {
              const expanded = expandedSection === item.label;
              return (
                <div key={item.label}>
                  <button
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-title-md transition-colors"
                    style={{
                      background: active ? "var(--color-surface-container-high)" : undefined,
                      color: active ? "var(--color-primary-container)" : "var(--color-on-surface-variant)",
                    }}
                    onClick={() => setExpandedSection(expanded ? null : item.label)}
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <span
                      className="material-symbols-outlined transition-transform duration-200"
                      style={{ fontSize: 18, transform: expanded ? "rotate(180deg)" : undefined }}
                    >
                      expand_more
                    </span>
                  </button>
                  {expanded && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.children!.map((child: { label: string; href: string }) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="px-4 py-2.5 rounded-lg text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors block"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-title-md transition-colors block"
                style={{
                  background: active ? "var(--color-surface-container-high)" : undefined,
                  color: active ? "var(--color-primary-container)" : "var(--color-on-surface-variant)",
                  fontWeight: active ? 600 : undefined,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t" style={{ borderColor: "var(--color-outline-variant)" }}>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-on-tertiary text-title-md transition-all"
            style={{ background: "var(--color-on-tertiary-container)" }}
          >
            <span>Get a Quote</span>
            <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
          <div className="mt-3 flex flex-col gap-1 text-body-sm text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>call</span>
              {company.phone}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>mail</span>
              {company.email}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
