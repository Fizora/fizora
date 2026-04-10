"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuSearch, LuX, LuStar } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import Footer from "@/components/Footer";
import Contact from "@/components/section/Contact";

// Data testimonial
const allTestimonies = [
  {
    id: 1,
    name: "Hesti Wijaya",
    business: "Kopi Nusantara",
    category: "Kuliner",
    rating: 5,
    date: "2024-01-15",
    feedback:
      "Website yang dibuat tim Fizora benar-benar mengubah cara kami berbisnis. Penjualan meningkat 150% dalam 3 bulan pertama. Customer service mereka responsif dan profesional.",
    img: "/example.webp",
  },
  {
    id: 2,
    name: "Dicky Saumara",
    business: "Wedding Organizer Azzahra",
    category: "Event",
    rating: 5,
    date: "2024-02-20",
    feedback:
      "Desain website sangat elegan dan mencerminkan brand kami dengan sempurna. Banyak klien yang booking melalui website. Terima kasih Fizora!",
    img: "/example2.webp",
  },
  {
    id: 3,
    name: "Sri Hartono",
    business: "Laundry Kiloan Cepat",
    category: "Service",
    rating: 4,
    date: "2024-01-10",
    feedback:
      "Sistem order WhatsApp yang terintegrasi sangat memudahkan. Hanya saja, kami ingin fitur tracking ditambah di update berikutnya.",
    img: "/example2.webp",
  },
  {
    id: 4,
    name: "Nur Azizah",
    business: "Fashion Muslimah Qaira",
    category: "Fashion",
    rating: 5,
    date: "2024-03-05",
    feedback:
      "E-commerce website mereka user-friendly dan loading cepat. Penjualan online kami naik signifikan. Tim support sangat membantu saat ada pertanyaan.",
    img: "/example3.webp",
  },
  {
    id: 5,
    name: "Bambang Suryanto",
    business: "Gym & Fitness BodyFit",
    category: "Olahraga",
    rating: 5,
    date: "2024-02-28",
    feedback:
      "Website membership kami jadi lebih profesional. Form pendaftaran online mengurangi kerja manual. Investasi terbaik untuk bisnis kami tahun ini.",
    img: "/example4.webp",
  },
  {
    id: 6,
    name: "Lia Kusuma",
    business: "Studio Foto Lensa",
    category: "Creative",
    rating: 4,
    date: "2024-01-22",
    feedback:
      "Galeri foto di website mereka sangat indah dan responsif. Client booking meningkat. Sedikit feedback: portfolio page bisa lebih interaktif.",
    img: "/example4.webp",
  },
  {
    id: 7,
    name: "Rizki Pratama",
    business: "Musa Kopi",
    category: "Demo",
    rating: 5,
    date: "2024-03-10",
    feedback:
      "Dari konsultasi awal hingga launch, team Fizora sangat profesional dan detail. Website kami jadi pusat promosi yang efektif.",
    img: "/example3.webp",
  },
  {
    id: 8,
    name: "Siti Nurhaliza",
    business: "Sate Pak Man",
    category: "Kuliner",
    rating: 4,
    date: "2024-02-14",
    feedback:
      "Menu digital dan lokasi outlet di website sangat membantu customer menemukan kami. Review rata-rata 4.8 bintang dari customer.",
    img: "/example.webp",
  },
];

const categories = ["Semua", ...new Set(allTestimonies.map((t) => t.category))];
const ratings = [
  { label: "Semua", value: 0 },
  { label: "5 Bintang", value: 5 },
  { label: "4 Bintang", value: 4 },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <LuStar
          key={i}
          size={16}
          className={
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }
        />
      ))}
    </div>
  );
};

export default function TestimonyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredTestimonies = useMemo(() => {
    let result = allTestimonies;

    if (selectedCategory !== "Semua") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (selectedRating !== 0) {
      result = result.filter((t) => t.rating === selectedRating);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(term) ||
          t.business.toLowerCase().includes(term) ||
          t.category.toLowerCase().includes(term) ||
          t.feedback.toLowerCase().includes(term),
      );
    }

    return result;
  }, [searchTerm, selectedCategory, selectedRating]);

  return (
    <main className="bg-black text-white min-h-screen pt-19 font-sans">
      {/* top content */}
      <div id="beranda"></div>
      <Navbar />

      {/* Skathes 1: Quotes pembuka */}
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            "Kepuasan klien adalah kesuksesan kami"
          </p>
          <p className="text-purple-300 text-sm">
            Dengarkan langsung dari klien yang telah merasakan transformasi
            bisnis mereka.
          </p>
        </div>
      </Skathes>

      <div className="mx-4 border-y border-dashed border-stone-800">
        <div className="max-w-6xl mx-auto border-x border-dashed border-stone-800 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Testimoni <span className="text-purple-400">Klien</span>
            </h1>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto">
              Ribuan bisnis telah berkembang bersama Fizora. Inilah cerita
              kesuksesan mereka.
            </p>
          </div>

          {/* Filter & Search */}
          <div className="space-y-4 mb-12 border-y border-dashed border-stone-800 p-4 sm:p-6">
            {/* Category Filter */}
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

            {/* Rating Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {ratings.map((rating) => (
                <button
                  key={rating.label}
                  onClick={() => setSelectedRating(rating.value)}
                  className={`cursor-target cursor-pointer px-4 py-2 border-x border-dashed border-stone-800 text-sm font-medium transition duration-200 h-full ${
                    selectedRating === rating.value
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  {rating.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="cursor-target relative w-full">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama, bisnis, atau feedback..."
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

          {/* Daftar testimoni */}
          {filteredTestimonies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">
                Tidak ada testimoni yang cocok dengan pencarian Anda.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 border-y border-dashed border-stone-800">
              {filteredTestimonies.map((testimony, idx) => (
                <motion.div
                  key={testimony.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="cursor-target bg-gray-900/30 border border-dashed border-stone-800 overflow-hidden hover:border-purple-500 transition p-5 flex flex-col"
                >
                  {/* Header Testimoni */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimony.img}
                        alt={testimony.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {testimony.name}
                      </h3>
                      <p className="text-purple-400 text-sm">
                        {testimony.business}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimony.category}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    <StarRating rating={testimony.rating} />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-4">
                    "{testimony.feedback}"
                  </p>

                  {/* Date */}
                  <p className="text-gray-500 text-xs">
                    {new Date(testimony.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
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
              Jadilah Klien Kami Berikutnya →
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

      {/* Skathes 2: Quotes penutup */}
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            "Bisnis Anda pantas mendapat website yang luar biasa"
          </p>
          <p className="text-purple-300 text-sm">
            Ratusan UMKM telah bertransformasi. Saatnya giliran bisnis Anda.
          </p>
        </div>
      </Skathes>
      <Footer />
    </main>
  );
}
