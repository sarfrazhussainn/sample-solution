"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero-1.webp",
    caption: "Jubail Refinery EPC Turnaround",
    gradient: "linear-gradient(to right, var(--color-primary) 40%, rgba(0,16,38,0.75))",
  },
  {
    id: 2,
    image: "/images/hero/hero-1.webp",
    caption: "MEP Chilled Water Infrastructure",
    gradient: "linear-gradient(to right, var(--color-primary) 30%, rgba(11,37,69,0.85))",
  },
  {
    id: 3,
    image: "/images/hero/hero-1.webp",
    caption: "Heavy Logistics Mobilization",
    gradient: "linear-gradient(to right, var(--color-primary) 50%, rgba(33,49,72,0.7))",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden bg-primary pt-[100px] sm:pt-[120px]">
      <div className="relative w-full min-h-[560px] sm:min-h-[680px] lg:min-h-[840px] flex items-center">
        {/* Embla Viewport */}
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex w-full h-full">
            {slides.map((slide, index) => (
              <div key={slide.id} className="relative flex-[0_0_100%] h-full min-w-0">
                <div className={`relative w-full h-full ${index === selectedIndex ? "hero-bg-zoom" : ""}`}>
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0" style={{ background: slide.gradient }} />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, var(--color-primary) 0%, transparent 60%)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 section-container py-8 sm:py-20 w-full pointer-events-none">
          <div className="max-w-3xl flex flex-col gap-4 sm:gap-6 pointer-events-auto">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit" style={{ background: "rgba(211,116,7,0.2)", backdropFilter: "blur(12px)" }}>
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="text-label-caps text-tertiary-fixed">
                Leading Industrial Contractor in Jubail, Saudi Arabia
              </span>
            </div>

            <h1 className="text-display-mobile sm:text-display text-on-primary">
              Engineering Excellence &amp; Comprehensive Contracting Solutions for Saudi Industry
            </h1>
            
            <p className="text-body-lg text-primary-fixed max-w-2xl">
              Delivering turnkey MEP contracting, heavy industrial construction, certified waste management, technical support, and logistics across Jubail Industrial City and the Eastern Province.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#services" variant="amber" icon="arrow_forward">
                Our Services
              </Button>
              <Button href="/contact" variant="ghost" icon="call" iconPosition="left">
                Contact Us
              </Button>
            </div>

            {/* Slider Controls */}
            <div className="pt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    suppressHydrationWarning
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: idx === selectedIndex ? 40 : 10,
                      background: idx === selectedIndex ? "var(--color-on-tertiary-container)" : "rgba(213,227,255,0.4)",
                    }}
                  />
                ))}
              </div>
              <div className="text-label-code text-primary-fixed-dim flex items-center gap-2">
                <span className="text-on-tertiary font-bold">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(slides.length).padStart(2, "0")}</span>
                <span className="ml-2 text-surface-container-high hidden sm:inline">
                  • {slides[selectedIndex].caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
