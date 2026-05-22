"use client";

import { motion } from "framer-motion";
import { FaCheck, FaServer, FaQuestionCircle } from "react-icons/fa";

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
    name: "Essential",
    description:
      "Perfect for cafes, local shops, and service providers starting online.",
    priceUsd: 300,
    features: [
      "1 custom landing page",
      "Mobile-first, lightning fast (Next.js)",
      "Lead capture form",
      "Google Maps integration",
      "Basic on-page SEO",
      "1 round of revisions",
      "3-day delivery",
    ],
    recommended: false,
    cta: "Start Essential",
  },
  {
    name: "Standard",
    description: "Multi-page website that builds trust and drives conversions.",
    priceUsd: 600,
    features: [
      "Up to 5 pages (Home, About, Services, Contact)",
      "Custom design tailored to your brand",
      "Booking / appointment form",
      "Customer testimonial section",
      "Advanced SEO (meta, alt, schema)",
      "Google Analytics setup",
      "3 rounds of revisions",
      "5-7 day delivery",
    ],
    recommended: true,
    cta: "Choose Standard",
  },
  {
    name: "Premium",
    description: "Conversion-focused website for serious growth.",
    priceUsd: 1200,
    features: [
      "Up to 10 pages + blog system",
      "Product / service catalog with filters",
      "Email marketing integration (Mailchimp / ConvertKit)",
      "Custom animations & micro-interactions",
      "Speed optimization (90+ Lighthouse score)",
      "Unlimited revisions (14 days)",
      "Priority support for 3 months",
      "10-day delivery",
    ],
    recommended: false,
    cta: "Go Premium",
  },
];

