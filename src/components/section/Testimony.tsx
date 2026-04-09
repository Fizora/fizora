"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmad R.",
    role: "CEO Startup Edukasi",
    text: "Website kami jadi lebih cepat dan konversi naik 40% setelah menggunakan Fizora. Sangat profesional!",
    rating: 5,
    img: "/avatar1.jpg",
  },
  {
    name: "Siti N.",
    role: "Owner Brand Fashion",
    text: "Desainnya modern dan sesuai identitas brand. Pelayanan ramah dan cepat.",
    rating: 5,
    img: "/avatar2.jpg",
  },
  {
    name: "Budi S.",
    role: "Digital Marketer",
    text: "Pilihan tepat untuk landing page produk. Dukungan teknis responsif.",
    rating: 4,
    img: "/avatar3.jpg",
  },
];

const Testimony = () => {
  return (
    <section id="testimony" className="border-y border-dashed border-stone-800">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Apa Kata <span className="text-purple-400">Klien</span>?
            </h2>
            <p className="text-gray-300 mt-2 font-mono">
              Lebih dari 50+ bisnis percaya pada kami.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="bg-gray-900/30 p-6 rounded-xl border border-stone-800 hover:border-purple-500 transition"
              >
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < t.rating ? "text-yellow-400" : "text-gray-600"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
