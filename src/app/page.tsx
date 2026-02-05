import Image from "next/image";
import Header from "@/components/sections/Header";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#487277]/60 via-[#5a8a8f]/40 to-[#d08a75]/15" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-2xl">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
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
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl sm:w-auto"
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
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="text-sm font-medium tracking-wide text-teal">Unser Angebot</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unsere Leistungen</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
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

      {/* ===== Über uns ===== */}
      <section id="about" className="relative overflow-hidden bg-[#3a5c60] py-24 sm:py-32">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-teal-light/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
            {/* Фото */}
            <ScrollReveal className="w-full flex-shrink-0 lg:w-[45%]">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-teal-light/20" />
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
                <span className="text-sm font-medium tracking-wide text-teal-light/80">Ihre Expertin</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Olga Baher
                </h2>
                <p className="mt-2 text-lg font-medium text-teal-light">
                  {"Fachkosmetikerin für ästhetische Verfahren"}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-white/75">
                  {"Mit über 12 Jahren Erfahrung in der ästhetischen Kosmetologie biete ich Ihnen individuelle Behandlungen auf höchstem Niveau. Mein Ziel ist es, Ihre natürliche Schönheit zu betonen und Ihr Wohlbefinden zu steigern — ohne sichtbare Eingriffe."}
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/75">
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
                      <div className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-light/20">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-teal-light">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
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
      <section id="pricing" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 1.5 1.5 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Injektionsbehandlungen</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    { name: "Faltenunterspritzung Hyaluron", price: "ab XXX €" },
                    { name: "Biorevitalisierung", price: "ab XXX €" },
                    { name: "Sculptra-Injektion", price: "ab XXX €" },
                    { name: "Injektionslipolyse", price: "ab XXX €" },
                    { name: "Fadenlifting COG-Fäden", price: "ab XXX €" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-semibold text-teal">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Apparative Verfahren */}
            <ScrollReveal delay={250}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.43a2.25 2.25 0 0 1-2.133 1.57H8.603a2.25 2.25 0 0 1-2.134-1.57L5 14.5m14 0H5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Apparative Verfahren</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    { name: "LPG Endermologie", price: "ab XXX €" },
                    { name: "RF Microneedling", price: "ab XXX €" },
                    { name: "IPL Hautverjüngung", price: "ab XXX €" },
                    { name: "Laser Haarentfernung", price: "ab XXX €" },
                    { name: "AquaFacial", price: "ab XXX €" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-semibold text-teal">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Pflege & Wellness */}
            <ScrollReveal delay={400}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Pflege & Wellness</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    { name: "Professionelles Peeling", price: "ab XXX €" },
                    { name: "Gesundheit & Wohlbefinden", price: "ab XXX €" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-semibold text-teal">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl bg-teal-light/50 p-4">
                  <p className="text-xs leading-relaxed text-teal-dark">
                    <strong>Hinweis:</strong> Alle Behandlungen beginnen mit einem kostenlosen Beratungsgespräch, in dem wir Ihre Wünsche besprechen und einen individuellen Behandlungsplan erstellen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl"
              >
                Kostenlose Beratung anfragen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
