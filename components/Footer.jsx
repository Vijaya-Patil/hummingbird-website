"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-[#111827]">
              Hummingbird Tek Systems
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Engineering services company delivering embedded systems,
              electronics, and safety-critical solutions across aerospace,
              railway, and automotive domains.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Embedded Software</li>
              <li>Electronics Design</li>
              <li>Power Electronics</li>
              <li>Testing & Validation</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] uppercase">
              Contact
            </h4>
            <p className="mt-4 text-sm text-gray-600">
              Email: info@hummingbirdteksystems.com
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hummingbird Tek Systems. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
