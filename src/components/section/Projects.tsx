"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

interface Project {
  title: string;
  category: string;
  img: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Neza Cafe",
    category: "Coming Soon",
    img: "/example2.webp",
    link: "",
  },
  {
    title: "Aurelian Fashion",
    category: "On Going",
    img: "/aurelian.webp",
    link: "https://aurelian-fashion.vercel.app",
  },
  {
    title: "Orion Forge ",
    category: "Coming Soon",
    img: "/example3.webp",
    link: "",
  },
  {
    title: "Stellar Bank",
    category: "Cooming Soon",
    img: "/example4.webp",
    link: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-y border-dashed border-stone-800">
      <div className="mx-4">
        <div className="max-w-6xl py-10 md:py-20 mx-auto px-4 sm:px-6 border-x border-dashed border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Proyek <span className="text-purple-400">Unggulan</span>
            </h2>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto ">
              Beberapa karya yang telah membantu klien mencapai target bisnis.
            </p>
          </motion.div>

          <div className="rounded-md grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="cursor-target group relative overflow-hidden rounded-xl bg-gray-900"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.img}
                    alt={`${project.title} - ${project.category} portfolio project`}
                    fill
                    blurDataURL="blurData"
                    placeholder="blur"
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={idx < 2}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-100 opacity-90">
                  <p className="text-purple-300 text-sm">{project.category}</p>
                  <h3 className="text-xl font-black text-white font-mono">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm bg-purple-500 text-white md:opacity-0 group-hover:opacity-100 transition md:w-max md:bg-purple-500 px-4 py-2 rounded-md"
                    aria-label={`Lihat website ${project.title}`}
                  >
                    Lihat Website →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center gap-2 text-center mt-12">
            <Link
              href="#contact"
              className="cursor-target border bg-purple-500 border-purple-500 text-white font-bold  px-6 py-2 rounded-md transition flex items-center gap-2"
            >
              Pesan Proyek Serupa
              <FaWhatsapp size={22} />
            </Link>
            <Link
              href="#contact"
              className="cursor-target flex items-center border border-white bg-white text-black font-bold  px-6 py-2 rounded-md transition"
            >
              Lihat Semua Proyek
              <LuArrowUpRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
