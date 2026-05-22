"use client";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Faq from "@/components/section/Faq";
import Hero from "@/components/section/Hero";
import Pricing from "@/components/section/Pricing";
import Projects from "@/components/section/Projects";
import Testimony from "@/components/section/Testimony";
import Skathes from "@/components/Skathes";

// Lazy load components with animation effects
const Projects_Section = dynamic(
  () => import("@/components/section/Projects"),
  {
    loading: () => <div className="h-96 bg-black" />,
    ssr: true,
  },
);

export default function Home() {
  return (
    <>
      <main className="font-sans bg-black">
        <Navbar />
        <Hero />
        <Skathes>
          <div className="space-y-2"></div>
        </Skathes>
        <About />

        {/* Skathes 1: Social Proof + Urgensi */}
        <Skathes>
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <p className="text-white text-lg font-bold tracking-wide">
              📁 5 live portfolio projects — ready to show you what I can do
            </p>
            <p className="text-gray-400 text-sm">
              From company profiles to landing pages. Built with Next.js,
              Tailwind, and a focus on performance. Let me bring the same
              quality to your brand.
            </p>
          </div>
        </Skathes>
        <Projects />
        <Pricing />

        {/* Skathes 2: Ajakan lihat testimonial */}
        {/* <Skathes>
          <div className="space-y-2">
            <p className="text-white text-lg font-bold">
              💬 Jangan percaya kata kami, percaya pada klien kami
            </p>
            <p className="text-gray-400 text-sm">
              Scroll ke bawah untuk lihat pengalaman mereka 🚀
            </p>
          </div>
        </Skathes>

        <Testimony /> */}
        <Faq />
        <Contact />

        {/* Skathes 3: Optimized CTA + Guarantee */}
        <Skathes>
          <div className="space-y-3 text-center max-w-2xl mx-auto">
            <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              Ready to grow your business online?
            </p>
            <p className="text-gray-300 text-base">
              Get a{" "}
              <span className="text-white font-semibold">
                free 30‑min consultation
              </span>{" "}
              – no pressure, no hidden fees. Just honest advice and a clear
              roadmap.
            </p>
            <div className="flex flex-col  gap-4 justify-center pt-2">
              <a
                href="#contact"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold mt-4"
              >
                Start your free consultation →
              </a>
              <a
                href="#pricing"
                className="inline-block border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-6 py-3 rounded-md font-medium transition"
              >
                See pricing first
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              ✅ No obligation • 24/7 support • 100% money‑back guarantee if
              you're not satisfied within 14 days.
            </p>
          </div>
        </Skathes>
        <Footer />
        {/* brand */}
        {/* <section className="border-t border-dashed border-stone-800 bg-[#9333ea]">
          <div className="mx-4">
            <div className="max-w-6xl mx-auto border-x border-dashed border-white flex items-center justify-center">
              <Image
                src="/fizora.svg"
                alt="Fizora Logo"
                width={600}
                height={200}
              />
            </div>
          </div>
        </section> */}
        <FloatingWhatsAppButton />
      </main>
    </>
  );
}
