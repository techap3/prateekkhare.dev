"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/site-content";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="font-display text-[18px] font-semibold leading-[1.2] text-[#111111]">
        Prateek Khare
      </Link>
      <nav>
        <ul className="flex items-center gap-6">
          {navigationLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-meta text-[13px] tracking-[0.048em] transition-colors duration-150 hover:text-[#111111] ${
                    isActive ? "font-semibold text-[#111111]" : "font-medium text-[#6B7280]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
