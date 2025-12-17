"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/* SERVICES DROPDOWN ITEMS */
const serviceItems = [
  { name: "Aerospace", href: "/services/aerospace" },
  { name: "Automotive", href: "/services/automotive" },
  { name: "Artificial Intelligence Services", href: "/services/ai" },
  { name: "Industry 4.0 and IoT Solutions", href: "/services/iot" },
  { name: "Annotations", href: "/services/annotations" },
  { name: "Medical Devices", href: "/services/medical-devices" },
  { name: "Power Electronics Solutions", href: "/services/power-electronics" },
  {
    name: "Building & Construction – Engineering Services",
    href: "/services/construction",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" }, // dropdown
    { name: "Industries", href: "/industries" },
    { name: "Process", href: "/process" },
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* TRUST STRIP */}
      <div className="bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 text-xs md:text-sm text-gray-600 flex justify-end">
          AS9100 & ISO/IEC 27001 Certified
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Hummingbird Tek Systems"
            width={180}
            height={48}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);

            /* SERVICES DROPDOWN (CSS ONLY – NO JS HOVER BUGS) */
            if (item.name === "Services") {
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative font-medium transition ${
                      active
                        ? "text-[#F47C20]"
                        : "text-gray-700 hover:text-[#F47C20]"
                    }`}
                  >
                    Services
                    {active && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#F47C20]" />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  <div
                    className="
                      invisible opacity-0
                      group-hover:visible group-hover:opacity-100
                      transition-all duration-200
                      absolute top-full left-0
                      w-[380px]
                      bg-gradient-to-b from-[#F47C20] to-[#9E5A1A]
                      text-white
                      shadow-2xl
                      z-50
                    "
                  >
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="
                          block px-6 py-3 text-sm
                          hover:bg-white/15
                          transition
                        "
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            /* NORMAL NAV ITEM */
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition ${
                  active
                    ? "text-[#F47C20]"
                    : "text-gray-700 hover:text-[#F47C20]"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#F47C20]" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className={`px-6 py-2 font-semibold border transition ${
              pathname === "/contact"
                ? "bg-[#F47C20] text-white border-[#F47C20]"
                : "border-[#F47C20] text-[#F47C20] hover:bg-[#F47C20]/10"
            }`}
          >
            Get in Touch
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5">
          {navItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name}>
                  <span className="block font-semibold text-gray-800 mb-2">
                    Services
                  </span>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-[#F47C20]"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block font-medium ${
                  isActive(item.href)
                    ? "text-[#F47C20]"
                    : "text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="block text-center px-4 py-3 font-semibold border border-[#F47C20] text-[#F47C20]"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
