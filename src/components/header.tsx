"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Work" },
    { href: "/sobre", label: "About" },
    { href: "/contato", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHome && !menuOpen
          ? "bg-transparent"
          : "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`text-lg md:text-xl tracking-[0.25em] font-light uppercase transition-colors ${
            isHome && !menuOpen ? "text-white drop-shadow-md" : "text-[var(--foreground)]"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Iman Abou Tuka
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors px-3 py-2 ${
                isHome
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              } ${pathname === link.href ? (isHome ? "text-white" : "text-[var(--foreground)]") : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
            isHome && !menuOpen ? "text-white" : "text-[var(--foreground)]"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-[3.5px] bg-[var(--foreground)]"
                : isHome
                  ? "bg-white"
                  : "bg-[var(--foreground)]"
            }`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-[3.5px] bg-[var(--foreground)]"
                : isHome
                  ? "bg-white"
                  : "bg-[var(--foreground)]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)] px-6 pb-6">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-[0.1em] uppercase py-3 px-2 transition-colors ${
                  pathname === link.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
