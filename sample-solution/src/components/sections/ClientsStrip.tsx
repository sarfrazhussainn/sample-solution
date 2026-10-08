import { clients } from "@/data/clients";

export default function ClientsStrip() {
  // Duplicate array once for seamless marquee loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-surface-container-low py-16 overflow-hidden">
      <div className="section-container text-center mb-8">
        <span className="text-label-caps text-on-surface-variant tracking-widest uppercase">
          Trusted by Leading Industrial Corporations Across the Kingdom
        </span>
      </div>
      
      {/* Marquee Container */}
      <div className="marquee-wrapper relative w-full overflow-hidden">
        {/* Fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10" />
        
        <div className="marquee-track gap-4 px-4">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="w-[180px] h-[120px] shrink-0 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-1 group"
            >
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">
                {client.icon}
              </span>
              <span className="text-title-md text-primary-container line-clamp-1">
                {client.shortName}
              </span>
              <span className="text-[10px] text-on-surface-variant font-semibold tracking-wide uppercase">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
