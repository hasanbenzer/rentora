# RENTORA — Gayrimenkulünüzün Akıllı Yönetim Merkezi

**RENTORA**, gayrimenkul sahiplerinin ve portföy yöneticilerinin taşınmazlarını, kiracılarını, aylık kira tahakkuk/tahsilatlarını, döviz/altın bazlı edinim maliyeti amortismanlarını (başa baş noktası) ve 6098 sayılı Türk Borçlar Kanunu uyumlu resmi sözleşme/belgelerini tek ekrandan yönetebilmesi için geliştirilmiş mobil uyumlu (iPhone & Android PWA) yönetim platformudur.

## ✨ Temel Özellikler

- **Tek Ekran Yönetici Kokpiti:** Aylık tahsilat oranı, bekleyen/geciken kiralar, bölünmüş genel tahsilat grafiği ve tek sıra kurumsal gayrimenkul listesi.
- **Canlı Döviz & Altın Kuru + Başa Baş (Amortisman) Motoru:**
  - Gayrimenkul edinim maliyeti **USD ($), EUR (€), Gram Altın (Gr) veya TL (₺)** olarak girilebilir.
  - Kira tahsilatları, tahsil edildiği tarihteki döviz/altın kuruyla edinim maliyetinden düşülür ve mülkün kaç yıl sonra **Başa Baş (Amorti)** noktasına ulaşacağı grafik ve tabloyla raporlanır.
- **Otomatik Kira Tahakkuk & Tahsilat:** Tam ödeme, kısmi ödeme, çoklu ay toplu tahsilat dağıtımı, mükerrer tahsilat engeli ve iptal/ters kayıt denetim izi.
- **14 Resmi Hukuki Belge & Sözleşme Merkezi (PDF):** Konut ve İşyeri Kira Sözleşmeleri, TBK m.352/1 Tahliye Taahhütnamesi, Depozito/Anahtar/Demirbaş Tutanakları, Kira Makbuzu, Cari Ekstre ve TBK m.315 İhtarname Taslağı.
- **Veri Kayıpsız Güncelleme Mimarisi:** Kullanıcı verileri (`kira_verileri.json` ve tarayıcı `LocalStorage` alanı) uygulama kodlarından tamamen izole edilmiştir. Yeni sürüm güncellemelerinde verileriniz silinmez ve otomatik şema yükseltici (`migrateAndNormalizeState`) ile korunur.

## 🚀 Çalıştırma ve Güncelleme

- **Başlatmak için:** `Baslat_KiraTakip.bat` (veya doğrudan `index.html`) dosyasını çalıştırın.
- **Veri Kayıpsız Güncellemek için:** `Guncelle_Rentora.bat` dosyasını çalıştırın.
