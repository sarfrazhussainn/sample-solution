import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";
import ServicesSlider from "@/components/sections/ServicesSlider";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Our Services",
  description: "Explore our core capabilities: MEP Contracting, General Construction, Waste Management, Support Services, and Transportation.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Capabilities"
        subtitle="Integrated contracting solutions tailored for heavy industry and petrochemical sectors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      
      {/* We reuse the ServicesSlider component to display all services */}
      <ServicesSlider />

      {/* Additional CTA */}
      <section className="w-full bg-surface py-20 border-t border-outline-variant/20">
        <div className="section-container">
          <Reveal>
            <div className="bg-primary-container rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-on-primary">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h2 className="text-headline-md md:text-headline-lg">Require a specialized service?</h2>
                <p className="text-body-lg text-primary-fixed">
                  Our engineering teams can develop custom solutions for complex industrial challenges not listed above. Contact us to discuss your specific requirements.
                </p>
              </div>
              <div className="shrink-0">
                <Button href="/contact" variant="amber" icon="arrow_forward">
                  Consult an Expert
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
