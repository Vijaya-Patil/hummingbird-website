"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="bg-[#F8F9FB] px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#111827]"
        >
          About Hummingbird Tek Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-gray-600 leading-relaxed"
        >
          Hummingbird Tek Systems is a business development and engineering
          services firm providing client-focused solutions across select
          global industries. We support customers from early concept and
          design through development, validation, and long-term support.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          With strong experience in aerospace, railway, automotive, and
          industrial systems, our engineering teams work in close
          coordination with customers, adhering to their work culture,
          quality expectations, and compliance requirements.
        </motion.p>

        {/* CERTIFICATION STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-3 bg-white border px-6 py-3 shadow-sm"
        >
          <ShieldCheck className="text-[#F47C20]" />
          <span className="font-semibold text-[#111827]">
            AS9100 & ISO/IEC 27001 Certified
          </span>
        </motion.div>

      </div>
    </section>
  );
}
