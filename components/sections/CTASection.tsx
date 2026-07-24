"use client"

import { MagneticWrapper } from "@/components/ui/MagneticWrapper"

const contacts = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sublabel: "Chat directly",
    href: "https://wa.me/6282258787872",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    bg: "bg-[#25D366]/10 hover:bg-[#25D366]/20",
    iconColor: "text-[#25D366]",
    border: "border-[#25D366]/20",
  },
  {
    id: "github",
    label: "GitHub",
    sublabel: "See my code",
    href: "https://github.com/mridho24",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    bg: "bg-navy/8 hover:bg-navy/15",
    iconColor: "text-navy",
    border: "border-navy/10",
  },
  {
    id: "email",
    label: "Email",
    sublabel: "muhammadridhor24@gmail.com",
    href: "mailto:muhammadridhor24@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    bg: "bg-orange/8 hover:bg-orange/15",
    iconColor: "text-orange",
    border: "border-orange/15",
  },
]

export function CTASection() {
  return (
    <section id="contact" className="cta-section relative py-28 overflow-hidden bg-white">
      {/* Peach gradient at the top, fades to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach/60 via-peach/20 to-white pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,130,31,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-[clamp(4rem,15vw,12rem)] font-extrabold text-navy/[0.03] whitespace-nowrap tracking-tighter font-heading">
          LET&apos;S TALK
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        {/* Top area — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left: heading + description */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-semibold text-orange uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="cta-heading text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] font-heading">
              <span className="bg-gradient-to-r from-navy to-navy/70 bg-clip-text text-transparent">
                Ready To
              </span>
              <br />
              <span className="shimmer-text">
                Get Started?
              </span>
            </h2>
            <p className="cta-content mt-6 text-[17px] text-body leading-relaxed max-w-md">
              You know about me — now let&apos;s talk about you. Tell me about
              your project and let&apos;s create something amazing together.
            </p>
          </div>

          {/* Right: big send button */}
          <div className="cta-content flex flex-col items-center gap-3 self-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-muted uppercase">
              Shoot a Message
            </p>
            <MagneticWrapper strength={0.3}>
              <a
                href="https://wa.me/6282258787872"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-orange shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <span className="absolute inset-0 rounded-full bg-orange-300 scale-0 group-hover:scale-110 transition-transform duration-700 opacity-40" />
                <svg
                  className="relative h-8 w-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </a>
            </MagneticWrapper>
            <p className="text-[10px] text-muted">via WhatsApp</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-navy/8" />

        {/* Contact cards row */}
        <div className="cta-content grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target={c.id !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`cta-social-link group flex items-center gap-4 rounded-2xl border ${c.border} ${c.bg} px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 ${c.iconColor} shadow-sm`}>
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-navy font-heading">{c.label}</p>
                <p className="text-[11px] text-muted truncate mt-0.5">{c.sublabel}</p>
              </div>
              <svg
                className="ml-auto h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
