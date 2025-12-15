"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    step: "01",
    title: "Requirements & Analysis",
    desc: "Detailed analysis of functional, performance, safety, and compliance requirements for safety-critical systems.",
    image: "/images/process/process-requirements.png",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "System and software architecture design including hardware-software partitioning and interface definitions.",
    image: "/images/process/process-design.png",
  },
  {
    step: "03",
    title: "Development",
    desc: "Embedded software, firmware, and electronics development following structured engineering practices.",
    image: "/images/process/process-development.png",
  },
  {
    step: "04",
    title: "Integration",
    desc: "Subsystem and system-level integration ensuring correct interaction and real-world behavior.",
    image: "/images/process/process-integration.png",
  },
  {
    step: "05",
    title: "Testing & Validation",
    desc: "Comprehensive verification and validation to ensure quality, reliability, and compliance.",
    image: "/images/process/process-testing.png",
  },
  {
    step: "06",
    title: "Deployment & Support",
    desc: "Production release, documentation, and long-term lifecycle support.",
    image: "/images/process/process-deployment.png",
  },
];

export default function ProcessTimeline({ showAll = false }) {
  const visibleSteps = showAll ? processSteps : processSteps.slice(0, 4);

  return (
    <section id="process" className="bg-white px-6 md:px-10 py-28">
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
            Our Engineering Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A structured, visual engineering lifecycle designed for
            safety-critical and industrial systems.
          </p>
        </motion.div>

        {/* PROCESS STEPS */}
        <div className="mt-24 space-y-24">
          {visibleSteps.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative w-full h-[260px] md:h-[340px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* TEXT */}
                <div>
                  <span className="text-sm font-semibold text-[#F47C20]">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
