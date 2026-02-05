"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", label: "Leistungen" },
    { href: "#results", label: "Ergebnisse" },
    { href: "#pricing", label: "Preise" },
    { href: "#about", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: "#3a5c60",
          maxHeight: scrolled ? "0px" : "48px",
          opacity: scrolled ? 0 : 1,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+4917634589928" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
              </svg>
              +49 176 345 899 28
            </a>
            <a href="mailto:praxisolgabakher@web.de" className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 sm:flex">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              praxisolgabakher@web.de
            </a>
          </div>
          <span className="hidden items-center gap-1.5 lg:flex">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
            </svg>
            Nürnberg, Deutschland
          </span>
        </div>
      </div>

      {/* Main header */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          padding: scrolled ? "6px 16px 0" : "0",
        }}
      >
        <header
          className="transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: scrolled ? "rgba(58, 92, 96, 0.97)" : "rgba(72, 114, 119, 0.85)",
            backdropFilter: "blur(12px)",
            padding: scrolled ? "8px 0" : "20px 0",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.1)"
              : "none",
            borderRadius: scrolled ? "16px" : "0",
            maxWidth: scrolled ? "1200px" : "100%",
            margin: scrolled ? "0 auto" : "0",
          }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
            <a
              href="/"
              className="font-semibold tracking-tight text-white transition-all duration-500"
              style={{ fontSize: scrolled ? "0.95rem" : "1.25rem" }}
            >
              Olga&nbsp;Bakher
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full border border-white/30 font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-[#3a5c60] lg:inline-flex"
              style={{
                padding: scrolled ? "5px 16px" : "10px 24px",
                fontSize: scrolled ? "0.7rem" : "0.875rem",
              }}
            >
              Termin buchen
            </a>

            {/* Mobile burger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex size-10 items-center justify-center rounded-lg text-white lg:hidden"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <span className="sr-only">{menuOpen ? "Menü schließen" : "Menü öffnen"}</span>
              <div className="relative h-5 w-6">
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
                    menuOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-0.5 w-6 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
                    menuOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#3a5c60] shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Close button */}
          <div className="flex items-center justify-between p-6">
            <span className="text-lg font-semibold text-white">Menü</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex size-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:text-white"
              aria-label="Menü schließen"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    style={{
                      animationDelay: menuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="border-t border-white/10 p-6">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-accent-dark"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Termin buchen
            </a>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+4917634589928"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
                +49 176 345 899 28
              </a>
              <a
                href="mailto:praxisolgabakher@web.de"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                praxisolgabakher@web.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
