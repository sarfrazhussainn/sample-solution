export type Client = {
  id: string;
  name: string;
  shortName: string;
  icon: string; // Material Symbols icon name
  badge: string; // Status badge label
};

export const clients: Client[] = [
  { id: "saudi-aramco", name: "Saudi Aramco", shortName: "SAUDI ARAMCO", icon: "oil_barrel", badge: "Approved Vendor" },
  { id: "sabic", name: "SABIC", shortName: "SABIC", icon: "science", badge: "Partner Network" },
  { id: "royal-commission", name: "Royal Commission for Jubail", shortName: "ROYAL COMM.", icon: "account_balance", badge: "RCJY Contractor" },
  { id: "maaden", name: "Ma'aden Mining", shortName: "MA'ADEN", icon: "diamond", badge: "Industrial Support" },
  { id: "sadara", name: "Sadara Chemical", shortName: "SADARA", icon: "factory", badge: "Petrochem Vendor" },
  { id: "petro-rabigh", name: "Petro Rabigh", shortName: "PETRO RABIGH", icon: "local_gas_station", badge: "Refining Services" },
  { id: "aramco-total", name: "Aramco Total Services", shortName: "ARAMCO TOTAL", icon: "gas_meter", badge: "EPC Partner" },
  { id: "saudi-kayan", name: "Saudi Kayan Petrochemical", shortName: "SAUDI KAYAN", icon: "biotech", badge: "Maintenance Vendor" },
  { id: "yanpet", name: "Yanpet Petrochemical", shortName: "YANPET", icon: "conveyor_belt", badge: "Plant Services" },
  { id: "sipchem", name: "Sipchem Group", shortName: "SIPCHEM", icon: "water_pump", badge: "Chemical Plant" },
  { id: "alba", name: "Alba Aluminium", shortName: "ALBA", icon: "layers", badge: "Industrial Works" },
  { id: "tasnee", name: "Tasnee National Industrialization", shortName: "TASNEE", icon: "settings_input_component", badge: "Technical Support" },
  { id: "total-energies", name: "TotalEnergies SA", shortName: "TOTALENERGIES", icon: "energy_program_time_used", badge: "Energy Partner" },
  { id: "linde", name: "Linde Engineering", shortName: "LINDE", icon: "air", badge: "Gas Systems" },
];
