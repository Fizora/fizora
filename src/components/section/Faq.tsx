"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import TargetCursor from "../TargetCursor";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Proses pembuatan website tergantung paket yang dipilih. Basic Landing Page selesai dalam 2-3 hari, Standard dalam 3-5 hari, dan Premium bisa lebih lama tergantung kompleksitas. Kami prioritaskan kualitas dan kepuasan klien.",
  },
  {
    question: "Apakah website akan SEO friendly?",
    answer:
      "Ya, semua website yang kami buat menggunakan best practice SEO. Mulai dari struktur HTML yang clean, meta tags yang optimal, fast loading time, hingga mobile responsiveness. Paket Standard dan Premium mendapat optimasi SEO lebih mendalam.",
  },
  {
    question: "Apa yang termasuk dalam paket hosting?",
    answer:
      "Kami menyediakan setup hosting gratis untuk semua paket. Termasuk konfigurasi domain, SSL certificate, dan CDN untuk performa maksimal. Support teknis untuk hosting tersedia selama kontrak berlaku.",
  },
  {
    question: "Bagaimana jika saya mau revisi setelah project selesai?",
    answer:
      "Setiap paket sudah termasuk revisi tertentu (Basic 1x, Standard 3x, Premium 5x). Revisi di luar paket bisa ditawarkan dengan biaya tambahan yang terjangkau. Kami selalu serius dalam membuat klien puas.",
  },
  {
    question: "Bisakah website diintegrasikan dengan tools lain?",
    answer:
      "Sangat bisa! Website dapat diintegrasikan dengan WhatsApp Business, email marketing, analytics tools, payment gateway, dan berbagai platform lainnya sesuai kebutuhan bisnis Anda.",
  },
  {
    question: "Berapa lama garansi dan support websitenya?",
    answer:
      "Semua website mendapat garansi dan support teknis minimal selama 3 bulan setelah launch. Untuk paket tahunan, support bisa diperpanjang sesuai kebutuhan. Kami siap bantu jika ada masalah atau update.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-b border-dashed border-stone-800 bg-black/50"
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Pertanyaan <span className="text-purple-400">Umum</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang
              layanan website kami.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 px-4 sm:px-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: false }}
                className="border border-dashed border-stone-800 bg-black/40 backdrop-blur-sm hover:bg-purple-900/20 transition"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-700/10 transition cursor-target"
                >
                  <h3 className="text-left text-base md:text-lg font-semibold text-white font-mono">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4 text-purple-400"
                  >
                    <FaChevronDown size={20} />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === idx ? "auto" : 0,
                    opacity: expandedIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-dashed border-stone-800 text-gray-300 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-4">
              Masih ada pertanyaan lain? Hubungi kami sekarang!
            </p>
            <a
              href="#contact"
              className="cursor-target inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-semibold transition transform hover:-translate-y-1"
            >
              Hubungi Kami →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
