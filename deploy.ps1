# Deploy portfolio til GitHub Pages
# Kør denne fil EFTER Git er installeret

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "`n=== Portfolio deploy til GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Check Git
try {
    $null = git --version
} catch {
    Write-Host "FEJL: Git er ikke installeret eller ikke i PATH." -ForegroundColor Red
    Write-Host "Download Git fra: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Genstart Cursor/terminalen efter installation.`n" -ForegroundColor Yellow
    exit 1
}

# Init hvis nødvendigt
if (-not (Test-Path ".git")) {
    Write-Host "Kører git init..." -ForegroundColor Gray
    git init
}

# Remove existing remote hvis det fejler
git remote remove origin 2>$null

Write-Host "Tilføjer filer..." -ForegroundColor Gray
git add .
git status --short

Write-Host "`nOpretter commit..." -ForegroundColor Gray
git commit -m "Deploy portfolio"
if ($LASTEXITCODE -ne 0) { Write-Host "(Intet nyt at committe - fortsætter)" -ForegroundColor Gray }

Write-Host "Tilføjer remote..." -ForegroundColor Gray
git remote add origin https://github.com/Columbus1102/portfolio.git

Write-Host "Sætter branch til main..." -ForegroundColor Gray
git branch -M main

Write-Host "`nPusher til GitHub..." -ForegroundColor Gray
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== SUCCES ===" -ForegroundColor Green
    Write-Host "Gå til: https://github.com/Columbus1102/portfolio/settings/pages"
    Write-Host "Aktiver Pages: Deploy from branch -> main -> / (root)"
    Write-Host "`nDin side vil være live på: https://columbus1102.github.io/portfolio/" -ForegroundColor Cyan
} else {
    Write-Host "`nPush fejlede. Tjek at du er logget ind på GitHub." -ForegroundColor Red
    Write-Host "Du skal bruge en Personal Access Token i stedet for adgangskode." -ForegroundColor Yellow
}
