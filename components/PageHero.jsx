"use client";

import { motion } from "framer-motion";

export default function PageHero({
  title,
  subtitle,
  bgImage,                 // "/images/hero/about.jpg"
  bgClass = "bg-[#F8F9FB]", // fallback if no image
  dark = false,
  height = "min-h-[420px]", // consistent hero height
}) {
  return (
    <section
      className={`relative overflow-hidden ${height} ${bgImage ? "" : bgClass}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Dark overlay for image */}
      {bgImage && dark && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight ${
              dark ? "text-white" : "text-[#111827]"
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-6 text-lg leading-relaxed ${
                dark ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
