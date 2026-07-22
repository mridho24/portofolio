"use client"

import { Button } from "@/components/ui/Button"

export function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="relative rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 p-[1.5px] -z-10" />
              <div className="absolute inset-0 rounded-2xl bg-white -z-10" />
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100">
                  <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading">Developer</h3>
                  <p className="mt-1.5 text-sm text-body leading-relaxed">
                    Building robust, scalable web applications using modern technologies and clean code practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-yellow-50">
                  <svg className="h-7 w-7 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading">Ui/Ux</h3>
                  <p className="mt-1.5 text-sm text-body leading-relaxed">
                    Creating intuitive interfaces and seamless user experiences that delight and engage.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-50 to-blue-50">
                  <svg className="h-7 w-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading">Design</h3>
                  <p className="mt-1.5 text-sm text-body leading-relaxed">
                    Crafting visually stunning designs that communicate your brand story effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-peach-300 text-navy transition-all duration-300 hover:border-orange hover:text-orange hover:scale-105">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-heading">
              <span className="bg-gradient-to-r from-navy to-navy/70 bg-clip-text text-transparent">
                My Awesome
              </span>{" "}
              <span className="bg-gradient-to-r from-orange to-orange-200 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[17px] text-body leading-relaxed">
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
            <Button href="#contact" className="mt-8">
              Hire CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
