"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ShinyText from "../react-bits/components/ShinyText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black border-b border-dashed border-stone-800 overflow-hidden"
    >
      <div className="relative z-10 mx-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-x border-dashed border-stone-800 py-20 md:py-32 lg:py-40 xl:py-50 text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex font-bold items-center gap-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-6 mx-auto md:mx-0 md:inline-flex"
            >
              <span className="text-gray-300 text-sm font-medium">
                <ShinyText
                  text="✨ Trusted by Startups & Local Businesses"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight font-mono">
              <span className="text-gray-300">Modern websites </span>
              <br />
              that actually convert
            </h1>
            <p className="text-gray-400 md:text-lg mt-6 max-w-2xl mx-auto md:mx-auto">
              I build fast, responsive company profiles and landing pages for
              startups, cafes, and small businesses. No bloated code. No fake
              promises. Just a clean web presence that works 24/7 — starting at
              $500.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-start md:justify-center">
              <a
                href="#contact"
                className="cursor-target bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition transform hover:-translate-y-1"
              >
                Get started →
              </a>
              <Link
                href="/projects"
                className="cursor-target bg-white text-black border border-gray-300 px-6 py-3 rounded-md font-bold transition hover:bg-gray-100"
              >
                See my work
              </Link>
            </div>
            <div className="flex gap-8 mt-10 text-gray-500 justify-start md:justify-center">
              <div className="text-left md:text-center">
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="text-sm text-gray-400">Portfolio Projects</p>
              </div>
              <div className="text-left md:text-center">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-400">support & maintenance</p>
              </div>
              <div className="text-left md:text-center">
                <p className="text-2xl font-bold text-white">3‑day</p>
                <p className="text-sm text-gray-400">typical delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
