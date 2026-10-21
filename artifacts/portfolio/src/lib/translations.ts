export type Beitrag = { title: string; teaser: string; url: string };

export const translations = {
  de: {
    common: {
      back: "← Zurück",
      langSwitchLabel: "Sprache wechseln",
    },
    home: {
      meta: {
        title: "Martin Schade | Product Leader für B2B-Plattformen & KI",
        description:
          "Martin Schade, Product Leader mit 10+ Jahren bei Zalando Group, Enterprise SaaS und als dreifacher Gründer. Vorträge, Podcasts und Mentoring zu Produktmanagement, Skalierung, Daten und KI.",
      },
      nav: {
        themen: "Themen",
        ki: "KI",
        formate: "Formate",
        beitraege: "Beiträge",
        trackRecord: "Track Record",
        kontakt: "Kontakt",
        menuAriaLabel: "Menü öffnen",
      },
      hero: {
        eyebrow: "Product Leader für B2B-Plattformen, Marketplaces und KI-Produkte",
        slides: [
          "Je mehr KI entscheidet, desto wichtiger ist, woher die Daten kommen.",
          "Von 5 auf 50 Kunden: der Weg vom Basteln zur Professionalität.",
          "Im KI-Zeitalter ist Produktarbeit Stakeholder-Management, nicht Anforderungskatalog.",
          "Ohne Zahlungsbereitschaft kein Produkt.",
        ],
        intro: "Vier Überzeugungen aus über zehn Jahren Produktarbeit. Darüber spreche ich auf Bühnen, in Podcasts und im Mentoring.",
        bio: "Martin Schade. 10+ Jahre Produktführung bei Zalando Group und Enterprise SaaS, dreifacher Gründer.",
        cta: "Lass uns sprechen",
        slideAriaLabel: "Slide",
      },
      stats: [
        { num: "10+ Jahre", label: "B2B-Produktführung" },
        { num: "20M+", label: "Datenobjekte im Produktivbetrieb" },
        { num: "660+", label: "Marken auf einer Plattform" },
        { num: "3x", label: "Gründer, von 0 zum Launch" },
        { num: "20+", label: "Direct Reports, cross-funktional" },
      ],
      themen: {
        heading: "Vier Themen, über die ich gern spreche",
        items: [
          {
            question: "„Wir wollen KI einsetzen. Aber können wir unseren Daten überhaupt trauen?“",
            label: "DATEN & KI",
            answer:
              "Je mehr KI genutzt wird, desto zuverlässiger muss die Datenbasis sein, und desto klarer muss sein, woher die Daten kommen. Kein blindes Vertrauen in Modelle. Bei 20M+ Artikeln (XPLN) und 10M+ Produkten (Tradebyte) habe ich gelernt: Datenqualität ist ein Produktthema, kein IT-Ticket.",
          },
          {
            question: "„Mit den ersten Kunden lief es. Jetzt wird jeder neue Kunde zum Sonderprojekt.“",
            label: "PRODUKTE SKALIEREN",
            answer:
              "Von 5 auf 50 Kunden ist der Weg vom Basteln zur Professionalität. Dafür braucht es wiederholbare Prozesse, eine Architektur für viele statt für wenige und klare Prioritäten. Diesen Übergang habe ich bei Tradebyte (660+ Marken) und in meinen eigenen Gründungen begleitet.",
          },
          {
            question: "„Wenn KI Specs und User Stories schreibt: Was bleibt dann für Product Manager?“",
            label: "PRODUKTMANAGEMENT IM KI-ZEITALTER",
            answer:
              "Mehr als vorher, nämlich Stakeholder-Management. Ein Produkt wird nicht durch einen detaillierten Anforderungskatalog erfolgreich, sondern durch Alignment, klare Entscheidungen und die Fähigkeit, Menschen zusammenzubringen.",
          },
          {
            question: "„Wir haben eine starke Idee. Aber zahlt dafür jemand?“",
            label: "PRODUKTE ENTWERFEN",
            answer:
              "Ohne Zahlungsbereitschaft kein Produkt. Bevor die erste Zeile Code entsteht, muss klar sein, wer welches Problem hat und dafür bezahlt. Als Gründer habe ich Geschäftsmodelle validiert und eines bewusst beendet, als die Antwort Nein war.",
          },
        ],
      },
      ki: {
        heading: "KI-Produktentwicklung ist bei mir keine Folie, sondern produktiv ausgeliefert.",
        cards: [
          {
            title: "ML-basierte Produktähnlichkeitserkennung",
            text: "Als VP of Products bei XPLN habe ich eine ML-basierte Ähnlichkeitserkennung für Produktdaten von der Idee bis zur Produktionsreife verantwortet. Ergebnis: eine neue Cross-Sell-Umsatzquelle, ausgerollt auf eine Plattform mit 20+ Millionen Artikeln, mit spürbar reduziertem manuellem Analyseaufwand für Enterprise-Kunden.",
          },
          {
            title: "KI als Teil des täglichen Produkt-Werkzeugkastens",
            text: "Prompt Engineering und LLM-Produktintegration sind aktiver Teil meines Stacks, von Feature-Spezifikationen bis zur Automatisierung wiederkehrender Produktprozesse mit Make und Zapier.",
          },
          {
            title: "Strategische Einordnung",
            text: "Ich bewerte KI-Features nicht isoliert, sondern als Teil der Produktstrategie: Wo schafft ein Modell echten Kundennutzen, wo ist es nur Kosten. Diese Einordnung war Kernbestandteil meiner Advisory-Mandate.",
          },
        ],
      },
      formate: {
        heading: "So kommen wir zusammen",
        items: [
          {
            title: "Vorträge & Keynotes",
            audience: "Für Veranstalter",
            text: "Für Konferenzen, Meetups und interne Events. Themen: Produktstrategie, Plattformen skalieren, Daten und KI. Aus der Praxis, ohne Buzzword-Bingo.",
          },
          {
            title: "Podcasts & Panels",
            audience: "Für Podcaster und Moderator:innen",
            text: "Ein Gesprächspartner zu modernem Produktmanagement, Marketplaces und Gründen, mit echten Geschichten, auch den gescheiterten.",
          },
          {
            title: "Mentoring",
            audience: "Für Product Manager und Gründer:innen",
            text: "Für Product Manager, die den nächsten Karriereschritt gehen wollen, und für Gründer:innen auf dem Weg vom ersten Produkt zum skalierbaren Geschäft.",
          },
        ],
        note: "Das erste Gespräch kostet dich nichts. Für Keynotes, Workshops oder längeres Mentoring finden wir einen passenden Rahmen.",
      },
      beitraege: {
        heading: "Gedanken & Beiträge",
        intro: "Ich schreibe regelmäßig über Produktmanagement, Plattformen und KI.",
        items: [] as Beitrag[],
        cta: "Mehr auf LinkedIn",
      },
      trackRecord: {
        heading: "Track Record",
        items: [
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
            intro:
              "Aufbau einer zweiseitigen Plattform zur Vermittlung von Dienstleistungen rund um den Wald, Anbindung von Waldbesitzern und Forstdienstleistern inklusive Fördermöglichkeiten für Aufforstungsprojekte.",
            bullets: [
              "Plattform von Grund auf aufgebaut, 2 Mio. € Umsatz",
              "Über 200.000 gepflanzte Bäume",
              "12 Corporate-Partnerschaften aufgebaut, Team von 10 Personen im Hauptjahr geführt als CPO",
            ],
          },
          {
            company: "XPLN GmbH · Stuttgart",
            role: "VP OF PRODUCTS · 2022–2023",
            intro:
              "Enterprise Retail Intelligence SaaS, 120+ Enterprise-Kunden, Pricing Intelligence, Wettbewerbsbeobachtung, KI-gestützte Analytics.",
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
        ],
      },
      referenzen: {
        heading: "Referenzen",
        items: [
          {
            quote:
              "Martin combines high-level strategic thinking with hands-on execution, an outstanding CEO and a strong asset to any organisation focused on growth, innovation, and long-term value creation.",
            author: "GÖTZ THÜMECKE · Head of Global Portfolio Mgmt, New Ventures",
          },
          {
            quote:
              "His ability to bring people together, manage stakeholders seamlessly, and push initiatives forward is outstanding. He doesn't just talk about change, he takes action and delivers real results.",
            author: "RUSLAN VOROBEV · Head of Product bei Resycure, Ex-BASF, Ex-Tomra",
          },
          {
            quote:
              "I worked with Martin some years ago as his client when he was a consultant. He is diligent, smart and persistent. He delivers results and does not call it a day until the job is done. And beyond that, always calm and in a good mood. It was always a big pleasure!",
            author: "JOACHIM SCHOLZ · Portfolio Partner, Findos Investor",
          },
        ],
      },
      zertifikate: {
        heading: "Zertifikate & Qualifikationen",
        certificationsHeading: "Zertifizierungen",
        certifications: [
          "Professional Scrum Master I (PSM I, Scrum.org)",
          "Six Sigma Green Belt",
          "Product Strategy & Roadmap",
          "Abfallbeauftragter",
        ],
        educationHeading: "Ausbildung",
        education: [
          { degree: "B.Sc. Wirtschaftswissenschaften", school: "FernUniversität Hagen · 2009–2013" },
          { degree: "Controlling, Finance and Economic Policy", school: "Universität der Bundeswehr München · 2005–2009" },
        ],
        languagesHeading: "Sprachen",
        languages: [
          "Deutsch — Muttersprache (C2)",
          "Englisch — verhandlungssicher (C1)",
          "Russisch — Grundkenntnisse (A2)",
        ],
      },
      toolsStack: {
        heading: "Tools & Stack",
        items: [
          { cat: "Product / Collaboration", tools: "Jira, Confluence, Figma, Miro, Productboard, Linear, Notion" },
          { cat: "Daten / Analytics", tools: "SQL, Tableau, Metabase, Google Analytics, Mixpanel" },
          { cat: "KI / Automatisierung", tools: "Prompt Engineering, LLM-Produktintegration, AI Feature Specs, Make, Zapier" },
          { cat: "Technisch", tools: "REST APIs, JSON, Webhooks, React, Webflow, GitHub, EDIFACT" },
        ],
      },
      about: {
        heading: "Über mich",
        paragraphs: [
          "Ich bin B2B-Plattform-Builder mit über 10 Jahren Produktverantwortung im Enterprise- und Marktplatzumfeld, kombiniert mit dreifacher Gründererfahrung (Riometa, Shopfinity, RecyClaim). Diese Kombination aus Führungserfahrung in Konzernstrukturen (Zalando Group) und dem Aufbau eigener Plattformen von Null bedeutet: Ich kenne beide Seiten, die etablierte Organisation und die frühe, unsichere Phase, in der noch nichts feststeht.",
          "Vor meiner Produktkarriere war ich acht Jahre Offizier der Bundeswehr, verantwortlich für 40 Personen in drei Teams unter einsatznahen Bedingungen. Strukturierte Entscheidungsfindung unter Unsicherheit und Stakeholder-Abstimmung unter Druck ist keine Floskel, sondern die Grundlage, auf der meine gesamte spätere Führungsarbeit aufbaut.",
          "Heute teile ich, was ich dabei gelernt habe: auf Bühnen, in Podcasts und im Mentoring. Mit Gründer:innen und Product Managern, die Produkte nicht nur bauen, sondern skalieren wollen.",
        ],
      },
      kontakt: {
        heading: "Let's talk.",
        subheading: "Vortrag, Podcast, Mentoring oder einfach eine Produktfrage? Schreib mir.",
        form: {
          name: "Name",
          email: "E-Mail",
          topicLabel: "Worum geht's?",
          topicPlaceholder: "Bitte wählen …",
          topics: {
            vortrag: "Vortrag / Keynote",
            podcast: "Podcast / Panel",
            mentoring: "Mentoring",
            sparring: "Produkt-Sparring",
            sonstiges: "Sonstiges",
          },
          message: "Nachricht",
          submit: "Nachricht senden",
          nameRequired: "Bitte gib deinen Namen an",
          emailInvalid: "Bitte gib eine gültige E-Mail-Adresse an",
          topicRequired: "Bitte wähle ein Thema",
          messageTooShort: "Deine Nachricht ist etwas kurz",
          toastSuccessTitle: "Nachricht gesendet",
          toastSuccessDesc: "Danke für deine Nachricht. Ich melde mich bald bei dir.",
          toastErrorTitle: "Nachricht konnte nicht gesendet werden",
          toastErrorDesc: "Bitte versuch es später noch einmal oder schreib mir direkt per E-Mail.",
        },
        info: {
          emailLabel: "E-Mail",
          phoneLabel: "Telefon",
          linkedinLabel: "LinkedIn",
          locationLabel: "Standort",
          locationValue: "Nürnberg / DACH / Remote",
        },
      },
      footer: {
        rights: "All rights reserved.",
        impressum: "Impressum",
        datenschutz: "Datenschutz",
      },
    },
    impressum: {
      meta: {
        title: "Impressum | Martin Schade",
        description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG für Martin Schade, Nürnberg.",
      },
      heading: "Impressum",
      angabenHeading: "Angaben gemäß § 5 DDG",
      addressLines: ["Martin Schade", "Produktberatung, Mentoring & Vorträge", "Eckhardstrasse 40", "90461 Nürnberg", "Deutschland"],
      kontaktHeading: "Kontakt",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      haftungInhalteHeading: "Haftung für Inhalte",
      haftungInhalteText1:
        "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      haftungInhalteText2:
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      haftungLinksHeading: "Haftung für Links",
      haftungLinksText:
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      urheberrechtHeading: "Urheberrecht",
      urheberrechtText:
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },
    datenschutz: {
      meta: {
        title: "Datenschutzerklärung | Martin Schade",
        description:
          "Datenschutzerklärung von Martin Schade: Informationen zur Erhebung, Verarbeitung und zu Ihren Rechten bezüglich personenbezogener Daten auf dieser Website.",
      },
      heading: "Datenschutzerklärung",
      s1: {
        heading: "1. Datenschutz auf einen Blick",
        h1: "Allgemeine Hinweise",
        p1: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        h2: "Datenerfassung auf dieser Website",
        q1: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
        a1: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
        q2: "Wie erfassen wir Ihre Daten?",
        a2: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z. B. durch das Kontaktformular. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).",
        q3: "Wofür nutzen wir Ihre Daten?",
        a3: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, sofern Sie dazu eingewilligt haben.",
      },
      s2: {
        heading: "2. Hosting",
        p1: "Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
        p2: "Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).",
      },
      s3: {
        heading: "3. Allgemeine Hinweise und Pflichtinformationen",
        h1: "Datenschutz",
        p1: "Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
        h2: "Verantwortliche Stelle",
        p2Prefix: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        h3: "Speicherdauer",
        p3: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben.",
        h4: "Ihre Rechte",
        p4: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
      },
      s4: {
        heading: "4. Cookies",
        p1: 'Diese Website verwendet sogenannte „technisch notwendige Cookies". Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an. Wir verwenden Cookies, die zur Funktion der Website erforderlich sind (technisch notwendige Cookies). Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt.',
        p2: "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.",
      },
      s5: {
        heading: "5. Kontaktformular",
        p1: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        p2: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.",
        p3: "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
      },
      s6: {
        heading: "6. Externe Links",
        p1: "Diese Website enthält Links zu externen Diensten wie LinkedIn. Beim Klick auf solche Links verlassen Sie unsere Website. Für die Inhalte und Datenschutzpraktiken dieser externen Seiten sind wir nicht verantwortlich.",
      },
    },
    notFound: {
      meta: {
        title: "Seite nicht gefunden | Martin Schade",
        description: "Die gesuchte Seite konnte nicht gefunden werden.",
      },
      heading: "404 Seite nicht gefunden",
      message: "Diese Seite existiert leider nicht.",
      backLink: "← Zurück zur Startseite",
    },
    cookieBanner: {
      text: "Diese Website verwendet technisch notwendige Cookies, um den Betrieb sicherzustellen. Weitere Informationen findest du in unserer",
      linkText: "Datenschutzerklärung",
      decline: "Ablehnen",
      accept: "Akzeptieren",
    },
  },
  en: {
    common: {
      back: "← Back",
      langSwitchLabel: "Switch language",
    },
    home: {
      meta: {
        title: "Martin Schade | Product Leader for B2B Platforms & AI",
        description:
          "Martin Schade, product leader with 10+ years at Zalando Group, in enterprise SaaS and as a three-time founder. Talks, podcasts and mentoring on product management, scaling, data and AI.",
      },
      nav: {
        themen: "Topics",
        ki: "AI",
        formate: "Formats",
        beitraege: "Posts",
        trackRecord: "Track Record",
        kontakt: "Contact",
        menuAriaLabel: "Open menu",
      },
      hero: {
        eyebrow: "Product leader for B2B platforms, marketplaces and AI products",
        slides: [
          "The more AI decides, the more it matters where the data comes from.",
          "From 5 to 50 customers: the path from tinkering to professionalism.",
          "In the age of AI, product work is stakeholder management, not requirements documents.",
          "No willingness to pay, no product.",
        ],
        intro: "Four convictions from more than ten years of product work. I talk about them on stage, on podcasts and in mentoring.",
        bio: "Martin Schade. 10+ years of product leadership at Zalando Group and enterprise SaaS, three-time founder.",
        cta: "Let's talk",
        slideAriaLabel: "Slide",
      },
      stats: [
        { num: "10+ years", label: "B2B product leadership" },
        { num: "20M+", label: "Data objects in production" },
        { num: "660+", label: "Brands on one platform" },
        { num: "3x", label: "Founder, from 0 to launch" },
        { num: "20+", label: "Direct reports, cross-functional" },
      ],
      themen: {
        heading: "Four topics I love to talk about",
        items: [
          {
            question: "“We want to use AI. But can we even trust our data?”",
            label: "DATA & AI",
            answer:
              "The more AI is used, the more reliable the data foundation has to be, and the clearer it has to be where the data comes from. No blind trust in models. Working with 20M+ items (XPLN) and 10M+ products (Tradebyte) taught me: data quality is a product topic, not an IT ticket.",
          },
          {
            question: "“It worked with our first customers. Now every new customer turns into a special project.”",
            label: "SCALING PRODUCTS",
            answer:
              "Going from 5 to 50 customers is the path from tinkering to professionalism. It takes repeatable processes, an architecture built for many instead of a few, and clear priorities. I've guided this transition at Tradebyte (660+ brands) and in my own startups.",
          },
          {
            question: "“If AI writes the specs and user stories, what's left for product managers?”",
            label: "PRODUCT MANAGEMENT IN THE AGE OF AI",
            answer:
              "More than before: stakeholder management. Products don't succeed because of a detailed requirements catalog, but through alignment, clear decisions and the ability to bring people together.",
          },
          {
            question: "“We have a strong idea. But will anyone pay for it?”",
            label: "DESIGNING PRODUCTS",
            answer:
              "No willingness to pay, no product. Before the first line of code is written, it has to be clear who has which problem and who will pay to solve it. As a founder, I've validated business models and deliberately wound one down when the answer was no.",
          },
        ],
      },
      ki: {
        heading: "AI product development isn't a slide deck for me — it's shipped and running in production.",
        cards: [
          {
            title: "ML-based product similarity detection",
            text: "As VP of Products at XPLN, I owned an ML-based similarity detection system for product data from idea to production readiness. Result: a new cross-sell revenue stream, rolled out on a platform with 20+ million items, with a noticeably reduced manual analysis effort for enterprise customers.",
          },
          {
            title: "AI as part of the daily product toolkit",
            text: "Prompt engineering and LLM product integration are an active part of my stack, from feature specifications to automating recurring product processes with Make and Zapier.",
          },
          {
            title: "Strategic framing",
            text: "I don't evaluate AI features in isolation, but as part of the product strategy: where a model creates real customer value versus where it's just cost. This framing was a core part of my advisory mandates.",
          },
        ],
      },
      formate: {
        heading: "Ways to work together",
        items: [
          {
            title: "Talks & keynotes",
            audience: "For event organizers",
            text: "For conferences, meetups and internal events. Topics: product strategy, scaling platforms, data and AI. Grounded in practice, no buzzword bingo.",
          },
          {
            title: "Podcasts & panels",
            audience: "For podcast hosts and moderators",
            text: "A conversation partner on modern product management, marketplaces and founding, with real stories, including the ones that failed.",
          },
          {
            title: "Mentoring",
            audience: "For product managers and founders",
            text: "For product managers ready for their next career step, and for founders on the way from a first product to a scalable business.",
          },
        ],
        note: "The first conversation is on me. For keynotes, workshops or longer-term mentoring, we'll find the right setup.",
      },
      beitraege: {
        heading: "Thoughts & posts",
        intro: "I write regularly about product management, platforms and AI.",
        items: [] as Beitrag[],
        cta: "More on LinkedIn",
      },
      trackRecord: {
        heading: "Track Record",
        items: [
          {
            company: "RecyClaim UG · Nuremberg",
            role: "FOUNDER & CEO · 2024–2025",
            intro: "B2B marketplace for industrial material streams, from idea to market test.",
            bullets: [
              "Independently designed the full platform architecture: data models, matching logic, compliance workflows, traceability",
              "Built strategic partnerships with Rehau and KösterBau, executed first commercial transactions",
              "Strategically wound down the business model after validation (Q1 2025)",
            ],
          },
          {
            company: "TreePlantingProjects gUG · Impact Platform",
            role: "CPO · 2020–2024",
            intro:
              "Built a two-sided platform to connect forest-related services, linking forest owners and forestry service providers, including funding options for reforestation projects.",
            bullets: [
              "Built the platform from the ground up, €2M in revenue",
              "Over 200,000 trees planted",
              "Built 12 corporate partnerships, led a 10-person team in the peak year as CPO",
            ],
          },
          {
            company: "XPLN GmbH · Stuttgart",
            role: "VP OF PRODUCTS · 2022–2023",
            intro:
              "Enterprise retail intelligence SaaS, 120+ enterprise customers, pricing intelligence, competitive monitoring, AI-powered analytics.",
            bullets: [
              "Roadmap ownership across three core modules, OKR-based prioritization with leadership",
              "Introduced ML-based product similarity detection, a new cross-sell revenue stream",
              "Scaled the platform to 20M+ items, led a cross-functional team of up to 12 people",
            ],
          },
          {
            company: "Tradebyte Software GmbH · Zalando Group",
            role: "2015–2021",
            intro: "Europe's leading B2B marketplace connectivity platform, three roles over roughly 7 years.",
            bullets: [
              "Team Lead Product (TB.One): 660+ brands, 10.5M+ products, 40+ channels, reduced Solution Center error rate by 80%, increased NPS by 20%",
              "Team Lead Integration: built and led a 15-person integration engineering team",
              "Senior PM Business Development: strategic Zalando projects, B2B wholesale product research",
            ],
          },
        ],
      },
      referenzen: {
        heading: "References",
        items: [
          {
            quote:
              "Martin combines high-level strategic thinking with hands-on execution, an outstanding CEO and a strong asset to any organisation focused on growth, innovation, and long-term value creation.",
            author: "GÖTZ THÜMECKE · Head of Global Portfolio Mgmt, New Ventures",
          },
          {
            quote:
              "His ability to bring people together, manage stakeholders seamlessly, and push initiatives forward is outstanding. He doesn't just talk about change, he takes action and delivers real results.",
            author: "RUSLAN VOROBEV · Head of Product at Resycure, Ex-BASF, Ex-Tomra",
          },
          {
            quote:
              "I worked with Martin some years ago as his client when he was a consultant. He is diligent, smart and persistent. He delivers results and does not call it a day until the job is done. And beyond that, always calm and in a good mood. It was always a big pleasure!",
            author: "JOACHIM SCHOLZ · Portfolio Partner, Findos Investor",
          },
        ],
      },
      zertifikate: {
        heading: "Certifications & Qualifications",
        certificationsHeading: "Certifications",
        certifications: [
          "Professional Scrum Master I (PSM I, Scrum.org)",
          "Six Sigma Green Belt",
          "Product Strategy & Roadmap",
          "Certified Waste Management Officer",
        ],
        educationHeading: "Education",
        education: [
          { degree: "B.Sc. Economics", school: "FernUniversität Hagen · 2009–2013" },
          { degree: "Controlling, Finance and Economic Policy", school: "Bundeswehr University Munich · 2005–2009" },
        ],
        languagesHeading: "Languages",
        languages: ["German — native speaker (C2)", "English — business fluent (C1)", "Russian — basic (A2)"],
      },
      toolsStack: {
        heading: "Tools & Stack",
        items: [
          { cat: "Product / Collaboration", tools: "Jira, Confluence, Figma, Miro, Productboard, Linear, Notion" },
          { cat: "Data / Analytics", tools: "SQL, Tableau, Metabase, Google Analytics, Mixpanel" },
          { cat: "AI / Automation", tools: "Prompt Engineering, LLM Product Integration, AI Feature Specs, Make, Zapier" },
          { cat: "Technical", tools: "REST APIs, JSON, Webhooks, React, Webflow, GitHub, EDIFACT" },
        ],
      },
      about: {
        heading: "About me",
        paragraphs: [
          "I'm a B2B platform builder with over 10 years of product ownership in enterprise and marketplace environments, combined with three-time founder experience (Riometa, Shopfinity, RecyClaim). This combination of leadership experience in corporate structures (Zalando Group) and building my own platforms from zero means I know both sides — the established organization and the early, uncertain phase where nothing is settled yet.",
          "Before my product career, I spent eight years as an officer in the German Armed Forces, responsible for 40 people across three teams under near-deployment conditions. Structured decision-making under uncertainty and stakeholder alignment under pressure isn't a buzzword for me — it's the foundation my entire later leadership work is built on.",
          "Today I share what I've learned along the way: on stage, on podcasts and in mentoring. With founders and product managers who don't just want to build products, but scale them.",
        ],
      },
      kontakt: {
        heading: "Let's talk.",
        subheading: "A talk, a podcast, mentoring or just a product question? Write to me.",
        form: {
          name: "Name",
          email: "Email",
          topicLabel: "What's it about?",
          topicPlaceholder: "Please select …",
          topics: {
            vortrag: "Talk / keynote",
            podcast: "Podcast / panel",
            mentoring: "Mentoring",
            sparring: "Product sparring",
            sonstiges: "Other",
          },
          message: "Message",
          submit: "Send message",
          nameRequired: "Please enter your name",
          emailInvalid: "Please enter a valid email address",
          topicRequired: "Please select a topic",
          messageTooShort: "Your message is a bit short",
          toastSuccessTitle: "Message sent",
          toastSuccessDesc: "Thanks for your message. I'll get back to you soon.",
          toastErrorTitle: "Message could not be sent",
          toastErrorDesc: "Please try again later or email me directly.",
        },
        info: {
          emailLabel: "Email",
          phoneLabel: "Phone",
          linkedinLabel: "LinkedIn",
          locationLabel: "Location",
          locationValue: "Nuremberg / DACH / Remote",
        },
      },
      footer: {
        rights: "All rights reserved.",
        impressum: "Legal Notice",
        datenschutz: "Privacy Policy",
      },
    },
    impressum: {
      meta: {
        title: "Legal Notice | Martin Schade",
        description: "Legal notice and provider identification pursuant to § 5 DDG for Martin Schade, Nuremberg.",
      },
      heading: "Legal Notice",
      angabenHeading: "Information pursuant to § 5 DDG",
      addressLines: ["Martin Schade", "Product consulting, mentoring & talks", "Eckhardstrasse 40", "90461 Nuremberg", "Germany"],
      kontaktHeading: "Contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      haftungInhalteHeading: "Liability for content",
      haftungInhalteText1:
        "As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      haftungInhalteText2:
        "Obligations to remove or block the use of information under general law remain unaffected by this. However, liability in this regard is only possible from the point in time at which a concrete infringement becomes known. If we become aware of any such infringements, we will remove this content immediately.",
      haftungLinksHeading: "Liability for links",
      haftungLinksText:
        "Our offering contains links to external third-party websites whose content we have no control over. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
      urheberrechtHeading: "Copyright",
      urheberrechtText:
        "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
    },
    datenschutz: {
      meta: {
        title: "Privacy Policy | Martin Schade",
        description:
          "Privacy policy of Martin Schade: information on the collection, processing, and your rights regarding personal data on this website.",
      },
      heading: "Privacy Policy",
      s1: {
        heading: "1. Data protection at a glance",
        h1: "General information",
        p1: "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.",
        h2: "Data collection on this website",
        q1: "Who is responsible for data collection on this website?",
        a1: "Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.",
        q2: "How do we collect your data?",
        a2: "Some data is collected when you provide it to us — for example, via the contact form. Other data is collected automatically, or with your consent, by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system, or time of page access).",
        q3: "What do we use your data for?",
        a3: "Some of the data is collected to ensure the website is provided without errors. Other data may be used to analyze your user behavior, provided you have consented to this.",
      },
      s2: {
        heading: "2. Hosting",
        p1: "This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host's servers. This may include IP addresses, contact inquiries, meta and communication data, contract data, contact details, names, website access data, and other data generated via a website.",
        p2: "The host is used for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online offering by a professional provider (Art. 6(1)(f) GDPR).",
      },
      s3: {
        heading: "3. General information and mandatory notices",
        h1: "Data protection",
        p1: "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.",
        h2: "Responsible party",
        p2Prefix: "The party responsible for data processing on this website is:",
        emailLabel: "Email",
        phoneLabel: "Phone",
        h3: "Storage duration",
        p3: "Unless a more specific storage period is mentioned within this privacy policy, your personal data will remain with us until the purpose for its processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing it.",
        h4: "Your rights",
        p4: "You have the right at any time to receive free information about the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. You may contact us at any time regarding this or any other questions about data protection.",
      },
      s4: {
        heading: "4. Cookies",
        p1: 'This website uses so-called "technically necessary cookies". Cookies are small text files stored on your device. They do not cause any damage. We use cookies that are required for the website to function (technically necessary cookies). These cookies are set on the basis of Art. 6(1)(f) GDPR.',
        p2: "You can configure your browser to notify you when cookies are set and to allow cookies only in individual cases, exclude the acceptance of cookies for certain cases or in general, and enable automatic deletion of cookies when closing the browser.",
      },
      s5: {
        heading: "5. Contact form",
        p1: "If you send us inquiries via the contact form, your details from the inquiry form, including the contact information you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.",
        p2: "The processing of this data is based on Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is necessary for carrying out pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR), if this was requested.",
        p3: "The data you enter in the contact form will remain with us until you request its deletion, revoke your consent to storage, or the purpose for storing the data no longer applies. Mandatory statutory provisions — in particular retention periods — remain unaffected.",
      },
      s6: {
        heading: "6. External links",
        p1: "This website contains links to external services such as LinkedIn. By clicking on such links, you leave our website. We are not responsible for the content and data protection practices of these external sites.",
      },
    },
    notFound: {
      meta: {
        title: "Page Not Found | Martin Schade",
        description: "The page you're looking for could not be found.",
      },
      heading: "404 Page Not Found",
      message: "Unfortunately, this page doesn't exist.",
      backLink: "← Back to home",
    },
    cookieBanner: {
      text: "This website uses technically necessary cookies to ensure it functions properly. More information can be found in our",
      linkText: "Privacy Policy",
      decline: "Decline",
      accept: "Accept",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = (typeof translations)["de"];
