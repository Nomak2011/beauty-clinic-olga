export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
            className="hidden rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-dark md:inline-flex"
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

      {/* ===== Hero ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* Декоративные элементы */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-blue-light opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-lime/20 opacity-60 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Бейдж */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue-light px-4 py-1.5 text-xs font-medium tracking-wide text-blue-dark">
              <span className="inline-block size-1.5 rounded-full bg-blue-dark" />
              Косметология в Нюрнберге
            </span>

            {/* Заголовок */}
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Искусство естественного
              <span className="block text-blue">омоложения</span>
            </h1>

            {/* Подзаголовок */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Экспертный подход к вашей красоте. Индивидуальные программы
              омоложения без следов вмешательства — только естественный результат.
            </p>

            {/* Кнопки */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-foreground shadow-lg shadow-lime/30 transition-all hover:bg-lime-dark hover:shadow-lime-dark/30 sm:w-auto"
              >
                Записаться на консультацию
              </a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-100 px-8 py-4 text-sm font-medium text-gray-600 transition-colors hover:border-blue hover:text-foreground sm:w-auto"
              >
                Наши услуги
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>

            {/* Статистика */}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-gray-100 pt-10">
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">12+</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">лет опыта</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">3000+</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">процедур</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">98%</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">довольных</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Услуги ===== */}
      <section id="services" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Заголовок секции */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-wide text-blue-dark">Что мы предлагаем</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Наши услуги</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Комплексный подход к красоте и здоровью вашей кожи с использованием
              передовых методик и сертифицированных препаратов.
            </p>
          </div>

          {/* Сетка услуг */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Карточка 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-blue/5">
              {/* Декор */}
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">Инъекционная косметология</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Ботулинотерапия, контурная пластика, биоревитализация и мезотерапия.
                  Безопасные препараты премиум-класса для естественного результата.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
                >
                  Подробнее
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-blue/5">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">Аппаратные процедуры</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Лазерное омоложение, RF-лифтинг, микротоковая терапия. Современное
                  оборудование для безболезненных и эффективных процедур.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
                >
                  Подробнее
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-blue/5 sm:col-span-2 lg:col-span-1">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.654L18 9.75l-.259-1.5a3.375 3.375 0 0 0-2.491-2.491L13.75 5.5l1.5-.259a3.375 3.375 0 0 0 2.491-2.491L18 1.25l.259 1.5a3.375 3.375 0 0 0 2.491 2.491l1.5.259-1.5.259a3.375 3.375 0 0 0-2.491 2.491z" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">Эстетический уход</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Химические пилинги, уходовые программы, чистки и увлажнение.
                  Персонализированный подбор процедур для вашего типа кожи.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
                >
                  Подробнее
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
