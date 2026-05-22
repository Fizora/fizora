import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-mono",
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
    default:
      "Fizora - Professional Website Development for Startups & Small Business",
    template: "%s | Fizora",
  },
  description:
    "Fizora builds fast, responsive company profiles and landing pages for startups, cafes, and local businesses worldwide. Modern design, SEO-friendly, and conversion-focused. Starting at $300.",
  keywords: [
    "professional web development",
    "landing page for coffee shop",
    "small business website",
    "startup company profile",
    "Next.js developer",
    "freelance web developer",
    "responsive website design",
    "SEO friendly website",
  ],
  authors: [{ name: "Fizora", url: "https://fizora.vercel.app" }],
  creator: "Fizora",
  publisher: "Fizora",
  verification: {
    google: "iU_eodes0Tp4_tf-fKjWmMnGi82zUEVC8qH6J8Fhn-Q",
    yandex: "yandex-verification-code",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Fizora - Professional Website Developer",
    description:
      "Turn visitors into customers with a modern, high-performance website from Fizora. Get a free consultation today.",
    url: "https://fizora.vercel.app",
    siteName: "Fizora Web Dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fizora Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizora - Professional Web Developer",
    description:
      "Fast, responsive websites for startups and small businesses. Starting at $300. Free consultation.",
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Fizora",
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
      data-scroll="smooth"
      className={cn(
        "h-full antialiased bg-black",
        geistSans.variable,
        fontMono.variable,
      )}
    >
      <head>
        {/* Preconnect untuk Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch untuk external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <JsonLd />
        <ClientLayout>
          <header>{/* Navbar di dalam ClientLayout */}</header>
          <main id="main-content" className="bg-black">
            {children}
          </main>
          <footer>{/* Footer di dalam ClientLayout */}</footer>
        </ClientLayout>
      </body>
    </html>
  );
}
