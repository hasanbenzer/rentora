@echo off
chcp 65001 >nul
title RENTORA — Premium Gayrimenkul ve Kira Yonetim Sistemi
cd /d "%~dp0"
echo ======================================================================
echo   RENTORA — PREMIUM MOBILE PROPERTY ^& RENT MANAGEMENT SYSTEM
echo ======================================================================

where python >nul 2>&1 && (
  python server.py
  goto :end
)
where py >nul 2>&1 && (
  py server.py
  goto :end
)

echo Yerel Python sunucusu bulunamadi, RENTORA dogrudan tarayicida aciliyor...
start "" "%~dp0index.html"

:end
