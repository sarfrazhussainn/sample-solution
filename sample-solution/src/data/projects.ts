export type Project = {
  id: string;
  title: string;
  client: string;
  category: "MEP" | "Civil" | "Industrial" | "Logistics";
  status: "Completed" | "Ongoing";
  image: string;
  alt: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "jubail-commercial-mep",
    title: "Jubail Commercial Complex MEP System Installation",
    client: "Royal Commission for Jubail",
    category: "MEP",
    status: "Completed",
    image: "/images/projects/project-1.webp",
    alt: "MEP plant room with HVAC ductwork, chillers, copper piping and cable trays in a Jubail commercial complex",
    description:
      "Full turnkey MEP installation for a 35,000 m² commercial complex in Jubail Industrial City, including chilled water systems, HV substation, fire suppression, and BMS integration.",
  },
  {
    id: "sabic-refinery-structural",
    title: "Petrochemical Refinery Structural Expansion & Piping",
    client: "SABIC Affiliate Company",
    category: "Civil",
    status: "Completed",
    image: "/images/projects/project-2.webp",
    alt: "Petrochemical refinery aerial view showing complex pipe racks, distillation columns and structural steel framing",
    description:
      "Structural expansion of an existing SABIC petrochemical facility, including new pipe rack installation, concrete foundations, and process piping interconnection works.",
  },
  {
    id: "hazardous-waste-facility",
    title: "Industrial Hazardous Waste Treatment Facility",
    client: "Industrial City Development Corp",
    category: "Industrial",
    status: "Completed",
    image: "/images/projects/project-3.webp",
    alt: "Aerial view of waste treatment facility with large storage tanks, piping and treatment basins in the Saudi desert",
    description:
      "Design-build of a licensed hazardous industrial waste treatment and storage facility, including tank farms, effluent treatment basins, and environmental monitoring systems.",
  },
  {
    id: "heavy-equipment-transport",
    title: "Heavy Equipment Transport & Rig Mobilization",
    client: "EPC Main Contractor",
    category: "Logistics",
    status: "Ongoing",
    image: "/images/projects/project-4.webp",
    alt: "Heavy abnormal load transport truck carrying a large industrial vessel on a multi-axle trailer on Jubail highway",
    description:
      "Ongoing heavy abnormal load transportation contract covering equipment mobilization, crane lifts, and rig movements across the Jubail and Eastern Province industrial corridor.",
  },
];

export const projectCategories = ["All", "MEP", "Civil", "Industrial", "Logistics"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
