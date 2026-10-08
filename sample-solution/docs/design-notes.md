# Design Notes — Sample Solution Ltd

Source of truth: `homesample.html.html` (Tailwind v3 stitch).

---

## 1. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#001026` | Hero bg, footer bg, gradient overlays |
| `primary-container` | `#0b2545` | Nav active, section headings, buttons |
| `on-primary` | `#ffffff` | Text on dark bg |
| `primary-fixed` | `#d5e3ff` | Hero sub-text |
| `primary-fixed-dim` | `#b1c7f0` | Secondary text on dark |
| `secondary` | `#3b608c` | Accent, Civil category badge |
| `on-secondary` | `#ffffff` | Text on secondary |
| `on-tertiary-container` | `#d37407` | Amber CTA buttons, badges, icon highlights |
| `tertiary-fixed-dim` | `#ffb77d` | Hover amber |
| `surface` | `#f9f9ff` | Page background |
| `surface-container-lowest` | `#ffffff` | Cards, form bg |
| `surface-container-low` | `#f0f3ff` | Services section bg |
| `surface-container` | `#e7eeff` | Stat cards, badge bg |
| `surface-container-highest` | `#d5e3ff` | Number labels |
| `on-surface` | `#0b1c32` | Body text |
| `on-surface-variant` | `#44474e` | Secondary body text |
| `outline-variant` | `#c4c6cf` | Subtle borders |

## 2. Typography Scale (Inter font, all)

| Token | Size | LH | LS | Weight |
|---|---|---|---|---|
| display | 52px | 60px | -0.03em | 800 |
| display-mobile | 36px | 44px | -0.02em | 800 |
| headline-lg | 36px | 44px | -0.02em | 700 |
| headline-sm | 20px | 28px | 0 | 600 |
| title-md | 16px | 24px | 0 | 600 |
| body-lg | 18px | 28px | 0 | 400 |
| body-md | 15px | 24px | 0 | 400 |
| body-sm | 13px | 20px | 0.01em | 400 |
| label-caps | 11px | 16px | 0.12em | 700 |
| label-code | 12px | 16px | 0.04em | 600 |

## 3. Asset Inventory & Slot Mapping

| File | Slot | Notes |
|---|---|---|
| `banner.png` | Hero slide 1 (priority), PageBanner bg | Aerial Jubail refinery at sunset. Perfect hero. |
| `about us 2.png` | About — primary image (top-left, large) | Construction site cranes. |
| `about us 1.png` | About — secondary overlay image (bottom-right) | MEP engineers at switchgear. |
| `all projects 1.png` | Project card 1: MEP Contracting | HVAC plant room. |
| `all projects 2.png` | Project card 2: Civil & Construction | Petrochemical piping. |
| `all projects 3.png` | Project card 3: Waste/Industrial | Treatment tanks. |
| `all projects 4.png` | Project card 4: Logistics & Transport | Heavy truck on Jubail highway. |

### Gaps
- Hero slides 2 & 3: No dedicated images — reuse banner.png with alt CSS gradient overlays.
- Services slider: Uses icons (matching stitch — no photos in that section).
- Client logos: SVG text badges (per requirements).

## 4. Component Map

### Layout
- TopBar, Header, MobileMenu, Footer, WhatsAppButton

### Sections (Home)
1. Hero (Embla fade, 3 slides, autoplay 5s)
2. VisionMission (stagger fade-up cards)
3. About (split image + copy)
4. ServicesSlider (Embla loop, 3/2/1 cols)
5. ProjectsPreview (4-card filter grid)
6. QuoteCta (dark navy split + form)
7. ClientsStrip (CSS marquee)

### UI
- Button, SectionHeading, PageBanner, Reveal, QuoteForm

## 5. Pages

| Route | Key Sections |
|---|---|
| `/` | All 7 home sections |
| `/policy/safety` | PageBanner + policy content |
| `/policy/quality` | PageBanner + policy content |
| `/services` | PageBanner + all 5 service cards |
| `/services/[slug]` | PageBanner + sidebar + detail + CTA |
| `/projects` | PageBanner + filter + grid + lightbox |
| `/clients` | PageBanner + logo card grid |
| `/contact` | PageBanner + info cards + hours + form + map |
