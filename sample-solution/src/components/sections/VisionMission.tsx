import Reveal from "../ui/Reveal";

export default function VisionMission() {
  return (
    <section className="relative z-20 w-full section-container -mt-16 md:-mt-20 lg:-mt-24 pb-6" id="vision">
      {/* Mobile: horizontal snap scroll row; Desktop: side-by-side grid */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1 md:pb-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
        
        {/* Vision Card */}
        <Reveal delay={0}>
          <div className="bg-surface-container-lowest rounded-xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-w-[calc(85vw-32px)] sm:min-w-[340px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink md:w-auto h-full">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-tertiary-container text-[24px] md:text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  visibility
                </span>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <span className="text-label-caps text-on-tertiary-container">Strategic Directive</span>
                <h2 className="text-headline-sm text-primary-container">Our Vision</h2>
                <p className="text-body-sm md:text-body-md text-on-surface-variant">
                  To be the Eastern Province's foremost trusted contracting partner, setting regional benchmarks in industrial precision, innovation, and sustainable engineering.
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 flex items-center justify-between text-on-surface-variant text-label-code border-t border-outline-variant/20">
              <span>PILLAR: SUSTAINABLE EXPANSION</span>
              <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
            </div>
          </div>
        </Reveal>

        {/* Mission Card */}
        <Reveal delay={150}>
          <div className="bg-surface-container-lowest rounded-xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-w-[calc(85vw-32px)] sm:min-w-[340px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink md:w-auto h-full">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(11,37,69,0.1)" }}>
                <span className="material-symbols-outlined text-primary-container text-[24px] md:text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  explore
                </span>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <span className="text-label-caps text-secondary">Execution Standard</span>
                <h2 className="text-headline-sm text-primary-container">Our Mission</h2>
                <p className="text-body-sm md:text-body-md text-on-surface-variant">
                  Empowering Saudi Arabia's industrial vision through uncompromising safety, world-class MEP execution, and reliable client-centric multi-disciplinary services.
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 flex items-center justify-between text-on-surface-variant text-label-code border-t border-outline-variant/20">
              <span>SAFETY TARGET: ZERO INCIDENTS</span>
              <span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
            </div>
          </div>
        </Reveal>

        {/* Mobile scroll indicator padding */}
        <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
      </div>

      {/* Swipe hint — only visible on mobile */}
      <p className="md:hidden text-center text-label-caps text-on-surface-variant mt-3 opacity-60">
        Swipe to see Mission →
      </p>
    </section>
  );
}
