# Prompt Redesign Website Portofolio (Style: Creative Designer Portfolio)

Gunakan prompt di bawah ini untuk memberi instruksi ke AI coding (Claude Code, v0, Cursor, dll) atau developer agar redesign website portofolio kamu mengikuti referensi gambar.

---

## PROMPT

Redesign website portofolio saya menjadi landing page bergaya "creative designer portfolio" yang playful, modern, dan hangat, dengan palet warna peach/cream + navy + orange. Ikuti spesifikasi detail berikut untuk tiap section:

### 1. Global Style
- **Palet warna:**
  - Background utama: peach/cream lembut `#FDEBE0` – `#FCE3D4` (gradasi halus ke putih di beberapa section)
  - Aksen utama (tombol, highlight teks): orange `#F5821F` / `#EE7D1F`
  - Teks heading & warna gelap: navy tua `#1B2A4A` / `#16213E`
  - Teks paragraf: abu-abu netral `#6B7280`
  - Aksen dekoratif: gradasi pastel pink-ke-ungu untuk blob/shadow di belakang foto
- **Font:** sans-serif rounded & bold untuk heading (mis. Poppins/Manrope Bold), sans-serif reguler untuk body text (mis. Inter/DM Sans)
- **Elemen dekoratif berulang:** titik-titik kecil (dot) warna pink/biru mengambang di sekitar foto, ikon lingkaran mengambang (floating badge card) dengan shadow lembut, bentuk blob gradient di sudut section
- **Card style:** rounded corner besar (16–24px), soft shadow, background putih untuk floating card di atas foto/gambar
- **Border-radius tombol:** pill/rounded full pada tombol CTA orange

### 2. Header / Navbar
- Background peach senada dengan hero, full width, sedikit padding vertikal
- Kiri: logo teks bold "Nama/Brand kamu" warna navy
- Tengah-kanan: menu nav (Home, About Us, Services) teks navy, regular
- Kanan: tombol "Contact Us" pill orange solid dengan teks putih

### 3. Hero Section
- Background: gradasi peach ke pink lembut, dengan blob ungu-pink transparan di pojok kanan bawah
- **Kolom kiri:**
  - Heading besar bold 2 baris, warna navy: "Hy! I Am [Nama Kamu]"
  - Paragraf deskripsi singkat (profesi + pengalaman) warna abu-abu
  - Tombol CTA "Hire Me" pill orange
  - Section kecil di bawah: label "Work For All This Brand & Client" + 4 logo brand/klien grayscale berjajar horizontal
- **Kolom kanan:**
  - Foto diri/ilustrasi orang setengah badan, memakai warna kaos cerah (orange), pose tangan menunjuk ke diri sendiri
  - Floating card kecil putih berisi badge "Best Design Awards" dengan ikon lingkaran, posisi kanan atas foto
  - Floating card putih kedua "Ui/Ux" dengan ikon kecil + teks deskripsi, posisi kiri bawah foto, sedikit overlap dengan foto
  - Badge bulat kecil (mis. logo partner/tools) mengambang di kanan bawah
  - Dot dekoratif kecil warna pink & biru tersebar di sekitar foto

### 4. Services Section (Split 2 kolom)
- Background putih
- **Kolom kiri:** stack 3 card vertikal (Developer, Ui/Ux, Design), masing-masing:
  - Ikon bulat kecil di kiri card
  - Judul bold navy
  - Deskripsi singkat abu-abu
  - Card pertama diberi border gradasi pink-ungu untuk highlight (menandakan aktif/hover)
  - Tombol lingkaran kecil (panah bawah) di bawah stack card sebagai indikator "lihat lebih banyak"
- **Kolom kanan:**
  - Heading dua warna: "My Awesome" (navy) + "Services" (orange) dalam satu heading besar
  - Paragraf deskripsi 2 alinea
  - Tombol CTA "Hire CV" pill orange

### 5. About/Clients Section (Split 2 kolom, background peach)
- Background peach dengan sedikit gradasi diagonal ke putih
- **Kolom kiri:**
  - Heading besar 3 baris bold navy: "Clients Get Always Exceptional Works From Me"
  - Paragraf deskripsi
  - Numbered list sederhana (1. Top Quality Works, 2. Commitments, 3. 24 Hours active)
- **Kolom kanan:**
  - Foto/ilustrasi orang pose thumbs up, kaos warna kuning/orange
  - Floating card putih "24 Hours active" dengan ikon jam, posisi kiri bawah foto
  - Badge lingkaran ikon shield/proteksi di kanan atas foto
  - Dot dekoratif pink & biru di sekitar foto

### 6. Statistics/Solution Section (Split 2 kolom, background putih)
- **Kolom kiri:**
  - Card besar warna navy gelap berisi ilustrasi bar chart sederhana (grafik naik-turun per bulan)
  - Angka besar statistik (mis. "566.12k") + label kecil di atas chart
  - Floating card putih kecil di bawah card navy: label "Projects" + angka besar + growth indicator kecil (mis. "+5.1k last 1 years") dengan ikon bulat merah
- **Kolom kanan:**
  - Heading 2 baris 2 warna: "Perfect Solution" (orange) + "For Your Business" (navy)
  - Paragraf deskripsi
  - Tombol CTA "Details" pill orange

### 7. Recent Project Section
- Background putih
- Heading tengah bold navy besar: "Recent Project"
- Grid 3 kolom (responsive jadi 1 kolom di mobile), tiap kolom berisi thumbnail project rounded-corner besar (rasio kotak/portrait), menampilkan ilustrasi/mockup proyek dengan warna berbeda-beda (biru malam, merah-krem, ungu-gold)

### 8. CTA/Closing Section
- Background putih, layout split 2 kolom asimetris
- Kiri: heading besar 2 baris bold navy "Ready To Get Started?"
- Kanan: teks kecil "You Know About Me, Let's Talk About You." + label "SHOOT MESSAGE" di sebelah tombol bulat besar orange berisi ikon panah/kirim

### 9. Footer
- Background navy gelap solid, full width
- Kiri: logo teks brand warna putih
- Kanan: menu nav (Home dengan warna orange sebagai active state, About Us, Services) warna putih/abu-abu terang

---

## Catatan Tambahan untuk AI/Developer
- Semua foto/orang bisa diganti placeholder ilustrasi atau foto asli sesuai konten kamu
- Pastikan responsive: di mobile, semua section 2 kolom berubah jadi stack vertikal (gambar di bawah teks atau sebaliknya sesuai urutan visual hierarchy)
- Gunakan animasi hover halus pada tombol dan card (scale/shadow transition)
- Gunakan spacing antar section yang lega (padding vertikal besar, ~80–120px di desktop)
