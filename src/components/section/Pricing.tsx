"use client";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import TargetCursor from "../TargetCursor";

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
    price: "400.000",
    features: [
      "1 Landing Page",
      "Mobile Friendly",
      "CTA WhatsApp",
      "Template Design",
      "1x Revisi",
      "Delivery 2-3 Hari",
      "Gratis Setup Hosting",
    ],
    recommended: false,
    cta: "Mulai Sekarang",
  },
  {
    name: "Standard",
    price: "1.500.000",
    features: [
      "1 Landing Page Custom",
      "SEO Basic",
      "AI Copywriting",
      "Fast Loading (Next.js)",
      "3x Revisi",
      "Delivery 3-5 Hari",
      "Gratis Setup Hosting",
    ],
    recommended: true,
    cta: "Pilih Paket Ini",
  },
  {
    name: "Premium",
    price: "3.000.000",
    features: [
      "Landing Page High Conversion",
      "Advanced Copywriting",
      "Struktur Funnel (CTA, Hero, dll)",
      "Speed Optimization",
      "5x Revisi",
      "Prioritas Pengerjaan",
      "Gratis Setup Hosting",
    ],
    recommended: false,
    cta: "Maksimalkan Bisnis",
  },
];

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Inject custom scrollbar style untuk dark theme
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .dark-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .dark-scrollbar::-webkit-scrollbar-track {
        background: #1c1917; /* stone-800 */
        border-radius: 10px;
      }
      .dark-scrollbar::-webkit-scrollbar-thumb {
        background: #7c3aed; /* purple-600 */
        border-radius: 10px;
      }
      .dark-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #6d28d9; /* purple-700 */
      }
      .dark-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #7c3aed #1c1917;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const handleProceed = () => {
    setShowModal(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="pricing" className="border-y border-dashed border-stone-800">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <div className="mx-4">
          <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Paket Website yang{" "}
                <span className="text-purple-400">Menghasilkan Customer</span>
              </h2>
              <p className="text-gray-300 mt-2 font-mono">
                Bukan sekadar website, tapi alat untuk membantu bisnis Anda
                berkembang.
              </p>
            </motion.div>

            {/* PRICING CARD */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative p-6 text-center rounded-xl border transition duration-300 hover:scale-105 ${
                    plan.recommended
                      ? "border-purple-500 bg-gray-900"
                      : "border-stone-800 bg-gray-900/40"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Paling Laris
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

                  <p className="text-3xl font-bold text-purple-400 mt-4">
                    Rp{plan.price}
                  </p>
                  <p className="text-sm text-gray-400">(Sekali bayar)</p>

                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FaCheck className="text-green-400 text-sm" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanClick(plan)}
                    className="cursor-target cursor-pointer mt-8 inline-block w-full py-2 rounded-md font-semibold transition bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* INFO TAMBAHAN */}
            <div className="mt-12 text-center text-gray-400 text-sm space-y-2">
              <p>
                Website langsung online & siap digunakan oleh customer Anda.
              </p>
              <p>
                Hosting mulai dari Rp50rb/bulan (opsional, kami bantu setup).
              </p>
              <p className="text-gray-500">
                Gratis konsultasi sebelum order • Bisa lihat demo sebelum bayar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL POPUP dengan dark scrollbar */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-black border-2 border-dashed border-stone-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto dark-scrollbar shadow-2xl"
          >
            {/* Header Modal - sticky */}
            <div className="sticky top-0 bg-black border-b border-dashed border-stone-800 px-6 py-4 flex justify-between items-center z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                {selectedPlan.name} —{" "}
                <span className="text-purple-400">Rp {selectedPlan.price}</span>
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition p-1"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Body Modal */}
            <div className="px-6 py-6 space-y-6 text-gray-300">
              {/* Mekanisme Jasa Sekali Bayar */}
              <div className="border border-dashed border-stone-800 rounded-lg p-4 bg-gray-900/30">
                <h4 className="text-lg font-bold text-purple-400 flex items-center gap-2">
                  💰 Jasa Pembuatan Website (Sekali Bayar)
                </h4>
                <div className="mt-3 space-y-2 text-sm leading-relaxed">
                  <p>
                    Harga{" "}
                    <strong className="text-white">
                      Rp {selectedPlan.price}
                    </strong>{" "}
                    adalah biaya
                    <strong className="text-white"> satu kali</strong> untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Pembuatan website sesuai paket pilihan
                      (Basic/Standard/Premium)
                    </li>
                    <li>Desain modern & responsif (mobile friendly)</li>
                    <li>Integrasi fitur (CTA, WhatsApp, form kontak, dll)</li>
                    <li>
                      Setup hosting gratis (jika menggunakan rekomendasi kami)
                    </li>
                    <li>
                      1x revisi untuk paket Basic, 3x untuk Standard, 5x untuk
                      Premium
                    </li>
                    <li>Garansi pengerjaan sesuai deadline (2-5 hari kerja)</li>
                  </ul>
                  <p className="mt-2 text-gray-400">
                    ✅{" "}
                    <span className="font-semibold">
                      Tidak ada biaya tersembunyi
                    </span>
                    . Setelah lunas, website 100% menjadi milik Anda.
                  </p>
                </div>
              </div>

              {/* Biaya Hosting Bulanan */}
              <div className="border border-dashed border-stone-800 rounded-lg p-4 bg-gray-900/30">
                <h4 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
                  🌐 Biaya Hosting (Bulanan / Tahunan)
                </h4>
                <div className="mt-3 space-y-2 text-sm leading-relaxed">
                  <p>
                    Agar website bisa{" "}
                    <strong className="text-white">online 24 jam</strong> dan
                    diakses pelanggan, diperlukan
                    <strong className="text-white"> layanan hosting</strong>.
                    Biaya hosting{" "}
                    <span className="font-bold">tidak termasuk</span> dalam
                    paket jasa.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Hosting mulai dari{" "}
                      <strong className="text-white">Rp50.000/bulan</strong>{" "}
                      (atau Rp500.000/tahun)
                    </li>
                    <li>
                      Kami bantu{" "}
                      <strong className="text-white">
                        setup & konfigurasi
                      </strong>{" "}
                      hosting secara gratis
                    </li>
                    <li>
                      Anda bisa pilih penyedia hosting sendiri, atau menggunakan
                      rekomendasi kami (Niagahoster, Domainesia, dll)
                    </li>
                    <li>
                      Pembayaran hosting langsung ke penyedia hosting (bukan ke
                      kami)
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-400">
                    ⚠️ <span className="font-semibold">Penting:</span> Jika
                    hosting tidak diperpanjang, website akan mati (tidak bisa
                    diakses). Kami tidak bertanggung jawab atas kelalaian
                    perpanjangan hosting.
                  </p>
                </div>
              </div>

              {/* Opsional: Maintenance & Domain */}
              <div className="border border-dashed border-stone-800 rounded-lg p-4 bg-gray-900/30">
                <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                  🔧 Layanan Tambahan (Opsional)
                </h4>
                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    Anda juga bisa menambahkan layanan berikut (biaya terpisah):
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <strong className="text-white">Domain .com/.id</strong> :
                      Rp150.000 - Rp200.000/tahun
                    </li>
                    <li>
                      <strong className="text-white">
                        Maintenance bulanan
                      </strong>{" "}
                      : Rp100.000/bulan (backup, update konten, monitoring
                      keamanan)
                    </li>
                    <li>
                      <strong className="text-white">
                        Pembuatan konten tambahan
                      </strong>{" "}
                      : Rp50.000/halaman
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skema Pembayaran */}
              <div className="border border-dashed border-stone-800 rounded-lg p-4 bg-gray-900/30">
                <h4 className="text-lg font-bold text-green-400 flex items-center gap-2">
                  💳 Proses Order & Pembayaran
                </h4>
                <div className="mt-3 text-sm space-y-1">
                  <p>1. Konsultasi gratis via WhatsApp / form kontak</p>
                  <p>
                    2. Kami kirimkan proposal + demo desain (jika diperlukan)
                  </p>
                  <p>3. DP 50% untuk memulai pengerjaan</p>
                  <p>4. Website selesai, Anda review & revisi (jika ada)</p>
                  <p>5. Pelunasan 50% sebelum website online</p>
                  <p>6. Kami bantu setup hosting & domain, website live!</p>
                  <p className="text-gray-400 mt-2">
                    ✅ Garansi uang kembali 100% jika website tidak sesuai
                    kesepakatan.
                  </p>
                </div>
              </div>

              {/* Call to action dalam modal */}
              <div className="text-center pt-2">
                <p className="text-gray-400 text-xs italic">
                  Dengan memahami mekanisme ini, Anda tidak akan mendapatkan
                  tagihan tak terduga.
                </p>
              </div>
            </div>

            {/* Footer Modal - sticky */}
            <div className="sticky bottom-0 bg-black border-t border-dashed border-stone-800 px-6 py-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCloseModal}
                className="cursor-target cursor-pointer flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md transition border border-dashed border-stone-600"
              >
                Tutup
              </button>
              <button
                onClick={handleProceed}
                className="cursor-target cursor-pointer flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition font-bold font-mono"
              >
                Lanjut ke Konsultasi →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Pricing;
