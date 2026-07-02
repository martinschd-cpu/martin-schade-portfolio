import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useToast();

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
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-mono text-[#60A5FA] font-medium tracking-wider text-lg">MS</div>
          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            <a href="#hero" className="text-[#B8C2D4] hover:text-white transition-colors">01 Hero</a>
            <a href="#situationen" className="text-[#B8C2D4] hover:text-white transition-colors">02 Situationen</a>
            <a href="#ki" className="text-[#B8C2D4] hover:text-white transition-colors">03 KI</a>
            <a href="#track-record" className="text-[#B8C2D4] hover:text-white transition-colors">04 Track Record</a>
            <a href="#kontakt" className="text-[#60A5FA] hover:text-white transition-colors">09 Kontakt</a>
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
              { href: "#hero", label: "01 Hero" },
              { href: "#situationen", label: "02 Situationen" },
              { href: "#ki", label: "03 KI" },
              { href: "#track-record", label: "04 Track Record" },
              { href: "#kontakt", label: "09 Kontakt" },
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

      {/* 01 HERO */}
      <section
        id="hero"
        className="relative text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-[#0D1930]/82" />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <p className="font-mono text-[#60A5FA] text-sm md:text-base mb-8 uppercase tracking-widest">
              Für B2B-Scale-ups, Marketplaces und Konzern-Töchter mit eigenem Produkt-Footprint
            </p>

            <div className="space-y-4 mb-12">
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
                "Wir wachsen, aber niemand verantwortet wirklich die Roadmap."
              </motion.h1>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#B8C2D4]">
                "Unsere Katalogdaten aus verschiedenen Quellen passen einfach nicht zusammen."
              </motion.h1>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white/60">
                "Unser Vertrieb lebt in Excel, nicht im CRM."
              </motion.h1>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white/40">
                "Unser PO ist kurzfristig weg, das Projekt kann nicht warten."
              </motion.h1>
            </div>

            <motion.p variants={fadeInUp} className="text-[#B8C2D4] italic text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
              Das sind keine Einzelfälle. Das sind die vier Situationen, in denen ich einsteige.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-12">
              <p className="font-serif text-xl md:text-2xl">Martin Schade. 10+ Jahre Produktführung bei Zalando Group und Enterprise SaaS, dreifacher Gründer.</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button 
                onClick={scrollToContact}
                className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-[#0D1930] rounded-none px-8 py-6 text-lg font-medium"
              >
                Verfügbarkeit anfragen
              </Button>
            </motion.div>
          </motion.div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-[#ffffff33]">
            {[
              { num: "10+ Jahre", label: "B2B-Produktführung" },
              { num: "20M+", label: "Datenobjekte im Produktivbetrieb gesteuert" },
              { num: "660+", label: "Marken auf einer Plattform vereint" },
              { num: "3x", label: "Gründer, von 0 zum Launch" },
              { num: "20+", label: "Direct Reports, cross-funktional" },
            ].map((stat, i) => (
              <div key={i} className="p-6 border-b md:border-b-0 border-r border-[#ffffff33] last:border-r-0">
                <div className="font-serif text-3xl md:text-4xl text-[#60A5FA] mb-2">{stat.num}</div>
                <div className="font-mono text-xs text-[#B8C2D4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="space-y-16">
            {[
              {
                company: "XPLN GmbH, Stuttgart",
                role: "VP OF PRODUCTS · 2022–2023",
                desc: "Enterprise Retail Intelligence SaaS, 120+ Enterprise-Kunden, Pricing Intelligence, Wettbewerbsbeobachtung, KI-gestützte Analytics. Roadmap-Verantwortung über drei Kernmodule, OKR-basierte Priorisierung mit der Geschäftsführung. ML-basierte Produktähnlichkeitserkennung eingeführt, neue Cross-Sell-Umsatzquelle. Plattform auf 20M+ Artikel skaliert. Cross-funktionales Team bis zu 12 Personen geführt."
              },
              {
                company: "Tradebyte Software GmbH · Zalando Group",
                role: "TEAM LEAD PRODUCT / SENIOR PM · 2015–2021",
                desc: "Europas führende B2B-Marktplatz-Konnektivitätsplattform, drei Stationen über ca. 7 Jahre.\n- Team Lead Product (TB.One): 660+ Marken, 10,5M+ Produkte, 40+ Kanäle, Fehlerquote im Solution Center um 80% reduziert, NPS um 20% gesteigert, neue Pricing-Engine eingeführt.\n- Team Lead Integration: Aufbau und Führung eines 15-köpfigen Integration-Engineering-Teams.\n- Senior PM Business Development: strategische Zalando-Projekte, B2B-Wholesale-Produktforschung."
              },
              {
                company: "RecyClaim UG, Nürnberg",
                role: "FOUNDER & CEO · 2024–2025",
                desc: "B2B-Marketplace für industrielle Stoffströme. Vollständige Plattformarchitektur entworfen: Datenmodelle, Matching-Logik, Compliance-Workflows. Strategische Partnerschaften mit Rehau und KösterBau aufgebaut. Erste kommerzielle Transaktionen durchgeführt, Geschäftsmodell nach Validierung strategisch beendet."
              },
              {
                company: "TreePlantingProjects gUG · Impact-Plattform",
                role: "CPO · 2020–2024",
                desc: "Plattform von Grund auf aufgebaut, 2 Mio. Euro Umsatz, über 200.000 gepflanzte Bäume. 12 Corporate-Partnerschaften aufgebaut, Team von 10 Personen im Hauptjahr geführt."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex gap-8"
              >
                <div className="hidden md:flex flex-col items-center mt-2">
                  <div className="w-3 h-3 rounded-full bg-[#60A5FA]" />
                  <div className="w-px h-full bg-[#60A5FA]/30 mt-2" />
                </div>
                <div className="flex-1 pb-16 border-b border-[#1A1815]/10 md:border-b-0 md:pb-0">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">{item.company}</h3>
                  <div className="font-mono text-sm text-[#60A5FA] mb-6 tracking-wide">{item.role}</div>
                  <div className="text-lg leading-relaxed whitespace-pre-wrap">{item.desc}</div>
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
                quote: "An exceptionally professional and hard-working leader who always stands behind his team and impresses with his expertise and engagement. A truly impressive entrepreneur, unreservedly recommended.",
                author: "CHRIS MICHAEL WIEDMANN · Direct Report, TreePlantingProjects"
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
