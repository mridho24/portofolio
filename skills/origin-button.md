# Prompt: Menerapkan Efek "Origin Button" ke Semua Tombol Website

Saya sudah cek komponen itu — namanya **Origin Button**, efeknya: saat mouse hover masuk ke tombol, muncul lingkaran warna (circle) yang membesar dari titik posisi cursor tepat saat masuk, dengan animasi spring yang smooth, lalu mengecil kembali ke titik posisi cursor saat mouse keluar dari tombol. Efek ini dibuat pakai `framer-motion` (khusus Framer), jadi sama seperti sebelumnya, ceknya dulu:

- **Framer** → Opsi A
- **Bukan Framer (HTML/React/Next.js/dll)** → Opsi B

---

## OPSI A — Jika website di Framer

1. Pilih tombol yang ingin diberi efek (atau buat ulang sebagai frame kosong dengan teks di atasnya)
2. Insert → Code → paste URL: `https://framer.com/m/OriginButton-GIfh.js@Iz25mViOs1dHwRl116QG`
3. Set ukuran frame sesuai ukuran tombol (fixed width & height)
4. Atur 2 properti warna di panel kanan:
   - **Background**: warna dasar tombol (misal orange `#F5821F` sesuai tema portofolio kamu)
   - **Hover**: warna lingkaran yang muncul saat di-hover (misal navy `#1B2A4A` atau putih, buat kontras dengan background)
5. Taruh teks/label tombol (misal "Hire Me", "Contact Us") sebagai layer terpisah di atas komponen ini, dengan pointer-events dimatikan supaya hover tetap terdeteksi di komponen background-nya

---

## OPSI B — Jika BUKAN Framer

Gunakan prompt berikut untuk AI coding assistant (Claude Code, Cursor, v0, dll):

> Buatkan komponen/style tombol dengan efek "expanding circle from cursor position on hover", dan terapkan ke SEMUA tombol di website portofolio saya (Hire Me, Contact Us, Hire CV, Details, dan tombol CTA lainnya), dengan spesifikasi berikut:
>
> **Struktur & perilaku:**
> - Tombol berbentuk rectangle/pill dengan `overflow: hidden` dan `position: relative`, teks label tombol berada di layer paling atas (z-index tertinggi, warna teks tetap terbaca di atas circle)
> - Di dalam tombol ada satu elemen lingkaran (circle) absolute-positioned, ukurannya cukup besar (kira-kira 2x dari dimensi terbesar tombol) agar saat membesar bisa menutupi seluruh area tombol
> - Circle di-scale dari 0 menjadi 1 memakai transform `scale()`, dengan titik origin (`transform-origin` atau posisi `left/top`) mengikuti **posisi cursor saat mouse pertama kali masuk (mouseenter)** ke tombol, dihitung relatif terhadap bounding box tombol (`getBoundingClientRect()`)
> - Saat mouse keluar (mouseleave), circle mengecil kembali ke scale 0, dengan titik origin berpindah mengikuti **posisi cursor saat keluar**
> - Gunakan animasi **spring** (bukan easing linear biasa) untuk transisi scale, dengan karakter smooth & sedikit natural bounce — kalau pakai Framer Motion: `stiffness: 85, damping: 18`. Kalau pakai CSS murni, gunakan `cubic-bezier` yang mendekati spring (misal `cubic-bezier(0.34, 1.56, 0.64, 1)`) dengan durasi ~400–600ms
> - Tambahkan sedikit ease-out kuadratik pada progress scale (bukan linear) supaya gerakan membesar terasa lebih halus di awal lalu cepat
>
> **Kustomisasi warna (sesuaikan dengan tema portofolio saya: peach/cream, navy, orange):**
> - Warna dasar tombol (`rectangleColor`): orange `#F5821F` untuk tombol utama, atau navy `#1B2A4A` untuk tombol sekunder
> - Warna circle saat hover (`circleColor`): kontras dengan warna dasar — misal navy `#1B2A4A` untuk tombol orange, atau putih untuk tombol navy
> - Teks label tombol harus tetap kontras terbaca baik sebelum maupun sesudah circle muncul (gunakan `mix-blend-mode` atau ganti warna teks via transisi jika perlu)
>
> **Penerapan ke semua tombol:**
> - Buat ini sebagai satu komponen reusable (misal `<Button>` di React, atau class CSS `.btn-origin` di HTML biasa) dengan props/variant untuk warna, lalu ganti semua tombol existing di website (Hire Me, Contact Us, Hire CV, Details, Shoot Message, dll) untuk memakai komponen/class ini
> - Pastikan tetap accessible: tombol tetap bisa di-fokus keyboard (`:focus-visible` style), dan efek hover tidak mengganggu klik/tap di mobile (untuk mobile, bisa fallback ke efek tap sederhana seperti scale/opacity karena tidak ada cursor position)
>
> Terapkan komponen tombol ini secara konsisten ke seluruh halaman portofolio saya sebagai pengganti tombol default.

