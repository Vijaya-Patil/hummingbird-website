"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center text-sm text-gray-600">
        <Link href="/" className="hover:text-[#F47C20]">
          Home
        </Link>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = segment
            .replace("-", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <span key={index} className="flex items-center">
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              {index === segments.length - 1 ? (
                <span className="text-gray-800 font-medium">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#F47C20]">
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
