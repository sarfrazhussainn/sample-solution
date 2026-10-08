"use client";

import { useRef, useState } from "react";
import Reveal from "../ui/Reveal";

export default function VisionMission() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    setActiveSlide(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeSlide && (index === 0 || index === 1)) {
        setActiveSlide(index);
      }
    }
  };

  return (
    <section className="relative z-20 w-full section-container -mt-14 md:-mt-20 lg:-mt-24 pb-6" id="vision">
      {/* Mobile Tab Switcher */}
      <div className="flex md:hidden items-center justify-center gap-2 mb-4">
        <button
          suppressHydrationWarning
          onClick={() => scrollToSlide(0)}
          className={`px-4 py-1.5 rounded-full text-label-caps transition-all ${
            activeSlide === 0
              ? "bg-on-tertiary-container text-on-tertiary shadow-md"
              : "bg-surface-container text-on-surface-variant"
          }`}
        >
          Our Vision
        </button>
        <button
          suppressHydrationWarning
          onClick={() => scrollToSlide(1)}
          className={`px-4 py-1.5 rounded-full text-label-caps transition-all ${
            activeSlide === 1
              ? "bg-primary-container text-on-primary shadow-md"
              : "bg-surface-container text-on-surface-variant"
          }`}
        >
          Our Mission
        </button>
      </div>

      {/* Cards: Slider on mobile, 2-column grid on desktop */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0"
      >
        {/* Vision Card */}
        <div className="min-w-[88vw] sm:min-w-[75vw] md:min-w-0 snap-center shrink-0 md:shrink h-full">
          <Reveal delay={0}>
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[26px] sm:text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-label-caps text-on-tertiary-container">Strategic Directive</span>
                  <h2 className="text-headline-sm text-primary-container font-bold">Our Vision</h2>
                  <p className="text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                    To be the Eastern Province&apos;s foremost trusted contracting partner, setting regional benchmarks in industrial precision, innovation, and sustainable engineering.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-3 sm:mt-6 sm:pt-4 border-t border-outline-variant/15 flex items-center justify-between text-on-surface-variant text-label-code">
                <span>PILLAR: SUSTAINABLE EXPANSION</span>
                <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission Card */}
        <div className="min-w-[88vw] sm:min-w-[75vw] md:min-w-0 snap-center shrink-0 md:shrink h-full">
          <Reveal delay={150}>
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(11,37,69,0.1)" }}>
                  <span className="material-symbols-outlined text-primary-container text-[26px] sm:text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    explore
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-label-caps text-secondary font-bold">Execution Standard</span>
                  <h2 className="text-headline-sm text-primary-container font-bold">Our Mission</h2>
                  <p className="text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                    Empowering Saudi Arabia&apos;s industrial vision through uncompromising safety, world-class MEP execution, and reliable client-centric multi-disciplinary services.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-3 sm:mt-6 sm:pt-4 border-t border-outline-variant/15 flex items-center justify-between text-on-surface-variant text-label-code">
                <span>SAFETY TARGET: ZERO INCIDENTS</span>
                <span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile Dot Indicators */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-3">
        <button
          suppressHydrationWarning
          onClick={() => scrollToSlide(0)}
          className={`h-1.5 rounded-full transition-all ${activeSlide === 0 ? "w-6 bg-on-tertiary-container" : "w-1.5 bg-outline-variant"}`}
          aria-label="Slide 1"
        />
        <button
          suppressHydrationWarning
          onClick={() => scrollToSlide(1)}
          className={`h-1.5 rounded-full transition-all ${activeSlide === 1 ? "w-6 bg-primary-container" : "w-1.5 bg-outline-variant"}`}
          aria-label="Slide 2"
        />
      </div>
    </section>
  );
}
