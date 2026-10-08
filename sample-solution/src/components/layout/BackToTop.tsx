"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      suppressHydrationWarning
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${visible ? "visible" : ""}`}
      style={{ background: "var(--color-primary-container)" }}
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined text-on-primary" style={{ fontSize: 20 }}>arrow_upward</span>
    </button>
  );
}
