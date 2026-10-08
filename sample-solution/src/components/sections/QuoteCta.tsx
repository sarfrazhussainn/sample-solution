import { company } from "@/data/company";
import QuoteForm from "../ui/QuoteForm";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function QuoteCta() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-14 md:py-24 relative overflow-hidden" id="contact">
      {/* Watermark */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none">
        <svg className="w-full h-full text-on-primary" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100 0 L120 40 L160 20 L160 70 L200 80 L180 120 L200 160 L150 160 L140 200 L100 180 L60 200 L50 160 L0 160 L20 120 L0 80 L40 70 L40 20 L80 40 Z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <Reveal direction="left">
              <SectionHeading
                pill="Project Coordination"
                title="Have An Upcoming Project? Let's Talk Now!"
                subtitle="Our technical procurement specialists, estimation engineers, and operations managers in Jubail stand ready to review your RFPs and schedule immediate site evaluations."
                light
              />
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div className="p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-on-tertiary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary text-[26px]">flash_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-title-md text-on-primary">24/7 Rapid Mobilization</span>
                  <span className="text-body-sm text-primary-fixed-dim">Emergency industrial support &amp; turnaround crew deployments across the Eastern Province.</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-surface-container-lowest/5 backdrop-blur-sm flex flex-col gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">phone_in_talk</span>
                  <span className="text-label-caps text-primary-fixed-dim">Direct Phone Line</span>
                  <span className="text-title-md text-on-primary">{company.phone}</span>
                  <span className="text-body-sm text-primary-fixed-dim">{company.mobile}</span>
                </div>
                <div className="p-5 rounded-xl bg-surface-container-lowest/5 backdrop-blur-sm flex flex-col gap-2 overflow-hidden">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">forward_to_inbox</span>
                  <span className="text-label-caps text-primary-fixed-dim">Commercial Inquiries</span>
                  <span className="text-title-md text-on-primary truncate">{company.emailProjects}</span>
                  <span className="text-body-sm text-primary-fixed-dim truncate">{company.emailRfp}</span>
                </div>
              </div>
              <div className="p-5 mt-4 rounded-xl bg-surface-container-lowest/5 backdrop-blur-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-on-tertiary-container text-[24px] shrink-0 mt-0.5">location_on</span>
                <div className="flex flex-col">
                  <span className="text-title-md text-on-primary">Jubail Operations Center</span>
                  <span className="text-body-sm text-primary-fixed">{company.address.full}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6">
            <Reveal direction="right" delay={150}>
              <div className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-2xl text-on-surface">
                <div className="flex flex-col gap-2 pb-6">
                  <h3 className="text-headline-sm text-primary-container">Request A Quote</h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Submit project details for rapid engineering evaluation and commercial estimation.
                  </p>
                </div>
                <QuoteForm />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
