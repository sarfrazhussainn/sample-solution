type Props = {
  pill?: string;
  pillDotColor?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  light?: boolean; // for dark backgrounds
  center?: boolean;
};

export default function SectionHeading({ pill, pillDotColor, title, subtitle, light = false, center = false }: Props) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
      {pill && (
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded w-fit"
          style={{
            background: light
              ? "rgba(255,255,255,0.1)"
              : "rgba(211,116,7,0.1)",
          }}
        >
          {pillDotColor && (
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: pillDotColor ?? "var(--color-on-tertiary-container)" }}
            />
          )}
          <span
            className="text-label-caps"
            style={{
              color: light ? "var(--color-tertiary-fixed)" : "var(--color-on-tertiary-container)",
            }}
          >
            {pill}
          </span>
        </div>
      )}
      <h2
        className="text-headline-lg"
        style={{ color: light ? "var(--color-on-primary)" : "var(--color-primary-container)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-body-md max-w-2xl"
          style={{ color: light ? "var(--color-primary-fixed)" : "var(--color-on-surface-variant)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
