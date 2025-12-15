"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111827] px-6 md:px-10 py-28"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] opacity-90" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Let’s Discuss Your Engineering Requirements
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Whether you are planning a new development or looking for
              engineering support, our team is ready to collaborate and deliver
              reliable, high-quality solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F47C20] text-white px-8 py-4 font-semibold hover:opacity-90 transition"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-gray-400 text-gray-200 px-8 py-4 hover:bg-white/10 transition"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* RIGHT INFO BOX */}
          <div className="bg-white/5 backdrop-blur border border-white/10 p-10">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F47C20]" />
                <span>info@hummingbirdteksystems.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F47C20]" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                * Contact details shown for demo purposes. Final details will
                be updated after approval.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
