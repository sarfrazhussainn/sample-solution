import Image from "next/image";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function About() {
  return (
    <section className="w-full bg-surface-container-lowest py-24" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left">
              <div className="relative w-full h-[460px] sm:h-[500px]">
                {/* Primary Image */}
                <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about/about-2.webp"
                    alt="Jubail Project Site Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Secondary Image */}
                <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/about-1.webp"
                    alt="MEP Engineering Precision"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-on-tertiary-container text-on-tertiary p-5 rounded-xl shadow-xl flex flex-col gap-1 max-w-[190px]">
                  <span className="text-display leading-none text-white">15+</span>
                  <span className="text-label-caps text-surface-bright">Years Jubail Industry Leadership</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="right">
              <SectionHeading
                pill="About Sample Solution Ltd"
                title="Pioneering Heavy Industrial Contracting & Support in Jubail"
              />
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-body-md text-on-surface-variant">
                  Headquartered in the core of Jubail Industrial City, Sample Solution Ltd has grown as an integrated industrial service provider aligned with Saudi Vision 2030. We execute demanding electromechanical, infrastructure, and heavy plant operations with uncompromising quality.
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Recognized across the Eastern Province for absolute compliance with Saudi Aramco and SABIC vendor specifications, our registered operations deliver full turnkey project lifecycles—spanning design coordination, civil erection, industrial MEP maintenance, and environmental remediation.
                </p>
              </div>

              {/* Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="p-4 rounded-xl bg-surface-container flex flex-col gap-1">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">verified</span>
                  <span className="text-title-md text-primary-container">ISO Certified</span>
                  <span className="text-label-code text-on-surface-variant">9001:2015 &amp; 45001 Standard</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container flex flex-col gap-1">
                  <span className="material-symbols-outlined text-secondary text-[24px]">group_work</span>
                  <span className="text-title-md text-primary-container">100% In-House</span>
                  <span className="text-label-code text-on-surface-variant">Certified Fleet &amp; Manpower</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container flex flex-col gap-1">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">location_city</span>
                  <span className="text-title-md text-primary-container">Jubail HQ</span>
                  <span className="text-label-code text-on-surface-variant">Local Quick Mobilization</span>
                </div>
              </div>

              <Button href="/services" variant="primary" icon="arrow_forward">
                Explore Services
              </Button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
