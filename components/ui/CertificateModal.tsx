"use client"

import { useEffect } from "react"
import Image from "next/image"

interface Certificate {
  title: string
  src: string
  type: "image" | "pdf"
}

interface CertificateModalProps {
  certificate: Certificate | null
  onClose: () => void
}

export function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    if (!certificate) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [certificate, onClose])

  if (!certificate) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-2 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {certificate.type === "image" ? (
          <div className="flex items-center justify-center max-h-[85vh] max-w-[85vw]">
            <Image
              src={certificate.src}
              alt={certificate.title}
              width={1200}
              height={900}
              className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ) : (
          <div className="max-h-[85vh] max-w-[85vw]">
            <iframe
              src={certificate.src}
              className="h-[85vh] w-[85vw] rounded-xl border-0"
              title={certificate.title}
            />
          </div>
        )}
      </div>
    </div>
  )
}
