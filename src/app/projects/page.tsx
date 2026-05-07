"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuSearch, LuX } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import Footer from "@/components/Footer";
import Contact from "@/components/section/Contact";

// Data proyek (sama seperti sebelumnya)
const allProjects = [
  {
    id: 1,
    title: "Orion Forge",
    category: "Space",
    description:
      "Platform co-working space dengan sistem booking ruangan dan member management online.",
    img: "/example.webp",
    link: "https://orion-forge.vercel.app",
  },
  {
    id: 2,
    title: "Nebula News",
    category: "News",
    description:
      "Website menu digital dengan sistem delivery tracking dan pre-order kuliner nusantara.",
    img: "/example.webp",
    link: "https://lavesta-buritos.vercel.app",
  },
  {
    id: 3,
    title: "Stellar Bank Industries",
    category: "Bank",
    description:
      "Portal layanan perbankan digital dengan dashboard transaksi dan informasi produk investasi.",
    img: "/example2.webp",
    link: "https://stellar-bank.vercel.app",
  },
  {
    id: 4,
    title: "GCBI",
    category: "Bank",
    description:
      "Website layanan perbankan, company profile sebagai media informasi.",
    img: "/example2.webp",
    link: "#",
  },
  {
    id: 5,
    title: "Central Asian Cars",
    category: "Otomotif",
    description:
      "Platform Sportscar, event, dan showroom otomotif, di seluruh Asia.",
    img: "/example3.webp",
    link: "#",
  },
  {
    id: 6,
    title: "Neza Cafe",
    category: "Cafe",
    description:
      "Website kafe dengan menu interaktif, blog tips kopi, event calendar, dan sistem reservasi.",
    img: "/example3.webp",
    link: "#",
  },
  {
    id: 7,
    title: "Cosmos Gym",
    category: "Sports",
    description:
      "Platform membership gym dengan class schedule, trainer profile, dan progress tracking untuk member.",
    img: "/example4.webp",
    link: "https://cosmos-gym.vercel.app",
  },
  {
    id: 8,
    title: "Prodigy Photography",
    category: "Creative",
    description:
      "Portfolio fotografi profesional dengan galeri lightbox, booking system, dan pricing showcase.",
    img: "/example4.webp",
    link: "https://prodigy-photography.vercel.app",
  },
];

const categories = ["Semua", ...new Set(allProjects.map((p) => p.category))];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredProjects = useMemo(() => {
    let result = allProjects;
    if (selectedCategory !== "Semua") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term),
      );
    }
    return result;
  }, [searchTerm, selectedCategory]);

  return (
    <main className="bg-black text-white min-h-screen pt-19 font-sans">
      {/* top content */}
      <div id="beranda"></div>
      <Navbar />

      {/* Skathes 1: Quotes pembuka yang membangun kepercayaan */}
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            “Karya terbaik lahir dari kolaborasi dan kepercayaan”
          </p>
          <p className="text-purple-300 text-sm">
            Setiap proyek di bawah ini adalah bukti nyata komitmen kami terhadap
            kualitas.
          </p>
        </div>
      </Skathes>

      <div className="mx-4 border-y border-dashed border-stone-800">
        <div className="max-w-6xl mx-auto border-x border-dashed border-stone-800 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Semua <span className="text-purple-400">Proyek</span>
            </h1>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto">
              Berbagai solusi website untuk UMKM, kuliner, coffee shop, dan
              lainnya.
            </p>
          </div>

          {/* Filter & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-y border-dashed border-stone-800 px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-target cursor-pointer px-4 py-2 border-x border-dashed border-stone-800 text-sm font-medium transition duration-200 h-full ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="cursor-target relative w-full md:w-80">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek, kategori, atau deskripsi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border-x border-dashed border-stone-800 py-2 pl-10 pr-10 text-white focus:outline-none focus:border-purple-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <LuX size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Daftar proyek */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">
                Tidak ada proyek yang cocok dengan pencarian Anda.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 border-y border-dashed border-stone-800">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="cursor-target bg-gray-900/30 border border-dashed border-stone-800 overflow-hidden hover:border-purple-500 transition"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      className="object-cover group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-purple-400 text-sm mt-1">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      className="mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium transition flex items-center"
                    >
                      Kunjungi Website <LuArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Call to action */}
          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="cursor-target cursor-pointer inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition transform hover:-translate-y-1"
            >
              Konsultasi Proyek Serupa →
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Button to Top */}
      <Link
        href="#beranda"
        className="cursor-target fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center z-40"
        aria-label="Kembali ke atas"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Link>

      <Contact />
      {/* Skathes 2: Quotes penutup yang memotivasi dan mengajak bertindak */}
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            “Jangan hanya punya mimpi, wujudkan dengan website yang tepat”
          </p>
          <p className="text-purple-300 text-sm">
            Siap membawa bisnis Anda ke level berikutnya? Mulai konsultasi
            gratis sekarang.
          </p>
        </div>
      </Skathes>
      {/* <div className="flex items-center justify-center bg-purple-600">
        <Image
          src={"/Fizorra.png"}
          width={600}
          height={600}
          alt={"Fizorra"}
        ></Image>
      </div> */}
      <Footer />
    </main>
  );
}
