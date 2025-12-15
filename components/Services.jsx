"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// All services data in one place
const services = [
  {
    title: "Embedded Software Development",
    desc: "Design and development of embedded software for safety-critical and industrial systems including real-time applications, low-level drivers, and middleware.",
  },
  {
    title: "Electronics & Hardware Design",
    desc: "Complete electronics design services covering schematic design, PCB layout, prototyping, and hardware validation for industrial and transportation domains.",
  },
  {
    title: "Power Electronics Solutions",
    desc: "Engineering services for power electronics systems including DC–DC converters, static inverters, and power management solutions.",
  },
  {
    title: "System Integration & IoT Solutions",
    desc: "Integration of embedded devices with communication interfaces and IoT platforms for monitoring, control, and data-driven industrial applications.",
  },
  {
    title: "Testing & Validation Services",
    desc: "Structured testing and validation services for embedded and safety-critical systems to ensure quality, reliability, and compliance.",
  },
  {
    title: "Verification & Quality Assurance",
    desc: "Quality assurance and verification activities across the development lifecycle to meet industry standards and customer requirements.",
  },
];

export default function Services({ showAll = false }) {
  // Show only first 3 services on Home page
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-white px-6 md:px-10 py-24">
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
            Our Engineering Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end engineering services across embedded systems,
            electronics, power electronics, and testing for safety-critical and
            industrial applications.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#F8F9FB] p-8 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#111827]">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PRODUCT SECTION – ONLY ON FULL SERVICES PAGE */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 bg-white border border-gray-200 shadow-md grid md:grid-cols-2 gap-10 items-center p-10"
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
