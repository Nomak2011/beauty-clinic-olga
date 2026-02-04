"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar — контакты */}
      <div
        className={`overflow-hidden bg-teal-dark text-white transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            {/* Телефон */}
            <a href="tel:+4917612345678" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
              </svg>
              +49 176 123 456 78
            </a>
            {/* Email */}
            <a href="mailto:info@olgabaher.de" className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 sm:flex">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              info@olgabaher.de
            </a>
          </div>
          {/* Адрес */}
          <span className="hidden items-center gap-1.5 lg:flex">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
            </svg>
            N&uuml;rnberg, Deutschland
          </span>
        </div>
      </div>

      {/* Основной хедер — навигация */}
      <header
        className={`backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-3 shadow-md shadow-black/5"
            : "bg-white/80 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Логотип */}
          <a
            href="/"
            className={`font-semibold tracking-tight text-foreground transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            Olga&nbsp;Baher
          </a>

          {/* Навигация — desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-600 transition-colors hover:text-teal">
              Leistungen
            </a>
            <a href="#pricing" className="text-sm text-gray-600 transition-colors hover:text-teal">
              Preise
            </a>
            <a href="#about" className="text-sm text-gray-600 transition-colors hover:text-teal">
              &Uuml;ber uns
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className={`hidden rounded-full bg-teal font-semibold text-white transition-all duration-300 hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/25 md:inline-flex ${
              scrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm"
            }`}
          >
            Kontakt
          </a>

          {/* Мобильное меню — бургер */}
          <button
            className="flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label="Men&uuml; &ouml;ffnen"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
