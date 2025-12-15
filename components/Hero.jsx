"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111827]">
            Engineering Embedded <br /> & IoT Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We design and build embedded systems, firmware, hardware,
            and cloud solutions for next-generation products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#F47C20] text-white px-6 py-3 font-semibold">
              Our Services
            </button>
            <button className="border border-[#F47C20] text-[#F47C20] px-6 py-3">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Image with slow floating motion */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/hero-tech.jpg"
            alt="Embedded systems engineering"
            width={700}
            height={480}
            className="rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
