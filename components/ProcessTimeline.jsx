"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understand customer requirements, constraints, standards, and product goals.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Define system architecture, hardware/software design, and technology stack.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Embedded firmware, hardware design, IoT integration, and application development.",
  },
  {
    step: "04",
    title: "Testing & Validation",
    desc: "Unit, integration, system testing including mSDAC, SSDAC, HASSDAC and VectorCAST.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    desc: "Production deployment, documentation, maintenance, and long-term support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Our Engineering Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A structured, quality-driven approach to deliver reliable
            and scalable engineering solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 space-y-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#F47C20] text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6 shadow-md border border-gray-100 w-full">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
