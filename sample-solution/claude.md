# Sample Solution Ltd — Project Architecture & File Summary

This document provides a concise summary of the key files and their respective functions across the codebase.

---

## 1. Project Configuration & Build

- **`next.config.ts`**: Configures Next.js for static export (`output: "export"`, `images.unoptimized: true`) targeted for Cloudflare Pages.
- **`package.json`**: Dependencies (Next.js 16, React 19, Tailwind CSS v4, Embla Carousel) and build scripts (`dev`, `build`, `start`).
- **`tsconfig.json`**: TypeScript configuration with `@/*` mapped to `./src/*`.
- **`postcss.config.mjs`**: PostCSS configuration linking `@tailwindcss/postcss`.
- **`.gitignore`**: Excludes build outputs (`.next/`, `out/`), dependencies (`node_modules/`), environment secrets, and IDE caches from Git.

---

## 2. Global Styles & Theme

- **`src/styles/globals.css`**: Tailwind v4 design tokens extracted from the Stitch design system (Navy primary `#001026`, Amber accent `#D37407`, Inter font tokens, responsive container styles, animations, and horizontal overflow protection).
- **`src/app/layout.tsx`**: Root HTML layout shell configuring Google Fonts (`Inter`), Material Symbols icons, global SEO defaults, `Header`, `Footer`, `WhatsAppButton`, and `BackToTop`.

---

## 3. Data Layer (`src/data/`)

- **`company.ts`**: Centralized company information (CR, VAT, Jubail headquarters, contact numbers, emails, working hours, and Google Maps embed).
- **`services.ts`**: Catalog of the 6 core industrial services (MEP, Construction, Waste Management, Support Services, Logistics) with slugs, features, and icons.
- **`projects.ts`**: List of landmark industrial projects with category tags, client names, and descriptions.
- **`nav.ts`**: Top-level and dropdown navigation menu items.
- **`clients.ts`**: Industrial client network (Saudi Aramco, SABIC, RCJY, Ma'aden, etc.) with badges and status.

---

## 4. UI Components (`src/components/`)

### Layout
- **`Header.tsx`**: Sticky header containing the contact top-bar, company logo, desktop navigation with dropdowns, and mobile menu toggle.
- **`Footer.tsx`**: 12-column responsive footer featuring brand credentials, certifications, company links, service links, newsletter subscription, and copyright bar.
- **`MobileMenu.tsx`**: Accessible slide-out navigation drawer with focus management and sub-menu accordions.
- **`WhatsAppButton.tsx`**: Floating quick-contact action button directly opening WhatsApp chat.
- **`BackToTop.tsx`**: Scroll-triggered floating button returning user smoothly to page top.

### Sections (Homepage)
- **`Hero.tsx`**: Auto-advancing Embla carousel with background images, gradients, and CTA buttons.
- **`VisionMission.tsx`**: Side-by-side directive cards highlighting corporate Vision and Mission.
- **`About.tsx`**: Split section featuring company history, experience badge (15+ Years), and ISO highlights.
- **`ServicesSlider.tsx`**: Touch-friendly carousel of services with navigation controls.
- **`ProjectsPreview.tsx`**: Filterable grid displaying featured industrial projects.
- **`QuoteCta.tsx`**: Conversion section featuring emergency support contact cards and the quote form.
- **`ClientsStrip.tsx`**: Continuous CSS marquee showcasing client partner badges.

### Shared UI & Forms
- **`Button.tsx`**: Multi-variant button and link component (`amber`, `primary`, `outline`, `ghost`).
- **`QuoteForm.tsx`**: Validated RFQ/Inquiry form for submitting project specifications.
- **`PageBanner.tsx`**: Consistent subpage hero banner with dynamic breadcrumb trails.
- **`Reveal.tsx`**: Intersection-observer wrapper for smooth scroll-in animations.
- **`SectionHeading.tsx`**: Consistent section header with pill badges, titles, and subheadings.

---

## 5. Pages & Routing (`src/app/`)

- **`page.tsx`**: Homepage composing all primary landing sections.
- **`services/page.tsx`**: Overview page of all contracting capabilities.
- **`services/[slug]/page.tsx`**: Dynamic static detail page for individual services (with `generateStaticParams`).
- **`projects/page.tsx`**: Full project gallery with category filtering tabs and full-screen image lightbox.
- **`clients/page.tsx`**: Approved vendor directory and client grid.
- **`contact/page.tsx`**: Contact details, business hours, inquiry form, and interactive Jubail map.
- **`policy/safety/page.tsx`**: Health, Safety & Environment (HSE) corporate policy.
- **`policy/quality/page.tsx`**: ISO 9001:2015 Quality management policy.
- **`sitemap.ts` & `robots.ts`**: Automated dynamic sitemap and search engine crawler instructions.

---

## 6. Utilities (`src/lib/`)

- **`seo.ts`**: Generates uniform page metadata, Open Graph cards, and canonical links.
- **`validation.ts`**: Validates user inputs (name, email, phone, message) for the inquiry form.
