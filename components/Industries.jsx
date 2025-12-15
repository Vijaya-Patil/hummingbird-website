"use client";

import { motion } from "framer-motion";

// Industries data in one place
const industries = [
  {
    title: "Aerospace & Defence",
    short:
      "Engineering services for safety-critical aerospace and defence systems with a strong focus on reliability and compliance.",
    full:
      "We provide engineering services for aerospace and defence systems with a strong focus on safety, reliability, and compliance. Our capabilities include embedded software development, electronics design, system integration, and verification activities for safety-critical applications across the product lifecycle.",
  },
  {
    title: "Railway Systems",
    short:
      "Engineering solutions for railway and transportation systems addressing reliability, availability, and maintainability.",
    full:
      "We deliver engineering solutions for railway and transportation systems with a focus on reliability, availability, and maintainability. Our services include embedded systems development, electronics design, testing, and validation for control and monitoring applications supporting safety-critical operations.",
  },
  {
    title: "Automotive",
    short:
      "Engineering services for automotive electronics and embedded software supporting modern vehicle platforms.",
    full:
      "We offer engineering services for automotive electronics and embedded software supporting modern vehicle platforms. Our experience spans embedded software development, electronics design, system integration, and testing for automotive control and monitoring systems.",
  },
];

export default function Industries({ showAll = false }) {
  // On home page, show summary only
  const visibleIndustries = showAll ? industries : industries.slice(0, 3);

  return (
    <section id="industries" className="bg-[#F8F9FB] px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver engineering services across safety-critical and
            industrial domains with a structured and quality-driven approach.
          </p>
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {visibleIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#111827]">
                {industry.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {showAll ? industry.full : industry.short}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
