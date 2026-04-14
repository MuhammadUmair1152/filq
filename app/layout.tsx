import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "filq — Digital Product Design And Development Company",
  description:
    "filq is a digital product design and development agency specializing in UX/UI design, branding, web development, and mobile app design for SaaS, AI, Web3, and Fintech companies.",
  keywords: [
    "UI/UX design agency",
    "product design company",
    "SaaS design",
    "web development agency",
    "branding agency",
    "mobile app design",
    "AI product design",
    "Web3 design",
    "Fintech design",
  ],
  openGraph: {
    title: "filq — Digital Product Design And Development Company",
    description:
      "Your design & dev partner that unites brand, website, UX/UI design into a holistic product.",
    type: "website",
    url: "https://filq.agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "filq — Digital Product Design And Development Company",
    description:
      "Your design & dev partner that unites brand, website, UX/UI design into a holistic product.",
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
      className={`${outfit.variable} ${libreBaskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
