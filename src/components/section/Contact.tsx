"use client";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
    const waMessage = `Halo Fizora, saya ${form.name} (${form.email}) ingin memesan website. Pesan: ${form.message}`;
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
              Hubungi <span className="text-purple-400">Kami</span>
            </h2>
            <p className="text-gray-300 mt-2">
              Siap mewujudkan website impian Anda? Konsultasi gratis 30 menit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    required
                    minLength={2}
                    aria-required="true"
                    aria-label="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    required
                    aria-required="true"
                    aria-label="Email Anda"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Pesan / detail proyek"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="cursor-target w-full bg-gray-950/60 border border-dashed border-stone-800 p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    aria-label="Pesan atau detail proyek Anda"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-target cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Kirim pesan via WhatsApp"
                >
                  Kirim via WhatsApp →
                </button>
              </form>
            </motion.div>

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
                <FaEnvelope className="text-purple-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">faizmoch63@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">Lokasi</p>
                  <p className="text-gray-400">
                    Jawa Timur, Indonesia (Remote)
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-stone-800">
                <p className="text-sm text-gray-300">
                  ✨ Dapatkan diskon 10% untuk order sebelum bulan depan!
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
