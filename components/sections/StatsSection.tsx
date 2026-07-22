"use client"

import { useState } from "react"
import { CertificateModal } from "@/components/ui/CertificateModal"

const certificates = [
  {
    title: "Best Capstone Project",
    issuer: "Coding Camp 2025 - University",
    src: "/certificates/%5BCoding%20Camp%202025%20-%20University%5D%20Best%20Capstone%20Project.jpg",
    type: "image" as const,
  },
  {
    title: "Graduation Letter",
    issuer: "Coding Camp 2025",
    src: "/certificates/%5BCoding%20Camp%202025%5D%20Graduation%20Letter.pdf",
    type: "pdf" as const,
  },
  {
    title: "IBM Design",
    issuer: "IBM",
    src: "/certificates/IBMDesign20250913.pdf",
    type: "pdf" as const,
  },
]

export function StatsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[number] | null>(null)

  return (
    <section className="py-28 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-[24px] bg-navy p-8">
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                  Certificates
                </p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-gray-300">
                  {certificates.length} Total &amp; Lainnya
                </span>
              </div>

              <div className="space-y-3">
                {certificates.map((cert) => (
                  <button
                    key={cert.title}
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center gap-4 rounded-xl bg-white/5 px-5 py-3.5 text-left transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange/20">
                      {cert.type === "image" ? (
                        <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{cert.title}</p>
                      <p className="text-xs text-gray-400">{cert.issuer}</p>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </button>
                ))}
              </div>

              <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl bg-white px-5 py-4 shadow-floating">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-yellow-50">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy font-heading">Latest</p>
                    <p className="text-[10px] text-muted">Best Capstone Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-heading">
              <span className="bg-gradient-to-r from-orange to-orange-300 bg-clip-text text-transparent">
                Perfect Solution
              </span>
              <br />
              <span className="bg-gradient-to-r from-navy to-navy/70 bg-clip-text text-transparent">
                For Your Business
              </span>
            </h2>
            <p className="mt-6 text-[17px] text-body leading-relaxed max-w-lg">
              From strategy to execution, I provide comprehensive
              solutions that drive real results. Let me help you build
              something extraordinary for your business.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-[9999px] bg-orange px-9 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Details
            </a>
          </div>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}
