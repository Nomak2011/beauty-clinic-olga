"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm shadow-black/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Логотип */}
        <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Olga&nbsp;Baher
        </a>

        {/* Навигация — desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm text-gray-600 transition-colors hover:text-foreground">
            Услуги
          </a>
          <a href="#pricing" className="text-sm text-gray-600 transition-colors hover:text-foreground">
            Прайс
          </a>
          <a href="#about" className="text-sm text-gray-600 transition-colors hover:text-foreground">
            О нас
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-lime-dark hover:shadow-lg hover:shadow-lime/25 md:inline-flex"
        >
          Связаться
        </a>

        {/* Мобильное меню — бургер */}
        <button
          className="flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Открыть меню"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
