"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "300rb",
    features: [
      "1 Landing Page",
      "Responsive (Mobile Friendly)",
      "CTA WhatsApp",
      "Template Design",
      "1x Revisi",
      "Delivery 2-3 Hari",
    ],
    recommended: false,
    cta: "Mulai Sekarang",
  },
  {
    name: "Standard",
    price: "1jt",
    features: [
      "1 Landing Page Custom",
      "SEO Basic",
      "AI Copywriting",
      "Fast Loading (Next.js)",
      "3x Revisi",
      "Delivery 3-5 Hari",
    ],
    recommended: true,
    cta: "Paling Banyak Dipilih",
  },
  {
    name: "Premium",
    price: "2.5jt",
    features: [
      "Landing Page High Conversion",
      "Advanced Copywriting",
      "Struktur Funnel (CTA, Hero, dll)",
      "Speed Optimization",
      "5x Revisi",
      "Prioritas Pengerjaan",
    ],
    recommended: false,
    cta: "Maksimalkan Conversion",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="border-y border-dashed border-stone-800 ">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20  px-4 sm:px-6 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Harga <span className="text-purple-400">Terjangkau</span>
            </h2>
            <p className="text-gray-300 mt-2 font-mono">
              Pilih paket sesuai kebutuhan Anda. Garansi uang kembali 100% jika
              tidak puas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="relative bg-linear-to-br from-gray-950 to-bg-gray-950/30 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 border border-stone-800"
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    Rekomendasi
                  </span>
                )}
                <h3 className="text-2xl font-black text-white font-mono">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-purple-400 mt-4">
                  Rp {plan.price}
                </p>
                <ul className="mt-6 space-y-3 text-left">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <FaCheck className="text-green-400 text-sm" /> {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-block w-full py-2 rounded-md font-semibold transition bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            *Harga belum termasuk PPN. Konsultasi gratis sebelum order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
