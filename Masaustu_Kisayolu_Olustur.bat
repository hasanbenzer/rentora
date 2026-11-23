@echo off
chcp 65001 >nul
title RENTORA — Masaustu Uygulama Kisayolu Olusturucu
set "APP_DIR=%~dp0"
set "ICO_PATH=%APP_DIR%rentora.ico"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; ^
   $desk = [Environment]::GetFolderPath('Desktop'); ^
   $s1 = $ws.CreateShortcut(\"$desk\RENTORA.lnk\"); ^
   $s1.TargetPath = \"%APP_DIR%Baslat_KiraTakip.bat\"; ^
   $s1.WorkingDirectory = \"%APP_DIR%\"; ^
   $s1.IconLocation = \"%ICO_PATH%,0\"; ^
   $s1.Description = 'RENTORA Gayrimenkul ve Kira Yonetim Merkezi'; ^
   $s1.Save(); ^
   if (Test-Path \"%APP_DIR%Lisans_Uretici_Ac.bat\") { ^
     $s2 = $ws.CreateShortcut(\"$desk\RENTORA Lisans Uretici.lnk\"); ^
     $s2.TargetPath = \"%APP_DIR%Lisans_Uretici_Ac.bat\"; ^
     $s2.WorkingDirectory = \"%APP_DIR%\"; ^
     $s2.IconLocation = \"%ICO_PATH%,0\"; ^
     $s2.Description = 'RENTORA Yonetici Lisans Anahtari Uretici'; ^
     $s2.Save(); ^
   }"

echo.
echo [OK] RENTORA logolu masaustu uygulama kisayollari Masaustunuze olusturuldu!
timeout /t 3
