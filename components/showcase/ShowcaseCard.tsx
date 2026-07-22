"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const spring = { type: "spring" as const, bounce: 0, duration: 0.6 }
const springStaggered = { type: "spring" as const, bounce: 0, duration: 0.6 }

interface ShowcaseCardProps {
  projectThumbnail?: string
  projectName?: string
  projectCategory?: string
  projectDescription?: string
  projectOverview?: string
  clientName?: string
  projectDuration?: string
  toolsUsed?: string
  link?: string
}

export function ShowcaseCard({
  projectThumbnail = "/images/profile.jpeg",
  projectName = "Muhammad Ridho",
  projectCategory = "Fullstack Developer & UI/UX Enthusiast",
  projectDescription = "I'm a fresh graduate from Universitas Syiah Kuala who enjoys transforming ideas into modern web applications. My focus lies in Fullstack Development and UI/UX Design, where functionality meets thoughtful user experience.",
  projectOverview = "Tech & Design",
  clientName = "Universitas Syiah Kuala",
  projectDuration = "2022 — 2026",
  toolsUsed = "Next.js, TypeScript, TailwindCSS",
  link,
}: ShowcaseCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      style={{ borderRadius: 44 }}
      className="relative w-full max-w-[620px] bg-white shadow-[0_0.8px_0.8px_-0.5px_rgba(0,0,0,0.08),0_2.4px_2.4px_-1px_rgba(0,0,0,0.08),0_6.4px_6.4px_-1.5px_rgba(0,0,0,0.09),0_20px_20px_-2px_rgba(0,0,0,0.12)]"
    >
      <motion.div
        layout
        style={{ borderRadius: 34 }}
        className="relative overflow-hidden"
      >
        <div
          style={{ borderRadius: 34, aspectRatio: "400 / 260" }}
          className="relative overflow-hidden"
        >
          <Image
            src={projectThumbnail}
            alt={projectName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 620px"
          />

          <div
            style={{
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)",
            }}
            className="absolute inset-0"
          />

          <motion.div
            layout="position"
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6 z-10"
          >
            <div className="flex-1 min-w-0">
              <h3
                style={{
                  fontFamily: "'General Sans', 'Inter', sans-serif",
                  fontWeight: 500,
                }}
                className="text-white text-lg md:text-xl truncate"
              >
                {projectName}
              </h3>
              <p
                style={{
                  fontFamily: "'General Sans', 'Inter', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {projectCategory}
              </p>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 ml-4 px-4 py-2 rounded-[9999px] bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors"
              >
                Preview Project
              </a>
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              style={{ borderRadius: 34 }}
              className="overflow-hidden bg-white"
            >
              <div className="p-6 space-y-4">
                <p
                  style={{
                    fontFamily: "'General Sans', 'Inter', sans-serif",
                    fontSize: 14,
                    color: "#3B3B3B",
                    lineHeight: 1.6,
                  }}
                >
                  {projectDescription}
                </p>

                <div
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  }}
                />

                <div>
                  <p
                    style={{
                      fontFamily: "'General Sans', 'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      color: "#1C1C1C",
                    }}
                  >
                    {projectOverview}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[clientName, projectDuration, toolsUsed].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...springStaggered,
                        delay: 0.2 + i * 0.15,
                      }}
                      style={{
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderRadius: 8,
                        fontSize: 12,
                        color: "#3B3B3B",
                      }}
                      className="px-3 py-2"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        layout="position"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-navy/70 hover:text-navy transition-colors cursor-pointer"
        style={{ fontFamily: "'General Sans', 'Inter', sans-serif" }}
      >
        <span>{open ? "Close" : "View"}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </motion.button>
    </motion.div>
  )
}
