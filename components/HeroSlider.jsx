"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Aerospace & Defence Engineering Solutions",
    desc: "Engineering services for safety-critical aerospace and defence systems including embedded software, electronics design, verification and validation.",
    image: "/images/hero-aero.jpg",
  },
  {
    title: "Railway Systems & Safety-Critical Solutions",
    desc: "Design and development of embedded systems and electronics for railway applications with a focus on reliability, compliance, and long-term support.",
    image: "/images/hero-railway.jpg",
  },
  {
    title: "Automotive Electronics & Embedded Software",
    desc: "Embedded software, electronics design, and testing services for automotive control systems and next-generation vehicle platforms.",
    image: "/images/hero-automotive.jpg",
  },
  {
    title: "Industrial Embedded & IoT Solutions",
    desc: "End-to-end embedded systems and IoT solutions for industrial applications including firmware development, hardware design, and system integration.",
    image: "/images/hero-industrial.jpg",
  },
  {
    title: "Testing, Validation & Quality Assurance",
    desc: "Comprehensive testing and validation services for embedded and safety-critical systems to ensure quality, compliance, and performance.",
    image: "/images/hero-testing.jpg",
  },
];


export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F9FB] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 min-h-[70vh] relative">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* TEXT CONTENT */}
            <div className="relative z-10">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-[#F47C20] uppercase">
                Our Engineering Expertise
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight max-w-2xl">
                {slides[index].title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                {slides[index].desc}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-[#F47C20] text-white px-7 py-3 font-semibold transition hover:opacity-90">
                  Explore Solutions
                </button>
                <button className="border border-[#F47C20] text-[#F47C20] px-7 py-3 transition hover:bg-[#F47C20]/10">
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] md:h-[420px] lg:h-[480px] md:order-last order-first">
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/5 rounded-xl z-10" />

              <Image
                key={slides[index].image}
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="rounded-xl shadow-2xl object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* SLIDE INDICATORS */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition-all ${
                i === index ? "bg-[#F47C20]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* PREV / NEXT BUTTONS */}
        <button
          onClick={() =>
            setIndex((index - 1 + slides.length) % slides.length)
          }
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
