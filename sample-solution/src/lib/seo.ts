import type { Metadata } from "next";
import { company } from "@/data/company";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samplesolution.example";

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage = "/images/hero/hero-1.webp",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title: `${title} | ${company.name}`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
      images: [ogImage],
    },
  };
}
