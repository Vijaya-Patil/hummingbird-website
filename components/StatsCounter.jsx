"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const statsData = [
  {
    value: 32,
    suffix: "+",
    label: "Customers",
    desc: "Global clients served",
  },
  {
    value: 65,
    suffix: "+",
    label: "Professional Workers",
    desc: "Experienced engineers",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    desc: "Engineering excellence",
  },
  {
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
    desc: "Mission-critical systems",
  },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 50);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const copy = [...prev];
          copy[i] = start;
          return copy;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="
      relative overflow-hidden
      bg-gradient-to-r
      from-[#F47C20]
      via-[#FDBA74]
      to-[#9C6A3A]
      py-28
    ">
      {/* Soft brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_65%)]" />

      {/* CERTIFICATION BADGES */}
      <div className="absolute top-10 right-10 hidden lg:flex gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur px-5 py-3 shadow-lg border border-[#F47C20]/30"
        >
          <p className="text-xs font-semibold text-[#9C6A3A] uppercase">
            Certified
          </p>
          <p className="text-sm font-bold text-[#111827]">
            AS9100
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white/95 backdrop-blur px-5 py-3 shadow-lg border border-[#F47C20]/30"
        >
          <p className="text-xs font-semibold text-[#9C6A3A] uppercase">
            Certified
          </p>
          <p className="text-sm font-bold text-[#111827]">
            ISO / IEC 27001
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-white/90">
            Engineering Growth & Trust
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Numbers Telling Our Growth Story
          </h2>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative px-6"
            >
              {i !== 0 && (
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-px bg-white/40" />
              )}

              <div className="text-5xl md:text-6xl font-extrabold">
                {counts[i]}
                <span className="ml-1 text-white/90">
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-4 text-lg font-semibold">
                {stat.label}
              </p>

              <p className="mt-2 text-sm text-white/90">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
