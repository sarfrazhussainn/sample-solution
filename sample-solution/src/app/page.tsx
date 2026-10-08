import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import About from "@/components/sections/About";
import ServicesSlider from "@/components/sections/ServicesSlider";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import QuoteCta from "@/components/sections/QuoteCta";
import ClientsStrip from "@/components/sections/ClientsStrip";

export const metadata = buildMetadata({
  title: "Home",
  description: "Engineering Excellence & Comprehensive Contracting Solutions for Saudi Industry in Jubail.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <About />
      <ServicesSlider />
      <ProjectsPreview />
      <QuoteCta />
      <ClientsStrip />
    </>
  );
}
