"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface Plan {
  name: string;
  description: string;
  priceUsd: number;
  features: string[];
  recommended: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses that need a fast and professional online presence.",
    priceUsd: 500,
    features: [
      "Custom landing page tailored to your business",
      "Professional and modern design",
      "Mobile-friendly on all devices",
      "Fast-loading website experience",
      "Contact & inquiry form",
      "Google Maps integration",
      "SEO-ready foundation",
      "SSL security setup",
      "1 revision round",
    ],
    recommended: false,
    cta: "Start Starter",
  },
  {
    name: "Business",
    description:
      "Professional website designed to build trust and convert visitors into customers.",
    priceUsd: 1200,
    features: [
      "Up to 5 custom pages",
      "Brand-focused custom design",
      "Conversion-focused page structure",
      "Professional copy guidance",
      "Testimonials & trust sections",
      "Contact / booking forms",
      "Advanced SEO setup",
      "Performance optimization",
      "2 revision rounds",
    ],
    recommended: true,
    cta: "Choose Business",
  },
  {
    name: "Premium",
    description:
      "Advanced custom website for businesses serious about online growth.",
    priceUsd: 2500,
    features: [
      "Up to 10 custom pages",
      "Premium custom design system",
      "Advanced conversion-focused layouts",
      "In-depth content research",
      "Enhanced SEO foundation",
      "Performance optimization (90+ Lighthouse target)",
      "Custom interactions & animations",
      "Priority support (30 days)",
      "3 revision rounds",
    ],
    recommended: false,
    cta: "Go Premium",
  },
];

// Only the "For Small Business" category is active.
// The "For Growing Brands" section is commented out for now (per client request).
const categories = [
  {
    name: "For Small Business",
    plans: plans,
  },
  // {
  //   name: "For Growing Brands",
  //   plans: [
  //     {
  //       name: "Professional",
  //       description: "Full-featured website for established businesses.",
  //       priceUsd: 2000,
  //       features: [ ... ],
  //       recommended: false,
  //       cta: "Get Professional",
  //     },
  //     ...
  //   ],
  // },
];

const formatUSD = (value: number) => {
  return new Intl.NumberFormat("en-US").format(value);
};

const getFeatureIcon = () => {
  return <FaCheck className="text-gray-400 text-xs shrink-0" />;
};

const Pricing = () => {
  return (
    <section id="pricing" className="border-y border-dashed border-stone-800">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              High-Performance{" "}
              <span className="text-gray-400">
                Websites for Small Businesses
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              No fluff. No hidden fees. Just a high‑performing website that
              works 24/7.
            </p>
            <div className="mt-6 text-sm text-gray-500 border border-dashed border-stone-700 inline-block px-4 py-2 rounded-full">
              💡 One extra customer per week ={" "}
              <strong className="text-white">$2,600+ yearly ROI</strong>
            </div>
          </motion.div>

          {/* Pricing Cards - development fee only (no hosting included) */}
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="mt-20">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white inline-block px-6 py-2 bg-gray-700 rounded-md font-mono">
                  {category.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.plans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative p-6 rounded-lg border border-dashed transition duration-300 hover:scale-105 flex flex-col ${
                      plan.recommended
                        ? "border-gray-500 bg-gray-900 shadow-xl shadow-gray-900/70"
                        : "border-stone-800 bg-gray-900/40"
                    }`}
                  >
                    {plan.recommended && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm bg-gray-700 font-bold"
                        style={{ zIndex: 20 }}
                      >
                        BEST VALUE
                      </span>
                    )}

                    <h4 className="text-2xl font-bold text-white font-mono">
                      {plan.name}
                    </h4>
                    <p className="text-gray-400 text-sm mt-2 min-h-10">
                      {plan.description}
                    </p>

                    <div className="mt-6 pb-6 border-b border-dashed border-stone-700">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-white">
                          ${formatUSD(plan.priceUsd)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          one-time development fee
                        </p>
                      </div>
                      <div className="bg-black/50 rounded p-3 text-sm mt-5 text-center">
                        <p className="text-gray-300">
                          ✅ Full code ownership • No recurring dev fees
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-2 mb-6 flex-1">
                      {plan.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                          {getFeatureIcon()}
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="block w-full py-2.5 rounded-md font-semibold transition text-white uppercase text-sm tracking-wide bg-gray-700 hover:bg-gray-600 text-center"
                    >
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16 text-gray-500 text-sm space-y-2 border-t border-dashed border-stone-800 pt-8">
            <span className="flex items-center justify-center gap-2">
              <FaCheck /> You own the code. Full rights, no lock‑ins.
            </span>
            <span className="flex items-center justify-center gap-2">
              <FaCheck /> Free guidance to set up hosting on Vercel / Netlify
              (or your preferred provider).
            </span>
            <p>
              Hosting costs are separate and billed by your chosen provider. I
              can assist with setup, but the hosting fee is paid directly to
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
