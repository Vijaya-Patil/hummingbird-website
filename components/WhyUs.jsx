"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Settings,
  ClipboardCheck,
  Users,
  Layers,
} from "lucide-react";

const reasons = [
  {
    title: "Safety-Critical Engineering",
    desc: "Strong experience in safety-critical systems with a focus on reliability, compliance, and structured engineering practices.",
    icon: ShieldCheck,
  },
  {
    title: "Embedded & Electronics Expertise",
    desc: "Expertise across embedded software, electronics design, and system-level engineering for complex applications.",
    icon: Cpu,
  },
  {
    title: "Structured Engineering Process",
    desc: "Well-defined engineering lifecycle covering requirements, design, development, integration, and validation.",
    icon: Settings,
  },
  {
    title: "Quality & Compliance Focus",
    desc: "Quality-driven approach ensuring adherence to industry standards and customer requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Experienced Engineering Team",
    desc: "Skilled engineers with domain knowledge across aerospace, railway, automotive, and industrial systems.",
    icon: Users,
  },
  {
    title: "End-to-End Capability",
    desc: "Ability to support customers from concept and design through deployment and long-term support.",
    icon: Layers,
  },
];

export default function WhyUs({ showAll = false }) {
  const visibleReasons = showAll ? reasons : reasons.slice(0, 4);

  return (
    <section id="why-us" className="bg-[#F8F9FB] px-6 md:px-10 py-28">
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
            Why Hummingbird Tek Systems
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bring engineering discipline, domain expertise, and a
            quality-driven mindset to every engagement.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {visibleReasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-lg transition"
              >
                {/* ICON */}
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#F47C20]/10 mb-6">
                  <Icon className="h-7 w-7 text-[#F47C20]" />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
