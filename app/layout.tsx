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
  title: "Lilac City Labs — Modern CME Management Software",
  description:
    "A simpler, more affordable platform for managing continuing medical education programs. PARS-ready reporting, QR check-in, and transparent pricing.",
  metadataBase: new URL("https://lilac-city-labs.com"),
  openGraph: {
    title: "Lilac City Labs — Modern CME Management Software",
    description:
      "A simpler, more affordable platform for managing continuing medical education programs. PARS-ready reporting, QR check-in, and transparent pricing.",
    url: "https://lilac-city-labs.com",
    siteName: "Lilac City Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lilac City Labs — Modern CME Management Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilac City Labs — Modern CME Management Software",
    description:
      "A simpler, more affordable platform for managing continuing medical education programs. PARS-ready reporting, QR check-in, and transparent pricing.",
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
