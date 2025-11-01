# 🚀 Comandi Git per GitHub Push

## ✅ Repository Inizializzato

Il repository Git è stato creato con successo!

## 📤 Prossimi Passi per GitHub

### 1. Assicurati che il repository GitHub esista

Prima di eseguire questi comandi, vai su:
**https://github.com/ZaZza402/sartoria-viorel**

Se non esiste ancora, crealo:

1. Vai su https://github.com/new
2. Repository name: `sartoria-viorel`
3. Description: `Website ufficiale Sartoria Viorel Danalache`
4. ✅ Public
5. ❌ NON aggiungere README, .gitignore, o license
6. Click "Create repository"

### 2. Collega il Repository Remoto

```bash
git remote add origin https://github.com/ZaZza402/sartoria-viorel.git
```

### 3. Verifica il Remote

```bash
git remote -v
```

Dovresti vedere:

```
origin  https://github.com/ZaZza402/sartoria-viorel.git (fetch)
origin  https://github.com/ZaZza402/sartoria-viorel.git (push)
```

### 4. Rinomina Branch in 'main' (se necessario)

```bash
git branch -M main
```

### 5. Push su GitHub

```bash
git push -u origin main
```

Se richiesto, inserisci le tue credenziali GitHub o usa un Personal Access Token.

### 6. ✅ Verifica su GitHub

Vai su https://github.com/ZaZza402/sartoria-viorel e verifica che tutti i file siano stati caricati!

---

## 🌐 Prossimo: Deploy su Vercel

Una volta pushato su GitHub:

1. Vai su [https://vercel.com](https://vercel.com)
2. Login con GitHub
3. Click "Add New Project"
4. Importa `ZaZza402/sartoria-viorel`
5. Click "Deploy"

✅ Il sito sarà live in 2-3 minuti!

---

## 📋 Comandi Veloci (Tutto in Una Volta)

```bash
# Aggiungi remote (se non già fatto)
git remote add origin https://github.com/ZaZza402/sartoria-viorel.git

# Rinomina branch
git branch -M main

# Push
git push -u origin main
```

---

## 🔄 Per Futuri Aggiornamenti

Dopo la prima push, per aggiornamenti futuri:

```bash
# 1. Fai modifiche ai file
# 2. Aggiungi le modifiche
git add .

# 3. Commit
git commit -m "Descrizione delle modifiche"

# 4. Push
git push
```

---

## ⚠️ Troubleshooting

### Errore: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/ZaZza402/sartoria-viorel.git
```

### Errore: "Permission denied"

Devi configurare l'autenticazione GitHub:

- Usa HTTPS con Personal Access Token
- Oppure configura SSH keys

---

**Stato Attuale:** ✅ Repository inizializzato e pronto per la push!
