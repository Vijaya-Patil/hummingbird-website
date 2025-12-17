"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Mail,
  ChevronDown,
} from "lucide-react";

const jobs = [
  {
    title: "Engineer I (Multiple Openings)",
    location: "USA – Multiple Locations",
    qualification: "Master’s Degree – Embedded / ECE / Related",
    responsibilities: [
      "Embedded software development and verification",
      "Safety-critical real-time software lifecycle activities",
      "Requirements, design, coding, verification & validation",
      "Certification and compliance activities",
      "Travel and relocation as per project needs",
    ],
    apply:
      "Mail resume to 4 Venture Suite #220, Irvine, CA – 92618 or email hr@hummingbird-tek.com",
  },
  {
    title: "Engineer II (Multiple Openings)",
    location: "USA – Multiple Locations",
    qualification:
      "Bachelor’s Degree with 2+ years experience – Embedded Systems",
    responsibilities: [
      "Develop safety-critical embedded software and applications",
      "Embedded hardware design – schematics & PCB",
      "Develop BSP, bootloader, hosted applications",
      "Unit, integration, HIL & system testing",
      "Travel and relocation as per project needs",
    ],
    apply:
      "Mail resume to 4 Venture Suite #220, Irvine, CA – 92618 or email hr@hummingbird-tek.com",
  },
  {
    title: "Project Manager",
    location: "Irvine, CA",
    qualification:
      "Bachelor’s Degree – Engineering / Computer Science + 2 years experience",
    responsibilities: [
      "Manage projects throughout full lifecycle",
      "Project planning, timelines & reporting",
      "Customer & stakeholder coordination",
      "Team supervision and staffing",
      "Experience with MATLAB & Simulink",
    ],
    apply:
      "Mail resume to HR Dept., 4 Venture, Suite 220, Irvine, CA 92618",
  },
  {
    title: "Sr. Mechanical Engineer",
    location: "Irvine, CA",
    qualification:
      "Bachelor’s Degree – Mechanical Engineering + 5 years experience",
    responsibilities: [
      "Design aircraft mechanical components & actuators",
      "Concept, detailed design, DFA & DFM",
      "Finite element analysis & validation",
      "Design reviews & test planning",
      "Travel / relocation across the USA",
    ],
    apply:
      "Mail resume to 18100 Von Karman Ave., Suite 850, Irvine, CA 92612",
  },
];

export default function JobOpenings() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#F8F9FB] py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

      
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
          Current Openings
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Explore current career opportunities and be part of projects that
          shape safety-critical and mission-critical systems.
        </p>

        {/* JOB CARDS */}
        <div className="mt-14 space-y-6">
          {jobs.map((job, index) => {
            const open = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="bg-white border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 md:px-8 py-6 text-left"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <GraduationCap size={16} /> {job.qualification}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* EXPANDED JD */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 md:px-8 pb-8"
                    >
                      {/* RESPONSIBILITIES */}
                      <div className="mt-4">
                        <h4 className="flex items-center gap-2 font-semibold text-[#F47C20]">
                          <Briefcase size={18} /> Roles & Responsibilities
                        </h4>
                        <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* APPLY */}
                      <div className="mt-6 bg-[#F8F9FB] border border-gray-200 p-4">
                        <h4 className="flex items-center gap-2 font-semibold text-[#111827]">
                          <Mail size={18} /> How to Apply
                        </h4>
                        <p className="mt-2 text-gray-600">
                          {job.apply}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
