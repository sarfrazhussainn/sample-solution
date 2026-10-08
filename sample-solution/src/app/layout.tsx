import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Industrial Contracting Jubail, Saudi Arabia`,
    template: `%s | ${company.name}`,
  },
  description:
    "Sample Solution Ltd — leading MEP contracting, construction, waste management, support services and transportation company in Jubail Industrial City, Saudi Arabia.",
  keywords: [
    "MEP contracting Jubail",
    "industrial contractor Saudi Arabia",
    "construction Jubail",
    "waste management Eastern Province",
    "heavy transport Saudi Arabia",
    "Sample Solution Ltd",
  ],
  authors: [{ name: company.name }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <meta name="theme-color" content="#001026" />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
