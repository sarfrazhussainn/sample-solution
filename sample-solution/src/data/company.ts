// Company data — Single source of truth
export const company = {
  name: "Sample Solution Ltd",
  shortName: "Sample Solution",
  tagline: "Contracting & Services Jubail",
  description:
    "Leading industrial contractor delivering comprehensive EPC support, maintenance, technical staffing, and heavy fleet solutions in Jubail and the Eastern Province.",
  phone: "+966 13 361 8899",
  mobile: "+966 50 123 4567",
  whatsapp: "+966501234567",
  email: "info@samplesolution.example",
  emailProjects: "projects@samplesolution.example",
  emailRfp: "rfp@samplesolution.example",
  address: {
    line1: "Support Industries Area 1, Road 118",
    line2: "Jubail Industrial City",
    country: "Kingdom of Saudi Arabia",
    full: "Support Industries Area 1, Road 118, Jubail Industrial City, Kingdom of Saudi Arabia",
  },
  hours: {
    weekdays: "Sat – Thu: 9:00 AM – 6:00 PM",
    friday: "Friday: Closed",
  },
  certifications: ["ISO 9001:2015", "ISO 45001", "ARAMCO VENDOR"],
  founded: 2009,
  yearsExperience: 15,
  googleMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.8!2d49.6!3d27.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzAwLjAiTiA0OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890",
} as const;

export type Company = typeof company;
