"use client";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaClock,
  FaMobileAlt,
  FaWhatsapp,
  FaPalette,
  FaPencilAlt,
  FaTruck,
  FaSearch,
  FaLightbulb,
  FaBolt,
  FaEnvelope,
  FaChartBar,
  FaEnvelopeOpenText,
  FaStar,
  FaBook,
  FaHeadset,
  FaChartLine,
  FaDatabase,
  FaUsers,
  FaLink,
  FaWrench,
  FaShoppingCart,
} from "react-icons/fa";

interface Plan {
  name: string;
  description: string;
  servicePrice: number;
  hostingMonthly: number;
  features: string[];
  recommended: boolean;
  cta: string;
}

interface Category {
  name: string;
  plans: Plan[];
}

const categories: Category[] = [
  {
    name: "Paket UMKM",
    plans: [
      {
        name: "Basic",
        description: "Untuk just started & toko online sederhana",
        servicePrice: 400000,
        hostingMonthly: 12900,
        features: [
          "1 Landing Page",
          "Online 1 tahun",
          "Mobile Friendly",
          "CTA WhatsApp",
          "Template Design",
          "1x Revisi",
          "Delivery 2-3 Hari",
          "Basic SEO",
        ],
        recommended: false,
        cta: "Mulai Sekarang",
      },
      {
        name: "Standard",
        description: "Untuk UMKM yang ingin online dengan design bagus",
        servicePrice: 1200000,
        hostingMonthly: 24900,
        features: [
          "1 Landing Page Custom",
          "Online 1 tahun",
          "SEO Basic",
          "AI Copywriting",
          "Fast Loading (Next.js)",
          "3x Revisi",
          "Delivery 3-5 Hari",
          "Form Contact",
          "WhatsApp Integration",
          "Mobile First Design",
        ],
        recommended: true,
        cta: "Pilih Paket Ini",
      },
      {
        name: "Premium",
        description: "Untuk UMKM yang serius dengan conversion tinggi",
        servicePrice: 2400000,
        hostingMonthly: 38900,
        features: [
          "Landing Page High Conversion",
          "Online 1 tahun",
          "Advanced Copywriting",
          "Struktur Funnel Lengkap",
          "Speed Optimization",
          "5x Revisi",
          "Prioritas Pengerjaan",
          "Analytics Integration",
          "Email Automation Setup",
          "Custom Features",
        ],
        recommended: false,
        cta: "Maksimalkan Bisnis",
      },
    ],
  },
  {
    name: "Paket Bisnis",
    plans: [
      {
        name: "Professional",
        description: "Website full untuk bisnis profesional",
        servicePrice: 4000000,
        hostingMonthly: 116900,
        features: [
          "5-10 Halaman Website",
          "Online 1 tahun",
          "Custom Design Sepenuhnya",
          "Advanced SEO",
          "Blog/Content Management",
          "10x Revisi",
          "Priority Support 3 bulan",
          "E-commerce Basics",
          "Team Collaboration",
          "Performance Monitoring",
        ],
        recommended: false,
        cta: "Lebih Powerful",
      },
      {
        name: "Enterprise",
        description:
          "Website kompleks dengan fitur advanced untuk bisnis besar",
        servicePrice: 8000000,
        hostingMonthly: 116900,
        features: [
          "10-20 Halaman Website",
          "Online 1 tahun",
          "Full Custom Development",
          "Advanced SEO + Schema",
          "Blog + CMS System",
          "20x Revisi",
          "Priority Support 6 bulan",
          "Full E-commerce",
          "User Management System",
          "Advanced Analytics",
        ],
        recommended: true,
        cta: "Pilih Sekarang",
      },
      {
        name: "Ultimate",
        description: "Solusi website terlengkap dengan full support",
        servicePrice: 12000000,
        hostingMonthly: 116900,
        features: [
          "20+ Halaman Website",
          "Online 1 tahun",
          "Complete Custom Solution",
          "Enterprise SEO",
          "Advanced CMS System",
          "Unlimited Revisions",
          "Dedicated Support 12 bulan",
          "Full E-commerce + Payment",
          "API Integrations",
          "Real-time Maintenance",
        ],
        recommended: false,
        cta: "Solusi Terbaik",
      },
    ],
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

const getFeatureIcon = (feature: string) => {
  const lowerFeature = feature.toLowerCase();

  if (lowerFeature.includes("tahun") || lowerFeature.includes("online"))
    return <FaClock className="text-gray-400" />;
  if (lowerFeature.includes("mobile"))
    return <FaMobileAlt className="text-gray-400" />;
  if (lowerFeature.includes("whatsapp"))
    return <FaWhatsapp className="text-gray-400" />;
  if (lowerFeature.includes("design") || lowerFeature.includes("template"))
    return <FaPalette className="text-gray-400" />;
  if (lowerFeature.includes("revisi") || lowerFeature.includes("pengerjaan"))
    return <FaPencilAlt className="text-gray-400" />;
  if (lowerFeature.includes("delivery"))
    return <FaTruck className="text-gray-400" />;
  if (lowerFeature.includes("seo"))
    return <FaSearch className="text-gray-400" />;
  if (lowerFeature.includes("copywriting"))
    return <FaLightbulb className="text-gray-400" />;
  if (lowerFeature.includes("loading") || lowerFeature.includes("speed"))
    return <FaBolt className="text-gray-400" />;
  if (lowerFeature.includes("form") || lowerFeature.includes("contact"))
    return <FaEnvelope className="text-gray-400" />;
  if (lowerFeature.includes("integration"))
    return <FaLink className="text-gray-400" />;
  if (lowerFeature.includes("analytics"))
    return <FaChartBar className="text-gray-400" />;
  if (lowerFeature.includes("email") || lowerFeature.includes("automation"))
    return <FaEnvelopeOpenText className="text-gray-400" />;
  if (lowerFeature.includes("custom"))
    return <FaStar className="text-gray-400" />;
  if (lowerFeature.includes("blog") || lowerFeature.includes("cms"))
    return <FaBook className="text-gray-400" />;
  if (lowerFeature.includes("support"))
    return <FaHeadset className="text-gray-400" />;
  if (lowerFeature.includes("monitoring"))
    return <FaChartLine className="text-gray-400" />;
  if (lowerFeature.includes("management") || lowerFeature.includes("user"))
    return <FaUsers className="text-gray-400" />;
  if (lowerFeature.includes("e-commerce") || lowerFeature.includes("cart"))
    return <FaShoppingCart className="text-gray-400" />;
  if (lowerFeature.includes("maintenance") || lowerFeature.includes("api"))
    return <FaWrench className="text-gray-400" />;
  if (lowerFeature.includes("database"))
    return <FaDatabase className="text-gray-400" />;
  return <FaCheck className="text-green-400" />;
};

const Pricing = () => {
  const calculateTotals = (plan: Plan) => {
    const hostingAnnual = plan.hostingMonthly * 12;
    const total = plan.servicePrice + hostingAnnual;
    const servicePercentage = ((plan.servicePrice / total) * 100).toFixed(1);
    return { hostingAnnual, total, servicePercentage };
  };

  return (
    <section id="pricing" className="border-y border-dashed border-stone-800">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Paket Website yang{" "}
              <span className="text-gray-400">Menghasilkan Customer</span>
            </h2>
            <p className="text-gray-400 mt-2 font-mono">
              Harga sudah include jasa + hosting Hostinger. Transparan, tidak
              ada biaya tersembunyi.
            </p>
          </motion.div>

          {categories.map((category, catIdx) => (
            <div key={catIdx} className="mt-20">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white inline-block px-6 py-2 bg-gray-700 rounded-md font-mono">
                  {category.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.plans.map((plan, idx) => {
                  const { hostingAnnual, total, servicePercentage } =
                    calculateTotals(plan);
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`relative p-6 rounded-lg border-2 transition duration-300 hover:scale-105 flex flex-col ${
                        plan.recommended
                          ? "border-gray-500 bg-gray-900 shadow-xl shadow-gray-500/20"
                          : "border-stone-800 bg-gray-900/40"
                      }`}
                    >
                      {plan.recommended && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                          TERPOPULER
                        </span>
                      )}

                      <h4 className="text-2xl font-bold text-white font-mono">
                        {plan.name}
                      </h4>
                      <p className="text-gray-400 text-sm mt-2 min-h-10">
                        {plan.description}
                      </p>

                      <div className="mt-6 space-y-3 pb-6 border-b border-dashed border-stone-700">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-gray-300">
                            Rp{formatCurrency(plan.servicePrice)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Harga Jasa (Sekali Bayar)
                          </p>
                        </div>

                        <div className="bg-black/50 rounded p-3 text-sm">
                          <p className="text-gray-400">
                            <span className="font-semibold text-white">
                              Hosting:
                            </span>{" "}
                            Rp{formatCurrency(plan.hostingMonthly)}/bulan
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            = Rp{formatCurrency(hostingAnnual)}/tahun
                          </p>
                        </div>

                        <div className="bg-gray-800/20 rounded p-3 text-sm">
                          <p className="text-gray-400 flex justify-between">
                            <span>Total/Tahun:</span>
                            <span className="font-bold text-white">
                              Rp{formatCurrency(total)}
                            </span>
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            Jasa: {servicePercentage}% • Hosting:{" "}
                            {(100 - parseFloat(servicePercentage)).toFixed(1)}%
                          </p>
                        </div>
                      </div>

                      <ul className="mt-6 space-y-2 mb-6 flex-1">
                        {plan.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                          >
                            {getFeatureIcon(feat)}
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        className="cursor-target block w-full py-2.5 rounded-md font-semibold transition text-white uppercase text-sm tracking-wide bg-gray-700 hover:bg-gray-600 text-center"
                      >
                        {plan.cta}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-16 md:text-center text-gray-500 text-sm space-y-2">
            <ul>
              <li>
                ✅ Harga jasa sudah termasuk setup hosting gratis via Hostinger
              </li>
              <li>
                ✅ Biaya hosting berlanjut per bulan (langsung ke Hostinger)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
