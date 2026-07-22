"use client"

import { useEffect, useState } from "react"

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-100">
      <div
        className="h-full bg-gradient-to-r from-orange to-orange-200 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
