"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  className?: string
  speed?: number
}

export function TypingEffect({ text, className, speed = 80 }: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="inline-block w-[3px] h-[1em] bg-orange ml-1 animate-pulse align-middle" />
      )}
    </span>
  )
}
