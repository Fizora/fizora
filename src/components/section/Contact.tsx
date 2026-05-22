// components/section/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const waMessage = `Hi Fizora, I'm ${form.name} (${form.email}). I'd like to discuss a website project. Details: ${form.message}`;
    window.open(
      `https://wa.me/6285235086814?text=${encodeURIComponent(waMessage)}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="border-b border-dashed border-stone-800">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Let's <span className="text-gray-400">build something</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Free 30‑min consultation. No pressure, just honest advice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50 transition"
                    required
                    minLength={2}
                    aria-label="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50 transition"
                    required
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project (e.g., type of website, pages needed, deadline)"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50 transition"
                    aria-label="Project description"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-target cursor-pointer w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Send message via WhatsApp"
                >
                  Send via WhatsApp →
                </button>
                <p className="text-gray-500 text-xs text-center mt-2">
                  I'll reply within a few hours (24/7 support).
                </p>
              </form>
            </motion.div>

            {/* Right - Contact Info & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-green-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400">+62 852-3508-6814</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-gray-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">faizmoch63@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">East Java, Indonesia (Remote)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaClock className="text-blue-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">Response Time</p>
                  <p className="text-gray-400">24/7 – usually within 2 hours</p>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-stone-800">
                <p className="text-sm text-gray-300">
                  ✨ <strong className="text-white">Limited offer:</strong> 10%
                  off your first project if you reach out within the next 7
                  days.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  No upfront pressure – we'll discuss your needs first.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
