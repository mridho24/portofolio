"use client"

import dynamic from "next/dynamic"

const ShowcaseCard = dynamic(
  () => import("@/components/showcase/ShowcaseCard").then((m) => m.ShowcaseCard),
  { ssr: false },
)

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-peach-50 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-heading">
              <span className="bg-gradient-to-r from-navy via-navy to-orange bg-clip-text text-transparent">
                Always Delivering
                <br />
                Exceptional Works
                <br />
                As a Fresh Graduate
              </span>
            </h2>
            <p className="mt-6 text-[17px] text-body leading-relaxed max-w-lg">
              Hi, I&apos;m <strong className="text-navy">Muhammad Ridho</strong>{" "}
              — a fresh graduate from Universitas Syiah Kuala with a passion
              for building fullstack applications and crafting beautiful
              UI/UX designs. I love turning complex problems into simple,
              elegant solutions.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { num: "1", title: "Fullstack Development" },
                { num: "2", title: "UI/UX Design" },
                { num: "3", title: "Top 20 Capstone DBS 2025" },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {item.num}
                  </span>
                  <span className="text-base font-semibold text-navy font-heading">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[620px]">
              <ShowcaseCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
