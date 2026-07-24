# Prompt: Redesign Portofolio dengan GSAP ScrollTrigger (Gaya Awwwards/Decathlon Yestalgia)

Saya sudah lihat referensi decathlonyestalgia.com — situs itu punya nuansa scroll storytelling khas: pinned section, parallax, reveal staggered per baris, dan transisi antar section yang terasa seperti "berpindah panggung", bukan sekadar scroll biasa. Berikut prompt lengkap untuk menerapkan pendekatan serupa (dengan kreativitas sendiri) ke portofolio kamu, section per section.

---

## PROMPT UTAMA untuk AI Coding Assistant

> Redesign interaksi scroll di seluruh halaman portofolio saya menggunakan **GSAP + ScrollTrigger plugin** (dan opsional Lenis untuk smooth-scroll), dengan pendekatan storytelling per section — setiap section punya animasi masuk/keluar yang berbeda saat di-scroll, bukan sekadar fade-in generik. Gunakan struktur berikut:
>
> ### Setup awal
> - Install `gsap` dan register plugin: `gsap.registerPlugin(ScrollTrigger)`
> - Tambahkan **Lenis** (smooth-scroll library) agar scroll terasa lebih halus dan "berat" seperti situs awwwards, lalu hubungkan `lenis.on('scroll', ScrollTrigger.update)` supaya ScrollTrigger tetap sinkron dengan posisi scroll Lenis
> - Tambahkan `ScrollTrigger.refresh()` setelah semua gambar/font selesai load, dan panggil ulang saat window resize
> - Hormati preferensi aksesibilitas: bungkus semua animasi dengan cek `window.matchMedia('(prefers-reduced-motion: reduce)')` — kalau true, matikan animasi scroll dan tampilkan konten langsung
>
> ### 1. Hero Section — Pin & Parallax Zoom Out
> ```js
> gsap.timeline({
>   scrollTrigger: {
>     trigger: ".hero-section",
>     start: "top top",
>     end: "+=800",
>     pin: true,
>     scrub: 1,
>   }
> })
> .to(".hero-photo", { scale: 0.85, y: 60, ease: "none" })
> .to(".hero-heading", { y: -80, opacity: 0.3, ease: "none" }, "<")
> .to(".hero-badge-1, .hero-badge-2", { y: -40, opacity: 0, stagger: 0.1, ease: "none" }, "<");
> ```
> Efek: saat mulai scroll dari hero, section ini "tertahan" (pinned) sejenak, foto mengecil & bergeser turun, heading naik dan memudar, floating badge menghilang duluan — memberi kesan transisi sinematik sebelum masuk ke section berikutnya.
>
> ### 2. Services Section — Staggered Reveal per Card
> ```js
> gsap.from(".service-card", {
>   scrollTrigger: {
>     trigger: ".services-section",
>     start: "top 75%",
>   },
>   x: (i) => (i % 2 === 0 ? -80 : 80),
>   opacity: 0,
>   duration: 0.8,
>   stagger: 0.15,
>   ease: "power3.out",
> });
> ```
> Efek: card "Developer", "Ui/Ux", "Design" masuk bergantian dari kiri-kanan berselang-seling saat section mulai terlihat 75% di viewport.
>
> ### 3. About/Clients Section — Horizontal Text Marquee + Image Slide
> ```js
> gsap.to(".marquee-track", {
>   scrollTrigger: {
>     trigger: ".about-section",
>     start: "top bottom",
>     end: "bottom top",
>     scrub: true,
>   },
>   xPercent: -30,
>   ease: "none",
> });
>
> gsap.from(".about-photo", {
>   scrollTrigger: { trigger: ".about-section", start: "top 70%" },
>   clipPath: "inset(0 0 100% 0)",
>   duration: 1,
>   ease: "power4.out",
> });
> ```
> Efek: kalau ada teks besar dekoratif di background (misal "EXCEPTIONAL WORK"), teks itu bergerak horizontal mengikuti scroll (parallax marquee), sementara foto orang muncul dengan efek "wipe reveal" dari bawah ke atas (`clip-path`).
>
> ### 4. Statistics Section — Number Counter + Bar Chart Grow
> ```js
> ScrollTrigger.create({
>   trigger: ".stats-section",
>   start: "top 70%",
>   once: true,
>   onEnter: () => {
>     gsap.to(".stat-number", {
>       innerText: (i, el) => el.dataset.target,
>       duration: 2,
>       snap: { innerText: 1 },
>       ease: "power1.out",
>     });
>     gsap.from(".bar-chart-item", {
>       scaleY: 0,
>       transformOrigin: "bottom",
>       stagger: 0.1,
>       duration: 1,
>       ease: "back.out(1.5)",
>     });
>   },
> });
> ```
> Efek: angka "566.12k" dan "256.12k" menghitung naik dari 0 saat section muncul di layar (hanya sekali, `once: true`), bar chart tumbuh dari bawah satu-satu.
>
> ### 5. Recent Project — Pinned Horizontal Scroll Gallery (dengan Index/Nama Project Tersinkron)
> ```js
> let sections = gsap.utils.toArray(".project-panel");
> let totalPanels = sections.length;
>
> gsap.to(sections, {
>   xPercent: -100 * (totalPanels - 1),
>   ease: "none",
>   scrollTrigger: {
>     trigger: ".project-gallery",
>     pin: true,
>     scrub: 1,
>     snap: {
>       snapTo: 1 / (totalPanels - 1),
>       duration: { min: 0.2, max: 0.5 },
>       ease: "power1.inOut",
>     },
>     end: () => "+=" + document.querySelector(".project-gallery").offsetWidth,
>     onUpdate: (self) => {
>       // progress 0..1 dikonversi jadi index panel yang sedang aktif
>       const activeIndex = Math.round(self.progress * (totalPanels - 1));
>       updateActivePanelUI(activeIndex);
>     },
>   },
> });
>
> function updateActivePanelUI(index) {
>   // update state index aktif (React: setActiveIndex(index), vanilla: toggle class)
>   document.querySelectorAll(".panel-index-item").forEach((el, i) => {
>     el.classList.toggle("is-active", i === index);
>   });
> }
> ```
> Efek: section "Recent Project" di-pin, lalu scroll vertikal user "dikonversi" jadi pergerakan horizontal antar thumbnail project (seperti menggeser galeri ke samping), dengan snap ke tiap project agar berhenti rapi — ini elemen paling "signature" ala referensi kamu.
>
> **Index/nama project tersinkron (pengganti list hover terpisah):**
> - Tambahkan panel index kecil (fixed, biasanya di pojok kiri-bawah atau kanan-bawah gallery) berisi list singkat semua nama project + nomor urut (01, 02, 03, ...), mirip komponen "Image on Text Hover" tapi **dikontrol oleh progress scroll horizontal, bukan oleh hover mouse**
> - Item yang index-nya sama dengan `activeIndex` (dari `onUpdate` di atas) diberi style aktif: opacity 100%, teks jadi bold/warna aksen orange, sedikit translateX sebagai indikator; item lain redup (opacity ~0.4)
> - Transisi antar state aktif/non-aktif pakai `gsap.to()` singkat (duration 0.3s, ease "power2.out") supaya perubahan highlight terasa halus, bukan langsung patah
> - Opsional: index item ini juga bisa diklik untuk "lompat" ke panel tersebut — hitung posisi scroll yang sesuai lalu gunakan `ScrollTrigger.getById()` atau `scrollTo` plugin GSAP untuk animasikan scroll ke posisi itu
> - Di mobile (dimana horizontal scroll biasanya diganti jadi swipe/scroll biasa), index ini tetap berguna sebagai progress dots/pagination sederhana di bawah gallery
>
> Dengan pendekatan ini, kamu tetap dapat "daftar nama project yang ter-highlight" seperti keinginan awal, tapi terintegrasi dalam satu interaksi scroll yang sama — tidak bentrok dengan efek pin horizontal.
>
> ### 6. CTA/Closing Section — Reveal + Magnetic Button
> ```js
> gsap.from(".cta-heading", {
>   scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
>   y: 100,
>   opacity: 0,
>   duration: 1,
>   ease: "power4.out",
> });
> ```
> Efek: heading "Ready To Get Started?" masuk dari bawah dengan fade. Tambahkan juga efek **magnetic button** pada tombol "Shoot Message" (tombol sedikit mengikuti posisi cursor saat didekati, memberi kesan interaktif/playful di penutup halaman).
>
> ### Prinsip umum yang harus diikuti
> - Setiap section pakai trigger `start`/`end` yang disesuaikan tinggi kontennya, jangan hardcode angka yang sama untuk semua section
> - Gunakan `scrub` untuk animasi yang harus terasa "terikat" ke posisi scroll (parallax, horizontal gallery), dan animasi normal (non-scrub) untuk reveal yang cukup terjadi sekali saat section muncul
> - Kelompokkan semua ScrollTrigger dalam satu file/hook (misal `useScrollAnimations.js` di React) dan pastikan di-cleanup (`ScrollTrigger.kill()`) saat komponen unmount agar tidak terjadi memory leak/duplikat trigger saat navigasi SPA
> - Uji ulang `ScrollTrigger.refresh()` setelah gambar lazy-load selesai, supaya posisi trigger tidak meleset
>
> Terapkan animasi-animasi di atas secara menyeluruh ke halaman portofolio saya, sesuaikan selector class dengan struktur HTML/komponen yang sudah ada, dan jaga performa tetap smooth (60fps) terutama di section pinned/horizontal scroll.

---

## Catatan Penting
- **Install dependency dulu:** `npm install gsap` (dan `npm install lenis` kalau mau smooth-scroll tambahan)
- Efek **pinned horizontal scroll** (poin 5) adalah yang paling berat secara performa — pastikan gambar project sudah di-optimize (WebP, lazy load) supaya tidak patah-patah
- Kalau kamu pakai React/Next.js, gunakan `useLayoutEffect` + `useRef` untuk scoping animasi per komponen (atau `@gsap/react`'s `useGSAP()` hook, lebih aman untuk cleanup otomatis)
- Beri tahu saya stack website kamu (React/Next.js polos, atau HTML+CSS+JS) kalau mau saya buatkan langsung kodenya, bukan cuma promptnya
