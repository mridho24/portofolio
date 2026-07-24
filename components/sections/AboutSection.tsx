"use client"

import dynamic from "next/dynamic"

const ShowcaseCard = dynamic(
  () => import("@/components/showcase/ShowcaseCard").then((m) => m.ShowcaseCard),
  { ssr: false },
)

const highlights = [
  {
    num: "1",
    title: "Fullstack Development",
    desc: "React, Next.js, Node.js & more",
    color: "bg-orange",
  },
  {
    num: "2",
    title: "UI/UX Design",
    desc: "User-centered, intuitive interfaces",
    color: "bg-purple-500",
  },
  {
    num: "3",
    title: "Top 20 Capstone DBS 2025",
    desc: "Recognized for excellence",
    color: "bg-emerald-500",
  },
]

const marqueeWords = [
  "EXCEPTIONAL WORK",
  ">",
  "FRESH GRADUATE",
  ">",
  "FULLSTACK DEV",
  ">",
  "UI/UX DESIGN",
  ">",
  "NEXT.JS",
  ">",
  "REACT",
  ">",
]

export function AboutSection() {
  return (
    <section id="about" className="about-section relative py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-peach-50 to-white pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-100/25 blur-3xl pointer-events-none" />

      {/* ★ CSS Infinite Marquee — visible looping text band */}
      <div
        className="marquee-outer absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* First row — moves left */}
        <div className="marquee-row flex whitespace-nowrap mb-2">
          <div className="marquee-track-left flex shrink-0 gap-8 pr-8 animate-marquee-left">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-navy/[0.055] tracking-tighter"
              >
                {w}
              </span>
            ))}
          </div>
          {/* duplicate for seamless loop */}
          <div className="marquee-track-left flex shrink-0 gap-8 pr-8 animate-marquee-left" aria-hidden="true">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-navy/[0.055] tracking-tighter"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Second row — moves right (reverse), slightly offset */}
        <div className="marquee-row flex whitespace-nowrap">
          <div className="marquee-track-right flex shrink-0 gap-8 pr-8 animate-marquee-right">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-orange/[0.05] tracking-tighter"
              >
                {w}
              </span>
            ))}
          </div>
          <div className="marquee-track-right flex shrink-0 gap-8 pr-8 animate-marquee-right" aria-hidden="true">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-orange/[0.05] tracking-tighter"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center">

          {/* Left column — Text */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-semibold text-orange uppercase tracking-widest">
              About Me
            </span>

            <h2 className="about-heading text-4xl md:text-5xl font-extrabold leading-tight font-heading">
              <span className="bg-gradient-to-r from-navy via-navy to-orange bg-clip-text text-transparent">
                Always Delivering
                <br />
                Exceptional Works
                <br />
                As a Fresh Graduate
              </span>
            </h2>

            <p className="about-text mt-6 text-[17px] text-body leading-relaxed max-w-lg">
              Hi, I&apos;m <strong className="text-navy">Muhammad Ridho</strong>{" "}
              — a fresh graduate from Universitas Syiah Kuala with a passion
              for building fullstack applications and crafting beautiful
              UI/UX designs. I love turning complex problems into simple,
              elegant solutions.
            </p>

            <div className="mt-10 space-y-4">
              {highlights.map((item) => (
                <div key={item.num} className="about-list-item group flex items-center gap-5 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
                  <span className={`about-list-num flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.color} text-sm font-bold text-white shadow-sm`}>
                    {item.num}
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-navy font-heading">
                      {item.title}
                    </span>
                    <span className="block text-xs text-muted mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="h-4 w-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Showcase card */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="about-photo w-full max-w-[620px]">
              <ShowcaseCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
