"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Embedded Systems",
      img: "/images/service-embedded.jpg",
      desc: "Robust embedded solutions for industrial products.",
    },
    {
      title: "Firmware Development",
      img: "/images/service-firmware.jpg",
      desc: "RTOS, drivers, BSP and low-level firmware.",
    },
    {
      title: "IoT Solutions",
      img: "/images/service-iot.jpg",
      desc: "Secure connectivity and cloud integration.",
    },
  ];

  return (
    <section id="services" className="px-6 md:px-10 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827]">
        Our Engineering Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white shadow-lg border border-gray-100 overflow-hidden"
          >
            <img
              src={s.img}
              alt={s.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
