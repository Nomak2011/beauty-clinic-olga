import Image from "next/image";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-0">
        {/* Декоративные элементы */}
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-blue-light/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 size-80 rounded-full bg-lime/10 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:min-h-screen lg:flex-row lg:gap-16 lg:px-8">
          {/* Левая колонка — текст */}
          <div className="relative z-10 flex-1 pt-8 lg:py-32">
            {/* Бейдж */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue-light px-4 py-1.5 text-xs font-medium tracking-wide text-blue-dark">
              <span className="inline-block size-1.5 rounded-full bg-blue-dark" />
              Косметология в Нюрнберге
            </span>

            {/* Заголовок */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Искусство
              <br />
              естественного
              <span className="block text-blue">омоложения</span>
            </h1>

            {/* Подзаголовок */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
              Экспертный подход к вашей красоте. Индивидуальные программы
              омоложения без следов вмешательства — только естественный результат.
            </p>

            {/* Кнопки */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-foreground shadow-lg shadow-lime/25 transition-all duration-300 hover:bg-lime-dark hover:shadow-xl hover:shadow-lime-dark/25 sm:w-auto"
              >
                Записаться на консультацию
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-100 px-8 py-4 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-blue/40 hover:text-foreground sm:w-auto"
              >
                Наши услуги
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>

            {/* Статистика */}
            <div className="mt-14 grid max-w-sm grid-cols-3 gap-8 border-t border-gray-100 pt-8">
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

          {/* Правая колонка — изображение */}
          <div className="relative flex flex-1 items-end justify-center lg:self-stretch">
            {/* Фоновый декор за фото */}
            <div className="absolute bottom-0 right-0 h-[85%] w-[90%] rounded-t-[3rem] bg-gradient-to-b from-blue-light/60 to-blue-light/20" />

            <div className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop&crop=top"
                alt="Косметолог — эстетическая процедура"
                width={800}
                height={1000}
                priority
                className="h-auto w-full rounded-t-[2.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Услуги ===== */}
      <section id="services" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Заголовок секции */}
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-blue-dark">Что мы предлагаем</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Наши услуги</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Комплексный подход к красоте и здоровью вашей кожи с использованием
              передовых методик и сертифицированных препаратов.
            </p>
          </div>

          {/* Сетка услуг */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Карточка 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue/5">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Инъекционная косметология</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Ботулинотерапия, контурная пластика, биоревитализация и мезотерапия.
                  Безопасные препараты премиум-класса для естественного результата.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
                >
                  Подробнее
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue/5">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Аппаратные процедуры</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Лазерное омоложение, RF-лифтинг, микротоковая терапия. Современное
                  оборудование для безболезненных и эффективных процедур.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
                >
                  Подробнее
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue/5 sm:col-span-2 lg:col-span-1">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-blue-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-light text-blue-dark">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.654L18 9.75l-.259-1.5a3.375 3.375 0 0 0-2.491-2.491L13.75 5.5l1.5-.259a3.375 3.375 0 0 0 2.491-2.491L18 1.25l.259 1.5a3.375 3.375 0 0 0 2.491 2.491l1.5.259-1.5.259a3.375 3.375 0 0 0-2.491 2.491z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Эстетический уход</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Химические пилинги, уходовые программы, чистки и увлажнение.
                  Персонализированный подбор процедур для вашего типа кожи.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-dark transition-colors hover:text-blue"
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