---

### Catatan
- Efek ini butuh ukuran tombol yang **fixed/tetap** (bukan auto-width penuh mengikuti konten panjang), jadi pastikan padding/lebar tombol kamu proporsional
- Untuk mobile/touch device, efek "posisi cursor" tidak relevan (tidak ada hover) — sebaiknya sediakan fallback animasi tap sederhana agar tombol tetap terasa interaktif
- Kalau kamu pakai React, saya bisa langsung buatkan kode komponennya (bukan cuma prompt) — tinggal kasih tahu stack yang kamu pakai (React biasa, Next.js, atau HTML/CSS/JS murni)

---

## TAMBAHAN — Magnetic Effect Khusus Tombol CTA (Wrapper Terpisah, Bukan Bagian dari Button.tsx)

Untuk tombol CTA penutup ("Shoot Message" di section terakhir), tambahkan efek **magnetic** (tombol sedikit "tertarik" mengikuti posisi cursor saat didekati). Efek ini **jangan digabung ke dalam komponen `Button.tsx`/`.btn-origin` di atas** — buat sebagai komponen wrapper terpisah, karena:

- Origin Button mengurus styling **di dalam** tombol (circle effect), sedangkan magnetic mengurus **posisi** tombol relatif ke area di sekitarnya — dua tanggung jawab berbeda
- Magnetic hanya dipakai di satu/dua tempat (CTA), jadi tidak perlu membebani komponen `Button` yang dipakai di banyak tempat lain dengan listener `mousemove` yang tidak selalu terpakai
- Dengan wrapper terpisah, efek ini bisa dipakai ulang ke elemen lain di masa depan (logo, ikon sosial media, dll) tanpa mengubah `Button.tsx`

> Buatkan komponen wrapper terpisah bernama `MagneticWrapper` (React) atau class `.magnetic-wrapper` (vanilla JS), dengan spesifikasi berikut:
>
> **Perilaku:**
> - Wrapper ini membungkus elemen anak apa pun (termasuk komponen `Button` yang sudah ada dengan Origin-effect), tanpa mengubah styling internal anaknya
> - Saat mouse bergerak di dalam area wrapper (`onMouseMove`), hitung jarak cursor dari titik tengah wrapper (`getBoundingClientRect()`), lalu geser (translate x/y) elemen anak mengikuti arah cursor, dikalikan faktor `strength` (default 0.3, bisa diatur sebagai prop) supaya pergerakan tidak 1:1 penuh melainkan terasa seperti "ditarik magnet"
> - Gunakan `gsap.to()` dengan `duration: 0.3, ease: "power2.out"` untuk transisi mengikuti cursor
> - Saat mouse keluar dari area wrapper (`onMouseLeave`), kembalikan posisi ke `x: 0, y: 0` dengan easing yang sedikit lebih "kenyal" (`ease: "elastic.out(1, 0.3)"`) supaya terasa seperti pegas melepas
>
> **Struktur komponen (React), kira-kira seperti ini:**
> - Buat functional component `MagneticWrapper({ children, strength = 0.3 })`
> - Pakai `useRef` untuk elemen div pembungkus
> - Handler `onMouseMove`: hitung posisi relatif cursor terhadap `getBoundingClientRect()` elemen, lalu `gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" })`
> - Handler `onMouseLeave`: `gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" })`
> - Render `<div ref={ref} onMouseMove={...} onMouseLeave={...} style={{ display: "inline-block" }}>{children}</div>`
>
> **Penggunaan pada tombol CTA:**
> - Bungkus tombol CTA existing dengan wrapper ini, contoh: `<MagneticWrapper strength={0.3}><Button variant="primary">Shoot Message</Button></MagneticWrapper>`
> - `Button.tsx` tidak diubah sama sekali, wrapper ini murni menambahkan lapisan animasi posisi di luar komponen tombol
>
> **Catatan tambahan:**
> - Jangan aktifkan efek ini di mobile/touch device (tidak ada konsep cursor position) — cek `window.matchMedia('(pointer: fine)')` sebelum memasang listener `mousemove`, atau nonaktifkan lewat CSS media query
> - Area "tarikan magnet" sebaiknya sedikit lebih besar dari ukuran tombol itu sendiri (beri padding invisible di wrapper) supaya efek magnet mulai terasa sebelum cursor benar-benar menyentuh tombol
> - Jangan gabungkan logic magnetic ke dalam `Button.tsx` — cukup import `MagneticWrapper` dan bungkus instance tombol yang butuh efek ini saja (di CTA), tombol lain tetap memakai `Button` biasa tanpa perubahan apa pun
