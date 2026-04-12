"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHome
          ? "bg-transparent"
          : "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl tracking-[0.25em] font-light uppercase transition-colors ${
            isHome ? "text-white drop-shadow-md" : "text-[var(--foreground)]"
          }`}
        >
          Iman Abou Tuka
        </Link>
        <div className="flex items-center gap-8">
          {[
            { href: "/", label: "Work" },
            { href: "/sobre", label: "About" },
            { href: "/contato", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                isHome
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              } ${pathname === link.href ? (isHome ? "text-white" : "text-[var(--foreground)]") : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
