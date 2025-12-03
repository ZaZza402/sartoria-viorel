# 🚀 Guida al Deployment - Sartoria Viorel Danalache

## 📋 Checklist Pre-Deployment

- ✅ Progetto tradotto in italiano
- ✅ Meta tags configurati per social sharing
- ✅ Tailwind CSS v4 configurato
- ✅ Vite configurato con network exposure
- ✅ Vercel.json creato
- ✅ .gitignore aggiornato
- ✅ README preparato

## 🔗 Step 1: Setup Repository GitHub

### 1.1 Inizializza Git (se non già fatto)

```bash
cd "D:\CLIENTS\DEMO\Sartoria Viorel"
git init
git add .
git commit -m "Initial commit: Sartoria Viorel Danalache website"
```

### 1.2 Aggiungi Remote Repository

```bash
git remote add origin https://github.com/ZaZza402/sartoria-viorel.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy su Vercel

### Opzione A: Deploy Automatico (Consigliato)

1. **Vai su Vercel:**

   - Apri [https://vercel.com](https://vercel.com)
   - Fai login con GitHub

2. **Importa Repository:**

   - Click "Add New Project"
   - Click "Import Git Repository"
   - Seleziona `ZaZza402/sartoria-viorel`

3. **Configura Progetto:**

   - **Project Name:** `sartoria-viorel`
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (già configurato)
   - **Output Directory:** `dist` (già configurato)
   - **Install Command:** `npm install` (già configurato)

4. **Deploy:**
   - Click "Deploy"
   - Attendi 2-3 minuti
   - ✅ Il sito sarà live su `https://sartoria-viorel.vercel.app`

### Opzione B: Deploy via CLI

```bash
# Installa Vercel CLI globalmente
npm install -g vercel

# Login a Vercel
vercel login

# Deploy
vercel

# Deploy in produzione
vercel --prod
```

## 🔧 Step 3: Configurazione Dominio (Opzionale)

Se hai un dominio personalizzato:

1. Vai su Vercel Dashboard → Project Settings → Domains
2. Aggiungi il tuo dominio principale (es. `www.sartoriaviorel.it`)
3. Aggiungi anche il dominio senza www (es. `sartoriaviorel.it`)
4. Vercel ti chiederà se vuoi reindirizzare `sartoriaviorel.it` a `www.sartoriaviorel.it`. Conferma questa opzione.
5. Configura i DNS records come indicato da Vercel per entrambi i domini.
6. Attendi la propagazione DNS (5-30 minuti)

> **Nota:** Abbiamo anche aggiunto una regola di redirect nel file `vercel.json` per forzare il redirect a `www` lato server, ma la configurazione nel pannello Vercel è fondamentale.

## 📱 Step 4: Verifica Social Sharing

### Test WhatsApp:

1. Invia il link `https://sartoria-viorel.vercel.app` su WhatsApp
2. Verifica che appaia:
   - ✅ Titolo: "Sartoria Viorel Danalache"
   - ✅ Descrizione
   - ✅ Immagine anteprima (quando aggiungerai l'immagine)

### Test Facebook:

1. Usa [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Inserisci URL: `https://sartoria-viorel.vercel.app`
3. Click "Scrape Again" per aggiornare cache

### Test Twitter:

1. Usa [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Inserisci URL e verifica l'anteprima

## 📸 Step 5: Aggiungi Immagine Open Graph

1. **Crea l'immagine:**

   - Dimensione consigliata: 1200x630px
   - Formato: JPG o PNG
   - Nome file: `og-image.jpg`

2. **Aggiungi al progetto:**

   ```bash
   # Copia la tua immagine nella cartella public
   cp path/to/your-image.jpg public/og-image.jpg
   ```

3. **Commit e Push:**

   ```bash
   git add public/og-image.jpg
   git commit -m "Add Open Graph image"
   git push
   ```

4. Vercel farà automaticamente il re-deploy

## 🔄 Step 6: Aggiornamenti Futuri

Ogni volta che vuoi aggiornare il sito:

```bash
# 1. Fai le tue modifiche al codice
# 2. Commit delle modifiche
git add .
git commit -m "Descrizione delle modifiche"

# 3. Push su GitHub
git push

# ✅ Vercel rileverà automaticamente il push e farà il deploy!
```

## 🎯 URL Finali

Dopo il deployment, il sito sarà disponibile a:

- **Vercel URL:** `https://sartoria-viorel.vercel.app`
- **Dominio Custom:** (se configurato) `https://www.tuodominio.com`

## 📊 Monitoraggio

### Dashboard Vercel:

- **Analytics:** Visualizzazioni, performance
- **Logs:** Errori e debug
- **Deployments:** Storico dei deployment
- **Settings:** Configurazioni progetto

## ⚡ Performance Tips

Vercel ottimizzerà automaticamente:

- ✅ Caching dei file statici
- ✅ CDN globale
- ✅ Compressione Gzip/Brotli
- ✅ Image optimization (se usi next/image)
- ✅ SSL/HTTPS automatico

## 🆘 Troubleshooting

### Build Failure:

```bash
# Testa il build localmente prima di pushare
npm run build
```

### 404 Error:

- Verifica che `vercel.json` sia presente
- Controlla la configurazione rewrites

### Deployment Lento:

- Controlla dimensione node_modules
- Verifica che .gitignore contenga node_modules

## ✅ Checklist Post-Deployment

- [ ] Sito live e accessibile
- [ ] Test su mobile
- [ ] Test condivisione WhatsApp
- [ ] Test condivisione Facebook
- [ ] Google Analytics configurato (opzionale)
- [ ] Favicon personalizzato (opzionale)

## 📞 Support

Per problemi con Vercel:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

---

**Buon deployment! 🚀**
