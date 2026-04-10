"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TargetCursor from "./TargetCursor";

interface NavItem {
  name: string;
  url?: string;
  isDropdown?: boolean;
  dropdownItems?: { name: string; url: string }[];
  style?: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] =
    useState<boolean>(false);

  // Navigasi biasa (tanpa Contact) – tidak ditampilkan di halaman /projects
  const mainNavItems: NavItem[] = [
    { name: "Beranda", url: "#home" },
    { name: "Tentang", url: "#about" },
    { name: "Harga", url: "#pricing" },
    {
      name: "Proyek",
      isDropdown: true,
      dropdownItems: [
        { name: "Proyek Unggulan", url: "#projects" },
        { name: "Semua Proyek", url: "/projects" },
      ],
    },
    { name: "Testimoni", url: "#testimony" },
  ];

  // Tombol kanan (tetap ditampilkan di semua halaman)
  const rightButtons: NavItem[] = [
    {
      name: "Hubungi Kami",
      url: "#contact",
      style:
        "cursor-target text-gray-300 hover:text-gray-400 transition duration-200",
    },
    {
      name: "Semua Proyek Saya ✨",
      url: "/projects",
      style:
        "cursor-target bg-purple-600 rounded-md px-4 py-2 text-white hover:bg-purple-700 transition duration-300 ease-in-out transform active:-translate-y-1 font-black font-mono",
    },
  ];

  // Gabungan untuk mobile menu: jika di /projects, hanya tombol kanan; jika tidak, semua item
  const mobileMenuItems: NavItem[] =
    pathname === "/projects"
      ? [...rightButtons]
      : [...mainNavItems, ...rightButtons];

  // Fungsi untuk render item navigasi (desktop) – hanya ditampilkan jika bukan di /projects
  const renderDesktopNavItem = (item: NavItem, idx: number) => {
    if (item.isDropdown) {
      return (
        <div key={idx} className="relative">
          <button
            onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
            className="cursor-target flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-gray-400 transition duration-200"
          >
            {item.name}
            {isProjectsDropdownOpen ? (
              <FaChevronUp size={12} />
            ) : (
              <FaChevronDown size={12} />
            )}
          </button>
          <div
            className={`absolute top-full left-0 mt-2 bg-black border border-dashed border-stone-800 rounded-md shadow-lg z-10 transition-all duration-300 overflow-hidden ${
              isProjectsDropdownOpen
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col py-2">
              {item.dropdownItems?.map((subItem, subIdx) => (
                <Link
                  key={subIdx}
                  href={subItem.url}
                  onClick={() => setIsProjectsDropdownOpen(false)}
                  className="cursor-target px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-900 whitespace-nowrap"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <Link
        key={idx}
        href={item.url!}
        className="cursor-target text-sm font-medium text-gray-300 hover:text-gray-400 transition duration-200"
      >
        {item.name}
      </Link>
    );
  };

  // Fungsi untuk render item mobile (dengan submenu untuk dropdown)
  const renderMobileNavItem = (item: NavItem, idx: number) => {
    if (item.isDropdown) {
      const [subOpen, setSubOpen] = useState(false);
      return (
        <div key={idx} className="w-full">
          <button
            onClick={() => setSubOpen(!subOpen)}
            className="cursor-target flex items-center justify-between w-full text-base font-medium text-gray-300 hover:text-gray-400 transition duration-200 py-2"
          >
            {item.name}
            {subOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
          </button>
          <div
            className={`pl-4 transition-all duration-300 overflow-hidden ${
              subOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.dropdownItems?.map((subItem, subIdx) => (
              <Link
                key={subIdx}
                href={subItem.url}
                onClick={() => {
                  setIsOpen(false);
                  setSubOpen(false);
                }}
                className="cursor-target block py-2 text-sm text-gray-400 hover:text-white"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      );
    }
    return (
      <a
        key={idx}
        href={item.url}
        onClick={() => setIsOpen(false)}
        target={item.url?.startsWith("http") ? "_blank" : undefined}
        rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}
        className={
          item.style
            ? item.style
            : "cursor-target text-base font-medium text-gray-300 hover:text-gray-400 transition duration-200 w-full py-2"
        }
      >
        {item.name}
      </a>
    );
  };

  return (
    <header className="w-full border-b border-dashed border-stone-800 fixed top-0 left-0 right-0 bg-black z-50">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <div className="mx-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-x border-dashed border-stone-800">
          <div className="flex items-center justify-between py-4">
            {/* Logo + navigasi biasa (desktop) – sembunyikan jika di /projects */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="cursor-target text-2xl font-black text-white font-mono"
              >
                Fizora.
              </Link>
              {pathname !== "/projects" && (
                <nav className="hidden md:flex items-center gap-4">
                  {mainNavItems.map((item, idx) =>
                    renderDesktopNavItem(item, idx),
                  )}
                </nav>
              )}
            </div>

            {/* Dua tombol di kanan (desktop) – selalu tampil */}
            <div className="hidden md:flex items-center gap-3">
              {rightButtons.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target={item.url?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={item.style || "cursor-target text-sm font-medium"}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-target md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>

          {/* Mobile menu – konten sudah disesuaikan dengan mobileMenuItems */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-4 py-6 border-t border-dashed border-stone-800">
              {mobileMenuItems.map((item, idx) =>
                renderMobileNavItem(item, idx),
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
