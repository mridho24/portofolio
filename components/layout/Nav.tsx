"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { MouseEvent } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
]

const scrollToTarget = (targetId: string, navOffset = 72) => {
  if (targetId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  const targetEl = document.getElementById(targetId)
  if (targetEl) {
    const offsetPosition =
      targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }
}

const handleScrollNav = (
  pathname: string,
  router: ReturnType<typeof useRouter>,
  e: MouseEvent<HTMLElement>,
  href: string,
  onClose?: () => void,
) => {
  if (!href.startsWith("#")) return
  e.preventDefault()
  onClose?.()
  const targetId = href.replace("#", "")
  if (pathname !== "/") {
    router.push("/" + href)
    window.setTimeout(() => scrollToTarget(targetId), 600)
    return
  }
  scrollToTarget(targetId)
}

export function Nav() {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60)
  })

  const go = (e: MouseEvent<HTMLElement>, href: string) =>
    handleScrollNav(pathname, router, e, href, () => setMenuOpen(false))

  const linkClass = (active: boolean) =>
    cn(
      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
      active
        ? "text-orange"
        : "text-navy/80 hover:text-navy hover:bg-navy/5",
    )

  const activeLink = (href: string) =>
    href.replace("#", "") && pathname === "/"
      ? (navItems.findIndex((i) => i.link === href) >= 0 && false)
      : false

  return (
    <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-4">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "min(720px, 100%)" : "100%",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.55)",
          boxShadow: scrolled
            ? "0 12px 34px -12px rgba(27,42,74,0.22)"
            : "0 6px 20px -10px rgba(27,42,74,0.12)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 30 }}
        className={cn(
          "relative mx-auto flex w-full max-w-6xl flex-col items-center rounded-full border backdrop-blur-xl transition-colors duration-300",
          scrolled ? "border-white/60" : "border-white/40",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between gap-4 transition-all duration-300",
            scrolled ? "px-3 py-2" : "px-4 py-2.5",
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => go(e, "#home")}
            className="flex shrink-0 items-center gap-2 px-2 py-1"
          >
            <svg
              className="h-5 w-5 text-orange"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
            <span className="text-sm font-bold text-navy font-heading">Ridho</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden items-center md:flex">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={(e) => go(e, item.link)}
                className={linkClass(activeLink(item.link))}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="inline-flex items-center rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-300 hover:shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex flex-col gap-1 p-2 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-navy rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              className="block h-0.5 w-5 bg-navy rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-navy rounded-full origin-center"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex w-full flex-col gap-1 border-t border-white/40 px-3 pb-4 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={(e) => go(e, item.link)}
                    className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy/80 hover:text-navy hover:bg-navy/5"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => go(e, "#contact")}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}