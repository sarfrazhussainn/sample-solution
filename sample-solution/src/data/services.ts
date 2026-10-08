export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: string; // Material Symbols name
  iconColor: string; // Tailwind class
  description: string;
  features: string[];
  tags: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "mep-contracting",
    number: "01",
    title: "MEP Contracting",
    shortTitle: "MEP Contracting",
    icon: "precision_manufacturing",
    iconColor: "text-amber-600",
    description:
      "Complete Mechanical, Electrical, HVAC, and industrial process piping installation engineered to stringent petrochemical standards and schematic blueprints. Our certified MEP teams execute complex multi-discipline installations across Jubail Industrial City and the Eastern Province.",
    features: [
      "HVAC chiller and cooling tower systems",
      "Substation HV/LV cabling and tray works",
      "Industrial process piping (carbon/stainless steel)",
      "Fire protection and suppression systems",
      "Instrumentation and control system integration",
      "Commissioning, testing, and handover",
    ],
    tags: ["HVAC Chillers", "Substation Cabling", "Process Piping"],
    image: "/images/projects/project-1.webp",
  },
  {
    slug: "construction",
    number: "02",
    title: "General Construction",
    shortTitle: "Construction",
    icon: "domain",
    iconColor: "text-blue-700",
    description:
      "Civil structural engineering, reinforced foundations, heavy pre-engineered steel buildings, and industrial plant enclosure erections — delivered on schedule with full Royal Commission compliance.",
    features: [
      "Structural steel fabrication and erection",
      "Reinforced concrete foundations",
      "Pre-engineered steel buildings (PEB)",
      "Industrial plant civil works",
      "Roads, drainage, and site grading",
      "Concrete quality control to ASTM/ACI standards",
    ],
    tags: ["Structural Steel", "Heavy Foundations", "Civil Works"],
    image: "/images/projects/project-2.webp",
  },
  {
    slug: "waste-management",
    number: "03",
    title: "Waste Management",
    shortTitle: "Waste Management",
    icon: "recycling",
    iconColor: "text-amber-600",
    description:
      "Environmentally compliant hazardous and non-hazardous industrial waste haulage, chemical remediation, and sustainable recycling streams — all operating under full Royal Commission for Jubail environmental permits.",
    features: [
      "Hazardous waste collection and licensed haulage",
      "Chemical spill response and containment",
      "Industrial sludge removal and disposal",
      "Environmental site remediation",
      "Waste segregation and recycling programs",
      "Environmental impact assessment support",
    ],
    tags: ["RC Environmental", "Sludge Removal", "Safe Haulage"],
    image: "/images/projects/project-3.webp",
  },
  {
    slug: "support-services",
    number: "04",
    title: "Industrial Support Services",
    shortTitle: "Support Services",
    icon: "build",
    iconColor: "text-blue-700",
    description:
      "Comprehensive on-site technical staffing, preventive maintenance, and multi-craft industrial support for petrochemical plants, utilities, and refineries throughout the Eastern Province.",
    features: [
      "Certified multi-craft technical manpower supply",
      "Preventive and corrective maintenance programs",
      "Plant turnaround and shutdown support",
      "Scaffolding, insulation, and surface treatment",
      "Welding and NDT inspection services",
      "Technical training and HSE induction programs",
    ],
    tags: ["Technical Staffing", "Plant Turnaround", "Preventive Maintenance"],
    image: "/images/about/about-1.webp",
  },
  {
    slug: "transportation",
    number: "05",
    title: "Transportation & Logistics",
    shortTitle: "Transportation",
    icon: "local_shipping",
    iconColor: "text-amber-600",
    description:
      "Heavy and abnormal load transportation, industrial fleet management, and logistics coordination across Jubail Industrial City and Eastern Province corridors — with full Ministry of Transport permits.",
    features: [
      "Heavy abnormal load transport (up to 500T)",
      "Industrial equipment mobilization",
      "Crane and rigging services",
      "Lease of heavy fleet (lowboys, flatbeds, cranes)",
      "Escort vehicle and route survey services",
      "24/7 emergency mobilization capability",
    ],
    tags: ["Abnormal Loads", "Fleet Lease", "24/7 Mobilization"],
    image: "/images/projects/project-4.webp",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
