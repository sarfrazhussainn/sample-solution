export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Policy",
    href: "/policy/safety",
    children: [
      { label: "Safety Policy", href: "/policy/safety" },
      { label: "Quality Policy", href: "/policy/quality" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "MEP Contracting", href: "/services/mep-contracting" },
      { label: "Construction", href: "/services/construction" },
      { label: "Waste Management", href: "/services/waste-management" },
      { label: "Support Services", href: "/services/support-services" },
      { label: "Transportation", href: "/services/transportation" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];
