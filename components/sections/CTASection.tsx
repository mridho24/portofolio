"use client"

import { Button } from "@/components/ui/Button"

export function CTASection() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-heading">
              <span className="bg-gradient-to-r from-navy via-navy to-orange bg-clip-text text-transparent">
                Ready To
                <br />
                Get Started?
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <p className="text-[15px] text-body leading-relaxed max-w-xs">
              You Know About Me, Let&apos;s Talk About You. Tell me about
              your project and let&apos;s create something amazing together.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-widest text-navy font-heading">
                SHOOT MESSAGE
              </span>
              <Button
                href="https://wa.me/6282258787872"
                className="h-16 w-16 p-0"
                target="_blank" rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
