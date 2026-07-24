"use client"

import { useEffect, useRef, useState } from "react"
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!certificate) return

    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)

    if (certificate.type === "pdf") {
      setLoading(true)

      const scriptId = "pdfjs-cdn-script"
      const renderPdf = () => {
        const win = window as any
        if (!win.pdfjsLib) return

        win.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"

        win.pdfjsLib
          .getDocument(certificate.src)
          .promise.then((pdf: any) => pdf.getPage(1))
          .then((page: any) => {
            const viewport = page.getViewport({ scale: 2 })
            const canvas = canvasRef.current
            if (!canvas) return
            const context = canvas.getContext("2d")
            canvas.height = viewport.height
            canvas.width = viewport.width

            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            }
            return page.render(renderContext).promise
          })
          .then(() => {
            setLoading(false)
          })
          .catch((err: any) => {
            console.error("PDF canvas render error:", err)
            setLoading(false)
          })
      }

      if (!(window as any).pdfjsLib) {
        let script = document.getElementById(scriptId) as HTMLScriptElement
        if (!script) {
          script = document.createElement("script")
          script.id = scriptId
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
          script.onload = renderPdf
          document.head.appendChild(script)
        } else {
          script.onload = renderPdf
        }
      } else {
        renderPdf()
      }
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [certificate, onClose])

  if (!certificate) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 select-none"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-center max-h-[92vh] max-w-[92vw] rounded-2xl bg-white p-3 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent, highly clickable Close button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-orange shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {certificate.type === "image" ? (
          <div className="flex items-center justify-center max-h-[85vh] max-w-[85vw] overflow-hidden rounded-xl">
            <Image
              src={certificate.src}
              alt={certificate.title}
              width={1200}
              height={900}
              className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto pointer-events-none"
              sizes="(max-width: 768px) 100vw, 80vw"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ) : (
          <div className="relative flex items-center justify-center max-h-[85vh] max-w-[85vw] min-h-[400px] min-w-[300px] rounded-xl overflow-auto bg-gray-100 p-2">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-navy bg-white/90 z-20">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange border-t-transparent" />
                <p className="text-xs font-semibold">Rendering Certificate Preview...</p>
              </div>
            )}
            <canvas
              ref={canvasRef}
              className="max-h-[80vh] w-auto h-auto rounded-lg shadow-md pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
      </div>
    </div>
  )
}
