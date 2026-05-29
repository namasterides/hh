import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

/* Display serif for big editorial headings */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* Script accent — used only for the word "Honey" and small flourishes */
const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* Body, navigation, buttons, and all spaced-uppercase labels */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heritage Honey — Afro-Caribbean & Southern Cuisine",
  description:
    "Heritage Honey — luxury Afro-Caribbean & Southern catering, private chef, and event experiences. Bold flavor. Rooted in heritage.",
  keywords: [
    "luxury catering",
    "private chef",
    "Afro-Caribbean cuisine",
    "Southern cuisine",
    "event catering",
    "Heritage Honey",
  ],
  openGraph: {
    title: "Heritage Honey — Afro-Caribbean & Southern Cuisine",
    description: "Bold flavor. Rooted in heritage.",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Heritage Honey",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${pinyon.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-charcoal">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
