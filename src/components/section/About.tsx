"use client";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import { JSX } from "react/jsx-dev-runtime";
import Skathes from "../Skathes";

interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const About = () => {
  const services: Service[] = [
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

  return (
    <section
      id="about"
      className="border-b border-dashed border-stone-800 bg-black/50"
    >
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Tentang <span className="text-purple-400">Fizora</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Saya adalah web developer profesional dengan pengalaman 5+ tahun
              membantu brand meningkatkan penjualan melalui website berkualitas.
            </p>
          </motion.div>

          <div className="bg-black bg-[repeating-linear-gradient(45deg,_#2a2a2a_0,_#2a2a2a_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] relative w-full py-4 px-5 grid md:grid-cols-3 gap-4 mt-16 border-y border-dashed border-stone-800">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="border border-dashed border-stone-800 p-10 text-center hover:bg-purple-500 transition group bg-black/40 backdrop-blur-sm"
              >
                <div className="text-4xl group-hover:text-black text-purple-400 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-black font-mono">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-black mt-2">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-semibold transition transform hover:-translate-y-1"
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
