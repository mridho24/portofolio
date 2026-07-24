> ⚠️ **Update:** Untuk section "Recent Project", pendekatan di file ini **tidak dipakai secara terpisah** karena bentrok dengan efek pinned horizontal scroll gallery dari GSAP ScrollTrigger. Ide "index/nama project ter-highlight" dari konsep ini sudah diintegrasikan langsung ke dalam `prompt-gsap-scrolltrigger.md` (bagian 5), dikontrol oleh progress scroll — bukan oleh hover mouse. File ini disimpan sebagai referensi konsep saja, atau bisa dipakai ulang di section lain yang murni hover-based (misal daftar klien/testimoni terpisah).

# Prompt: List Project dengan Efek "Image on Hover"

Komponen yang kamu maksud namanya **"Image on Text Hover"** — perilakunya:

- Daftar project ditampilkan sebagai **list baris teks** (bukan grid gambar), tiap baris berisi: nama project + tahun (contoh: "Website Redesign — /2026")
- Di sisi kiri ada satu **area gambar besar** (fixed position, absolute), defaultnya menampilkan gambar project pertama
- Saat mouse hover ke salah satu baris teks, gambar di kiri **berganti otomatis** ke gambar project yang sedang di-hover, dengan transisi fade + sedikit spring animation (bukan potong langsung)
- Baris yang sedang di-hover jadi highlight/opacity penuh, baris lain redup (opacity ~0.3)
- Di mobile: gambar besar disembunyikan, list ditampilkan biasa (karena tidak ada konsep hover di touch device)

---

## PROMPT untuk AI Coding Assistant

> Ubah section "Recent Project" di portofolio saya dari grid gambar menjadi **list project dengan efek image-reveal on hover**, dengan spesifikasi berikut:
>
> **Layout:**
> - Buat 2 kolom: kolom kiri untuk area gambar (sticky/fixed, ukuran tetap misal 400x300px), kolom kanan berisi list nama project secara vertikal
> - Setiap baris list terdiri dari: nomor urut (01, 02, 03...), nama project, dan tahun/tag kecil, disusun rapi dengan border-bottom tipis antar baris sebagai pemisah
>
> **Interaksi hover (desktop):**
> - Saat mouse enter ke salah satu baris, gambar project tersebut muncul/mengganti gambar yang sedang tampil di kolom kiri, dengan animasi fade in + sedikit scale dari 0.95 ke 1 (durasi ~400ms, easing smooth/spring)
> - Baris yang sedang di-hover: teks jadi warna solid/opacity 100% dan sedikit bergeser (translateX 8–10px) sebagai indikator aktif
> - Baris lain yang tidak di-hover: opacity turun ke ~0.3–0.4
> - Saat mouse keluar dari seluruh list (tidak hover baris manapun), kembali ke state default (gambar pertama tampil, semua baris opacity normal)
>
> **Interaksi klik:**
> - Setiap baris bisa diklik untuk membuka detail project (link ke halaman/modal project tersebut)
>
> **Versi mobile:**
> - Sembunyikan kolom gambar sticky
> - Tampilkan tiap baris list sebagai card sederhana dengan thumbnail kecil di sampingnya (karena tidak ada hover di touch device)
>
> **Data yang dipakai:** ambil dari data project portofolio saya (nama project, tahun, link, dan gambar thumbnail masing-masing)
>
> Buat sebagai komponen reusable, dan gunakan warna tema portofolio saya (navy untuk teks, orange untuk aksen nomor urut/border aktif, background peach/putih).

---

### Catatan
- Efek ini cocok jadi pengganti **grid 3 kolom "Recent Project"** yang ada saat ini di portofolio kamu, supaya section ini terasa lebih premium dan interaktif
- Kalau project kamu jumlahnya banyak (>6), tambahkan scroll internal pada list atau load more agar tidak terlalu panjang
