"use client";
import { useState, useMemo } from "react";
import { IconType } from "react-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuArrowUpRight,
  LuSearch,
  LuX,
  LuRocket,
  LuNewspaper,
  LuLandmark,
  LuCar,
  LuCoffee,
  LuDumbbell,
  LuCamera,
  LuShoppingBag,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import Footer from "@/components/Footer";
import Contact from "@/components/section/Contact";

const categoryIconMap: Record<string, IconType> = {
  Space: LuRocket,
  News: LuNewspaper,
  Bank: LuLandmark,
  Otomotif: LuCar,
  Cafe: LuCoffee,
  Sports: LuDumbbell,
  Creative: LuCamera,
  Fashion: LuShoppingBag,
};

const getCategoryIcon = (category: string): IconType => {
  return categoryIconMap[category] || LuRocket;
};

const allProjects = [
  {
    id: 1,
    title: "Orion Forge",
    category: "Space",
    status: "Live",
    description:
      "Company profile for a fictional space company. Tech: Next.js, Tailwind, Framer Motion.",
    img: "/orion.png",
    link: "https://orion-forge.vercel.app",
  },
  {
    id: 2,
    title: "Nebula News",
    category: "News",
    status: "Live",
    description:
      "Real-time news portal with category filters & search. Dynamic CMS demo.",
    img: "/nebula-news.png",
    link: "https://nebula-news.vercel.app",
  },
  {
    id: 3,
    title: "Stellar Bank",
    category: "Bank",
    status: "Live",
    description:
      "Modern banking landing page with glassmorphism & responsive layout.",
    img: "/stellar-bank.png",
    link: "https://stellar-bank-industries.vercel.app",
  },
  {
    id: 4,
    title: "GCBI",
    category: "Bank",
    status: "Coming Soon",
    description:
      "Financial consulting website with complex navigation & smooth animations.",
    img: "",
    link: "#",
  },
  {
    id: 5,
    title: "Central Asian Cars",
    category: "Otomotif",
    status: "Coming Soon",
    description:
      "Luxury car showcase platform with interactive gallery & inquiry form.",
    img: "",
    link: "#",
  },
  {
    id: 6,
    title: "Neza Cafe",
    category: "Cafe",
    status: "Live",
    description:
      "Modern cafe website: digital menu, table reservation, product gallery.",
    img: "/neza-cafe.png",
    link: "https://neza-cafe.vercel.app",
  },
  {
    id: 7,
    title: "Cosmos Gym",
    category: "Sports",
    status: "Coming Soon",
    description:
      "Gym membership landing page with pricing cards & interactive class schedule.",
    img: "",
    link: "#",
  },
  {
    id: 8,
    title: "Prodigy Photography",
    category: "Creative",
    status: "Coming Soon",
    description:
      "Professional photography portfolio: lightbox gallery & online booking system.",
    img: "",
    link: "#",
  },
  {
    id: 9,
    title: "Aurelian Fashion",
    category: "Fashion",
    status: "Live",
    description:
      "Fashion e-commerce with product filters & simple shopping cart.",
    img: "/aurelian.png",
    link: "https://aurelian-fashion.vercel.app",
  },
];

const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const getStatusBadgeStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "live":
      return "bg-gray-700 text-white";
    case "on going":
      return "bg-gray-600 text-white";
    case "coming soon":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-800 text-white";
  }
};

const getDisplayStatus = (status: string) => {
  if (status.toLowerCase() === "live") return "Live Demo";
  if (status.toLowerCase() === "on going") return "In Development";
  return "Coming Soon";
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    let result = allProjects;
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term),
      );
    }
    return result;
  }, [searchTerm, selectedCategory]);

  return (
    <main className="bg-black text-white min-h-screen pt-19 font-sans">
      <div id="beranda"></div>
      <Navbar />
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            “Real skills, proven by real demos”
          </p>
          <p className="text-gray-400 text-sm">
            Every project below is a concrete proof of my abilities. Ready to be
            adapted 100% to your needs.
          </p>
        </div>
      </Skathes>

      <div className="mx-4 border-y border-dashed border-stone-800">
        <div className="max-w-6xl mx-auto border-x border-dashed border-stone-800 py-10 md:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Demo <span className="text-gray-300">Portfolio</span>
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto">
              These are my exploration projects with Next.js, Tailwind,
              TypeScript — all ready to be implemented for your business.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              * Each demo showcases speed, clean code, and optimal performance.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-y border-dashed border-stone-800 px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-3 py-2 border-x border-dashed border-stone-800 text-sm font-medium transition duration-200 ${
                    selectedCategory === cat
                      ? "bg-white text-black"
                      : "text-gray-400 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border-x border-dashed border-stone-800 py-2 pl-10 pr-10 text-white focus:outline-none focus:border-gray-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <LuX size={16} />
                </button>
              )}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No matching projects found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 border-y border-dashed border-stone-800">
              {filteredProjects.map((project, idx) => {
                const IconComponent = getCategoryIcon(project.category);
                const hasValidImage =
                  project.img &&
                  project.img.trim() !== "" &&
                  project.status === "Live";
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative bg-gray-900/30 border border-dashed border-stone-800 overflow-hidden hover:border-gray-500 transition group"
                  >
                    <span
                      className={`absolute top-3 right-3 z-20 px-3 py-1 text-xs font-bold rounded-full shadow-lg ${getStatusBadgeStyle(
                        project.status,
                      )}`}
                    >
                      {getDisplayStatus(project.status)}
                    </span>

                    <div className="relative h-52 w-full bg-gray-800 flex items-center justify-center">
                      {hasValidImage ? (
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          priority={idx === 0}
                          className="object-cover group-hover:scale-105 transition duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <IconComponent
                          size={20}
                          className="text-gray-500 group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                    </div>

                    <div className="p-5">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {project.category}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                        {project.description}
                      </p>
                      {project.status === "Live" && project.link !== "#" ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium transition"
                        >
                          View Demo <LuArrowUpRight size={16} />
                        </Link>
                      ) : (
                        <span className="mt-4 inline-block text-gray-500 text-sm">
                          (Available upon release)
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div className="text-center mt-8 text-gray-500 text-sm border-t border-dashed border-stone-800 pt-6">
              <p>
                💡 All these projects are demonstration works. I can build a
                similar website quickly and tailored to your specifications.
                Free consultation — no obligation.
              </p>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold transition hover:bg-gray-200 hover:-translate-y-0.5"
            >
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="#beranda"
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Link>

      <Contact />
      <Skathes>
        <div className="text-center space-y-2">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide italic">
            “Ready to bring your dream website to life? Start with a free
            consultation.”
          </p>
          <p className="text-gray-400 text-sm">
            Quality and speed — that's what I deliver. No fluff.
          </p>
        </div>
      </Skathes>
      <Footer />
    </main>
  );
}
