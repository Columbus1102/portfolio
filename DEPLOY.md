# Deploy til GitHub Pages

Din side vil være live på: **https://columbus1102.github.io/portfolio/**

---

## Diagnose (hvis noget ikke virker)

| Problem | Årsag |
|--------|--------|
| **"Nothing under branch"** på GitHub Pages | Der er ikke blevet pushet kode til repoet endnu. GitHub har ingen branches før du kører `git push`. |
| **"git is not recognized"** | Git er ikke installeret, eller Cursor/terminalen har ikke genstartet efter installation. |
| **Ingen .git mappe** | `git init` er ikke kørt i denne mappe, eller Git var ikke installeret da du prøvede. |

---

## Trin 1: Installér Git (påkrævet)

1. Gå til [git-scm.com/download/win](https://git-scm.com/download/win)
2. Download og installer **Git for Windows**
3. **Vigtigt:** Luk Cursor helt og åbn det igen efter installation (eller åbn en ny PowerShell fra Start-menuen)

---

## Trin 2: Push til GitHub

Åbn PowerShell eller Cursor-terminalen og kør **præcis i denne rækkefølge**:

```powershell
cd c:\Users\ColumbusDamm\Hjemmeside

git init
git add .
git commit -m "Initial commit - portfolio site"
git remote add origin https://github.com/Columbus1102/portfolio.git
git branch -M main
git push -u origin main
```

**Hvis du får "remote origin already exists":** Kør først `git remote remove origin`, så kør `git remote add origin ...` igen.

**Hvis push beder om login:** Brug din GitHub-brugernavn og en **Personal Access Token** (ikke din almindelige adgangskode). Opret token på: GitHub → Settings → Developer settings → Personal access tokens.

---

## Trin 3: Aktiver GitHub Pages (efter push)

1. Gå til [github.com/Columbus1102/portfolio](https://github.com/Columbus1102/portfolio)
2. Klik **Settings** → **Pages** (i venstre menu)
3. Under **Build and deployment** → **Source**: vælg **Deploy from a branch**
4. Under **Branch**: vælg nu `main` og `/ (root)` (vises først efter du har pushet)
5. Klik **Save**

Efter 1–2 minutter er din side live.

---

## Alternativ: Brug deploy.ps1

Efter Git er installeret kan du dobbeltklikke på `deploy.ps1` i mappen, eller køre fra PowerShell:

```powershell
cd c:\Users\ColumbusDamm\Hjemmeside
.\deploy.ps1
```
