"use client"

import { useRef, useCallback, useEffect } from "react"
import gsap from "gsap"

interface MagneticWrapperProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticWrapper({
  children,
  strength = 0.3,
  className,
}: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!isFinePointer) return

    const wrapper = wrapperRef.current
    const child = childRef.current
    if (!wrapper || !child) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(child, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto",
      })
    }

    wrapper.addEventListener("mousemove", handleMouseMove)
    wrapper.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove)
      wrapper.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ display: "inline-block" }}
    >
      <div ref={childRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  )
}
