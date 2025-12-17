"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    title: "AS9100 Certification",
    desc: "Quality management system certified in alignment with aerospace and defence standards.",
    image: "/certifications/as9100-certificate.png",
  },
  {
    title: "ISO/IEC 27001 Certification",
    desc: "Information security management system certification ensuring data protection and risk management.",
    image: "/certifications/iso27001-certificate.png",
  },
];

export default function CertificatesImages() {
  return (
    <section
      className="bg-[#F8F9FB] px-6 md:px-10 py-28 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Certifications & Compliance
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Hummingbird Tek Systems maintains internationally recognized
            certifications that demonstrate our commitment to quality,
            information security, and regulatory compliance.
          </p>
        </motion.div>

        {/* CERTIFICATE BLOCKS */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 shadow-sm p-8"
            >
              <h3 className="text-xl font-semibold text-[#111827]">
                {cert.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {cert.desc}
              </p>

              {/* CERTIFICATE FRAME */}
              <div className="mt-8 relative w-full h-[520px] bg-white border border-gray-300 overflow-hidden pointer-events-none">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                  draggable={false}
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEGAL NOTE */}
        <p className="mt-16 text-xs text-gray-500 max-w-3xl">
          Certificates are displayed for verification purposes only.
          Unauthorized copying, reproduction, or distribution is prohibited.
        </p>
      </div>
    </section>
  );
}
