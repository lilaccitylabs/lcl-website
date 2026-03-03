import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lilac City Labs — Solo-Built Software for Underserved Markets",
  description:
    "A one-person software studio that uses data pipelines and AI to find underserved app markets and build tools to fill them.",
  metadataBase: new URL("https://lilac-city-labs.com"),
  openGraph: {
    title: "Lilac City Labs — Solo-Built Software for Underserved Markets",
    description:
      "A one-person software studio that uses data pipelines and AI to find underserved app markets and build tools to fill them.",
    url: "https://lilac-city-labs.com",
    siteName: "Lilac City Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lilac City Labs — Solo-Built Software for Underserved Markets",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilac City Labs — Solo-Built Software for Underserved Markets",
    description:
      "A one-person software studio that uses data pipelines and AI to find underserved app markets and build tools to fill them.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
