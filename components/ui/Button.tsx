"use client"

import { useRef, useCallback, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface OriginButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  href?: string
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  target,
  rel,
}: OriginButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const [dim, setDim] = useState(300)

  const scale = useMotionValue(0)
  const springScale = useSpring(scale, { stiffness: 85, damping: 18 })

  useEffect(() => {
    if (!ref.current) return
    const w = ref.current.offsetWidth
    const h = ref.current.offsetHeight
    setDim(Math.max(w, h) * 2)
  }, [])

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      setOrigin({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      scale.set(1)
    },
    [scale],
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      setOrigin({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      scale.set(0)
    },
    [scale],
  )

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold relative overflow-hidden rounded-[9999px] text-sm transition-shadow duration-300 hover:shadow-lg select-none"
  const variants: Record<string, string> = {
    primary: "bg-orange text-white px-9 py-4",
    secondary: "bg-navy text-white px-9 py-4",
    outline: "border-2 border-orange text-orange px-9 py-4 hover:border-navy hover:text-navy",
  }
  const circleColors: Record<string, string> = {
    primary: "bg-navy/25",
    secondary: "bg-white/25",
    outline: "bg-navy/15",
  }

  const content = (
    <div ref={ref} className={cn(base, variants[variant], className)}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className={cn("absolute rounded-full pointer-events-none", circleColors[variant])}
        style={{
          left: origin.x,
          top: origin.y,
          x: "-50%",
          y: "-50%",
          width: dim,
          height: dim,
          scale: springScale,
        }}
      />
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block"
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className="block"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  )
}
