"use client"

import { Button } from "@/components/ui/Button"

const services = [
  {
    icon: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    iconBg: "from-pink-100 to-purple-100",
    highlighted: true,
    title: "Developer",
    desc: "Building robust, scalable web applications using modern technologies and clean code practices.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: (
      <svg className="h-7 w-7 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    iconBg: "from-orange-50 to-yellow-50",
    highlighted: false,
    title: "Ui/Ux",
    desc: "Creating intuitive interfaces and seamless user experiences that delight and engage.",
    tags: ["Figma", "Prototyping", "Wireframing"],
  },
  {
    icon: (
      <svg className="h-7 w-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
    iconBg: "from-sky-50 to-blue-50",
    highlighted: false,
    title: "Design",
    desc: "Crafting visually stunning designs that communicate your brand story effectively.",
    tags: ["Brand Identity", "Illustration", "Motion"],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className={[
        "services-section",
        "relative z-[10]",           // ★ higher z-index so it slides OVER the hero
        "py-28 bg-white",
        /* Rounded top corners = "blanket" leading edge */
        "rounded-t-[40px]",
        /* Shadow at the top edge reinforces the blanket feel */
        "shadow-[0_-24px_60px_rgba(0,0,0,0.10)]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-peach/40 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column: Service cards ── */}
          <div className="space-y-5">
            {services.map((s) => (
              <div
                key={s.title}
                className={`service-card relative rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover ${
                  s.highlighted ? "ring-1 ring-purple-200" : ""
                }`}
              >
                {s.highlighted && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 p-[1.5px] -z-10" />
                    <div className="absolute inset-0 rounded-2xl bg-white -z-10" />
                  </>
                )}

                <div className="flex items-start gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.iconBg} shadow-sm`}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-lg font-bold text-navy font-heading">{s.title}</h3>
                      {s.highlighted && (
                        <span className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-body leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="service-skill-tag rounded-full bg-navy/5 px-3 py-1 text-[10px] font-semibold text-navy/70 border border-navy/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Down arrow indicator */}
            <div className="flex justify-center pt-1">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-peach-300 text-navy transition-all duration-300 hover:border-orange hover:text-orange hover:scale-110 hover:shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Right column: Heading + CTA ── */}
          <div className="lg:pl-8 lg:sticky lg:top-32">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-semibold text-orange uppercase tracking-widest">
              What I Do
            </span>
            <h2 className="services-heading text-4xl md:text-5xl font-extrabold leading-tight font-heading mt-2">
              <span className="bg-gradient-to-r from-navy to-navy/70 bg-clip-text text-transparent">
                My Awesome
              </span>{" "}
              <span className="bg-gradient-to-r from-orange to-orange-200 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <div className="services-text mt-6 space-y-4 text-[17px] text-body leading-relaxed">
              <p>
                I provide end-to-end design and development services
                tailored to your unique needs. From concept to launch,
                every project receives dedicated attention and creative
                excellence.
              </p>
              <p>
                With expertise spanning across multiple disciplines, I
                deliver solutions that not only look great but also
                perform exceptionally well.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "4+", label: "Projects" },
                { num: "2+", label: "Years Exp" },
                { num: "5+", label: "Certs" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-peach/50 p-4 text-center">
                  <p className="text-xl font-extrabold text-navy font-heading">{s.num}</p>
                  <p className="text-xs text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="services-cta">
              <Button href="#contact" className="mt-8">
                Hire Me
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
