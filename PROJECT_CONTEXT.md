# 📋 Contesto Progetto - Sartoria Viorel Danalache

## 🎯 Informazioni Progetto

**Nome Cliente:** Viorel Danalache  
**Tipo Business:** Sartoria Artigianale  
**Lingua:** Italiano  
**Repository GitHub:** https://github.com/ZaZza402/sartoria-viorel.git  
**Deployment:** Vercel - https://sartoria-viorel.vercel.app

## 📝 Descrizione

Sito web professionale per una sartoria locale specializzata in:

- Abiti su misura
- Riparazioni sartoriali
- Creazioni personalizzate
- Alta moda artigianale

## 🛠️ Stack Tecnologico

### Frontend Framework

- **React 19.1.1** - UI Library moderna
- **TypeScript 5.9.3** - Type safety
- **Vite (Rolldown 7.1.14)** - Build tool ultra-veloce

### Styling & Animation

- **Tailwind CSS 4.1.16** - Utility-first CSS
- **@tailwindcss/postcss** - Plugin PostCSS per Tailwind v4
- **Framer Motion 12.23.24** - Libreria animazioni

### Routing & Utils

- **React Router DOM 7.9.5** - Client-side routing
- **clsx 2.1.1** - Utility per gestione classi

### Development Tools

- **ESLint 9.36.0** - Linting
- **TypeScript ESLint** - TS linting rules
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes

## 📁 Struttura Progetto

```
Sartoria Viorel/
├── public/
│   └── vite.svg                    # Favicon temporaneo (da sostituire)
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Bottone riutilizzabile (4 varianti)
│   │   │   ├── Container.tsx       # Container responsive
│   │   │   └── index.ts
│   │   └── layout/
│   │       ├── Header.tsx          # Header fisso con navigazione
│   │       ├── Footer.tsx          # Footer con link e contatti
│   │       └── index.ts
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts          # Hook per rilevare scroll
│   │   └── index.ts
│   │
│   ├── pages/                      # Pronto per pagine future
│   │
│   ├── types/
│   │   └── index.ts                # Type definitions (Service, ContactInfo, etc.)
│   │
│   ├── utils/
│   │   ├── cn.ts                   # Utility per merge classNames
│   │   └── animations.ts           # Framer Motion variants predefiniti
│   │
│   ├── assets/                     # File statici
│   ├── App.tsx                     # Componente principale
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Stili globali Tailwind
│
├── DEPLOYMENT.md                   # Guida deployment completa
├── GIT_COMMANDS.md                # Comandi Git quick reference
├── NETWORK_ACCESS.md              # Info accesso network
├── PROJECT_SETUP.md               # Setup iniziale progetto
├── README-GITHUB.md               # README per GitHub
│
├── .gitignore                     # File Git ignore
├── index.html                     # HTML principale con meta tags
├── package.json                   # Dipendenze npm
├── postcss.config.js              # Config PostCSS
├── tailwind.config.js             # Config Tailwind
├── tsconfig.json                  # Config TypeScript
├── vercel.json                    # Config Vercel deployment
└── vite.config.ts                 # Config Vite con network exposure
```

## 🌍 Lingua & Localizzazione

**Lingua Principale:** Italiano

### Traduzioni Implementate:

- ✅ Meta tags in italiano
- ✅ Titoli e descrizioni
- ✅ Navigazione (Home, Chi Siamo, Servizi, Galleria, Contatti)
- ✅ Bottoni CTA
- ✅ Footer
- ✅ Hero section

### Meta Tags SEO/Social:

- ✅ Title: "Sartoria Viorel Danalache - Sartoria su Misura e Alta Moda"
- ✅ Description ottimizzata per SEO
- ✅ Keywords in italiano
- ✅ Lang attribute: `it`
- ✅ Locale: `it_IT`

## 📱 Ottimizzazione Social Sharing

### Implementato:

- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards
- ✅ Meta image placeholder configurato (`/og-image.jpg`)
- ✅ URL configurato per Vercel

### Da Aggiungere (TODO):

- ⏳ Immagine Open Graph personalizzata (1200x630px)
- ⏳ Favicon personalizzato
- ⏳ Apple touch icon

