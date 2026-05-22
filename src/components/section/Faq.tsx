"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to build my website?",
    answer:
      "For a standard landing page or company profile (Essential or Standard plan), expect 3–7 days from start to finish. More complex sites (Premium and above) take 10–14 days. I work efficiently without cutting corners, and you'll receive updates every 48 hours.",
  },
  {
    question: "Will my website be SEO-friendly and fast?",
    answer:
      "Absolutely. Every site I build follows Next.js best practices: server-side rendering where needed, optimized images, and proper meta tags. You'll get a Lighthouse score of 90+ on desktop and mobile. Basic on‑page SEO (titles, descriptions, semantic HTML) is included in all plans.",
  },
  {
    question: "Do I need to pay for hosting through you?",
    answer:
      "No. You can buy hosting directly from Vercel, Netlify, or Hostinger (I'll guide you for free). If you'd rather I handle everything, I offer a one‑time setup fee + the actual hosting cost — no hidden markups. Hosting typically costs $5–20/month depending on traffic.",
  },
  {
    question: "What happens if I want changes after the site is live?",
    answer:
      "Each plan includes a set number of revision rounds (Essential: 1, Standard: 3, Premium: unlimited within 14 days). After that, I offer maintenance packages starting at $50/month for minor edits and updates. Or you can hire me on an hourly basis ($25/hour).",
  },
  {
    question: "How do I pay? Is it safe?",
    answer:
      "I accept payments via Wise, PayPal, or bank transfer. A 50% deposit is required to start, and the remaining 50% before final delivery. All transactions are tracked and invoiced. You're protected by our simple written agreement.",
  },
  {
    question: "Do I own the code and design?",
    answer:
      "100% yes. After final payment, you receive full ownership of the source code. There are no lock‑ins or monthly licensing fees. You're free to move hosting, hire another developer, or modify the code yourself.",
  },
  {
    question: "What if something breaks after launch?",
    answer:
      "I provide 3 months of free bug fixes and technical support for all plans. If the issue is caused by a hosting change or third‑party API update, I'll help you fix it at a minimal cost. For ongoing peace of mind, I offer extended maintenance plans.",
  },
  {
    question:
      "Can you integrate my site with other tools (e.g., email, payments)?",
    answer:
      "Yes. I can connect your website to popular services like Mailchimp, ConvertKit, Stripe, WhatsApp Business, Calendly, and Google Analytics. Let me know which tools you use, and I'll include the integration in your quote.",
  },
  {
    question: "Why should I choose you over a freelancer with more reviews?",
    answer:
      "Because I'm transparent, responsive, and hungry to prove myself. I don't have hundreds of fake testimonials — I have a clean portfolio and a straightforward process. You'll talk directly to me (no middlemen), and I'll work until you're satisfied. Plus, my prices are fair for the quality you get.",
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
              <span className="text-gray-400">Got questions?</span> I've got
              answers.
            </h2>
            <p className="text-gray-400 mt-4">
              Everything you need to know before making a decision.
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
                className="border border-dashed border-stone-800 bg-black/40 backdrop-blur-sm hover:bg-gray-800/30 transition"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/20 transition cursor-target"
                >
                  <h3 className="text-left text-base md:text-lg font-semibold text-white font-mono">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 ml-4 text-gray-400"
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
            <p className="text-gray-400 mb-4">
              Still have a question? I'm happy to hop on a 15‑min call (no
              pressure).
            </p>
            <a
              href="#contact"
              className="cursor-target inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold transition transform hover:-translate-y-1"
            >
              Ask me anything →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
