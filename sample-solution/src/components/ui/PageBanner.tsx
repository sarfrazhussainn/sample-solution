import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
};

export default function PageBanner({ title, subtitle, breadcrumbs, image = "/images/hero/hero-1.webp" }: Props) {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--color-primary)" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--color-primary) 40%, rgba(0,16,38,0.75))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, var(--color-primary) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-10 md:py-24 flex flex-col gap-4 mt-[100px] md:mt-[120px]">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-label-code text-primary-fixed-dim flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-on-primary transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-primary-fixed">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-headline-md md:text-headline-lg lg:text-display text-on-primary max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="text-body-md md:text-body-lg text-primary-fixed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
