import Image from "next/image";
import Header from "@/components/sections/Header";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingButtons />

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#487277]/60 via-[#5a8a8f]/40 to-[#d08a75]/15" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              {"Kosmetologie in Nürnberg"}
            </span>

            <h1 className="animate-fade-in-up animation-delay-200 mt-8 text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Medizinische Ästhetik &{" "}
              <span className="text-teal-light">Heilpraktik</span> in Nürnberg – sanfte Methoden, sichtbare Ergebnisse.
            </h1>

            <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              {"Fachkundige Betreuung für Ihre Schönheit. Individuelle Verjüngungsprogramme ohne sichtbare Eingriffe — nur natürliche Ergebnisse."}
            </p>

            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl sm:w-auto"
              >
                Beratungstermin buchen
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/15 px-8 py-4 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/25 sm:w-auto"
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

      {/* ===== Über uns ===== */}
      <section id="about" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
            {/* Фото */}
            <ScrollReveal className="w-full flex-shrink-0 lg:w-[45%]">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-teal/20" />
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=700&h=850&fit=crop&crop=top"
                  alt="Olga Baher — Fachkosmetikerin"
                  width={700}
                  height={850}
                  className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </ScrollReveal>

            {/* Текст */}
            <div className="flex-1">
              <ScrollReveal>
                <span className="text-sm font-medium tracking-wide text-teal">Ihre Expertin</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Olga Baher
                </h2>
                <p className="mt-2 text-lg font-medium text-teal">
                  {"Fachkosmetikerin für ästhetische Verfahren"}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  {"Mit über 12 Jahren Erfahrung in der ästhetischen Kosmetologie biete ich Ihnen individuelle Behandlungen auf höchstem Niveau. Mein Ziel ist es, Ihre natürliche Schönheit zu betonen und Ihr Wohlbefinden zu steigern — ohne sichtbare Eingriffe."}
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {"Jede Behandlung beginnt mit einer ausführlichen Beratung. Gemeinsam finden wir die optimale Lösung für Ihre individuellen Bedürfnisse."}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="mt-8 space-y-4">
                  {[
                    "Zertifizierte Fachkosmetikerin",
                    "Spezialisierung auf Injektionskosmetik",
                    "Fortbildungen in apparativen Verfahren",
                    "Regelmäßige Schulungen & Zertifizierungen",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-light">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-teal">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl"
                >
                  {"Beratungsgespräch vereinbaren"}
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Leistungen ===== */}
      <section id="services" className="relative overflow-hidden bg-[#3a5c60] py-24 sm:py-32">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-teal-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="text-sm font-medium tracking-wide text-teal-light/80">Unser Angebot</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Unsere Leistungen</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                {"Ein ganzheitlicher Ansatz für die Schönheit und Gesundheit Ihrer Haut mit modernsten Methoden und zertifizierten Präparaten."}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">Injektionskosmetik</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {"Botulinumtherapie, Konturierung, Biorevitalisierung und Mesotherapie. Sichere Premium-Präparate für natürliche Ergebnisse."}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-accent">
                    Mehr erfahren
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">Apparative Verfahren</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {"Laserverjüngung, RF-Lifting, Mikrostromtherapie. Modernste Geräte für schmerzfreie und wirksame Behandlungen."}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-accent">
                    Mehr erfahren
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="sm:col-span-2 lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal/5">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.654L18 9.75l-.259-1.5a3.375 3.375 0 0 0-2.491-2.491L13.75 5.5l1.5-.259a3.375 3.375 0 0 0 2.491-2.491L18 1.25l.259 1.5a3.375 3.375 0 0 0 2.491 2.491l1.5.259-1.5.259a3.375 3.375 0 0 0-2.491 2.491z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{"Ästhetische Pflege"}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {"Chemische Peelings, Pflegeprogramme, Reinigung und Feuchtigkeitspflege. Individuelle Auswahl der Behandlungen für Ihren Hauttyp."}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-accent">
                    Mehr erfahren
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Vorher / Nachher ===== */}
      <section id="results" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-wide text-teal">Ergebnisse</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"Vorher & Nachher"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {"Überzeugen Sie sich selbst von den Ergebnissen unserer Behandlungen. Bewegen Sie den Schieberegler, um den Unterschied zu sehen."}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <ScrollReveal delay={100}>
              <BeforeAfterSlider
                beforeSrc="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&crop=face"
                afterSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop&crop=face"
                label="Hautverjüngung"
              />
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <BeforeAfterSlider
                beforeSrc="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=800&fit=crop&crop=face"
                afterSrc="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=800&fit=crop&crop=face"
                label="Faltenbehandlung"
              />
            </ScrollReveal>

            <ScrollReveal delay={400} className="sm:col-span-2 lg:col-span-1">
              <BeforeAfterSlider
                beforeSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                afterSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&crop=face"
                label="Konturierung & Lifting"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <p className="mt-12 text-center text-sm text-gray-400">
              {"* Platzhalterbilder. Echte Behandlungsergebnisse werden in Kürze hinzugefügt."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Preise ===== */}
      <section id="pricing" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 size-[400px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-wide text-teal">Transparente Preise</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Unsere Preisliste
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {"Alle Preise verstehen sich als Richtwerte. Der genaue Preis wird nach einer persönlichen Beratung individuell festgelegt."}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Injektionsbehandlungen */}
            <ScrollReveal delay={100}>
              <div className="group relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Injektionsbehandlungen</h3>
                  </div>
                  <ul className="mt-6 space-y-1">
                    {[
                      { name: "Faltenunterspritzung Hyaluron", price: "ab XXX €" },
                      { name: "Biorevitalisierung", price: "ab XXX €" },
                      { name: "Sculptra-Injektion", price: "ab XXX €" },
                      { name: "Injektionslipolyse", price: "ab XXX €" },
                      { name: "Fadenlifting COG-Fäden", price: "ab XXX €" },
                    ].map((item) => (
                      <li key={item.name} className="group/item -mx-3 flex cursor-default items-center justify-between rounded-lg px-3 py-3 transition-all duration-300 hover:bg-accent/5">
                        <span className="text-sm text-gray-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-foreground">{item.name}</span>
                        <span className="text-sm font-semibold text-teal transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-accent">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Apparative Verfahren */}
            <ScrollReveal delay={250}>
              <div className="group relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-teal/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Apparative Verfahren</h3>
                  </div>
                  <ul className="mt-6 space-y-1">
                    {[
                      { name: "LPG Endermologie", price: "ab XXX €" },
                      { name: "RF Microneedling", price: "ab XXX €" },
                      { name: "IPL Hautverjüngung", price: "ab XXX €" },
                      { name: "Laser Haarentfernung", price: "ab XXX €" },
                      { name: "AquaFacial", price: "ab XXX €" },
                    ].map((item) => (
                      <li key={item.name} className="group/item -mx-3 flex cursor-default items-center justify-between rounded-lg px-3 py-3 transition-all duration-300 hover:bg-teal/5">
                        <span className="text-sm text-gray-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-foreground">{item.name}</span>
                        <span className="text-sm font-semibold text-teal transition-all duration-300 group-hover/item:scale-110">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Pflege & Wellness */}
            <ScrollReveal delay={400}>
              <div className="group relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute -top-6 -right-6 size-24 rounded-full bg-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Pflege & Wellness</h3>
                  </div>
                  <ul className="mt-6 space-y-1">
                    {[
                      { name: "Professionelles Peeling", price: "ab XXX €" },
                      { name: "Gesundheit & Wohlbefinden", price: "ab XXX €" },
                    ].map((item) => (
                      <li key={item.name} className="group/item -mx-3 flex cursor-default items-center justify-between rounded-lg px-3 py-3 transition-all duration-300 hover:bg-accent/5">
                        <span className="text-sm text-gray-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-foreground">{item.name}</span>
                        <span className="text-sm font-semibold text-teal transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-accent">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-xl bg-gradient-to-br from-teal-light/50 to-accent/10 p-4 transition-all duration-300 group-hover:from-teal-light/70 group-hover:to-accent/20">
                    <p className="text-xs leading-relaxed text-teal-dark">
                      <strong>Hinweis:</strong> Alle Behandlungen beginnen mit einem kostenlosen Beratungsgespräch, in dem wir Ihre Wünsche besprechen und einen individuellen Behandlungsplan erstellen.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-16 text-center">
              <a
                href="#contact"
                className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-10 py-5 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-dark bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover/btn:animate-shimmer group-hover/btn:opacity-100" />
                <span className="relative flex items-center gap-2">
                  Kostenlose Beratung anfragen
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Bewertungen ===== */}
      <section id="reviews" className="relative overflow-hidden bg-[#3a5c60] py-24 sm:py-32">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-wide text-accent-light">Kundenstimmen</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Was unsere Kunden sagen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                {"Ihre Zufriedenheit ist unser größter Erfolg. Lesen Sie, was unsere Kunden über ihre Erfahrungen berichten."}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Maria S.",
                treatment: "Faltenunterspritzung",
                text: "Ich bin absolut begeistert von dem Ergebnis! Frau Baher hat sich viel Zeit für die Beratung genommen und das Ergebnis sieht so natürlich aus. Sehr empfehlenswert!",
                rating: 5,
              },
              {
                name: "Christina W.",
                treatment: "AquaFacial",
                text: "Meine Haut hat sich nach der Behandlung komplett verändert. Sie ist viel strahlender und gepflegter. Die Atmosphäre in der Praxis ist sehr angenehm und professionell.",
                rating: 5,
              },
              {
                name: "Sabine M.",
                treatment: "RF Microneedling",
                text: "Nach nur wenigen Sitzungen sehe ich bereits deutliche Verbesserungen. Frau Baher erklärt alles sehr genau und man fühlt sich in guten Händen.",
                rating: 5,
              },
              {
                name: "Julia K.",
                treatment: "Biorevitalisierung",
                text: "Die beste Entscheidung, die ich für meine Haut getroffen habe! Das Team ist super freundlich und die Ergebnisse sprechen für sich.",
                rating: 5,
              },
              {
                name: "Anna L.",
                treatment: "LPG Endermologie",
                text: "Endlich eine Behandlung, die wirklich funktioniert! Ich komme regelmäßig und bin jedes Mal aufs Neue begeistert von der professionellen Betreuung.",
                rating: 5,
              },
              {
                name: "Petra H.",
                treatment: "IPL Hautverjüngung",
                text: "Ich hätte nie gedacht, dass meine Haut so gut aussehen kann. Frau Baher ist eine wahre Expertin auf ihrem Gebiet. Vielen Dank!",
                rating: 5,
              },
            ].map((review, index) => (
              <ScrollReveal key={review.name} delay={100 + index * 100}>
                <div className="group relative h-full rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                  {/* Glow effect */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-accent transition-transform duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mt-5 text-sm leading-relaxed text-white/80">
                      {`"${review.text}"`}
                    </p>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-accent/20 text-lg font-semibold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <p className="text-xs text-white/50">{review.treatment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust badges */}
          <ScrollReveal delay={300}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12">
              <div className="flex items-center gap-3 text-white/60">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                </svg>
                <span className="text-sm">Verifizierte Bewertungen</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-accent">4.9</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-sm">Durchschnittliche Bewertung</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                <span className="text-sm">98% zufriedene Kunden</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="relative overflow-hidden bg-white py-24 sm:py-32">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-40 -right-40 size-[400px] rounded-full bg-teal-light/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[300px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Header */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-sm font-medium tracking-wide text-teal">FAQ</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {"Häufig gestellte Fragen"}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {"Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Behandlungen. Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!"}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl"
                  >
                    Frage stellen
                  </a>
                  <a
                    href="tel:+4917634589928"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-teal hover:text-teal"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                    Anrufen
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column - Accordion */}
            <ScrollReveal delay={200}>
              <FAQAccordion
                items={[
                  {
                    question: "Tut die Behandlung weh?",
                    answer: "Die meisten unserer Behandlungen sind schmerzarm oder schmerzfrei. Bei Injektionsbehandlungen verwenden wir spezielle Betäubungscremes, um Ihren Komfort zu gewährleisten. Viele Patienten beschreiben das Gefühl als leichtes Prickeln oder Druckgefühl.",
                  },
                  {
                    question: "Wie lange hält das Ergebnis an?",
                    answer: "Die Haltbarkeit variiert je nach Behandlung. Hyaluronsäure-Behandlungen halten in der Regel 6-12 Monate, Sculptra bis zu 2 Jahre. Bei apparativen Verfahren wie RF-Microneedling sind die Ergebnisse langanhaltend, wobei regelmäßige Auffrischungen empfohlen werden.",
                  },
                  {
                    question: "Wie bereite ich mich auf die Behandlung vor?",
                    answer: "Wir empfehlen, 24 Stunden vor der Behandlung auf Alkohol und blutverdünnende Medikamente zu verzichten. Kommen Sie mit gereinigter Haut ohne Make-up. Bei der Erstberatung besprechen wir alle individuellen Vorbereitungsmaßnahmen.",
                  },
                  {
                    question: "Gibt es Nebenwirkungen?",
                    answer: "Mögliche Nebenwirkungen sind in der Regel mild und vorübergehend: leichte Rötungen, Schwellungen oder kleine Blutergüsse. Diese klingen meist innerhalb weniger Tage ab. Wir informieren Sie vor jeder Behandlung ausführlich über mögliche Risiken.",
                  },
                  {
                    question: "Wann sehe ich die Ergebnisse?",
                    answer: "Bei einigen Behandlungen wie Hyaluronsäure-Fillern sind die Ergebnisse sofort sichtbar. Bei anderen Verfahren wie RF-Microneedling oder Biorevitalisierung entwickelt sich das Ergebnis über mehrere Wochen, da die Kollagenproduktion angeregt wird.",
                  },
                  {
                    question: "Ist die Erstberatung kostenlos?",
                    answer: "Ja, die Erstberatung ist bei uns völlig kostenlos und unverbindlich. Wir nehmen uns Zeit, Ihre Wünsche zu verstehen, Ihre Haut zu analysieren und einen individuellen Behandlungsplan zu erstellen.",
                  },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Kontakt ===== */}
      <section id="contact" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[400px] rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 size-[300px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-wide text-teal">Kontakt</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Besuchen Sie uns
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {"Wir freuen uns auf Ihren Besuch! Vereinbaren Sie einen Termin oder kommen Sie einfach vorbei."}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Left column - Map */}
            <ScrollReveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.5!2d11.0766!3d49.4694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57a2c7d1d2e7%3A0x0!2sSchleifweg%2057%2C%2090409%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Praxis Olga Bakher Standort"
                />
              </div>
            </ScrollReveal>

            {/* Right column - Contact info */}
            <ScrollReveal delay={200}>
              <div className="flex h-full flex-col gap-6">
                {/* Contact cards */}
                <div className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/20 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adresse</h3>
                      <p className="mt-1 text-sm text-gray-600">Schleifweg 57</p>
                      <p className="text-sm text-gray-600">90409 Nürnberg</p>
                      <a
                        href="https://maps.google.com/?q=Schleifweg+57,+90409+Nürnberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal transition-colors hover:text-accent"
                      >
                        Route planen
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Kontaktdaten</h3>
                      <a href="tel:+4917634589928" className="mt-1 block text-sm text-gray-600 transition-colors hover:text-accent">
                        +49 176 345 899 28
                      </a>
                      <a href="mailto:praxisolgabakher@web.de" className="block text-sm text-gray-600 transition-colors hover:text-accent">
                        praxisolgabakher@web.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex-1 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/20 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Öffnungszeiten</h3>
                      <div className="mt-3 space-y-2">
                        {[
                          { days: "Montag – Mittwoch", hours: "14:00 – 19:00 Uhr" },
                          { days: "Donnerstag – Freitag", hours: "09:00 – 19:00 Uhr" },
                          { days: "Samstag", hours: "10:00 – 14:00 Uhr" },
                          { days: "Sonntag", hours: "Geschlossen", closed: true },
                        ].map((item) => (
                          <div key={item.days} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{item.days}</span>
                            <span className={item.closed ? "font-medium text-accent" : "font-medium text-foreground"}>
                              {item.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="tel:+4917634589928"
                  className="group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent p-6 text-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-dark bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover/btn:animate-shimmer group-hover/btn:opacity-100" />
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="relative">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                  </svg>
                  <span className="relative text-lg font-semibold">Jetzt anrufen</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#2a4a4d] pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <a href="/" className="text-2xl font-semibold text-white">
                Olga Bakher
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Ihre Expertin für ästhetische Kosmetologie in Nürnberg. Natürliche Schönheit durch moderne Behandlungsmethoden.
              </p>
              {/* Social links */}
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-300 hover:bg-accent hover:text-white"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-300 hover:bg-accent hover:text-white"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/4917634589928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h4>
              <ul className="mt-4 space-y-3">
                {[
                  { name: "Startseite", href: "#" },
                  { name: "Leistungen", href: "#services" },
                  { name: "Preise", href: "#pricing" },
                  { name: "Über uns", href: "#about" },
                  { name: "Ergebnisse", href: "#results" },
                  { name: "Kontakt", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Leistungen</h4>
              <ul className="mt-4 space-y-3">
                {[
                  "Faltenunterspritzung",
                  "Biorevitalisierung",
                  "RF Microneedling",
                  "AquaFacial",
                  "LPG Endermologie",
                  "Fadenlifting",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h4>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                  <span className="text-sm text-white/60">
                    Schleifweg 57<br />90409 Nürnberg
                  </span>
                </li>
                <li>
                  <a href="tel:+4917634589928" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-accent">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="flex-shrink-0 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                    +49 176 345 899 28
                  </a>
                </li>
                <li>
                  <a href="mailto:praxisolgabakher@web.de" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-accent">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="flex-shrink-0 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    praxisolgabakher@web.de
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} Praxis Olga Bakher. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/60">
                  Impressum
                </a>
                <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/60">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
