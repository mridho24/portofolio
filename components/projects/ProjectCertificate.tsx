"use client"

import { useState } from "react"
import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"
import { CertificateModal } from "@/components/ui/CertificateModal"

interface ProjectCertificateProps {
  project: Project
}

export function ProjectCertificate({ project }: ProjectCertificateProps) {
  const [previewOpen, setPreviewOpen] = useState(false)

  if (!project.certificate) return null

  const { certificate } = project

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="max-w-3xl rounded-[24px] border border-orange/15 bg-gradient-to-br from-peach/50 via-white to-peach-50 p-8 md:p-10 shadow-card">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange to-amber-500 text-white shadow-md">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 01-1.125-1.125V18.75m9 0H7.5" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="inline-block rounded-full bg-orange/10 px-2.5 py-0.5 text-[9px] font-extrabold text-orange uppercase tracking-widest mb-1.5">
                Award
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-navy font-heading">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm text-body">
                Awarded as Best Capstone Project — Coding Camp 2025 University.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View Certificate
                </button>

                <a
                  href={certificate.src}
                  download
                  className="inline-flex items-center gap-2 rounded-full border-2 border-orange px-6 py-2.5 text-sm font-semibold text-orange transition-all duration-300 hover:bg-orange hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <CertificateModal
        certificate={
          previewOpen
            ? { title: certificate.title, src: certificate.src, type: certificate.type }
            : null
        }
        onClose={() => setPreviewOpen(false)}
      />
    </section>
  )
}