# Studio Volt - Landing Page Professionale

Una landing page moderna e professionale per **Studio Volt**, una software house specializzata in agenti AI operativi e sviluppo software personalizzato per PMI e professionisti italiani.

## ✨ Caratteristiche

- **Next.js 15** con TypeScript
- **Tailwind CSS** per lo styling
- **Design mobile-first** completamente responsive  
- **Colori**: nero, bianco con accenti gold/amber
- **Lingua**: Italiano
- **Tono**: Professionale ma accessibile, non corporate/freddo

## 🎯 Sezioni

1. **Hero** - Headline forte con social proof ("Siti consegnati in 7 giorni", "100% soddisfatti o rimborsati")
2. **Servizi** - Agenti AI operativi, sviluppo software su misura
3. **Come Funziona** - 3 step: Ti contattiamo → Creiamo la bozza → Pubblichiamo
4. **Chi Siamo** - Olivia Spendersen, Digital Consultant
5. **Contatti** - Form semplice (nome/email/messaggio)
6. **Footer** - P.IVA placeholder e informazioni di contatto

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

## 🎨 Colori Personalizzati

Il progetto utilizza una palette di colori gold/amber personalizzata:

- `gold-400`: #fbbf24
- `gold-500`: #f59e0b (primary)
- `gold-600`: #d97706

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

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📄 Licenza

© 2024 Studio Volt. Tutti i diritti riservati.

---

**Sviluppato per**: Studio Volt (studiovolt.it)  
**Design**: Moderno, professionale, italiano  
**Target**: PMI e Professionisti Italiani  
**Consegna**: 7 giorni garantiti