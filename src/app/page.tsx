import Image from "next/image";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1080&fit=crop"
          alt={"Ästhetische Kosmetologie in Nürnberg"}
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c5a5e]/75 via-[#3a7378]/55 to-[#4a9ba3]/30" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-2xl">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <span className="inline-block size-1.5 rounded-full bg-teal-light" />
              {"Kosmetologie in Nürnberg"}
            </span>

            <h1 className="animate-fade-in-up animation-delay-200 mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Die Kunst der
              <br />
              {"natürlichen"}
              <span className="block text-teal-light">{"Verjüngung"}</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              {"Fachkundige Betreuung für Ihre Schönheit. Individuelle Verjüngungsprogramme ohne sichtbare Eingriffe — nur natürliche Ergebnisse."}
            </p>

            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-dark shadow-lg transition-all duration-300 hover:bg-teal-light hover:shadow-xl sm:w-auto"
              >
                Beratungstermin buchen
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Unsere Leistungen
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in animation-delay-800 absolute right-0 bottom-0 left-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-start gap-12 px-6 py-6 lg:gap-16 lg:px-8">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">12+</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">3000+</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">Behandlungen</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">98%</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">zufrieden</p>
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
              {`Ein ganzheitlicher Ansatz f\u00fcr die Sch\u00f6nheit und Gesundheit Ihrer Haut mit modernsten Methoden und zertifizierten Pr\u00e4paraten.`}
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
                  {`Sichere Premium-Pr\u00e4parate f\u00fcr nat\u00fcrliche Ergebnisse.`}
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
                  {`Laserverj\u00fcngung, RF-Lifting, Mikrostromtherapie. Modernste Ger\u00e4te f\u00fcr schmerzfreie und wirksame Behandlungen.`}
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

                <h3 className="mt-6 text-lg font-semibold text-foreground">{`\u00c4sthetische Pflege`}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Chemische Peelings, Pflegeprogramme, Reinigung und Feuchtigkeitspflege.
                  {`Individuelle Auswahl der Behandlungen f\u00fcr Ihren Hauttyp.`}
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
