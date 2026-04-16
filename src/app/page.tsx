"use client";
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
import Image from "next/image";

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
          <div className="space-y-2">
            <p className="text-white text-lg font-bold tracking-wide">
              ⚡ Sudah 50+ pemilik bisnis kuliner & coffee shop percaya pada
              kami
            </p>
            <p className="text-purple-300 text-sm">
              Pesanan online mereka naik rata-rata 2.5x dalam 1 bulan pertama
            </p>
          </div>
        </Skathes>
        <Projects />
        <Pricing />

        {/* Skathes 2: Ajakan lihat testimonial */}
        <Skathes>
          <div className="space-y-2">
            <p className="text-white text-lg font-bold">
              💬 Jangan percaya kata kami, percaya pada klien kami
            </p>
            <p className="text-gray-300 text-sm">
              Scroll ke bawah untuk lihat pengalaman mereka 🚀
            </p>
          </div>
        </Skathes>

        <Testimony />
        <Faq />
        <Contact />

        {/* Skathes 3: CTA terakhir + garansi */}
        <Skathes>
          <div className="space-y-2">
            <p className="text-white text-lg font-bold">
              🎯 Siap tingkatkan penjualan bisnismu?
            </p>
            <p className="text-purple-300 text-sm">
              Konsultasi 30 menit GRATIS.{" "}
              <span className="font-bold">Tanpa ribet, tanpa kewajiban.</span>
            </p>

            <a
              href="#contact"
              className="cursor-target cursor-pointer inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Ya, Saya Mau Konsultasi →
            </a>
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
