"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/services";
import Reveal from "../ui/Reveal";

export default function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    }
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-surface-container-low py-24" id="services">
      <div className="section-container overflow-hidden">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <SectionHeading
              pill="Our Core Capabilities"
              title="Integrated Contracting & Industrial Solutions"
              subtitle="From single-discipline subcontracts to comprehensive EPC support, we supply verified engineering solutions adhering to Royal Commission protocols."
            />
            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                suppressHydrationWarning
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="w-12 h-12 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary-container shadow-md flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
                aria-label="Previous Service"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                suppressHydrationWarning
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="w-12 h-12 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary-container shadow-md flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
                aria-label="Next Service"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={150}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 pb-4">
              {services.map((service: typeof services[0]) => (
                <div key={service.slug} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 h-full">
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <span className="text-display font-extrabold text-surface-container-highest group-hover:text-primary-container transition-colors">
                          {service.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                          <span className={`material-symbols-outlined ${service.iconColor} text-[26px]`}>
                            {service.icon}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-headline-sm text-primary-container">{service.shortTitle}</h3>
                        <p className="text-body-md text-on-surface-variant line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag: string) => (
                          <span key={tag} className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-label-code">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-title-md text-primary-container hover:text-on-tertiary-container group-hover:translate-x-1 transition-all"
                      >
                        <span>Read More</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
