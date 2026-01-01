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
  title: "Vision Originn — Renewable Energy, Agriculture & Infrastructure",
  description:
    "Vision Originn delivers sustainable renewable energy solutions, smart agriculture technology, and reliable civil infrastructure services — building a greener and stronger future.",
  keywords: [
    "Vision Originn",
    "renewable energy",
    "solar solutions",
    "agriculture technology",
    "infrastructure development",
    "green energy",
    "sustainability",
    "Vision Originn"
  ],
  openGraph: {
    title: "Vision Group — Building a Sustainable Future",
    description:
      "We provide innovative renewable energy, agriculture, and infrastructure solutions focused on sustainability and performance.",
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.className}`}>
        <Bootstrap>
          {/* <Loader /> */}
          <Animations />
          <GotoTop />
          {children}
        </Bootstrap>
      </body>
    </html>
  );
}
