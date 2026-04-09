"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

interface NavItem {
  name: string;
  url: string;
  style?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Navigasi biasa (tanpa Contact)
  const mainNavItems: NavItem[] = [
    { name: "Beranda", url: "#home" },
    { name: "Tentang", url: "#about" },
    { name: "Harga", url: "#pricing" },
    { name: "Proyek", url: "#projects" },
    { name: "Testimoni", url: "#testimony" },
  ];

  // Tombol kanan
  const rightButtons: NavItem[] = [
    {
      name: "Hubungi Saya",
      url: "#contact",
      style: "text-gray-300 hover:text-white transition duration-200",
    },
    {
      name: "Kunjungi Proyek Saya ✨",
      url: "#contact",
      style:
        "bg-purple-600 rounded-md px-4 py-2 text-white hover:bg-purple-700 transition duration-300 ease-in-out transform active:-translate-y-1",
    },
  ];

  // Gabungan untuk mobile menu (semua item + tombol)
  const mobileMenuItems: NavItem[] = [...mainNavItems, ...rightButtons];

  return (
    <header className="w-full border-b border-dashed border-stone-800 fixed top-0 left-0 right-0 bg-black z-50">
      <div className="mx-4">
        {/* Container dengan border-x konsisten */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-x border-dashed border-stone-800">
          {/* Navbar atas */}
          <div className="flex items-center justify-between py-4">
            {/* Logo + navigasi biasa (desktop) */}
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-black text-white font-mono">
                Fizora.
              </h1>
              <nav className="hidden md:flex items-center gap-4">
                {mainNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-sm font-medium text-gray-300 hover:text-gray-400 transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Dua tombol di kanan (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {rightButtons.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={item.style || "text-sm font-medium"}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>

          {/* Mobile menu - border-t sejajar dan border-x dari parent */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "h-full opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-4 py-6 border-t border-dashed border-stone-800">
              {mobileMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    item.style ||
                    "text-base font-medium text-gray-300 hover:text-gray-400 transition duration-200 w-full py-2"
                  }
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
