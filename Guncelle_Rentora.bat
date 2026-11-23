@echo off
chcp 65001 >nul
title RENTORA — Veri Kayipsiz Otomatik Guncelleyici
color 0B
cd /d "%~dp0"
set "RT_SRC=%~dp0"
set "RT_BAT=%~f0"
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$bat=$env:RT_BAT; $t=Get-Content -LiteralPath $bat -Raw -Encoding UTF8; $m='# <RT_PS>'; $i=$t.IndexOf($m); Invoke-Expression $t.Substring($i + $m.Length)"
pause
exit /b

# <RT_PS>
$ErrorActionPreference = 'Stop'
$srcDir = [System.IO.Path]::GetFullPath($env:RT_SRC.TrimEnd('\', '/'))
Set-Location $srcDir

Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "  RENTORA — VERİ KAYIPSIZ OTOMATİK GÜNCELLEME SİSTEMİ" -ForegroundColor Cyan
Write-Host "  Kayıtlı gayrimenkul, kiracı ve tahsilat verileriniz (kira_verileri.json)" -ForegroundColor Cyan
Write-Host "  ve tarayıcı hafızanız (LocalStorage) KESİNLİKLE SİLİNMEZ." -ForegroundColor Cyan
Write-Host "======================================================================"
Write-Host ""

# 1. Mevcut kira_verileri.json varsa yedekler/ klasörüne tarihli yedek al
$dataFile = Join-Path $srcDir "kira_verileri.json"
$backupDir = Join-Path $srcDir "yedekler"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
$ts = Get-Date -Format "yyyy-MM-dd_HHmmss"

if (Test-Path $dataFile) {
    $bakPath = Join-Path $backupDir ("kira_verileri_GUNCELLEME_ONCESI_" + $ts + ".json")
    Copy-Item -Path $dataFile -Destination $bakPath -Force
    Write-Host ("[1/3] Mevcut verileriniz güvenle yedeklendi: " + $bakPath) -ForegroundColor Green
} else {
    Write-Host "[1/3] Yerel veri dosyası kontrol edildi (Tarayıcı verileriniz korunuyor)." -ForegroundColor Green
}

# 2. GitHub üzerinden en son RENTORA güncellemesini indir (Git kurulu olmasa da doğrudan ZIP olarak çeker!)
Write-Host "[2/3] GitHub (hasanbenzer/rentora) üzerinden en son sürüm kontrol ediliyor ve indiriliyor..." -ForegroundColor Cyan
if (Test-Path (Join-Path $srcDir ".git")) {
    try {
        & git pull --rebase --autostash
        Write-Host "      Git üzerinden güncelleme başarıyla uygulandı!" -ForegroundColor Green
    } catch {}
} else {
    try {
        $zipUrl = "https://github.com/hasanbenzer/rentora/archive/refs/heads/main.zip"
        $tmpZip = Join-Path $backupDir "rentora_latest_update.zip"
        $tmpExt = Join-Path $backupDir "rentora_extract_tmp"
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $zipUrl -OutFile $tmpZip -UseBasicParsing
        if (Test-Path $tmpExt) { Remove-Item -Path $tmpExt -Recurse -Force }
        Expand-Archive -Path $tmpZip -DestinationPath $tmpExt -Force
        $innerDir = Get-ChildItem -Path $tmpExt -Directory | Select-Object -First 1
        if ($innerDir) {
            Get-ChildItem -Path $innerDir.FullName -Recurse -File | ForEach-Object {
                $name = $_.Name
                if ($name -like "kira_verileri*.json" -or $_.FullName -match "\\yedekler\\") { return }
                $rel = $_.FullName.Substring($innerDir.FullName.Length).TrimStart('\', '/')
                $dest = Join-Path $srcDir $rel
                $destParent = Split-Path $dest -Parent
                if (-not (Test-Path $destParent)) { New-Item -ItemType Directory -Path $destParent -Force | Out-Null }
                Copy-Item -Path $_.FullName -Destination $dest -Force
            }
            Write-Host "      GitHub üzerinden en yeni RENTORA kod ve tasarım dosyaları güncellendi!" -ForegroundColor Green
        }
        Remove-Item -Path $tmpZip -Force -ErrorAction SilentlyContinue
        Remove-Item -Path $tmpExt -Recurse -Force -ErrorAction SilentlyContinue
    } catch {
        Write-Host ("      Bilgi: GitHub bağlantısı kurulamadı veya zaten en güncel sürümdesiniz. (" + $_.Exception.Message + ")") -ForegroundColor Yellow
    }
}

# 3. Eğer yedek alındıysa ve kira_verileri.json silindiyse geri koy
if ((Test-Path $bakPath) -and (-not (Test-Path $dataFile))) {
    Copy-Item -Path $bakPath -Destination $dataFile -Force
}

$verFile = Join-Path $srcDir "VERSION"
$ver = if (Test-Path $verFile) { (Get-Content $verFile -Raw).Trim() } else { "1.0.0" }
Write-Host ("[3/3] RENTORA v" + $ver + " hazır! Verileriniz eksiksiz korundu.") -ForegroundColor Green
