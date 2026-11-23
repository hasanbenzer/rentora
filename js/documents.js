/* ==========================================================================
   RENTORA — BELGE VE SÖZLEŞME MERKEZİ (TBK & HMK UYUMLU 14 RESMİ BELGE MOTORU)
   6098 Sayılı Türk Borçlar Kanunu & 6100 Sayılı HMK Uyarınca Profesyonel Şablonlar
   ========================================================================== */

const RENTORA_DOC_CATALOG = [
  {
    id: 'konut_sozlesme',
    code: 'DOC-01',
    title: 'Konut Kira Sözleşmesi',
    category: 'Sözleşme',
    badge: 'TBK m.299-356',
    icon: 'ph-house-line',
    desc: 'Konut nitelikli taşınmazlar için genel ve özel şartları içeren tam kapsamlı kira kontratı.',
    fields: [
      { key: 'usePurpose', label: 'Kullanım Amacı', default: 'Yalnızca Konut (Mesken) Olarak Kullanım' },
      { key: 'increaseClause', label: 'Yıllık Artış Hükmü', default: 'TÜİK tarafından açıklanan on iki aylık ortalama TÜFE değişim oranını aşmamak kaydıyla artış yapılır (TBK m.344).' },
      { key: 'fixturesList', label: 'Teslim Edilen Demirbaşlar', default: 'Kombi, Ankastre Ocak-Fırın-Davlumbaz, Duşakabin, Çelik Kapı ve İç Oda Kapıları sağlam ve çalışır vaziyette.' }
    ]
  },
  {
    id: 'isyeri_sozlesme',
    code: 'DOC-02',
    title: 'Çatılı İşyeri Kira Sözleşmesi',
    category: 'Sözleşme',
    badge: 'TBK & GVK m.94 Stopaj',
    icon: 'ph-storefront',
    desc: 'Ticari işletme, ofis, dükkan ve mağazalar için stopaj, devir ve ciro/artış hükümlü sözleşme.',
    fields: [
      { key: 'commercialActivity', label: 'Faaliyet Konusu', default: 'Ticari İşletme / Ofis Faaliyeti' },
      { key: 'withholdingTax', label: 'Stopaj ve Vergi Hükmü', default: 'Gelir Vergisi Kanunu m.94 uyarınca kira stopajı (%20) ve çevre temizlik vergisi Kiracı tarafından ilgili vergi dairesine yatırılır.' },
      { key: 'increaseClause', label: 'Yıllık Kira Artış Hükmü', default: 'TBK m.344 uyarınca bir önceki kira yılında TÜİK 12 aylık ortalama TÜFE oranında artırılır.' }
    ]
  },
  {
    id: 'tahliye_taahhutnamesi',
    code: 'DOC-03',
    title: 'Yazılı Tahliye Taahhütnamesi',
    category: 'Tahliye & Hukuk',
    badge: 'TBK m.352/1 (Ayrı Belge)',
    icon: 'ph-stamp',
    desc: 'Kiralananın tesliminden sonra düzenlenen, belirli tarihte kayıtsız şartsız tahliye beyanı.',
    fields: [
      { key: 'deliveryConfirmDate', label: 'Kiralananın Fiili Teslim Tarihi', default: '' },
      { key: 'commitmentSignDate', label: 'Taahhütname Düzenleme (İmza) Tarihi', default: '' },
      { key: 'evacuationDate', label: 'Taahhüt Edilen Tahliye Tarihi', default: '' },
      { key: 'spouseNotice', label: 'Aile Konutu Notu (TBK m.349)', default: 'Aile konutu niteliğindeki taşınmazlarda eşin açık rızası / ortak imzası geçerlilik ve itirazların önlenmesi açısından tavsiye edilir.' }
    ]
  },
  {
    id: 'depozito_tutanagi',
    code: 'DOC-04',
    title: 'Depozito (Güvence Bedeli) Teslim Tutanağı',
    category: 'Tutanak',
    badge: 'TBK m.342 Emanet',
    icon: 'ph-vault',
    desc: 'Üç aylık kira bedelini aşmayan güvence bedelinin (depozito) teslim ve iade şartları tutanağı.',
    fields: [
      { key: 'depositAmountText', label: 'Alınan Güvence Bedeli (Depozito)', default: '' },
      { key: 'depositHoldType', label: 'Muhafaza Şekli', default: 'TBK m.342 uyarınca vadeli tasarruf hesabı / emanet güvence bakiyesi olarak izlenmektedir.' },
      { key: 'returnCondition', label: 'İade Şartı', default: 'Tahliye anında taşınmazda olağan kullanım dışı hasar ve ödenmemiş kira/aidat/fatura borcu bulunmaması halinde iade edilir.' }
    ]
  },
  {
    id: 'anahtar_teslim',
    code: 'DOC-05',
    title: 'Anahtar ve Sayaç Teslim Tutanağı',
    category: 'Tutanak',
    badge: 'Fiili Teslim Kanıtı',
    icon: 'ph-key',
    desc: 'Bina, daire, posta kutusu anahtarları ile elektrik/su/doğalgaz sayaç endekslerinin teslim tutanağı.',
    fields: [
      { key: 'keyCount', label: 'Teslim Edilen Anahtar Adedi ve Detayı', default: '2 Adet Çelik Kapı Anahtarı, 2 Adet Bina Giriş Kumandası/Anahtarı, 1 Adet Posta Kutusu Anahtarı' },
      { key: 'meterIndexes', label: 'Teslim Anı Sayaç Endeksleri', default: 'Elektrik Endeksi: ....... kWh | Su Endeksi: ....... m³ | Doğalgaz Endeksi: ....... m³' }
    ]
  },
  {
    id: 'demirbas_tutanagi',
    code: 'DOC-06',
    title: 'Demirbaş ve Taşınmaz Durum Teslim Tutanağı',
    category: 'Tutanak',
    badge: 'TBK m.301 & m.334',
    icon: 'ph-couch',
    desc: 'Taşınmazdaki kombi, klima, ankastre, boya ve tesisatın fiziksel durumunu belgeleyen liste.',
    fields: [
      { key: 'paintAndFloor', label: 'Boya, Parke ve Doğrama Durumu', default: 'Duvarlar yeni boyalı, laminat parkeler çiziksiz, PVC doğrama ve camlar sağlam.' },
      { key: 'appliancesDetail', label: 'Cihaz ve Demirbaş Listesi', default: '1. Yoğuşmalı Kombi (Çalışır durumda)\n2. Ankastre Set (Ocak, Fırın, Davlumbaz)\n3. Banyo Dolabı ve Duşakabin' }
    ]
  },
  {
    id: 'kira_makbuzu',
    code: 'DOC-07',
    title: 'Resmî Kira Ödeme ve Tahsilat Makbuzu',
    category: 'Finansal Belge',
    badge: 'Tahsilat Dekontu',
    icon: 'ph-receipt',
    desc: 'Belirli bir kira dönemine ait yapılan tam veya kısmi ödemeyi ve kalan bakiyeyi belgeleyen makbuz.',
    fields: [
      { key: 'receiptPeriod', label: 'İlgili Kira Dönemi', default: '' },
      { key: 'paidAmountText', label: 'Tahsil Edilen Tutar', default: '' },
      { key: 'paymentMethodText', label: 'Ödeme Yöntemi', default: 'Banka Havale / EFT' },
      { key: 'remainingDebtText', label: 'Kalan Dönem Bakiyesi', default: '0 ₺ (Borcu Yoktur)' }
    ]
  },
  {
    id: 'borc_dokumu',
    code: 'DOC-08',
    title: 'Kira Cari Hesap ve Borç Dökümü Ekstresi',
    category: 'Finansal Belge',
    badge: 'Cari Hesap Özeti',
    icon: 'ph-table',
    desc: 'Kiracının tüm dönemlere ait tahakkuk, tahsilat, gecikme ve kalan bakiye tablosunu içeren resmi ekstre.',
    fields: [
      { key: 'statementNote', label: 'Ekstre Açıklaması', default: 'İşbu cari hesap dökümü sistem kayıtlarındaki tahakkuk ve tahsilat hareketlerine göre otomatik üretilmiştir.' }
    ]
  },
  {
    id: 'kira_artis_bildirimi',
    code: 'DOC-09',
    title: 'Yeni Dönem Kira Artış Bildirimi Yazısı',
    category: 'Bildirim & İhtar',
    badge: 'TBK m.344 Artış',
    icon: 'ph-trend-up',
    desc: 'Yeni kira döneminde uygulanacak TÜFE artış oranını ve yeni aylık kira bedelini bildiren resmi yazı.',
    fields: [
      { key: 'appliedRate', label: 'Uygulanan Artış Oranı (%)', default: '45.00' },
      { key: 'newRentValue', label: 'Yeni Aylık Kira Bedeli (₺)', default: '' },
      { key: 'effectiveDate', label: 'Yeni Kiranın Geçerlilik Tarihi', default: '' }
    ]
  },
  {
    id: 'odeme_hatirlatma',
    code: 'DOC-10',
    title: 'Kira Ödeme Hatırlatma ve Vade Bildirimi',
    category: 'Bildirim & İhtar',
    badge: 'Nezaket Bildirimi',
    icon: 'ph-bell-ringing',
    desc: 'Ödeme günü yaklaşan veya kısa süre geciken kira borcu için banka/IBAN bilgili yazılı hatırlatma.',
    fields: [
      { key: 'dueAmountText', label: 'Ödenmesi Gereken Tutar', default: '' },
      { key: 'graceDays', label: 'Hatırlatma Notu', default: 'Ödemenizi yukarıda belirtilen IBAN hesabına açıklama kısmına kira dönemini yazarak gerçekleştirmenizi rica ederiz.' }
    ]
  },
  {
    id: 'ihtarname_taslagi',
    code: 'DOC-11',
    title: 'Temerrüt ve Kira Borcu İhtarname Taslağı',
    category: 'Bildirim & İhtar',
    badge: 'TBK m.315 (30 Gün Süre)',
    icon: 'ph-warning-octagon',
    desc: 'Ödenmeyen kira borçları için TBK m.315 uyarınca en az 30 günlük yasal ödeme süresi tanıyan ihtarname taslağı.',
    fields: [
      { key: 'unpaidPeriodsDetail', label: 'Ödenmeyen Kira Dönemleri ve Tutarları', default: '' },
      { key: 'totalDefaultAmount', label: 'Toplam Muaccel Kira Borcu', default: '' },
      { key: 'legalDeadlineDays', label: 'Verilen Yasal Ödeme Süresi', default: '30 (Otuz) Gün (TBK m.315/2 uyarınca konut ve çatılı işyeri kiralarında en az otuz gün)' }
    ]
  },
  {
    id: 'cikis_teslim_tutanagi',
    code: 'DOC-12',
    title: 'Kiracı Çıkış, Tahliye ve Anahtar İade Tutanağı',
    category: 'Tutanak',
    badge: 'İbra & Tahliye',
    icon: 'ph-door-open',
    desc: 'Kiracının taşınmazı boşaltırken anahtarları teslim ettiğini, hasar ve depozito mahsubunu gösteren tutanak.',
    fields: [
      { key: 'exitDate', label: 'Fiili Tahliye ve Anahtar İade Tarihi', default: '' },
      { key: 'damageDeduction', label: 'Hasar / Fatura Kesintisi ve Depozito İadesi', default: 'Taşınmaz kontrol edilmiş, aboneliklerin kapatıldığı teyit edilmiş ve depozito mahsubu/iadesi gerçekleştirilmiştir.' }
    ]
  },
  {
    id: 'ek_protokol',
    code: 'DOC-13',
    title: 'Kira Sözleşmesi Ek Protokolü',
    category: 'Sözleşme',
    badge: 'TBK m.343 Değişiklik',
    icon: 'ph-files',
    desc: 'Mevcut kira sözleşmesine eklenen tadilat, ödeme günü değişikliği veya kefil/ortak ekleme protokolü.',
    fields: [
      { key: 'protocolSubject', label: 'Ek Protokol Konusu', default: 'Mevcut kira sözleşmesinin ödeme günü / tadilat mahsubu hükümlerinin tarafların karşılıklı mutabakatı ile güncellenmesi.' },
      { key: 'protocolTerms', label: 'Mutabık Kalınan Yeni Maddeler', default: '1. Taraflar mevcut sözleşmenin diğer tüm hükümlerinin aynen geçerli olduğunu kabul eder.\n2. İşbu ek protokol imza tarihinde yürürlüğe girer.' }
    ]
  },
  {
    id: 'yenileme_protokolu',
    code: 'DOC-14',
    title: 'Kira Sözleşmesi Yenileme ve Uzatma Protokolü',
    category: 'Sözleşme',
    badge: 'Yeni Kira Dönemi',
    icon: 'ph-arrows-clockwise',
    desc: 'Yeni kira yılında tarafların anlaştığı yeni kira bedelini ve 1 yıllık uzatma şartlarını kayıt altına alan protokol.',
    fields: [
      { key: 'newPeriodRange', label: 'Yenilenen Kira Dönemi', default: '' },
      { key: 'agreedNewRent', label: 'Mutabık Kalınan Yeni Aylık Kira Bedeli', default: '' }
    ]
  }
];

