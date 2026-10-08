import Link from "next/link";
import React from "react";

type Variant = "primary" | "amber" | "outline" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  icon?: string; // Material Symbol name
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--color-primary-container)",
    color: "var(--color-on-primary)",
  },
  amber: {
    background: "var(--color-on-tertiary-container)",
    color: "var(--color-on-tertiary)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-on-tertiary-container)",
    border: "2px solid var(--color-on-tertiary-container)",
  },
  ghost: {
    background: "rgba(255,255,255,0.1)",
    color: "var(--color-on-primary)",
    backdropFilter: "blur(8px)",
  },
};

const hoverClass: Record<Variant, string> = {
  primary: "hover:opacity-90 hover:-translate-y-px",
  amber: "hover:opacity-90 hover:-translate-y-px",
  outline: "hover:bg-on-tertiary-container hover:text-on-tertiary",
  ghost: "hover:bg-white/20",
};

export default function Button({ href, onClick, children, variant = "amber", icon, iconPosition = "right", className = "", type = "button", disabled = false }: Props) {
  const baseClass = `inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-title-md transition-all duration-150 ${hoverClass[variant]} ${className}`;
  const style = variantStyles[variant];
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClass} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      suppressHydrationWarning
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      style={style}
    >
      {content}
    </button>
  );
}
