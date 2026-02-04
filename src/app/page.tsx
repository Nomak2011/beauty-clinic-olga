import Image from "next/image";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-0">
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-teal-light/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 size-80 rounded-full bg-teal/10 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:min-h-screen lg:flex-row lg:gap-16 lg:px-8">
          {/* Левая колонка — текст */}
          <div className="relative z-10 flex-1 pt-8 lg:py-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-light px-4 py-1.5 text-xs font-medium tracking-wide text-teal-dark">
              <span className="inline-block size-1.5 rounded-full bg-teal" />
              Kosmetologie in N&uuml;rnberg
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Die Kunst der
              <br />
              nat&uuml;rlichen
              <span className="block text-teal">Verj&uuml;ngung</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
              Fachkundige Betreuung f&uuml;r Ihre Sch&ouml;nheit. Individuelle
              Verj&uuml;ngungsprogramme ohne sichtbare Eingriffe — nur nat&uuml;rliche
              Ergebnisse.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-all duration-300 hover:bg-teal-dark hover:shadow-xl hover:shadow-teal-dark/25 sm:w-auto"
              >
                Beratungstermin buchen
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-100 px-8 py-4 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-teal/30 hover:text-foreground sm:w-auto"
              >
                Unsere Leistungen
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>

            <div className="mt-14 grid max-w-sm grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">12+</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">3000+</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">Behandlungen</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">98%</p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">zufrieden</p>
              </div>
            </div>
          </div>

          {/* Правая колонка — изображение */}
          <div className="relative flex flex-1 items-end justify-center lg:self-stretch">
            <div className="absolute bottom-0 right-0 h-[85%] w-[90%] rounded-t-[3rem] bg-gradient-to-b from-teal-light/60 to-teal-light/20" />

            <div className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop&crop=top"
                alt="Kosmetikerin bei einer &auml;sthetischen Behandlung"
                width={800}
                height={1000}
                priority
                className="h-auto w-full rounded-t-[2.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Leistungen ===== */}
      <section id="services" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-teal">Unser Angebot</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unsere Leistungen</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Ein ganzheitlicher Ansatz f&uuml;r die Sch&ouml;nheit und Gesundheit Ihrer Haut
              mit modernsten Methoden und zertifizierten Pr&auml;paraten.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Карточка 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Injektionskosmetik</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Botulinumtherapie, Konturierung, Biorevitalisierung und Mesotherapie.
                  Sichere Premium-Pr&auml;parate f&uuml;r nat&uuml;rliche Ergebnisse.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
                >
                  Mehr erfahren
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Apparative Verfahren</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Laserverj&uuml;ngung, RF-Lifting, Mikrostromtherapie. Modernste Ger&auml;te
                  f&uuml;r schmerzfreie und wirksame Behandlungen.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
                >
                  Mehr erfahren
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5 sm:col-span-2 lg:col-span-1">
              <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.654L18 9.75l-.259-1.5a3.375 3.375 0 0 0-2.491-2.491L13.75 5.5l1.5-.259a3.375 3.375 0 0 0 2.491-2.491L18 1.25l.259 1.5a3.375 3.375 0 0 0 2.491 2.491l1.5.259-1.5.259a3.375 3.375 0 0 0-2.491 2.491z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">&Auml;sthetische Pflege</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Chemische Peelings, Pflegeprogramme, Reinigung und Feuchtigkeitspflege.
                  Individuelle Auswahl der Behandlungen f&uuml;r Ihren Hauttyp.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
                >
                  Mehr erfahren
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
