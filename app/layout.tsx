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
  title: "Solarox - Solar and Renewable Energy NextJS Bootstrap Template",
  description: "Solarox - Solar and Renewable Energy NextJS Bootstrap Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
