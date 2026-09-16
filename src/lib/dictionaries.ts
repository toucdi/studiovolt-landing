export type Locale = "it" | "en";

export const dictionaries = {
  it: {
    nav: {
      links: [
        { name: "Servizi", href: "#servizi" },
        { name: "Soluzioni", href: "#soluzioni" },
        { name: "Metodo", href: "#processo" },
        { name: "Prezzi", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contact: "Contattaci",
    },
    hero: {
      tagline: "Estetica Svizzera / Performance Italiana",
      title: ["Studio", "Volt."],
      description:
        "Creiamo l'eccellenza digitale per i professionisti che non accettano compromessi. Design minimale, impatto massimo.",
      cta: "Avvia Progetto — €700",
      availability: "Disponibilità limitata / 05 Progetti mese",
    },
    stats: [
      { value: "7", label: "GIORNI PER IL LANCIO" },
      { value: "€700", label: "PREZZO TRASPARENTE" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "∞", label: "SUPPORTO INCLUSO" },
    ],
    services: {
      sectionTag: "Capacità",
      title: "Eccellenza digitale,",
      titleGray: "senza compromessi.",
      items: [
        {
          title: "Design",
          desc: "Niente template. Ogni pixel è posizionato con precisione svizzera per riflettere l'identità del tuo studio.",
        },
        {
          title: "Performance",
          desc: "Caricamento istantaneo. La velocità non è un optional, è l'essenza dell'esperienza utente moderna.",
        },
        {
          title: "Mobile",
          desc: "Interfacce fluide su ogni dispositivo. La perfezione è coerente, indipendentemente dallo schermo.",
        },
        {
          title: "SEO",
          desc: "Visibilità chirurgica. Ottimizziamo la struttura per posizionarti dove i pazienti ti cercano.",
        },
        {
          title: "Privacy",
          desc: "Conformità totale. Sicurezza e protezione dei dati trattati con rigore professionale.",
        },
        {
          title: "Service",
          desc: "Manutenzione proattiva. Ci occupiamo di tutto perché tu possa dedicarti solo ai tuoi pazienti.",
        },
      ],
    },
    process: {
      sectionTag: "Metodologia",
      title: "L'approccio Studio Volt.",
      steps: [
        {
          num: "01",
          title: "Consulenza",
          desc: "Analizziamo le necessità del tuo studio attraverso una diagnosi digitale approfondita.",
        },
        {
          num: "02",
          title: "Progettazione",
          desc: "Sviluppiamo la tua infrastruttura con rigore tecnico e precisione estetica in 5 giorni.",
        },
        {
          num: "03",
          title: "Lancio",
          desc: "Configuriamo la presenza online definitiva, pronta per accogliere nuovi pazienti.",
        },
      ],
    },
    pricing: {
      title: "Costo",
      titleGray: "Trasparente.",
      packageLabel: "SITO WEB PROFESSIONALE",
      pricePrefix: "a partire da",
      price: "€700",
      priceDesc: "Una tantum. Tutto incluso. Nessun extra nascosto.",
      cta: "Inizia il Progetto",
      disclaimer: "Dominio e hosting inclusi per il 1° anno",
      featuresTitle: "Cosa è incluso",
      features: [
        "Design personalizzato",
        "Fino a 5 pagine",
        "Responsive mobile-first",
        "SEO on-page ottimizzato",
        "Certificato SSL / HTTPS",
        "Cookie banner GDPR",
        "Google Analytics configurato",
        "Form di contatto",
        "Mappa Google integrata",
        "Hosting primo anno incluso",
        "Dominio .it incluso",
        "Supporto post-lancio 30gg",
      ],
      disclaimer2: "Sviluppato con metodologie agili. Consegna garantita in 7 giorni lavorativi.",
      customLabel: "APP / GESTIONALI / AI / E-COMMERCE",
      customTitle: "Progetti",
      customTitleGray: "su misura",
      customDesc:
        "Ogni progetto complesso ha esigenze uniche. App mobile, software gestionali, soluzioni AI, e-commerce — analizziamo le tue necessità e ti presentiamo un preventivo dettagliato, senza sorprese.",
      customCta: "Richiedi Preventivo",
      customDisclaimer: "Risposta entro 48 ore",
    },
    solutions: {
      sectionTag: "Oltre il sito web",
      title: "Soluzioni digitali",
      titleGray: "su misura.",
      intro:
        "Progetti più complessi richiedono un approccio dedicato. Progettiamo e sviluppiamo soluzioni complete — dal gestionale all'app mobile, dall'AI all'e-commerce.",
      items: [
        {
          title: "App Mobile",
          desc: "Applicazioni iOS e Android native o ibride. Dalla progettazione al rilascio sugli store.",
        },
        {
          title: "Software Gestionali",
          desc: "Piattaforme su misura per digitalizzare il tuo workflow. Prenotazioni, CRM, dashboard, automazioni.",
        },
        {
          title: "Intelligenza Artificiale",
          desc: "Chatbot, analisi documenti, computer vision. Integriamo l'AI nei tuoi processi aziendali.",
        },
        {
          title: "E-Commerce",
          desc: "Negozi online con pagamenti integrati, gestione inventario e logistica automatizzata.",
        },
        {
          title: "Integrazioni API",
          desc: "Colleghiamo i tuoi sistemi. ERP, CRM, gestionali, servizi terzi. Un ecosistema digitale unificato.",
        },
        {
          title: "Consulenza Tech",
          desc: "Audit tecnici, scelta stack, ottimizzazione performance. La strategia digitale giusta per crescere.",
        },
      ],
      footer:
        "Ogni progetto è unico. Raccontaci la tua idea e riceverai un preventivo dettagliato entro 48 ore.",
      footerCta: "Richiedi Preventivo",
    },
    faq: {
      title: "Domande",
      titleUnderline: "Frequenti",
      intro: "Tutto quello che devi sapere sul tuo nuovo sito web professionale.",
      items: [
        {
          q: "Quanto tempo ci vuole per avere il sito pronto?",
          a: "In media 7 giorni lavorativi dalla conferma dell'ordine. Ti mostriamo una bozza al giorno 5 per raccogliere il tuo feedback.",
        },
        {
          q: "Devo fornire i contenuti (testi, foto)?",
          a: "Idealmente sì, ma non è obbligatorio. Possiamo aiutarti a scrivere i testi e utilizzare foto professionali royalty-free se necessario.",
        },
        {
          q: "Posso modificare il sito dopo la consegna?",
          a: "Certo! Ti forniamo l'accesso completo. Per i primi 30 giorni, piccole modifiche sono incluse nel prezzo. Dopo, offriamo pacchetti di assistenza a partire da €50/mese.",
        },
        {
          q: "Il dominio e l'hosting sono inclusi?",
          a: "Sì, dominio .it e hosting sono inclusi per il primo anno. Dal secondo anno il rinnovo è di €120/anno per hosting + dominio.",
        },
        {
          q: "Il sito sarà ottimizzato per Google?",
          a: "Assolutamente. Ogni sito include ottimizzazione SEO on-page: struttura corretta, meta tag, velocità di caricamento e markup schema per attività locali.",
        },
        {
          q: "Lavorate solo con professionisti sanitari?",
          a: "Ci specializziamo in studi medici, dentistici e legali, ma lavoriamo con qualsiasi professionista che necessiti di una presenza online efficace.",
        },
      ],
    },
    cta: {
      tag: "Disponibilità limitata",
      title: ["Prossimo", "passo", "digitale?"],
      intro: "Scrivici oggi. Riceverai una proposta tecnica entro le prossime 24 ore.",
      form: {
        name: "Nome",
        namePlaceholder: "IL TUO NOME",
        email: "Email",
        emailPlaceholder: "EMAIL@ESEMPIO.IT",
        message: "Messaggio",
        messagePlaceholder: "DETTAGLI DEL TUO PROGETTO...",
        submit: "Invia Messaggio",
        sending: "Invio in corso...",
        errorGeneric: "Qualcosa è andato storto.",
      },
      success: {
        title: "Ricevuto",
        message: "Ti risponderemo entro 24 ore alla tua email.",
        reset: "Invia un altro messaggio",
      },
    },
    footer: {
      tagline: "Design svizzero, performance italiane. Eleviamo la presenza digitale degli studi professionali con approccio minimale.",
      navTitle: "Navigazione",
      navLinks: [
        { name: "Servizi", href: "#servizi" },
        { name: "Metodo", href: "#processo" },
        { name: "Prezzi", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contactTitle: "Contatti",
      email: "olivia@studiovolt.it",
      vat: "P.IVA in corso di registrazione",
      copyright: "© {year} Studio Volt · All Rights Reserved",
      edition: "Swiss Modernism 2.0 / 01",
    },
  },
  en: {
    nav: {
      links: [
        { name: "Services", href: "#servizi" },
        { name: "Solutions", href: "#soluzioni" },
        { name: "Method", href: "#processo" },
        { name: "Pricing", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contact: "Contact Us",
    },
    hero: {
      tagline: "Swiss Aesthetics / Italian Performance",
      title: ["Studio", "Volt."],
      description:
        "We craft digital excellence for professionals who accept no compromises. Minimal design, maximum impact.",
      cta: "Start Project — €700",
      availability: "Limited Availability / 05 Projects per month",
    },
    stats: [
      { value: "7", label: "DAYS TO LAUNCH" },
      { value: "€700", label: "TRANSPARENT PRICING" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "∞", label: "SUPPORT INCLUDED" },
    ],
    services: {
      sectionTag: "Capabilities",
      title: "Digital excellence,",
      titleGray: "no compromises.",
      items: [
        {
          title: "Design",
          desc: "No templates. Every pixel is positioned with Swiss precision to reflect your practice's identity.",
        },
        {
          title: "Performance",
          desc: "Instant loading. Speed is not an option—it's the essence of modern user experience.",
        },
        {
          title: "Mobile",
          desc: "Fluid interfaces across all devices. Perfection is consistent, regardless of screen size.",
        },
        {
          title: "SEO",
          desc: "Surgical visibility. We optimize structure to position you where clients search for you.",
        },
        {
          title: "Privacy",
          desc: "Full compliance. Security and data protection handled with professional rigor.",
        },
        {
          title: "Service",
          desc: "Proactive maintenance. We handle everything so you can focus on your clients.",
        },
      ],
    },
    process: {
      sectionTag: "Methodology",
      title: "The Studio Volt approach.",
      steps: [
        {
          num: "01",
          title: "Consultation",
          desc: "We analyze your practice's needs through an in-depth digital assessment.",
        },
        {
          num: "02",
          title: "Design",
          desc: "We build your infrastructure with technical rigor and aesthetic precision in 5 days.",
        },
        {
          num: "03",
          title: "Launch",
          desc: "We configure your definitive online presence, ready to welcome new clients.",
        },
      ],
    },
    pricing: {
      title: "Transparent",
      titleGray: "Pricing.",
      packageLabel: "PROFESSIONAL WEBSITE",
      pricePrefix: "starting from",
      price: "€700",
      priceDesc: "One-time. All-inclusive. No hidden extras.",
      cta: "Start Your Project",
      disclaimer: "Domain and hosting included for 1st year",
      featuresTitle: "What's included",
      features: [
        "Custom design",
        "Up to 5 pages",
        "Mobile-first responsive",
        "Optimized on-page SEO",
        "SSL certificate / HTTPS",
        "GDPR cookie banner",
        "Google Analytics setup",
        "Contact form",
        "Integrated Google Maps",
        "First-year hosting included",
        ".it domain included",
        "30-day post-launch support",
      ],
      disclaimer2: "Built with agile methodologies. Guaranteed delivery in 7 business days.",
      customLabel: "APPS / MANAGEMENT SOFTWARE / AI / E-COMMERCE",
      customTitle: "Custom",
      customTitleGray: "projects",
      customDesc:
        "Every complex project has unique requirements. Mobile apps, management software, AI solutions, e-commerce—we analyze your needs and present a detailed quote, no surprises.",
      customCta: "Request a Quote",
      customDisclaimer: "Response within 48 hours",
    },
    solutions: {
      sectionTag: "Beyond the website",
      title: "Custom digital",
      titleGray: "solutions.",
      intro:
        "More complex projects require a dedicated approach. We design and build complete solutions—from management software to mobile apps, from AI to e-commerce.",
      items: [
        {
          title: "Mobile Apps",
          desc: "Native or hybrid iOS and Android applications. From design to app store release.",
        },
        {
          title: "Management Software",
          desc: "Custom platforms to digitize your workflow. Bookings, CRM, dashboards, automation.",
        },
        {
          title: "Artificial Intelligence",
          desc: "Chatbots, document analysis, computer vision. We integrate AI into your business processes.",
        },
        {
          title: "E-Commerce",
          desc: "Online stores with integrated payments, inventory management, and automated logistics.",
        },
        {
          title: "API Integrations",
          desc: "We connect your systems. ERP, CRM, management tools, third-party services. A unified digital ecosystem.",
        },
        {
          title: "Tech Consulting",
          desc: "Technical audits, stack selection, performance optimization. The right digital strategy to grow.",
        },
      ],
      footer:
        "Every project is unique. Tell us your idea and receive a detailed quote within 48 hours.",
      footerCta: "Request a Quote",
    },
    faq: {
      title: "Frequently",
      titleUnderline: "Asked Questions",
      intro: "Everything you need to know about your new professional website.",
      items: [
        {
          q: "How long does it take to have the website ready?",
          a: "On average 7 business days from order confirmation. We show you a draft on day 5 to gather your feedback.",
        },
        {
          q: "Do I need to provide content (text, photos)?",
          a: "Ideally yes, but it's not mandatory. We can help you write the text and use professional royalty-free photos if needed.",
        },
        {
          q: "Can I modify the website after delivery?",
          a: "Absolutely! We provide full access. For the first 30 days, minor changes are included in the price. After that, we offer support packages starting at €50/month.",
        },
        {
          q: "Are domain and hosting included?",
          a: "Yes, .it domain and hosting are included for the first year. From the second year, renewal is €120/year for hosting + domain.",
        },
        {
          q: "Will the website be optimized for Google?",
          a: "Absolutely. Every website includes on-page SEO optimization: correct structure, meta tags, loading speed, and schema markup for local businesses.",
        },
        {
          q: "Do you only work with healthcare professionals?",
          a: "We specialize in medical, dental, and legal practices, but we work with any professional who needs an effective online presence.",
        },
      ],
    },
    cta: {
      tag: "Limited availability",
      title: ["Your next", "digital", "step?"],
      intro: "Write to us today. You'll receive a technical proposal within the next 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "YOUR NAME",
        email: "Email",
        emailPlaceholder: "EMAIL@EXAMPLE.COM",
        message: "Message",
        messagePlaceholder: "YOUR PROJECT DETAILS...",
        submit: "Send Message",
        sending: "Sending...",
        errorGeneric: "Something went wrong.",
      },
      success: {
        title: "Received",
        message: "We'll reply to your email within 24 hours.",
        reset: "Send another message",
      },
    },
    footer: {
      tagline: "Swiss design, Italian performance. We elevate professional practices' digital presence with a minimal approach.",
      navTitle: "Navigation",
      navLinks: [
        { name: "Services", href: "#servizi" },
        { name: "Method", href: "#processo" },
        { name: "Pricing", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contactTitle: "Contact",
      email: "sales@studiovolt.it",
      vat: "VAT registration in progress",
      copyright: "© {year} Studio Volt · All Rights Reserved",
      edition: "Swiss Modernism 2.0 / 01",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
