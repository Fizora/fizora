import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const fontMono = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fizora.vercel.app"), // Ganti dengan domain asli Anda
  title: {
    default:
      "Fizora - Jasa Pembuatan Website Profesional untuk UMKM & Coffee Shop",
    template: "%s | Fizora",
  },
  description:
    "Fizora menyediakan jasa pembuatan landing page dan website profesional untuk kuliner, coffee shop, dan bisnis lokal. Desain modern, cepat, dan terbukti tingkatkan konversi. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website",
    "landing page coffee shop",
    "website UMKM",
    "website kuliner murah",
    "jasa website profesional",
    "pembuatan website bisnis lokal",
    "Fizora",
    "web developer Indonesia",
  ],
  authors: [{ name: "Fizora", url: "https://fizora.vercel.app" }],
  creator: "Fizora",
  publisher: "Fizora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fizora - Jasa Website untuk UMKM & Coffee Shop",
    description:
      "Tingkatkan penjualan bisnis Anda dengan website modern. Konsultasi gratis tanpa ribet.",
    url: "https://fizora.vercel.app",
    siteName: "Fizora",
    images: [
      {
        url: "/og-image.jpg", // Buat gambar OG 1200x630px
        width: 1200,
        height: 630,
        alt: "Fizora - Jasa Pembuatan Website Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizora - Website UMKM & Coffee Shop",
    description:
      "Jasa pembuatan landing page dan website profesional untuk bisnis lokal. Desain modern, konversi tinggi.",
    images: ["/og-image.jpg"],
    creator: "@fizoraaa",
    site: "@fizoraaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fizora.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="id"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        fontMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
