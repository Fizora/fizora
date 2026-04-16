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
    role: "Owner Cafe",
    text: "Website saya jadi terlihat lebih profesional dan mulai dapat customer dari Google.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Siti N.",
    role: "Owner Fashion",
    text: "Landing page-nya cepat dan desainnya menarik, customer jadi lebih percaya.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Budi S.",
    role: "Digital Marketer",
    text: "Conversion meningkat setelah pakai landing page ini. Recommended!",
    rating: 4,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
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
                className="cursor-target bg-gray-900/30 p-6 rounded-xl border border-stone-800 hover:border-purple-500 transition"
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
                      unoptimized // karena dari external URL, hindari optimasi Next.js yang mungkin gagal
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
