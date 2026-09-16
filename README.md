# Studio Volt - Landing Page Professionale

Una landing page moderna e professionale per **Studio Volt**, una digital agency specializzata in agenti AI operativi e sviluppo software su misura per PMI e professionisti italiani.

## ✨ Caratteristiche

- **Next.js 16** con TypeScript
- **Tailwind CSS** per lo styling
- **Design mobile-first** completamente responsive  
- **Colori**: nero, bianco con tonalità slate
- **Multilingua**: Italiano `/` e Inglese `/en`
- **Tono**: Professionale ma accessibile, tecnologia concreta

## 🎯 Sezioni

1. **Hero** - Agenti AI operativi che lavorano per te
2. **Servizi** - Capacità degli agenti: inbox, lead, operazioni clienti, analisi documenti
3. **Portfolio** - Progetti realizzati con 8 case study
4. **Processo** - Discovery, Agente Live, Evoluzione
5. **Prezzi** - Preventivi su misura, progetti complessi
6. **Soluzioni** - Sviluppo software personalizzato oltre agli agenti
7. **FAQ** - Domande frequenti
8. **Contatti** - Form con nome, email, telefono, azienda e messaggio
9. **Footer** - P.IVA e informazioni di contatto

## 🚀 Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000 nel browser
```

## 📦 Deploy su Vercel

1. **Push su GitHub** (o altro Git provider)
2. **Connetti a Vercel**:
   - Vai su [vercel.com](https://vercel.com)
   - Clicca "New Project"
   - Importa questo repository
3. **Configura il dominio**:
   - Aggiungi `studiovolt.it` nelle impostazioni del progetto
   - Configura i DNS del dominio per puntare a Vercel

### Configurazione DNS per studiovolt.it

```
Tipo: CNAME
Nome: www
Valore: cname.vercel-dns.com

Tipo: A
Nome: @
Valore: 76.76.19.61
```

## 🎨 Design System

Il progetto utilizza uno stile Swiss Modernism 2.0:

- Tipografia: Inter (Google Fonts)
- Colori: Black, White, Slate tones
- Layout: Grid-based, minimal borders
- Animazioni: Framer Motion con stagger effects
- Spaziatura: Ampia e funzionale

## 📱 Mobile-First

Il sito è ottimizzato mobile-first con:
- Navigation mobile con hamburger menu
- Form di contatto responsive
- Sezioni ottimizzate per touch
- Performance ottimizzate per dispositivi mobili

## 📧 Contact Form

Il form di contatto utilizza SMTP per l'invio delle email. Per configurarlo:

1. **Copia `.env.example` in `.env.local`**:
   ```bash
   cp .env.example .env.local
   ```

2. **Configura le variabili d'ambiente**:
   - `SMTP_HOST` - Server SMTP (es. smtp.gmail.com)
   - `SMTP_PORT` - Porta SMTP (solitamente 465 per SSL)
   - `SMTP_USER` - Username SMTP (la tua email)
   - `SMTP_PASS` - Password SMTP o password app-specific
   - `CONTACT_RECIPIENT` - Email destinataria (suggerito: sales@studiovolt.it)

3. **Nota**: Non committare mai il file `.env.local` con credenziali reali.

## 🔧 Tecnologie Utilizzate

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Fonts**: Inter (Google Fonts)
- **Email**: Nodemailer

## 📄 Licenza

© 2025 Studio Volt. Tutti i diritti riservati.

---

**Sviluppato per**: Studio Volt (studiovolt.it)  
**Design**: Swiss Modernism 2.0 / Minimal  
**Target**: PMI e professionisti italiani  
**Focus**: Agenti AI operativi + Software su misura