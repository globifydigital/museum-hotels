import type { Metadata } from "next";
import { Gilda_Display, Inter, Overpass, Playfair_Display, Sansation } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-overpass",
  display: "swap",
});

const gilda = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gilda",
  display: "swap",
});

const sansation = Sansation({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sansation",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ginger House Museum Hotel | A Heritage Retreat by the Waterfront, Fort Kochi",
  description: "Heritage rooms & suites · Waterfront location · Fort Kochi, Kerala · Enquire to book",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${overpass.variable} ${gilda.variable} ${sansation.variable}`}
    >
      <head>
        {/* Enables the scroll-reveal start states only when JS runs, before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"js\")" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
