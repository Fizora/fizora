import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const fontMono = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

// Viewport dipisah di Next.js versi terbaru untuk optimasi
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Mendukung aksesibilitas (zoom)
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fizora.vercel.app"),
  title: {
    default: "Fizora - Jasa Pembuatan Website Profesional UMKM & Coffee Shop",
    template: "%s | Fizora",
  },
  description:
    "Fizora melayani jasa pembuatan landing page & website profesional untuk UMKM, coffee shop, dan bisnis lokal di Indonesia. Desain modern, SEO-friendly, dan cepat.",
  keywords: [
    "jasa pembuatan website",
    "landing page coffee shop",
    "website UMKM",
    "website kuliner murah",
    "web developer Indonesia",
    "jasa seo website",
  ],
  authors: [{ name: "Fizora", url: "https://fizora.vercel.app" }],
  creator: "Fizora",
  publisher: "Fizora",
  // Tag untuk verifikasi search console (masukkan kode Anda nanti)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Fizora - Jasa Website Profesional UMKM & Coffee Shop",
    description:
      "Ubah pengunjung menjadi pelanggan dengan website modern dari Fizora.",
    url: "https://fizora.vercel.app",
    siteName: "Fizora Jasa Website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview Layanan Fizora",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizora - Ahli Website Bisnis Lokal",
    description:
      "Jasa pembuatan website profesional untuk UMKM. Murah, cepat, dan berkualitas.",
    images: ["/og-image.jpg"],
    creator: "@fizoraaa",
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
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full antialiased bg-black", // Tambahan scroll-smooth untuk user experience
        geistSans.variable,
        geistMono.variable,
        fontMono.variable,
      )}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Schema Markup untuk SEO hasil pencarian */}
        <JsonLd />

        {/* Gunakan ClientLayout atau wrap langsung dengan tag semantik */}
        <ClientLayout>
          <header>
            {/* Navbar Anda biasanya ada di sini di dalam ClientLayout */}
          </header>

          <main id="main-content" className="bg-black">
            {children}
          </main>

          <footer>{/* Footer Anda */}</footer>
        </ClientLayout>
      </body>
    </html>
  );
}
