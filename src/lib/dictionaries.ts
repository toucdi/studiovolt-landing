export type Locale = "it" | "en";

export const dictionaries = {
  it: {
    nav: {
      links: [
        { name: "Servizi", href: "#servizi" },
        { name: "Soluzioni", href: "#soluzioni" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Metodo", href: "#processo" },
        { name: "Prezzi", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contact: "Contattaci",
    },
    hero: {
      tagline: "Agenti AI / Operativi",
      title: ["Agenti AI", "che lavorano."],
      description:
        "Non chatbot. Agenti operativi che gestiscono inbox, seguono lead, automatizzano processi. Tecnologia concreta per PMI e professionisti italiani.",
      cta: "Scopri il Tuo Agente",
      availability: "Preventivo su misura / Consulenza gratuita",
    },
    stats: [
      { value: "24/7", label: "AGENTI SEMPRE ATTIVI" },
      { value: "80%", label: "TEMPO RISPARMIATO" },
      { value: "100%", label: "OPERATIVITÀ ITALIANA" },
      { value: "∞", label: "TASK AUTOMATIZZATI" },
    ],
    services: {
      sectionTag: "Capacità",
      title: "Cosa fanno",
      titleGray: "i nostri agenti.",
      items: [
        {
          title: "Gestione Inbox",
          desc: "L'agente legge, classifica e risponde alle email. Smista richieste, prepara bozze, segnala priorità. La tua casella sempre sotto controllo.",
        },
        {
          title: "Follow-up Lead",
          desc: "Contatti automatici, promemoria, rilancio prospect freddi. L'agente nutre le opportunità finché non sono pronte per chiudere.",
        },
        {
          title: "Operazioni Clienti",
          desc: "Conferme appuntamenti, onboarding, richieste documenti, aggiornamenti stati. L'agente gestisce la routine operativa con i tuoi clienti.",
        },
        {
          title: "Analisi Documenti",
          desc: "Estrazione dati, sintesi contratti, ricerca informazioni. L'agente elabora documenti e ti restituisce quello che serve, subito.",
        },
        {
          title: "Report & Insights",
          desc: "Dashboard automatiche, metriche aggregate, alert su trend. L'agente monitora i dati e ti segnala quello che conta.",
        },
        {
          title: "Presenza Web",
          desc: "Sito vetrina, landing page, moduli contatto. L'agente è connesso alla tua presenza online e raccoglie richieste direttamente.",
        },
      ],
    },
    process: {
      sectionTag: "Come lavoriamo",
      title: "Dall'idea all'operatività.",
      steps: [
        {
          num: "01",
          title: "Discovery",
          desc: "Analizziamo i tuoi processi attuali. Identifichiamo le attività ripetitive, i colli di bottiglia, le opportunità per l'automazione.",
        },
        {
          num: "02",
          title: "Agente Live",
          desc: "Configuriamo e attiviamo l'agente. Integrato con le tue piattaforme (email, CRM, documenti), inizia a lavorare. Test, affinamento, go-live.",
        },
        {
          num: "03",
          title: "Evoluzione",
          desc: "L'agente impara. Monitoriamo le performance, ottimizziamo le routine, aggiungiamo capacità. Supporto continuo incluso.",
        },
      ],
    },
    pricing: {
      title: "Pacchetti",
      titleGray: "su misura.",
      packageLabel: "AGENTE AI OPERATIVO",
      pricePrefix: "Da configurare insieme",
      price: "Preventivo",
      priceDesc:
        "Ogni azienda è diversa. Analizziamo il tuo caso, definiamo scope e obiettivi, ti presentiamo un preventivo chiaro. Modello one-time + manutenzione oppure canone mensile all-inclusive.",
      cta: "Richiedi Preventivo",
      disclaimer: "Rispondiamo entro 24 ore",
      featuresTitle: "Cosa è incluso",
      features: [
        "Analisi processi e discovery",
        "Configurazione agente AI",
        "Integrazione piattaforme esistenti",
        "Training su dati aziendali",
        "Dashboard monitoraggio",
        "Accesso API e log completi",
        "Sicurezza e privacy GDPR",
        "Supporto e manutenzione",
        "Aggiornamenti inclusi",
        "Ottimizzazione continua",
        "Backup e disaster recovery",
        "Documentazione tecnica completa",
      ],
      disclaimer2: "Ogni progetto è diverso. Partiamo dai tuoi processi, costruiamo la soluzione giusta.",
      customLabel: "STARTUP / SCALE-UP / ENTERPRISE",
      customTitle: "Progetti",
      customTitleGray: "complessi",
      customDesc:
        "Agenti multi-modulo, orchestrazione cross-piattaforma, integrazioni avanzate. Affianchiamo il tuo team per progettare e implementare soluzioni su larga scala.",
      customCta: "Parliamone",
      customDisclaimer: "Dedicato a progetti con scope significativo",
    },
    portfolio: {
      sectionTag: "Lavori selezionati",
      title: "Portfolio",
      titleGray: "progetti.",
      intro:
        "Una selezione di progetti realizzati per clienti in diversi settori. Sviluppo web, applicazioni, piattaforme digitali.",
      items: [
        {
          domain: "hailapi.com",
          description: "Piattaforma API e sviluppo servizi digitali",
        },
        {
          domain: "getrevi.app",
          description: "Applicazione web per gestione progetti",
        },
        {
          domain: "ortottistaroma.com",
          description: "Sito web professionale per studio ortottico",
        },
        {
          domain: "veiled.id",
          description: "Piattaforma identità digitale e verifica",
        },
        {
          domain: "ai-daily.news",
          description: "Portale news tecnologia e intelligenza artificiale",
        },
        {
          domain: "olbiarentcar.com",
          description: "Piattaforma prenotazione noleggio auto",
        },
        {
          domain: "salugenesis.it",
          description: "Portale salute e benessere digitale",
        },
        {
          domain: "osteopaty.it",
          description: "Sito web studio osteopatico professionale",
        },
      ],
    },
    solutions: {
      sectionTag: "Oltre agli agenti",
      title: "Sviluppo software",
      titleGray: "personalizzato.",
      intro:
        "Oltre agli agenti AI, realizziamo progetti digitali su misura. Se serve un'app, un gestionale, un sito complesso, possiamo occuparcene.",
      items: [
        {
          title: "Siti Web",
          desc: "Landing page, siti aziendali, portali. Design moderno, performance ottimizzate, mobile-first.",
        },
        {
          title: "App Mobile",
          desc: "Applicazioni iOS e Android native o ibride. Dalla progettazione al rilascio sugli store.",
        },
        {
          title: "Software Gestionali",
          desc: "Piattaforme su misura per digitalizzare il tuo workflow. Prenotazioni, CRM, dashboard, automazioni.",
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
      intro: "Tutto quello che devi sapere sugli agenti AI operativi e su come possono aiutarti.",
      items: [
        {
          q: "Cos'è esattamente un agente AI operativo?",
          a: "Non è un chatbot. È un software autonomo che esegue attività specifiche nei tuoi sistemi (email, CRM, documenti). Legge, analizza, decide, agisce. Senza intervento umano, 24/7.",
        },
        {
          q: "Quanto tempo ci vuole per avere l'agente attivo?",
          a: "Dipende dalla complessità. Per un agente base (gestione inbox o follow-up), circa 2-3 settimane. Per integrazioni multiple e workflow complessi, 4-6 settimane.",
        },
        {
          q: "L'agente si integra con i nostri sistemi esistenti?",
          a: "Sì. Lavoriamo con Gmail, Outlook, HubSpot, Salesforce, Notion, Google Drive e molte altre piattaforme. Se hai API o webhook, possiamo collegare l'agente.",
        },
        {
          q: "I nostri dati sono al sicuro?",
          a: "Assolutamente. Gli agenti operano in ambienti isolati e sicuri. Conformità GDPR, crittografia end-to-end, accesso controllato. I tuoi dati rimangono tuoi.",
        },
        {
          q: "Posso fermare o modificare l'agente dopo il lancio?",
          a: "Certo. Hai sempre il controllo. Puoi mettere in pausa, modificare le regole, aggiungere capacità, cambiare scope. L'agente evolve con te.",
        },
        {
          q: "Quanto costa un agente AI?",
          a: "Dipende dalle funzionalità e dalle integrazioni. Partiamo da un'analisi dei tuoi processi e ti presentiamo un preventivo chiaro. Modello one-time + manutenzione o canone mensile.",
        },
      ],
    },
    cta: {
      tag: "Disponibilità limitata",
      title: ["Il tuo", "agente", "digitale."],
      intro: "Raccontaci i tuoi processi. Ti mostriamo come un agente AI può automatizzarli. Preventivo entro 24 ore.",
      form: {
        name: "Nome",
        namePlaceholder: "IL TUO NOME",
        email: "Email",
        emailPlaceholder: "EMAIL@ESEMPIO.IT",
        phone: "Telefono",
        phonePlaceholder: "+39 XXX XXX XXXX",
        company: "Azienda / Studio",
        companyPlaceholder: "NOME AZIENDA O STUDIO",
        message: "Messaggio",
        messagePlaceholder: "DESCRIVI I TUOI PROCESSI E COSA VORRESTI AUTOMATIZZARE...",
        submit: "Invia Messaggio",
        sending: "Invio in corso...",
        errorGeneric: "Qualcosa è andato storto.",
      },
      success: {
        title: "Ricevuto",
        message: "Ti risponderemo entro 24 ore. Prepareremo una proposta su misura.",
        reset: "Invia un altro messaggio",
      },
    },
    footer: {
      tagline: "Agenti AI operativi per PMI e professionisti italiani. Tecnologia concreta, non promesse.",
      navTitle: "Navigazione",
      navLinks: [
        { name: "Servizi", href: "#servizi" },
        { name: "Portfolio", href: "#portfolio" },
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
        { name: "Portfolio", href: "#portfolio" },
        { name: "Method", href: "#processo" },
        { name: "Pricing", href: "#prezzi" },
        { name: "FAQ", href: "#faq" },
      ],
      contact: "Contact Us",
    },
    hero: {
      tagline: "AI Agents / Operational",
      title: ["AI Agents", "that work."],
      description:
        "Not chatbots. Operational agents that manage inboxes, follow up leads, automate processes. Concrete technology for Italian SMEs and professionals.",
      cta: "Discover Your Agent",
      availability: "Custom quote / Free consultation",
    },
    stats: [
      { value: "24/7", label: "AGENTS ALWAYS ACTIVE" },
      { value: "80%", label: "TIME SAVED" },
      { value: "100%", label: "ITALIAN OPERATIONS" },
      { value: "∞", label: "AUTOMATED TASKS" },
    ],
    services: {
      sectionTag: "Capabilities",
      title: "What our agents",
      titleGray: "do.",
      items: [
        {
          title: "Inbox Management",
          desc: "The agent reads, classifies, and replies to emails. Sorts requests, prepares drafts, flags priorities. Your inbox always under control.",
        },
        {
          title: "Lead Follow-up",
          desc: "Automatic contacts, reminders, cold prospect revival. The agent nurtures opportunities until they're ready to close.",
        },
        {
          title: "Client Operations",
          desc: "Appointment confirmations, onboarding, document requests, status updates. The agent handles operational routine with your clients.",
        },
        {
          title: "Document Analysis",
          desc: "Data extraction, contract summaries, information search. The agent processes documents and returns what you need, immediately.",
        },
        {
          title: "Reports & Insights",
          desc: "Automatic dashboards, aggregated metrics, trend alerts. The agent monitors data and signals what matters.",
        },
        {
          title: "Web Presence",
          desc: "Showcase website, landing pages, contact forms. The agent is connected to your online presence and collects inquiries directly.",
        },
      ],
    },
    process: {
      sectionTag: "How we work",
      title: "From idea to operations.",
      steps: [
        {
          num: "01",
          title: "Discovery",
          desc: "We analyze your current processes. We identify repetitive activities, bottlenecks, automation opportunities.",
        },
        {
          num: "02",
          title: "Agent Live",
          desc: "We configure and activate the agent. Integrated with your platforms (email, CRM, documents), it starts working. Testing, refinement, go-live.",
        },
        {
          num: "03",
          title: "Evolution",
          desc: "The agent learns. We monitor performance, optimize routines, add capabilities. Continuous support included.",
        },
      ],
    },
    pricing: {
      title: "Custom",
      titleGray: "packages.",
      packageLabel: "OPERATIONAL AI AGENT",
      pricePrefix: "To be configured together",
      price: "Quote",
      priceDesc:
        "Every company is different. We analyze your case, define scope and objectives, present a clear quote. One-time + maintenance or monthly all-inclusive subscription.",
      cta: "Request Quote",
      disclaimer: "We respond within 24 hours",
      featuresTitle: "What's included",
      features: [
        "Process analysis & discovery",
        "AI agent configuration",
        "Existing platform integration",
        "Company data training",
        "Monitoring dashboard",
        "Full API and log access",
        "GDPR security & privacy",
        "Support and maintenance",
        "Updates included",
        "Continuous optimization",
        "Backup & disaster recovery",
        "Complete technical documentation",
      ],
      disclaimer2: "Every project is different. We start from your processes, build the right solution.",
      customLabel: "STARTUP / SCALE-UP / ENTERPRISE",
      customTitle: "Complex",
      customTitleGray: "projects",
      customDesc:
        "Multi-module agents, cross-platform orchestration, advanced integrations. We support your team to design and implement large-scale solutions.",
      customCta: "Let's talk",
      customDisclaimer: "Dedicated to projects with significant scope",
    },
    portfolio: {
      sectionTag: "Selected work",
      title: "Portfolio",
      titleGray: "projects.",
      intro:
        "A selection of projects delivered for clients across different sectors. Web development, applications, digital platforms.",
      items: [
        {
          domain: "hailapi.com",
          description: "API platform and digital services development",
        },
        {
          domain: "getrevi.app",
          description: "Web application for project management",
        },
        {
          domain: "ortottistaroma.com",
          description: "Professional website for orthoptic practice",
        },
        {
          domain: "veiled.id",
          description: "Digital identity and verification platform",
        },
        {
          domain: "ai-daily.news",
          description: "Technology and artificial intelligence news portal",
        },
        {
          domain: "olbiarentcar.com",
          description: "Car rental booking platform",
        },
        {
          domain: "salugenesis.it",
          description: "Digital health and wellness portal",
        },
        {
          domain: "osteopaty.it",
          description: "Professional osteopathic practice website",
        },
      ],
    },
    solutions: {
      sectionTag: "Beyond agents",
      title: "Custom software",
      titleGray: "development.",
      intro:
        "Beyond AI agents, we build custom digital projects. If you need an app, management software, complex website, we can handle it.",
      items: [
        {
          title: "Websites",
          desc: "Landing pages, corporate websites, portals. Modern design, optimized performance, mobile-first.",
        },
        {
          title: "Mobile Apps",
          desc: "Native or hybrid iOS and Android applications. From design to app store release.",
        },
        {
          title: "Management Software",
          desc: "Custom platforms to digitize your workflow. Bookings, CRM, dashboards, automation.",
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
      footerCta: "Request Quote",
    },
    faq: {
      title: "Frequently",
      titleUnderline: "Asked Questions",
      intro: "Everything you need to know about operational AI agents and how they can help you.",
      items: [
        {
          q: "What exactly is an operational AI agent?",
          a: "It's not a chatbot. It's autonomous software that performs specific tasks in your systems (email, CRM, documents). It reads, analyzes, decides, acts. Without human intervention, 24/7.",
        },
        {
          q: "How long does it take to have the agent active?",
          a: "It depends on complexity. For a basic agent (inbox management or follow-up), about 2-3 weeks. For multiple integrations and complex workflows, 4-6 weeks.",
        },
        {
          q: "Does the agent integrate with our existing systems?",
          a: "Yes. We work with Gmail, Outlook, HubSpot, Salesforce, Notion, Google Drive and many other platforms. If you have APIs or webhooks, we can connect the agent.",
        },
        {
          q: "Is our data safe?",
          a: "Absolutely. Agents operate in isolated and secure environments. GDPR compliance, end-to-end encryption, controlled access. Your data remains yours.",
        },
        {
          q: "Can I stop or modify the agent after launch?",
          a: "Of course. You always have control. You can pause, modify rules, add capabilities, change scope. The agent evolves with you.",
        },
        {
          q: "How much does an AI agent cost?",
          a: "It depends on features and integrations. We start with an analysis of your processes and present a clear quote. One-time + maintenance or monthly subscription.",
        },
      ],
    },
    cta: {
      tag: "Limited availability",
      title: ["Your digital", "agent."],
      intro: "Tell us about your processes. We'll show you how an AI agent can automate them. Quote within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "YOUR NAME",
        email: "Email",
        emailPlaceholder: "EMAIL@EXAMPLE.COM",
        phone: "Phone",
        phonePlaceholder: "+39 XXX XXX XXXX",
        company: "Company / Practice",
        companyPlaceholder: "COMPANY OR PRACTICE NAME",
        message: "Message",
        messagePlaceholder: "DESCRIBE YOUR PROCESSES AND WHAT YOU'D LIKE TO AUTOMATE...",
        submit: "Send Message",
        sending: "Sending...",
        errorGeneric: "Something went wrong.",
      },
      success: {
        title: "Received",
        message: "We'll reply within 24 hours. We'll prepare a custom proposal for you.",
        reset: "Send another message",
      },
    },
    footer: {
      tagline: "Operational AI agents for Italian SMEs and professionals. Concrete technology, not promises.",
      navTitle: "Navigation",
      navLinks: [
        { name: "Services", href: "#servizi" },
        { name: "Portfolio", href: "#portfolio" },
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
