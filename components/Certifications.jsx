"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    title: "AS9100 Certified",
    desc: "Quality management system certified in accordance with AS9100 standards for aerospace and defence engineering services.",
    image: "/certifications/as9100.png",
  },
  {
    title: "ISO/IEC 27001 Certified",
    desc: "Information security management system certified to ISO/IEC 27001, ensuring data protection, risk management, and confidentiality.",
    image: "/certifications/iso27001.png",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
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
            Certifications & Compliance
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our engineering and operational processes are certified and aligned
            with internationally recognized quality and information security
            standards.
          </p>
        </motion.div>

        {/* CERTIFICATION CARDS */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center border border-gray-200 p-10 hover:shadow-md transition"
            >
              <div className="relative w-[220px] h-[120px] mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <h3 className="text-xl font-semibold text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
