"use client"

import Image from "next/image"
import { TypingEffect } from "@/components/ui/TypingEffect"
import { FloatingParticles } from "@/components/ui/FloatingParticles"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section
      id="home"
      /* ★ sticky top-0 + z-[1] enables the "blanket" effect:
         ServicesSection (z-[10]) slides up from below and
         covers the hero like a blanket as user scrolls */
      className="hero-section sticky top-0 z-[1] min-h-screen flex items-center pt-20"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-peach-50 to-pink-50 pointer-events-none" />

      {/* Animated blob 1 */}
      <div
        className="hero-blob absolute -top-20 -right-20 w-[600px] h-[600px] opacity-50 pointer-events-none blob-anim"
        style={{
          background: "radial-gradient(circle, rgba(245,130,31,0.18) 0%, rgba(238,125,31,0.08) 50%, transparent 70%)",
        }}
      />
      {/* Animated blob 2 */}
      <div
        className="hero-blob absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(192,132,252,0.2) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)",
          animation: "blob-move 10s ease-in-out infinite reverse",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles particleColor="#F5821F" particleCount={40} glowIntensity={8} speed={0.4} mouseMode="attract" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-10">

          {/* Left column */}
          <div className="hero-content-left animate-fade-up">
            {/* Status pill */}
            <div className="hero-status-pill mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-soft" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </div>

            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-navy font-heading">
              Hy! I Am{" "}
              <TypingEffect
                text="Muhammad Ridho"
                className="bg-gradient-to-r from-orange to-orange-300 bg-clip-text text-transparent"
              />
            </h1>

            <p className="hero-bio mt-6 max-w-lg text-[17px] text-body leading-relaxed">
              A fresh graduate from{" "}
              <span className="font-semibold text-navy">Universitas Syiah Kuala</span>
              , Top 20 Capstone DBS 2025. I&apos;m a{" "}
              <span className="font-semibold text-navy">fullstack developer</span>{" "}
              and{" "}
              <span className="font-semibold text-navy">UI/UX enthusiast</span>{" "}
              who loves turning ideas into beautiful digital experiences.
            </p>

            <div className="hero-cta">
              <Button href="#contact" className="mt-8">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="hero-content-right relative flex items-center justify-center animate-fade-up">
            <div className="relative">
              {/* Decorative dots */}
              <div className="hero-decor-dot absolute -top-6 -left-4 h-3 w-3 rounded-full bg-pink-400 animate-float" />
              <div className="hero-decor-dot absolute top-12 -right-6 h-2.5 w-2.5 rounded-full bg-sky-400 animate-float-delayed" />
              <div className="hero-decor-dot absolute bottom-20 -left-8 h-2 w-2 rounded-full bg-pink-300 animate-float" />
              <div className="hero-decor-dot absolute -bottom-4 right-16 h-3 w-3 rounded-full bg-sky-300 animate-float-delayed" />
              <div className="hero-decor-dot absolute top-1/3 -right-12 h-1.5 w-1.5 rounded-full bg-orange/70 animate-float-slow" />
              <div className="hero-decor-dot absolute top-2/3 left-2 h-1.5 w-1.5 rounded-full bg-purple-400/60 animate-float-slow" />

              {/* Spinning ring */}
              <div
                className="absolute rounded-full border-2 border-dashed border-orange/20 animate-spin-slow pointer-events-none"
                style={{ width: "calc(100% + 4rem)", height: "calc(100% + 4rem)", left: "-2rem", top: "-2rem" }}
              />

              {/* Profile photo */}
              <div className="hero-photo relative h-[420px] w-[360px] md:h-[500px] md:w-[420px] rounded-[32px] overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 360px, 420px"
                  priority
                />
              </div>

              {/* Floating badge 1 */}
              <div className="hero-badge-1 absolute -top-2 -right-6 md:-top-4 md:-right-8 rounded-2xl bg-white px-5 py-4 shadow-floating animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy font-heading">Top 20 Capstone</p>
                    <p className="text-[10px] text-muted">DBS 2025</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="hero-badge-2 absolute -bottom-4 -left-6 md:-bottom-6 md:-left-10 rounded-2xl bg-white px-5 py-4 shadow-floating animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                    <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy font-heading">Fullstack</p>
                    <p className="text-[10px] text-muted">Web Developer</p>
                  </div>
                </div>
              </div>

              {/* Code icon */}
              <div className="hero-code-icon absolute -bottom-2 right-4 md:right-8 h-14 w-14 rounded-full bg-white shadow-floating flex items-center justify-center animate-float">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
