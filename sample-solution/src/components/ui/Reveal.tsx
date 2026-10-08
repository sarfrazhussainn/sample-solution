"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

export default function Reveal({ children, className = "", direction = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
}
