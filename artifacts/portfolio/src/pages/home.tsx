import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SLIDES = [
  {
    sentence: "Wir wachsen, aber niemand verantwortet wirklich die Roadmap.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80",
  },
  {
    sentence: "Unsere Katalogdaten aus verschiedenen Quellen passen einfach nicht zusammen.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
  },
  {
    sentence: "Unser Vertrieb lebt in Excel, nicht im CRM.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    sentence: "Unser PO ist kurzfristig weg, das Projekt kann nicht warten.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const formSchema = z.object({
    name: z.string().min(2, "Name ist erforderlich"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    topic: z.string().min(1, "Bitte wählen Sie ein Thema"),
    message: z.string().min(10, "Nachricht ist zu kurz"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Ich melde mich in Kürze bei Ihnen.",
    });
    form.reset();
  };

  return (
    <div className="bg-[#F4F0E8] min-h-screen text-[#1A1815] font-sans">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0D1930]/95 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#situationen" className="text-[#B8C2D4] hover:text-white transition-colors">Situationen</a>
            <a href="#ki" className="text-[#B8C2D4] hover:text-white transition-colors">KI</a>
            <a href="#track-record" className="text-[#B8C2D4] hover:text-white transition-colors">Track Record</a>
            <a href="#kontakt" className="text-[#60A5FA] hover:text-white transition-colors">Kontakt</a>
          </div>
          <button
            data-testid="button-mobile-menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#0D1930]/98 border-t border-[#ffffff15] px-6 pb-6 pt-4 flex flex-col gap-5 font-mono text-sm">
            {[
              { href: "#situationen", label: "Situationen" },
              { href: "#ki", label: "KI" },
              { href: "#track-record", label: "Track Record" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#B8C2D4] hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 01 HERO — Full-screen image slider */}
      <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${SLIDES[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Permanent dark overlay */}
        <div className="absolute inset-0 bg-[#0D1930]/72" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <p className="font-mono text-[#60A5FA] text-xs md:text-sm mb-8 uppercase tracking-[0.2em]">
              Für B2B-Scale-ups, Marketplaces und Konzern-Töchter mit eigenem Produkt-Footprint
            </p>

            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8"
              >
                "{SLIDES[currentSlide].sentence}"
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[#B8C2D4] italic text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            >
              Das sind keine Einzelfälle. Das sind die vier Situationen, in denen ich einsteige.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-10"
            >
              <p className="font-serif text-lg md:text-2xl text-white/90">
                Martin Schade. 10+ Jahre Produktführung bei Zalando Group und Enterprise SaaS, dreifacher Gründer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <Button
                data-testid="button-cta-contact"
                onClick={scrollToContact}
                className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-[#0D1930] rounded-none px-8 py-6 text-base font-medium"
              >
                Verfügbarkeit anfragen
              </Button>

              {/* Slide dots */}
              <div className="flex items-center gap-3">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`button-slide-${i}`}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === currentSlide
                        ? "w-6 h-2 bg-[#60A5FA]"
                        : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="bg-[#0D1930] border-t border-[#ffffff15]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-0">
          {[
            { num: "10+ Jahre", label: "B2B-Produktführung" },
            { num: "20M+", label: "Datenobjekte im Produktivbetrieb" },
            { num: "660+", label: "Marken auf einer Plattform" },
            { num: "3x", label: "Gründer, von 0 zum Launch" },
            { num: "20+", label: "Direct Reports, cross-funktional" },
          ].map((stat, i) => (
            <div key={i} className="p-6 md:p-8 border-r border-[#ffffff15] last:border-r-0 border-b md:border-b-0">
              <div className="font-serif text-2xl md:text-3xl text-[#60A5FA] mb-1">{stat.num}</div>
              <div className="font-mono text-xs text-[#B8C2D4] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 02 VIER SITUATIONEN */}
      <section id="situationen" className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">02</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Vier Situationen, ein Ansprechpartner</h2>
          </div>

          <div className="border-t border-[#1A1815]/20">
            {[
              {
                symptom: "Das Team liefert Features, aber es gibt keine Roadmap mit echtem Business-Impact. Entscheidungen fallen ad hoc, weil niemand die Priorisierungslogik verantwortet.",
                label: "INTERIM HEAD OF PRODUCT / VP PRODUCT",
                answer: "OKR-Aufbau, Roadmap-Ownership, Teamstruktur, Alignment bis C-Level. Für Scale-ups im Übergang von Founder-led Product zu echter Produktorganisation."
              },
              {
                symptom: "Katalogdaten aus mehreren Quellen sind inkonsistent, der Sync bricht immer wieder. Die Architektur ist für wenige Partner gebaut, nicht für viele.",
                label: "MARKETPLACE & DATENPRODUKT-AUDIT",
                answer: "Analyse der bestehenden Architektur, klares Konzept für Multi-Marketplace-Logik, konkrete Priorisierung, wo ML/Automatisierung den größten Hebel hätte."
              },
              {
                symptom: "Sales-Prozesse leben in Excel und im Kopf einzelner Mitarbeiter. Es gibt Tool-Wildwuchs ohne Integration, Leads versickern.",
                label: "SALES-PROZESS-AUTOMATISIERUNG",
                answer: "CRM-Aufbau, Lead-Scoring, Automatisierung der Drip-Prozesse, Integration der bestehenden Tools statt neuer Wildwuchs."
              },
              {
                symptom: "Der PO oder PM ist kurzfristig weg, der Backlog verwaist. Ein wichtiges Projekt braucht sofort erfahrene Führung, aber keine Festanstellung ist budgetiert.",
                label: "PROXY / FREELANCE PRODUCT OWNER",
                answer: "Eingebettete Produktverantwortung im Entwicklungsteam ab sofort, Backlog-Führung, Sprint-Begleitung, kontinuierliche Auslieferung."
              }
            ].map((block, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 border-b border-[#1A1815]/20"
              >
                <div className="text-lg leading-relaxed">{block.symptom}</div>
                <div>
                  <div className="font-mono text-sm text-[#60A5FA] mb-4 uppercase tracking-wider">{block.label}</div>
                  <div className="text-lg leading-relaxed text-[#1A1815]/80">{block.answer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 KI / AI-KOMPETENZ */}
      <section id="ki" className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">03</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-3xl leading-tight">
              KI-Produktentwicklung ist bei mir keine Folie, sondern produktiv ausgeliefert.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#ffffff33]">
            {[
              {
                title: "ML-basierte Produktähnlichkeitserkennung (XPLN)",
                text: "Als VP of Products bei XPLN habe ich eine ML-basierte Ähnlichkeitserkennung für Produktdaten von der Idee bis zur Produktionsreife verantwortet. Ergebnis: eine neue Cross-Sell-Umsatzquelle, ausgerollt auf eine Plattform mit 20+ Millionen Artikeln, mit spürbar reduziertem manuellem Analyseaufwand für Enterprise-Kunden."
              },
              {
                title: "KI als Teil des täglichen Produkt-Werkzeugkastens",
                text: "Prompt Engineering und LLM-Produktintegration sind aktiver Teil meines Stacks, von Feature-Spezifikationen bis zur Automatisierung wiederkehrender Produktprozesse mit Make und Zapier."
              },
              {
                title: "Strategische Einordnung",
                text: "Ich bewerte KI-Features nicht isoliert, sondern als Teil der Produktstrategie: Wo schafft ein Modell echten Kundennutzen, wo ist es nur Kosten. Diese Einordnung war Kernbestandteil meiner Advisory-Mandate."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 border-b border-r border-[#ffffff33]"
              >
                <h3 className="font-serif text-2xl mb-6 text-[#60A5FA]">{card.title}</h3>
                <p className="text-[#B8C2D4] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 TRACK RECORD */}
      <section id="track-record" className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">04</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Track Record</h2>
          </div>

          <div className="space-y-0 border-t border-[#1A1815]/15">
            {([
              {
                company: "RecyClaim UG · Nürnberg",
                role: "FOUNDER & CEO · 2024–2025",
                intro: "B2B-Marketplace für industrielle Stoffströme, von der Idee bis zum Markttest.",
                bullets: [
                  "Vollständige Plattformarchitektur eigenständig entworfen: Datenmodelle, Matching-Logik, Compliance-Workflows, Rückverfolgbarkeit",
                  "Strategische Partnerschaften mit Rehau und KösterBau aufgebaut, erste kommerzielle Transaktionen durchgeführt",
                  "Geschäftsmodell nach Validierung strategisch beendet (Q1 2025)",
                ],
              },
              {
                company: "TreePlantingProjects gUG · Impact-Plattform",
                role: "CPO · 2020–2024",
                intro: "Aufbau einer zweiseitigen Plattform zur Vermittlung von Dienstleistungen rund um den Wald, Anbindung von Waldbesitzern und Forstdienstleistern inklusive Fördermöglichkeiten für Aufforstungsprojekte.",
                bullets: [
                  "Plattform von Grund auf aufgebaut, 2 Mio. € Umsatz",
                  "Über 200.000 gepflanzte Bäume",
                  "12 Corporate-Partnerschaften aufgebaut, Team von 10 Personen im Hauptjahr geführt als CPO",
                ],
              },
              {
                company: "XPLN GmbH · Stuttgart",
                role: "VP OF PRODUCTS · 2022–2023",
                intro: "Enterprise Retail Intelligence SaaS, 120+ Enterprise-Kunden, Pricing Intelligence, Wettbewerbsbeobachtung, KI-gestützte Analytics.",
                bullets: [
                  "Roadmap-Verantwortung über drei Kernmodule, OKR-basierte Priorisierung mit der Geschäftsführung",
                  "ML-basierte Produktähnlichkeitserkennung eingeführt, neue Cross-Sell-Umsatzquelle",
                  "Plattform auf 20M+ Artikel skaliert, cross-funktionales Team bis zu 12 Personen geführt",
                ],
              },
              {
                company: "Tradebyte Software GmbH · Zalando Group",
                role: "2015–2021",
                intro: "Europas führende B2B-Marktplatz-Konnektivitätsplattform, drei Stationen über ca. 7 Jahre.",
                bullets: [
                  "Team Lead Product (TB.One): 660+ Marken, 10,5M+ Produkte, 40+ Kanäle, Fehlerquote im Solution Center um 80% reduziert, NPS um 20% gesteigert",
                  "Team Lead Integration: Aufbau und Führung eines 15-köpfigen Integration-Engineering-Teams",
                  "Senior PM Business Development: strategische Zalando-Projekte, B2B-Wholesale-Produktforschung",
                ],
              },
            ] as { company: string; role: string; intro: string; bullets: string[] }[]).map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-[#1A1815]/15"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl md:text-2xl mb-2 leading-snug">{item.company}</h3>
                  <div className="font-mono text-xs text-[#60A5FA] tracking-widest uppercase">{item.role}</div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[#1A1815]/80 leading-relaxed mb-5">{item.intro}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[#1A1815]/75 leading-relaxed">
                        <span className="mt-[9px] shrink-0 w-4 h-px bg-[#60A5FA]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 REFERENZEN */}
      <section className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">05</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Referenzen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#ffffff33]">
            {[
              {
                quote: "Martin combines high-level strategic thinking with hands-on execution, an outstanding CEO and a strong asset to any organisation focused on growth, innovation, and long-term value creation.",
                author: "GÖTZ THÜMECKE · Head of Global Portfolio Mgmt, New Ventures"
              },
              {
                quote: "His ability to bring people together, manage stakeholders seamlessly, and push initiatives forward is outstanding. He doesn't just talk about change, he takes action and delivers real results.",
                author: "RUSLAN VOROBEV · Head of Product bei Resycure, Ex-BASF, Ex-Tomra"
              },
              {
                quote: "I worked with Martin some years ago as his client when he was a consultant. He is diligent, smart and persistent. He delivers results and does not call it a day until the job is done. And beyond that, always calm and in a good mood. It was always a big pleasure!",
                author: "JOACHIM SCHOLZ · Portfolio Partner, Findos Investor"
              }
            ].map((ref, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 border-b border-r border-[#ffffff33] flex flex-col justify-between"
              >
                <div className="font-serif text-xl italic leading-relaxed text-[#B8C2D4] mb-8">"{ref.quote}"</div>
                <div className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase">— {ref.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 ZERTIFIKATE & QUALIFIKATIONEN */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">06</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Zertifikate & Qualifikationen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-6">Zertifizierungen</h3>
              {["Professional Scrum Master I (PSM I, Scrum.org)", "Six Sigma Green Belt", "Product Strategy & Roadmap", "Abfallbeauftragter"].map((cert, i) => (
                <div key={i} className="font-mono text-sm p-4 border border-[#60A5FA]/30 bg-white/50 text-[#1A1815]">
                  {cert}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl mb-6">Ausbildung</h3>
              <div className="pb-4 border-b border-[#1A1815]/10">
                <div className="font-mono text-sm text-[#60A5FA] mb-2">B.Sc. Wirtschaftswissenschaften</div>
                <div className="text-[#1A1815]/80">FernUniversität Hagen · 2009–2013</div>
              </div>
              <div>
                <div className="font-mono text-sm text-[#60A5FA] mb-2">Controlling, Finance and Economic Policy</div>
                <div className="text-[#1A1815]/80">Universität der Bundeswehr München · 2005–2009</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl mb-6">Sprachen</h3>
              <div className="space-y-3 font-mono text-sm text-[#1A1815]/80">
                <div>Deutsch — Muttersprache (C2)</div>
                <div>Englisch — verhandlungssicher (C1)</div>
                <div>Russisch — Grundkenntnisse (A2)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 TOOLS & STACK */}
      <section className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">07</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Tools & Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#ffffff33]">
            {[
              { cat: "Product / Collaboration", tools: "Jira, Confluence, Figma, Miro, Productboard, Linear, Notion" },
              { cat: "Daten / Analytics", tools: "SQL, Tableau, Metabase, Google Analytics, Mixpanel" },
              { cat: "KI / Automatisierung", tools: "Prompt Engineering, LLM-Produktintegration, AI Feature Specs, Make, Zapier" },
              { cat: "Technisch", tools: "REST APIs, JSON, Webhooks, React, Webflow, GitHub, EDIFACT" }
            ].map((stack, i) => (
              <div key={i} className="p-8 border-b border-r border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-6 tracking-widest uppercase">{stack.cat}</div>
                <div className="text-[#B8C2D4] leading-relaxed text-lg">{stack.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 ÜBER MICH */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">08</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Über mich</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-4 lg:col-span-5 aspect-[3/4] border border-[#60A5FA]/30 flex items-center justify-center bg-white/50">
              <div className="font-mono text-sm text-[#1A1815]/40 tracking-widest uppercase">Foto einfügen</div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-7 space-y-6 text-lg leading-relaxed text-[#1A1815]/90">
              <p>
                Ich bin B2B-Plattform-Builder mit über 10 Jahren Produktverantwortung im Enterprise- und Marktplatzumfeld, kombiniert mit dreifacher Gründererfahrung (Riometa, Shopfinity, RecyClaim). Diese Kombination aus Führungserfahrung in Konzernstrukturen (Zalando Group) und dem Aufbau eigener Plattformen von Null bedeutet: Ich kenne beide Seiten, die etablierte Organisation und die frühe, unsichere Phase, in der noch nichts feststeht.
              </p>
              <p>
                Vor meiner Produktkarriere war ich acht Jahre Offizier der Bundeswehr, verantwortlich für 40 Personen in drei Teams unter einsatznahen Bedingungen. Strukturierte Entscheidungsfindung unter Unsicherheit und Stakeholder-Abstimmung unter Druck ist keine Floskel, sondern die Grundlage, auf der meine gesamte spätere Führungsarbeit aufbaut.
              </p>
              <p>
                Ich arbeite dort, wo Produktführung, Marktplatz-Ökonomie und Datenprodukte zusammentreffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 KONTAKT */}
      <section id="kontakt" className="py-32 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[#60A5FA] text-lg">09</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-4 mb-4">Let's talk.</h2>
            <p className="text-[#B8C2D4] text-xl">30 Minuten, kein Deck.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg h-12 text-white placeholder:text-white/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">E-Mail</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg h-12 text-white placeholder:text-white/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">Ich suche:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus:ring-0 focus:border-[#60A5FA] text-lg h-12 text-white">
                              <SelectValue placeholder="Bitte wählen..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0D1930] border-[#ffffff33] text-white font-sans">
                            <SelectItem value="interim" className="focus:bg-[#60A5FA]/20 focus:text-white">Interim-Leitung</SelectItem>
                            <SelectItem value="audit" className="focus:bg-[#60A5FA]/20 focus:text-white">Marketplace-Audit</SelectItem>
                            <SelectItem value="sales" className="focus:bg-[#60A5FA]/20 focus:text-white">Sales-Prozess-Automatisierung</SelectItem>
                            <SelectItem value="proxy" className="focus:bg-[#60A5FA]/20 focus:text-white">Proxy Product Owner</SelectItem>
                            <SelectItem value="sonstiges" className="focus:bg-[#60A5FA]/20 focus:text-white">Sonstiges</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">Nachricht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-[#ffffff33] rounded-none focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg min-h-[150px] text-white resize-y"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-[#0D1930] rounded-none h-14 text-lg font-medium mt-8"
                  >
                    Nachricht senden
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-8 pt-8 md:pt-0">
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">E-Mail</div>
                <a href="mailto:martin.schd@gmail.com" className="text-xl hover:text-[#60A5FA] transition-colors">martin.schd@gmail.com</a>
              </div>
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">Telefon</div>
                <a href="tel:+491629161676" className="text-xl hover:text-[#60A5FA] transition-colors">+49 162 9161676</a>
              </div>
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">LinkedIn</div>
                <a href="https://linkedin.com/in/martinschade-1b854225" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#60A5FA] transition-colors">linkedin.com/in/martinschade-1b854225</a>
              </div>
              <div>
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">Standort</div>
                <div className="text-xl text-[#B8C2D4]">Nürnberg / DACH / Remote</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0a1222] py-8 text-center border-t border-[#ffffff11]">
        <div className="font-mono text-xs text-[#B8C2D4]/50">
          © {new Date().getFullYear()} Martin Schade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
