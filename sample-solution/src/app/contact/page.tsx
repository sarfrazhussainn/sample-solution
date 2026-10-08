import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";
import QuoteForm from "@/components/ui/QuoteForm";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/data/company";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with Sample Solution Ltd in Jubail for contracting, construction, and industrial support inquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Reach out to our Jubail headquarters for project inquiries, technical support, or commercial partnerships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <h2 className="text-headline-md text-primary-container">Jubail Operations Center</h2>
                <p className="text-body-md text-on-surface-variant">
                  Our core estimation and technical teams are based centrally to serve the Eastern Province industrial corridor.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-col gap-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">call</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-title-md text-primary-container">Phone Line</span>
                    <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="text-body-md text-on-surface-variant hover:text-on-tertiary-container">{company.phone}</a>
                    <a href={`tel:${company.mobile.replace(/\s+/g, '')}`} className="text-body-md text-on-surface-variant hover:text-on-tertiary-container">{company.mobile}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">mail</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-title-md text-primary-container">Email</span>
                    <a href={`mailto:${company.email}`} className="text-body-md text-on-surface-variant hover:text-on-tertiary-container">{company.email}</a>
                    <a href={`mailto:${company.emailProjects}`} className="text-body-md text-on-surface-variant hover:text-on-tertiary-container">{company.emailProjects}</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">location_on</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-title-md text-primary-container">Headquarters</span>
                    <span className="text-body-md text-on-surface-variant">{company.address.line1}<br/>{company.address.line2}<br/>{company.address.country}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">schedule</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-title-md text-primary-container">Business Hours</span>
                    <span className="text-body-md text-on-surface-variant">{company.hours.weekdays}</span>
                    <span className="text-body-md text-on-surface-variant">{company.hours.friday}</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={150}>
              <div className="bg-surface-container-lowest rounded-xl p-8 md:p-10 shadow-xl border border-outline-variant/20">
                <div className="flex flex-col gap-2 pb-8">
                  <h2 className="text-headline-md text-primary-container">Send an Inquiry</h2>
                  <p className="text-body-md text-on-surface-variant">
                    Use the form below to send us your project requirements, RFPs, or general questions.
                  </p>
                </div>
                <QuoteForm />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] md:h-[500px] bg-surface-container relative">
        <iframe
          src={company.googleMapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sample Solution Location Map"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
