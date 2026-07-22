"use client"

import Image from "next/image"
import { TypingEffect } from "@/components/ui/TypingEffect"
import { FloatingParticles } from "@/components/ui/FloatingParticles"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-peach-50 to-pink-100 pointer-events-none" />

      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-300/30 via-pink-300/20 to-transparent blur-3xl pointer-events-none" />

      <FloatingParticles particleColor="#F5821F" particleCount={40} glowIntensity={8} speed={0.4} mouseMode="attract" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)] py-20">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-navy font-heading">
              Hy! I Am{" "}
              <TypingEffect
                text="Muhammad Ridho"
                className="bg-gradient-to-r from-orange to-navy bg-clip-text text-transparent"
              />
            </h1>
            <p className="mt-6 max-w-lg text-[17px] text-body leading-relaxed">
              A fresh graduate from{" "}
              <span className="font-semibold text-navy">
                Universitas Syiah Kuala
              </span>
              , Top 20 Capstone DBS 2025. I&apos;m a{" "}
              <span className="font-semibold text-navy">
                fullstack developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-navy">
                UI/UX enthusiast
              </span>{" "}
              who loves turning ideas into beautiful digital experiences.
            </p>

            <Button href="#contact" className="mt-8">
              Hire Me
            </Button>

            <div className="mt-14">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">
                Education &amp; Achievement
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 rounded-lg border border-peach-300 bg-white/60 px-5 py-3">
                  <svg className="h-5 w-5 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-navy">S.Kom</p>
                    <p className="text-[10px] text-muted">Univ. Syiah Kuala</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-peach-300 bg-white/60 px-5 py-3">
                  <svg className="h-5 w-5 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-navy">Top 20 Capstone</p>
                    <p className="text-[10px] text-muted">DBS 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-peach-300 bg-white/60 px-5 py-3">
                  <svg className="h-5 w-5 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-navy">Fullstack &amp; UI/UX</p>
                    <p className="text-[10px] text-muted">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-up">
            <div className="relative">
              <div className="absolute -top-6 -left-4 h-3 w-3 rounded-full bg-pink-400 animate-float" />
              <div className="absolute top-12 -right-6 h-2.5 w-2.5 rounded-full bg-sky-400 animate-float-delayed" />
              <div className="absolute bottom-20 -left-8 h-2 w-2 rounded-full bg-pink-300 animate-float" />
              <div className="absolute -bottom-4 right-16 h-3 w-3 rounded-full bg-sky-300 animate-float-delayed" />

              <div className="relative h-[420px] w-[360px] md:h-[500px] md:w-[420px] rounded-[32px] overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 360px, 420px"
                  priority
                />
              </div>

              <div className="absolute -top-2 -right-6 md:-top-4 md:-right-8 rounded-2xl bg-white px-5 py-4 shadow-floating animate-float">
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

              <div className="absolute -bottom-4 -left-6 md:-bottom-6 md:-left-10 rounded-2xl bg-white px-5 py-4 shadow-floating animate-float-delayed">
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

              <div className="absolute -bottom-2 right-4 md:right-8 h-14 w-14 rounded-full bg-white shadow-floating flex items-center justify-center animate-float">
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
