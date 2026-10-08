import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { clients } from "@/data/clients";
import QuoteCta from "@/components/sections/QuoteCta";

export const metadata = buildMetadata({
  title: "Our Clients",
  description: "Sample Solution Ltd is a trusted partner to Saudi Aramco, SABIC, Royal Commission, and major EPC contractors in the Kingdom.",
  path: "/clients/",
});

export default function ClientsPage() {
  return (
    <>
      <PageBanner
        title="Client Network"
        subtitle="Proudly supporting the Kingdom's industrial giants and multinational EPC contractors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clients" },
        ]}
      />
      
      <section className="section-container py-24 min-h-[50vh]">
        
        <Reveal>
          <div className="max-w-3xl mb-12 flex flex-col gap-4">
            <h2 className="text-headline-md text-primary-container">Approved Vendor & Contracting Partner</h2>
            <p className="text-body-lg text-on-surface-variant">
              We maintain rigorous pre-qualification status with major industrial corporations across Saudi Arabia. Our compliance with international QA/QC and HSE standards makes us the contractor of choice for critical infrastructure projects.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <Reveal key={client.id} delay={(i % 5) * 50}>
              <div className="aspect-square rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:shadow-lg hover:border-on-tertiary-container/30 transition-all flex flex-col items-center justify-center text-center gap-3 p-4 group">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-on-tertiary-container/10 transition-colors">
                  <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">
                    {client.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-title-md text-primary-container font-bold leading-tight">
                    {client.shortName}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-semibold tracking-wider uppercase">
                    {client.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      <QuoteCta />
    </>
  );
}
