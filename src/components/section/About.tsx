"use client";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import type { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Struktur kode rapi, mudah dikelola, dan SEO friendly.",
  },
  {
    icon: <FaPalette />,
    title: "Desain Modern",
    desc: "UI/UX menarik dengan animasi halus & responsif.",
  },
  {
    icon: <FaRocket />,
    title: "Optimasi Kecepatan",
    desc: "Load time cepat, skor Lighthouse 90+.",
  },
];

const PATTERN_STYLE = {
  backgroundColor: "black",
  backgroundImage:
    "repeating-linear-gradient(45deg, #2a2a2a 0, #2a2a2a 1px, transparent 0, transparent 50%)",
  backgroundSize: "5px 5px",
} as const;

const About = () => {
  return (
    <section
      id="about"
      className="border-y border-dashed border-stone-800 bg-black/50"
    >
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 border border-dashed border-stone-800">
          {/* top content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="md:text-center mx-auto border-y border-dashed border-stone-800 py-20 p-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Tentang <span className="text-purple-400">Fizora</span>
            </h2>
            <p className="text-gray-300 mt-4 mx-auto max-w-2xl">
              Saya adalah web developer profesional dengan pengalaman 3+ tahun
              membantu brand meningkatkan penjualan melalui website berkualitas.
            </p>
          </motion.div>

          {/* bottom content - menggunakan style inline untuk background pattern */}
          <div
            className="relative w-full py-4 px-5 grid md:grid-cols-3 gap-4 mt-16 border-y border-dashed border-stone-800"
            style={PATTERN_STYLE}
          >
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="cursor-target border border-dashed border-stone-800 p-10 text-center hover:bg-purple-700 transition group bg-black/40 backdrop-blur-sm"
              >
                <div className="text-4xl group-hover:text-white text-purple-400 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white font-mono">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white mt-2">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="cursor-target inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-semibold transition transform hover:-translate-y-1"
            >
              Konsultasi Gratis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
