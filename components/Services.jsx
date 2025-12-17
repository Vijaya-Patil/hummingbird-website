"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Aerospace Engineering Services",
    href: "/services/aerospace",
    desc: "Engineering services for avionics and space applications with strong expertise in RTCA/DO-178C, DO-254, DO-2167A guidelines covering design, development, verification, validation, and testing.",
  },
  {
    title: "Automotive Engineering Services",
    href: "/services/automotive",
    desc: "End-to-end automotive engineering services including embedded software, electronics, functional safety, and communication protocols for next-generation mobility solutions.",
  },
  {
    title: "Artificial Intelligence Services",
    href: "/services/ai",
    desc: "AI-driven engineering services including data preparation, model development, validation, and deployment for intelligent and automated systems.",
  },
  {
    title: "Industry 4.0 & IoT Solutions",
    href: "/services/iot",
    desc: "Embedded and IoT solutions integrating devices, communication protocols, and cloud platforms for smart manufacturing, monitoring, and industrial automation.",
  },
  {
    title: "Annotations Services",
    href: "/services/annotations",
    desc: "High-quality data annotation services supporting AI and machine learning use cases with accuracy, scalability, and domain-specific expertise.",
  },
  {
    title: "Medical Devices Engineering",
    href: "/services/medical-devices",
    desc: "Engineering services for medical devices including embedded software, electronics, compliance, verification, and validation aligned with industry standards.",
  },

  // ✅ KEEP POWER ELECTRONICS LAST (AS REQUESTED)
  {
    title: "Power Electronics Solutions",
    href: "/services/power-electronics",
    desc: "Design and development of power electronics systems including DC–DC converters, static inverters, power management, thermal analysis, and lifecycle engineering.",
  },
];

export default function Services({ showAll = false }) {
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-white px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our team of industry experts delivers engineering services across
            aerospace, automotive, industrial, medical, and power electronics domains.
          </p>
        </motion.div>

        {/* STEPPED / STACKED CARDS – VVDN STYLE (UNCHANGED UI) */}
        <div className="relative mt-28 grid md:grid-cols-3 gap-x-10 gap-y-28">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                relative bg-white rounded-2xl
                p-10 border border-gray-100
                min-h-[360px]
                shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                ${Math.floor(index / 3) % 2 === 1 ? "md:translate-x-16" : ""}
              `}
            >
              {/* CLICKABLE CARD */}
              <Link href={service.href} className="absolute inset-0 z-10" />

              {/* CURVED SAFFRON SPINE */}
              <span className="absolute left-0 top-0 h-20 w-4 rounded-tl-2xl 
                bg-gradient-to-b from-orange-500 via-orange-400 to-amber-300" />

              {/* TOP CURVE */}
              <span className="absolute left-0 top-0 h-4 w-16 rounded-tl-2xl 
                bg-gradient-to-r from-orange-500 to-amber-400" />

              <h3 className="text-xl font-semibold text-[#111827] ml-4 mt-2 relative z-20">
                {service.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed ml-4 relative z-20">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PRODUCT SECTION – UNCHANGED */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 bg-white border border-gray-200 shadow-md grid md:grid-cols-2 gap-10 items-center p-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#111827]">
                Power Electronics Products
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We design and develop power electronics products including
                DC–DC converters and static inverters for industrial and
                transportation applications.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our solutions are engineered for efficiency, thermal
                performance, and long-term operational reliability.
              </p>
            </div>

            <div className="relative w-full h-[240px]">
              <Image
                src="/images/Static_Inverter_PNG.png"
                alt="Static Inverter"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
