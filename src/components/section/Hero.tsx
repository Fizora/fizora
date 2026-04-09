"use client";
import { motion } from "framer-motion";
import Beams from "../Beams";
import FloatingLines from "../FloatingLines";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black border-b border-dashed border-stone-800 overflow-hidden"
    >
      {/* Background */}
      {/* <div className="absolute bg-black/40 inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div> */}

      {/* Konten Hero - di tengah tanpa gambar */}
      <div className="relative z-10 mx-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-x border-dashed border-stone-800 py-20 md:py-32 lg:py-40 xl:py-50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* <span className="text-sm uppercase tracking-wider text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
              Solusi Digital untuk UMKM & Coffee Shop
            </span> */}
            <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight font-mono">
              <span className="text-purple-500">
                Bangun Websitemu Sekarang{" "}
              </span>
              ,
              <br />
              Pesanan Naik 3x Lipat!
            </h1>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Jasa pembuatan landing page & website profesional untuk kuliner,
              coffee shop, dan bisnis lokal. Desain modern, cepat, dan terbukti
              tingkatkan konversi. Konsultasi gratis tanpa ribet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="#contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition transform hover:-translate-y-1"
              >
                Konsultasi Gratis →
              </a>
              <a
                href="#projects"
                className="bg-white text-black border border-white px-6 py-3 rounded-md font-semibold transition"
              >
                Lihat Portfolio
              </a>
            </div>
            <div className="flex gap-6 justify-center mt-10 text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-sm">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-sm">Kepuasan Klien</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm">Dukungan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
