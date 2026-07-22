"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
]

const serviceSubmenu = [
  { label: "Developer", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Design", href: "#services" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const ids = ["home", "services", "about", "projects", "contact"]
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-40% 0px -55% 0px" },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "w-fit mx-auto rounded-[23px] bg-white/60 backdrop-blur-lg border border-white/30 transition-shadow duration-300",
          "shadow-[0_0_33px_rgba(0,0,0,0.04)] shadow-[inset_0_0_5px_rgba(255,255,255,0.3)]",
          menuOpen ? "shadow-lg" : "hover:shadow-lg",
        )}
      >
        <div className="flex items-center gap-1 px-3 py-1.5">
          <a
            href="#home"
            className="flex items-center gap-2 px-3 py-2 rounded-xl transition-transform duration-300 hover:scale-105"
          >
            <svg className="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
            <span className="text-sm font-bold text-navy font-heading hidden sm:block">
              Ridho
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5 ml-2">
            {links.map((link) =>
              link.label === "Services" ? (
                <li
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "block px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200",
                      active === link.href.slice(1)
                        ? "text-orange bg-orange/8"
                        : "text-navy/80 hover:text-navy hover:bg-navy/5",
                    )}
                  >
                    {link.label}
                  </a>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.96 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/30 shadow-lg p-2"
                      >
                        {serviceSubmenu.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-navy/80 hover:text-navy hover:bg-navy/5 transition-all duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      "block px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200",
                      active === link.href.slice(1)
                        ? "text-orange bg-orange/8"
                        : "text-navy/80 hover:text-navy hover:bg-navy/5",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="hidden md:block ml-2">
            <Button href="#contact" variant="primary" className="px-5 py-2 text-[13px]">
              Contact Us
            </Button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-2 ml-2 relative z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="block h-0.5 w-5 bg-navy rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="block h-0.5 w-5 bg-navy rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="block h-0.5 w-5 bg-navy rounded-full origin-center"
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 pt-1 border-t border-white/20 mx-3 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "block px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200",
                      active === link.href.slice(1)
                        ? "text-orange bg-orange/8"
                        : "text-navy/80 hover:text-navy hover:bg-navy/5",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button
                    href="#contact"
                    variant="primary"
                    className="w-full px-5 py-2.5 text-[13px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