## 🎨 Design System

### Colori (Tailwind Config):

- **Primary:** Blu (Sky) - 50-900 shades
- **Secondary:** Viola (Fuchsia) - 50-900 shades
- **Font sans:** Inter, system-ui, sans-serif
- **Font serif:** Playfair Display, Georgia, serif

### Componenti UI:

1. **Button**

   - Varianti: primary, secondary, outline, ghost
   - Sizes: sm, md, lg
   - Fully typed con TypeScript

2. **Container**

   - Sizes: sm, md, lg, xl, full
   - Responsive padding

3. **Header**

   - Fixed position
   - Backdrop blur
   - Smooth animation on load
   - Responsive menu

4. **Footer**
   - 3 colonne
   - Links, contatti, info

## 🎭 Animazioni

### Framer Motion Variants Disponibili:

- `fadeIn` - Fade semplice
- `slideUp` - Slide dal basso
- `slideInLeft` - Slide da sinistra
- `slideInRight` - Slide da destra
- `scaleUp` - Scale con fade
- `staggerContainer` - Container per stagger
- `staggerItem` - Item per stagger

## 🔧 Configurazioni Speciali

### Vite (vite.config.ts):

```typescript
server: {
  host: true,        // Espone su network
  port: 5173,
  strictPort: false,
}
```

### PostCSS (postcss.config.js):

```javascript
plugins: {
  '@tailwindcss/postcss': {},  // Tailwind v4
}
```

### Vercel (vercel.json):

- Framework: Vite
- Output: dist
- SPA rewrites configurati

## 🚀 Deployment Flow

1. **Sviluppo Locale**

   - `npm run dev` → http://localhost:5173
   - Network: http://192.168.1.84:5173

2. **Push su GitHub**

   - Repository: ZaZza402/sartoria-viorel
   - Branch: main

3. **Auto-deploy Vercel**
   - Ogni push triggera deploy automatico
   - Preview deployments per PR
   - Production: main branch

## 📞 Informazioni Contatto (Da Aggiornare)

**Email:** info@viorelsartoria.com  
**Telefono:** +39 XXX XXX XXXX  
**Indirizzo:** Da definire

## ✅ Stato Attuale

- ✅ Setup iniziale completo
- ✅ Componenti base creati
- ✅ Styling Tailwind configurato
- ✅ Animazioni Framer Motion setup
- ✅ Traduzione italiana completa
- ✅ Meta tags social sharing configurati
- ✅ Git repository inizializzato
- ✅ Pronto per GitHub push
- ✅ Configurazione Vercel pronta

## 🎯 Prossimi Passi

1. **Push su GitHub**

   - Eseguire comandi in `GIT_COMMANDS.md`

2. **Deploy su Vercel**

   - Seguire guida in `DEPLOYMENT.md`

3. **Contenuto**

   - Aggiungere immagini
   - Creare pagine (Chi Siamo, Servizi, Galleria, Contatti)
   - Aggiungere foto lavori sartoriali

4. **Design**

   - Personalizzare colori brand
   - Aggiungere logo
   - Creare favicon
   - Creare immagine OG

5. **SEO**

   - Aggiungere Google Analytics
   - Configurare Google Search Console
   - Ottimizzare immagini

6. **Features**
   - Form contatti
   - Galleria immagini interattiva
   - Sistema prenotazioni (opzionale)
   - Integrazione Maps per indirizzo

## 📚 Documentazione

- `README-GITHUB.md` - README completo per GitHub
- `DEPLOYMENT.md` - Guida deployment step-by-step
- `GIT_COMMANDS.md` - Comandi Git quick reference
- `PROJECT_SETUP.md` - Setup tecnico dettagliato
- `NETWORK_ACCESS.md` - Info accesso da dispositivi

## 🔐 Note di Sicurezza

- ✅ No sensitive data in repo
- ✅ .gitignore configurato
- ✅ node_modules esclusi
- ✅ .vercel folder escluso

---

**Ultimo Aggiornamento:** 1 Novembre 2025  
**Versione:** 1.0.0  
**Status:** ✅ Pronto per deployment
