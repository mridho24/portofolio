"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  glow: number
}

interface FloatingParticlesProps {
  particleCount?: number
  particleColor?: string
  speed?: number
  glowIntensity?: number
  mouseRadius?: number
  mouseMode?: "none" | "attract" | "repel"
  className?: string
}

export function FloatingParticles({
  particleCount = 50,
  particleColor = "#F5821F",
  speed = 0.5,
  glowIntensity = 10,
  mouseRadius = 100,
  mouseMode = "attract",
  className,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId = rafRef.current

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }

    const resizeObserver = new ResizeObserver(resize)
    const parent = canvas.parentElement
    if (parent) resizeObserver.observe(parent)
    resize()

    const initParticles = () => {
      const arr: Particle[] = []
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 1
        arr.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size,
          opacity: Math.random() * 0.3 + 0.2,
          baseOpacity: Math.random() * 0.3 + 0.2,
          glow: 0,
        })
      }
      particlesRef.current = arr
    }

    initParticles()

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    window.addEventListener("mousemove", handleMouse)
    document.addEventListener("mouseleave", handleMouseLeave)

    const draw = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const t = 1 - dist / mouseRadius
          const ease = t * t

          p.opacity = p.baseOpacity + ease * 0.5
          p.glow = ease * glowIntensity

          if (mouseMode === "attract") {
            const force = ease * 0.3
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          } else if (mouseMode === "repel") {
            const force = ease * 0.3
            p.vx -= (dx / dist) * force
            p.vy -= (dy / dist) * force
          }

          const maxSpeed = speed * 3
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
          if (spd > maxSpeed) {
            p.vx = (p.vx / spd) * maxSpeed
            p.vy = (p.vy / spd) * maxSpeed
          }
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.05
          p.glow += (0 - p.glow) * 0.05
        }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = particleColor
        ctx!.globalAlpha = Math.max(0, Math.min(1, p.opacity))

        if (p.glow > 0.5) {
          ctx!.shadowBlur = p.glow
          ctx!.shadowColor = particleColor
        } else {
          ctx!.shadowBlur = 0
        }

        ctx!.fill()
      }

      ctx!.globalAlpha = 1
      ctx!.shadowBlur = 0

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)
    rafRef.current = animationId

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("mousemove", handleMouse)
      document.removeEventListener("mouseleave", handleMouseLeave)
      resizeObserver.disconnect()
    }
  }, [particleCount, particleColor, speed, glowIntensity, mouseRadius, mouseMode])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{ zIndex: 0 }}
    />
  )
}
