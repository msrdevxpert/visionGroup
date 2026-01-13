import Animations from "@/components/animations/Animations";
import Bootstrap from "@/components/shared/Bootstrap";
import GotoTop from "@/components/shared/GotoTop";
import "@/public/scss/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Originn – Renewable Energy & Smart Infrastructure",
  description:
    "Vision Originn is a leading Indian company providing renewable energy, smart agriculture technology and modern civil infrastructure solutions.",

  keywords: [
    "Vision Originn",
    "Vision Origin",
    "Vision Origin company",
    "Vision Origin solar",
    "Vision Origin renewable",
    "Vision Originn",
    "Vision Originn solar",
    "Vision Originn company",
    "green energy India",
    "solar EPC",
    "smart agriculture",
    "civil infrastructure"
  ],

  alternates: {
    canonical: "https://www.visionoriginn.com",
  },

  openGraph: {
    title: "Vision Originn – Building a Sustainable Future",
    description:
      "Vision Originn provides solar energy, agriculture technology and infrastructure services across India.",
    url: "https://www.visionoriginn.com",
    siteName: "Vision Originn",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision Originn",
    description:
      "Vision Originn is a renewable energy and infrastructure company in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={interFont.className}>

        {/* 🔥 Invisible Google Brand Alias */}
        <span style={{ display: "none" }}>
          Vision Origin is the official brand name of Vision Originn renewable energy company
        </span>

        {/* 🔥 Google Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vision Originn",
              alternateName: ["Vision Origin", "Vision Originn India"],
              url: "https://www.visionoriginn.com",
              logo: "https://www.visionoriginn.com/logo.png",
              description:
                "Vision Originn, also known as Vision Origin, is a renewable energy and infrastructure company in India.",
            }),
          }}
        />

        <Bootstrap>
          <Animations />
          <GotoTop />
          {children}
        </Bootstrap>
      </body>
    </html>
  );
}
