import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";
import QuoteCta from "@/components/sections/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import { services, getService } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service: typeof services[0]) => ({ slug: service.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}/`,
    ogImage: service.image,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />
      
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Reveal direction="left">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md flex flex-col gap-2 sticky top-28">
                <h3 className="text-title-md text-primary-container mb-2 pb-2 border-b border-outline-variant/30">
                  All Services
                </h3>
                {services.map((s: typeof services[0]) => {
                  const isActive = s.slug === slug;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-body-md transition-colors ${
                        isActive
                          ? "bg-primary-container text-on-primary font-semibold"
                          : "bg-surface text-on-surface-variant hover:bg-surface-container hover:text-primary-container"
                      }`}
                    >
                      <span>{s.title}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                        {isActive ? "chevron_right" : "arrow_right"}
                      </span>
                    </Link>
                  );
                })}
                
                {/* Contact Card */}
                <div className="mt-8 p-6 rounded-lg bg-surface-container-low text-center flex flex-col gap-4">
                  <span className="material-symbols-outlined text-[40px] text-on-tertiary-container">support_agent</span>
                  <h4 className="text-title-md text-primary-container">Need assistance?</h4>
                  <p className="text-body-sm text-on-surface-variant">Our team is ready to provide a detailed consultation for your project.</p>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 mt-2 rounded bg-on-tertiary-container text-on-tertiary text-title-md hover:bg-tertiary-fixed-dim transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-8">
            <Reveal>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className={`material-symbols-outlined ${service.iconColor} text-[32px]`}>
                      {service.icon}
                    </span>
                  </div>
                  <h2 className="text-headline-md md:text-headline-lg text-primary-container">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-headline-sm text-primary-container mt-4 border-l-4 border-on-tertiary-container pl-4">
                  Key Capabilities
                </h3>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-on-tertiary-container shrink-0 mt-0.5">check_circle</span>
                      <span className="text-body-md text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <QuoteCta />
    </>
  );
}
