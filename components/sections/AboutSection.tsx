"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-peach via-peach-50 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

          <div className="relative flex items-center justify-center">
            <div className="absolute -top-4 right-8 h-3 w-3 rounded-full bg-pink-400 animate-float" />
            <div className="absolute top-16 -left-4 h-2.5 w-2.5 rounded-full bg-sky-400 animate-float-delayed" />
            <div className="absolute bottom-16 -right-6 h-2 w-2 rounded-full bg-pink-300 animate-float" />

            <div className="relative">
              <div className="relative h-[400px] w-[340px] md:h-[480px] md:w-[400px] rounded-[32px] bg-gradient-to-br from-yellow-100 via-peach to-yellow-50 overflow-hidden shadow-xl">
                <svg
                  viewBox="0 0 400 480"
                  className="h-full w-full"
                  fill="none"
                >
                  <ellipse cx="200" cy="370" rx="95" ry="115" fill="#F5A623" opacity="0.25" />
                  <ellipse cx="200" cy="160" rx="60" ry="70" fill="#FDEBE0" stroke="#FCE3D4" strokeWidth="2" />
                  <ellipse cx="200" cy="115" rx="63" ry="50" fill="#1B2A4A" />
                  <ellipse cx="178" cy="155" rx="4.5" ry="5.5" fill="#1B2A4A" opacity="0.6" />
                  <ellipse cx="222" cy="155" rx="4.5" ry="5.5" fill="#1B2A4A" opacity="0.6" />
                  <path d="M188 178 Q200 192 212 178" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                  <path d="M120 320 Q85 300 75 260" stroke="#FDEBE0" strokeWidth="18" strokeLinecap="round" fill="none" />
                  <path d="M75 260 Q70 248 68 238" stroke="#FDEBE0" strokeWidth="14" strokeLinecap="round" fill="none" />
                  <path d="M68 238 Q64 222 72 214" stroke="#FDEBE0" strokeWidth="12" strokeLinecap="round" fill="none" />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 h-[170px] bg-yellow-400/15 rounded-t-[60px]" />
              </div>

              <div className="absolute -bottom-4 -left-6 md:-bottom-6 md:-left-10 rounded-2xl bg-white px-5 py-4 shadow-floating animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy font-heading">24 Hours</p>
                    <p className="text-[10px] text-muted">Active Support</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 h-14 w-14 rounded-full bg-white shadow-floating flex items-center justify-center animate-float-delayed">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
