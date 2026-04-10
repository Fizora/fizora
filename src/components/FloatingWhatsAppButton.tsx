"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const waNumber = "6285235086814";
  const waMessage = "Halo Fizora, saya ingin konsultasi tentang website. 👋";

  return (
    <>
      <Link
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target whatsapp-button fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition transform hover:scale-110 flex items-center justify-center z-40"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </Link>
    </>
  );
};

export default FloatingWhatsAppButton;