const categories = [
  {
    name: "For Small Business",
    plans: plans,
  },
  {
    name: "For Growing Brands",
    plans: [
      {
        name: "Professional",
        description: "Full-featured website for established businesses.",
        priceUsd: 2000,
        features: [
          "Up to 15 pages",
          "Fully custom design",
          "E-commerce basics (up to 50 products)",
          "User management (staff roles)",
          "Advanced SEO + schema markup",
          "Blog with CMS",
          "10 rounds of revisions",
          "Priority support for 6 months",
          "14-day delivery",
        ],
        recommended: false,
        cta: "Get Professional",
      },
      {
        name: "Enterprise",
        description: "Complex solutions for scaling brands and high traffic.",
        priceUsd: 3500,
        features: [
          "Up to 25 pages",
          "Full custom development",
          "Complete e-commerce (payments, inventory)",
          "API integrations (CRM, email, analytics)",
          "Enterprise SEO strategy",
          "Advanced CMS (Sanity / Contentful)",
          "Unlimited revisions",
          "Dedicated support for 12 months",
          "21-day delivery",
        ],
        recommended: true,
        cta: "Scale with Enterprise",
      },
      {
        name: "Ultimate",
        description: "White-glove solution for brands that need everything.",
        priceUsd: 5000,
        features: [
          "Unlimited pages",
          "Complete custom solution",
          "Full e-commerce + subscriptions",
          "Custom dashboard / user portal",
          "Automation workflows (Zapier / Make)",
          "Real-time analytics dashboard",
          "Unlimited revisions",
          "Dedicated account manager",
          "30-day delivery",
        ],
        recommended: false,
        cta: "Go Ultimate",
      },
    ],
  },
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
              Websites That{" "}
              <span className="text-gray-400">Bring You Customers</span>
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

          {/* Pricing Cards - Hanya harga jasa, tanpa hosting */}
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
                        ? "border-gray-500 bg-gray-900 shadow-xl shadow-white/30"
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

          {/* Bagian Hosting - Referensi harga dari Hostinger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 border-t border-dashed border-stone-800 pt-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full mb-6">
                <FaServer className="text-gray-400" />
                <span className="text-gray-300 text-sm font-mono">
                  HOSTING REFERENCE PRICING (HOSTINGER)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Choose your hosting plan separately
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                You can buy hosting directly from providers. Here's an example
                of real market prices (Hostinger, 48‑month term):
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
                {/* Paket Premium (Hostinger) */}
                <div className="bg-gray-900/40 border border-stone-800 rounded-lg p-5">
                  <h4 className="text-xl font-bold text-white">Premium</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    For small websites
                  </p>
                  <div className="mt-3">
                    <span className="text-gray-500 line-through text-sm">
                      $11.99
                    </span>
                    <div className="text-3xl font-bold text-white">$2.99</div>
                    <p className="text-gray-400 text-xs">
                      per month +3 mo free
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      48 months total: $143.52 (regular $575.52)
                    </p>
                    <p className="text-gray-500 text-xs">Renews at $10.99/mo</p>
                  </div>
                  <ul className="mt-4 space-y-1 text-gray-400 text-xs">
                    <li>✓ Up to 3 websites</li>
                    <li>✓ 20 GB SSD storage</li>
                    <li>✓ Free domain 1 year</li>
                    <li>✓ Free SSL & backups</li>
                  </ul>
                </div>

                {/* Paket Business */}
                <div className="bg-gray-900/40 border border-stone-800 rounded-lg p-5 relative">
                  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white text-xs px-2 py-0.5 rounded-full">
                    POPULAR
                  </span>
                  <h4 className="text-xl font-bold text-white">Business</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    For growing businesses
                  </p>
                  <div className="mt-3">
                    <span className="text-gray-500 line-through text-sm">
                      $18.99
                    </span>
                    <div className="text-3xl font-bold text-white">$3.99</div>
                    <p className="text-gray-400 text-xs">
                      per month +3 mo free
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      48 months total: $191.52 (regular $911.52)
                    </p>
                    <p className="text-gray-500 text-xs">Renews at $16.99/mo</p>
                  </div>
                  <ul className="mt-4 space-y-1 text-gray-400 text-xs">
                    <li>✓ Up to 50 websites</li>
                    <li>✓ 50 GB NVMe storage</li>
                    <li>✓ 5 mailboxes per site</li>
                    <li>✓ Managed Node.js apps</li>
                  </ul>
                </div>

                {/* Paket Cloud Startup */}
                <div className="bg-gray-900/40 border border-stone-800 rounded-lg p-5">
                  <h4 className="text-xl font-bold text-white">
                    Cloud Startup
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">
                    High‑traffic & e‑commerce
                  </p>
                  <div className="mt-3">
                    <span className="text-gray-500 line-through text-sm">
                      $27.99
                    </span>
                    <div className="text-3xl font-bold text-white">$7.99</div>
                    <p className="text-gray-400 text-xs">
                      per month +3 mo free
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      48 months total: $383.52 (regular $1,343.52)
                    </p>
                    <p className="text-gray-500 text-xs">Renews at $25.99/mo</p>
                  </div>
                  <ul className="mt-4 space-y-1 text-gray-400 text-xs">
                    <li>✓ Up to 100 websites</li>
                    <li>✓ 100 GB NVMe storage</li>
                    <li>✓ Dedicated IP & priority support</li>
                    <li>✓ 4 GB RAM, 100 PHP workers</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs">
                  * Prices are for illustration based on Hostinger 48‑month
                  promo (Nov 2024). You can buy directly or ask me to handle
                  setup.
                </p>
              </div>

              {/* Opsi bantuan setup tetap ada */}
              <div className="mt-8 bg-gray-800/20 rounded-lg p-4 border border-dashed border-stone-700">
                <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
                  <FaQuestionCircle className="text-gray-500" />
                  Need help choosing or setting up hosting?
                  <a
                    href="#contact"
                    className="text-white underline font-semibold hover:text-gray-300"
                  >
                    Let's talk →
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-16 text-gray-500 text-sm space-y-2 border-t border-dashed border-stone-800 pt-8">
            <span className="flex items-center justify-center gap-2">
              <FaCheck></FaCheck> You own the code. Full rights, no lock‑ins.
            </span>
            <span className="flex items-center justify-center gap-2">
              <FaCheck></FaCheck> Free guidance to set up hosting on Vercel /
              Netlify (or your preferred provider).
            </span>
            <p>
              " Hosting costs are separate and billed by your chosen provider. I
              can assist with setup, but the hosting fee is paid directly to
              them. "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