function buildLegalDocumentHtml(docType, prop, tenant, owner, customFields, ledgerSummary) {
  const docMeta = RENTORA_DOC_CATALOG.find(d => d.id === docType) || RENTORA_DOC_CATALOG[0];
  const todayStr = new Date().toLocaleDateString('tr-TR');
  const propName = prop ? prop.name : '................................................';
  const propAddress = prop ? `${prop.address || ''} ${prop.neighborhood || ''} ${prop.district || ''}/${prop.city || ''}`.trim() : '................................................';
  const propTapu = prop ? (prop.deedInfo || 'Ada/Parsel/Bağımsız Bölüm: Belirtilmedi') : '........................';
  const propSpecs = prop ? `${prop.type || 'Konut'} | Brüt: ${prop.grossM2 || '-'} m² / Net: ${prop.netM2 || '-'} m² | Oda: ${prop.rooms || '-'}` : '........................';

  const ownerName = (owner && owner.name) ? owner.name : '................................................';
  const ownerIdentity = (owner && owner.identity) ? owner.identity : '.........................';
  const ownerPhone = (owner && owner.phone) ? owner.phone : '.........................';
  const ownerAddress = (owner && owner.address) ? owner.address : '................................................';
  const ownerBank = (owner && owner.bank) ? owner.bank : '.........................';
  const ownerIban = (owner && owner.iban) ? owner.iban : 'TR......................................................';

  const tenantName = tenant ? tenant.name : (prop && prop.tenantName ? prop.tenantName : '................................................');
  const tenantIdentity = tenant ? (tenant.identity || '.........................') : '.........................';
  const tenantPhone = tenant ? (tenant.phone || '.........................') : '.........................';
  const tenantEmail = tenant ? (tenant.email || '-') : '-';
  const tenantAddress = tenant ? (tenant.noticeAddress || propAddress) : propAddress;
  const rentAmount = tenant ? Number(tenant.rentAmount || 0) : (prop ? Number(prop.rentAmount || 0) : 0);
  const dueDay = tenant ? (tenant.dueDay || 5) : (prop ? (prop.dueDay || 5) : 5);
  const contractStart = tenant ? (tenant.contractStart || '') : (prop ? (prop.contractStart || '') : '');
  const contractEnd = tenant ? (tenant.contractEnd || '') : (prop ? (prop.contractEnd || '') : '');
  const depositVal = tenant ? (tenant.depositAmount || 0) : (prop ? (prop.depositAmount || 0) : 0);

  const fmtTL = (n) => (Number(n) || 0).toLocaleString('tr-TR') + ' TL';

  // Common Header & Parties Block
  const headerHtml = `
    <div class="legal-doc-header">
      <div class="ld-brand">
        <strong>RENTORA LEGAL & PROPERTY ENGINE</strong>
        <span>Belge Kodu: ${docMeta.code} • Mevzuat Dayanağı: ${docMeta.badge}</span>
      </div>
      <div class="ld-date">
        <strong>Düzenleme Tarihi:</strong> ${todayStr}<br/>
        <span>Hukuki Kontrol: 6098 S. TBK / 6100 S. HMK</span>
      </div>
    </div>
    <h1 class="legal-doc-title">${docMeta.title.toUpperCase()}</h1>
  `;

  const partiesTableHtml = `
    <div class="ld-section-title">I. TARAFLAR VE TAŞINMAZ BİLGİLERİ</div>
    <table class="ld-table">
      <tr>
        <th width="28%">KİRAYA VEREN (MÜLK SAHİBİ)</th>
        <td><strong>${ownerName}</strong> (T.C./VKN: ${ownerIdentity})<br/>Tel: ${ownerPhone} • Adres: ${ownerAddress}</td>
      </tr>
      <tr>
        <th>KİRACI</th>
        <td><strong>${tenantName}</strong> (T.C./VKN: ${tenantIdentity})<br/>Tel: ${tenantPhone} • E-Posta: ${tenantEmail}<br/>Tebligat Adresi: ${tenantAddress}</td>
      </tr>
      <tr>
        <th>KİRALANAN TAŞINMAZ</th>
        <td><strong>${propName}</strong> (${propSpecs})<br/>Adres: ${propAddress}<br/>Tapu / Bağımsız Bölüm: ${propTapu}</td>
      </tr>
      <tr>
        <th>ÖDEME HESABI (IBAN)</th>
        <td>${ownerBank} — <strong>${ownerIban}</strong> (Alıcı: ${ownerName})</td>
      </tr>
    </table>
  `;

  let bodyContent = '';

  if (docType === 'konut_sozlesme' || docType === 'isyeri_sozlesme') {
    const isCommercial = docType === 'isyeri_sozlesme';
    bodyContent = `
      ${partiesTableHtml}
      <div class="ld-section-title">II. TEMEL KİRA VE SÖZLEŞME ŞARTLARI</div>
      <table class="ld-table">
        <tr>
          <th width="28%">Sözleşme Başlangıç / Bitiş</th>
          <td>Başlangıç: <strong>${contractStart || '..../..../202..'}</strong> — Bitiş: <strong>${contractEnd || '..../..../202..'}</strong> (1 Yıl)</td>
        </tr>
        <tr>
          <th>Aylık Kira Bedeli</th>
          <td><strong>${fmtTL(rentAmount)}</strong> ${isCommercial ? '(Net / Stopaj Hariç)' : '(Net)'} — Yıllık Toplam: <strong>${fmtTL(rentAmount * 12)}</strong></td>
        </tr>
        <tr>
          <th>Ödeme Günü ve Şekli</th>
          <td>Her ayın en geç <strong>${dueDay}. günü</strong> akşamına kadar Kiraya Verenin yukarıdaki IBAN hesabına yatırılır.</td>
        </tr>
        <tr>
          <th>Güvence Bedeli (Depozito)</th>
          <td><strong>${fmtTL(depositVal)}</strong> (TBK m.342 kapsamında üç aylık kira bedelini aşmamak üzere emanet güvence bedeli olarak alınmıştır.)</td>
        </tr>
        <tr>
          <th>Kullanım Amacı</th>
          <td>${customFields.usePurpose || customFields.commercialActivity || (isCommercial ? 'Ticari İşyeri' : 'Konut (Mesken)')}</td>
        </tr>
      </table>

      <div class="ld-section-title">III. ÖZEL HÜKÜMLER (6098 SAYILI TBK UYUMLU)</div>
      <ol class="ld-clauses">
        <li><strong>Özenle Kullanma ve Komşuluk Hukuku (TBK m.316):</strong> Kiracı, kiralananı sözleşmeye uygun olarak özenle kullanmak ve taşınmazın bulunduğu bina/site sakinlerine karşı komşuluk hukuku kurallarına uymakla yükümlüdür.</li>
        <li><strong>Kira Artış Oranı (TBK m.344):</strong> ${customFields.increaseClause || 'Tarafların yenilenen kira dönemlerinde uygulanacak kira bedeline ilişkin anlaşmaları, bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla geçerlidir.'}</li>
        ${isCommercial ? `<li><strong>Stopaj ve Vergiler:</strong> ${customFields.withholdingTax || 'İşyeri kirasına ilişkin muhtasar beyanname ve kira stopajı yasal süresi içinde Kiracı tarafından ödenir.'}</li>` : ''}
        <li><strong>Alt Kira ve Devir Yasağı (TBK m.322-323):</strong> Kiracı, Kiraya Verenin yazılı rızası olmaksızın kiralananı üçüncü kişiye kiralayamaz, alt kiraya veremez veya kira ilişkisini devredemez.</li>
        <li><strong>Yan Giderler ve Abonelikler (TBK m.314):</strong> Elektrik, su, doğalgaz, internet abonelikleri Kiracı adına açtırılır; kullanıma ilişkin tüm faturalar ve olağan site/apartman işletme aidatı Kiracı tarafından ödenir.</li>
        <li><strong>Temerrüt ve Muacceliyet (TBK m.315 & m.346):</strong> Kira bedelinin süresinde ödenmemesi halinde TBK m.315 uyarınca Kiracıya yazılı olarak en az 30 gün süre verilerek ödeme ihtar edilir. Konut ve çatılı işyeri kiralarında ceza koşulu veya sonraki ayların muaccel olacağına dair anlaşmalar TBK m.346 gereği uygulanmaz.</li>
        <li><strong>Demirbaşlar ve İade (TBK m.334):</strong> ${customFields.fixturesList || 'Taşınmaz sağlam ve eksiksiz teslim edilmiş olup, tahliye anında olağan kullanımdan doğan yıpranmalar dışında teslim alındığı durumda iade edilir.'}</li>
        <li><strong>Yetkili Mahkeme ve İcra Dairesi (6100 s. HMK):</strong> İşbu sözleşmeden doğacak uyuşmazlıklarda taşınmazın bulunduğu yer Sulh Hukuk Mahkemeleri ve İcra Müdürlükleri yetkilidir.</li>
      </ol>
    `;
  } else if (docType === 'tahliye_taahhutnamesi') {
    bodyContent = `
      <div class="ld-warning-box">
        <strong>TBK m.352/1 GEÇERLİLİK ŞARTI UYARISI:</strong> Yazılı tahliye taahhütnamesinin hukuken geçerli olabilmesi için <u>kiralananın kiracıya fiilen teslim edilmesinden sonra</u> (kira sözleşmesinden sonraki bir tarihte) serbest iradeyle düzenlenmiş olması ve belirli bir tahliye tarihi içermesi şarttır. Kira sözleşmesiyle aynı gün imzalanan taahhütnameler Yargıtay içtihatları uyarınca geçersiz sayılabilmektedir.
      </div>
      ${partiesTableHtml}
      <div class="ld-section-title">II. TAHLİYE TAAHHÜT BEYANI (TBK m.352/1)</div>
      <p class="ld-paragraph">
        Halen kiracısı olarak kullanmakta olduğum ve <strong>${customFields.deliveryConfirmDate || contractStart || '..../..../202..'}</strong> tarihinde fiilen teslim alarak yerleştiğim yukarıda açık adresi yazılı taşınmazı, hiçbir ihtar, ihbar veya hüküm istihsaline gerek kalmaksızın <strong>${customFields.evacuationDate || contractEnd || '..../..../202..'}</strong> tarihinde boş, sağlam, temiz ve eksiksiz olarak Kiraya Verene tahliye edip anahtarlarını teslim edeceğimi; belirtilen tarihte tahliye etmediğim takdirde 2004 sayılı İcra ve İflas Kanunu m.272 ve 6098 sayılı Türk Borçlar Kanunu m.352/1 hükümleri uyarınca yapılacak icra takibi ve tahliye masraflarını ödeyeceğimi serbest irademle, kayıtsız ve şartsız olarak kabul, beyan ve taahhüt ederim.
      </p>
      <table class="ld-table">
        <tr>
          <th width="35%">Kiralananın Fiili Teslim Tarihi</th>
          <td><strong>${customFields.deliveryConfirmDate || contractStart || '..../..../202..'}</strong></td>
        </tr>
        <tr>
          <th>Taahhütname Düzenleme (İmza) Tarihi</th>
          <td><strong>${customFields.commitmentSignDate || todayStr}</strong></td>
        </tr>
        <tr>
          <th>Taahhüt Edilen Kesin Tahliye Tarihi</th>
          <td><strong>${customFields.evacuationDate || contractEnd || '..../..../202..'}</strong></td>
        </tr>
        <tr>
          <th>Aile Konutu / Eş Rızası Notu</th>
          <td>${customFields.spouseNotice || 'Aile konutu ise eşin de imzası alınmalıdır.'}</td>
        </tr>
      </table>
    `;
  } else if (docType === 'borc_dokumu') {
    const rowsHtml = (ledgerSummary && ledgerSummary.rows && ledgerSummary.rows.length > 0)
      ? ledgerSummary.rows.map(r => `
          <tr>
            <td>${r.periodTitle}</td>
            <td>${fmtTL(r.expected)}</td>
            <td>${fmtTL(r.paid)}</td>
            <td><strong>${fmtTL(r.remaining)}</strong></td>
            <td>${r.statusLabel}</td>
          </tr>
        `).join('')
      : `<tr><td colspan="5">Kayıtlı dönem tahakkuku bulunamadı.</td></tr>`;

    bodyContent = `
      ${partiesTableHtml}
      <div class="ld-section-title">II. DÖNEMSEL KİRA TAHAKKUK VE TAHSİLAT TABLOSU</div>
      <table class="ld-table">
        <thead>
          <tr>
            <th>Kira Dönemi</th>
            <th>Tahakkuk Eden</th>
            <th>Tahsil Edilen</th>
            <th>Kalan Borç</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <div class="ld-total-band">
        <span>TOPLAM MUACCEL KALAN KİRA BORCU:</span>
        <strong>${fmtTL(ledgerSummary ? ledgerSummary.totalDebt : 0)}</strong>
      </div>
      <p class="ld-paragraph">${customFields.statementNote || ''}</p>
    `;
  } else if (docType === 'ihtarname_taslagi') {
    bodyContent = `
      ${partiesTableHtml}
      <div class="ld-section-title">II. İHTAR KONUSU VE TBK m.315 UYARINCA YASAL SÜRE BİLDİRİMİ</div>
      <p class="ld-paragraph">
        Sayın <strong>${tenantName}</strong>,<br/><br/>
        Taraflar arasında akdedilen kira sözleşmesi uyarınca kiracısı bulunduğunuz yukarıda adresi yazılı taşınmaza ait aşağıda dökümü belirtilen kira bedelleri vadesinde ödenmemiş olup muaccel hale gelmiştir:
      </p>
      <table class="ld-table">
        <tr>
          <th width="32%">Ödenmeyen Kira Dönemleri</th>
          <td><strong>${customFields.unpaidPeriodsDetail || (ledgerSummary ? ledgerSummary.unpaidText : 'İlgili kira dönemleri')}</strong></td>
        </tr>
        <tr>
          <th>Toplam Muaccel Kira Borcu</th>
          <td><strong>${customFields.totalDefaultAmount || fmtTL(ledgerSummary ? ledgerSummary.totalDebt : rentAmount)}</strong></td>
        </tr>
        <tr>
          <th>Verilen Yasal Ödeme Süresi</th>
          <td><strong>${customFields.legalDeadlineDays || '30 (Otuz) Gün (TBK m.315/2)'}</strong></td>
        </tr>
      </table>
      <p class="ld-paragraph">
        İşbu ihtarnamenin tarafınıza tebliğinden itibaren <strong>30 (otuz) gün</strong> içerisinde yukarıda belirtilen toplam kira borcunu Kiraya Verenin IBAN hesabına ödemeniz; aksi takdirde 6098 sayılı Türk Borçlar Kanunu m.315 ve 2004 sayılı İcra ve İflas Kanunu hükümleri uyarınca kira sözleşmesinin feshedilerek tahliye talepli icra takibi ve dava yoluna başvurulacağı, yargılama giderleri ile vekâlet ücretinin tarafınıza yükletileceği ihtaren bildirilir.
      </p>
    `;
  } else {
    // Dynamic structured layout for all other official documents (DOC-04, 05, 06, 07, 09, 10, 12, 13, 14)
    const customRows = (docMeta.fields || []).map(f => `
      <tr>
        <th width="32%">${f.label}</th>
        <td>${(customFields && customFields[f.key]) ? customFields[f.key] : f.default || '-'}</td>
      </tr>
    `).join('');

    bodyContent = `
      ${partiesTableHtml}
      <div class="ld-section-title">II. BELGE DETAYLARI VE TUTANAK HÜKÜMLERİ</div>
      <table class="ld-table">
        <tr>
          <th width="32%">Güncel Kira & Ödeme Günü</th>
          <td>Aylık Kira: <strong>${fmtTL(rentAmount)}</strong> • Ödeme Günü: Her ayın <strong>${dueDay}. günü</strong></td>
        </tr>
        <tr>
          <th>Sözleşme Dönemi</th>
          <td>${contractStart || '-'} / ${contractEnd || '-'} • Güvence Bedeli (Depozito): ${fmtTL(depositVal)}</td>
        </tr>
        ${customRows}
      </table>
      <p class="ld-paragraph">
        İşbu <strong>${docMeta.title}</strong> taraflarca okunarak içeriğindeki bilgilerin doğruluğu teyit edilmiş ve iki nüsha halinde imza altına alınmıştır.
      </p>
    `;
  }

  const signaturesHtml = `
    <div class="ld-signatures">
      <div class="ld-sig-box">
        <strong>KİRAYA VEREN (MÜLK SAHİBİ)</strong>
        <span>${ownerName}</span>
        <div class="ld-sig-space">İmza</div>
      </div>
      <div class="ld-sig-box">
        <strong>KİRACI</strong>
        <span>${tenantName}</span>
        <div class="ld-sig-space">İmza</div>
      </div>
    </div>
    <div class="ld-legal-footer">
      <strong>Hukuki Uyarı & Mevzuat Notu:</strong> İşbu belge RENTORA Belge Merkezi tarafından 6098 sayılı Türk Borçlar Kanunu ve 6100 sayılı HMK genel hükümleri çerçevesinde standart şablon olarak üretilmiştir (Mevzuat Kontrol Tarihi: ${todayStr}). Somut uyuşmazlıklar, resmi noter ihtarnameleri ve icra/dava süreçleri için bir avukattan hukuki danışmanlık alınması tavsiye edilir; bu belge tek başına avukat incelemesi yerine geçmez.
    </div>
  `;

  return `
    <div class="legal-document-sheet">
      ${headerHtml}
      ${bodyContent}
      ${signaturesHtml}
    </div>
  `;
}
