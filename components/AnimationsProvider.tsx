"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

export function AnimationsProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {

      // ═══════════════════════════════════════════════════════════
      // HERO → SERVICES blanket parallax
      //
      // Hero is CSS sticky (z-[1]). ServicesSection (z-[10])
      // scrolls up over it like a blanket.
      // ═══════════════════════════════════════════════════════════
      gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 90%",
          end: "top -5%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      })
        .to(".hero-heading",      { y: -80, opacity: 0.1, scale: 0.94, ease: "power1.inOut" }, 0)
        .to(".hero-bio",          { y: -50, opacity: 0,              ease: "power1.inOut" }, 0.1)
        .to(".hero-cta",          { y: -30, opacity: 0,              ease: "power1.inOut" }, 0.15)
        .to(".hero-status-pill",  { y: -20, opacity: 0,              ease: "power1.inOut" }, 0.05)
        .to(".hero-photo",        { scale: 0.86, y: 50, opacity: 0.5, ease: "power1.inOut" }, 0)
        .to(".hero-badge-1",      { y: -60, x: 20, opacity: 0, scale: 0.8, ease: "power2.in" }, 0.05)
        .to(".hero-badge-2",      { y: -40, x: -20, opacity: 0, scale: 0.8, ease: "power2.in" }, 0.08)
        .to(".hero-code-icon",    { opacity: 0, scale: 0.5, ease: "power2.in" }, 0.1)
        .to(".hero-badge-item",   { y: -15, opacity: 0, stagger: 0.04, ease: "power2.in" }, 0.2)
        .to(".hero-decor-dot",    { scale: 0, opacity: 0, stagger: 0.03, ease: "power2.in" }, 0.1)
        .to(".hero-blob",         { scale: 0.7, opacity: 0, ease: "power1.inOut" }, 0)
        .to(".hero-content-left", { x: -40, ease: "power1.inOut" }, 0)
        .to(".hero-content-right",{ x: 40,  ease: "power1.inOut" }, 0)

      // ═══════════════════════════════════════════════════════════
      // SERVICES — staggered card reveal
      // ═══════════════════════════════════════════════════════════
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 60%",
          invalidateOnRefresh: true,
        },
        x: (i) => (i === 0 ? -100 : i === 1 ? 0 : 100),
        y: (i) => (i === 1 ? -60 : 0),
        rotation: (i) => (i === 0 ? -6 : i === 2 ? 6 : 0),
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
        immediateRender: false,
      })

      gsap.from(".services-heading", {
        scrollTrigger: { trigger: ".services-section", start: "top 55%", invalidateOnRefresh: true },
        y: 80, opacity: 0, duration: 1, ease: "power4.out", immediateRender: false,
      })

      gsap.from(".services-text p", {
        scrollTrigger: { trigger: ".services-section", start: "top 50%", invalidateOnRefresh: true },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", immediateRender: false,
      })

      gsap.from(".services-cta", {
        scrollTrigger: { trigger: ".services-section", start: "top 45%", invalidateOnRefresh: true },
        y: 40, opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)", immediateRender: false,
      })

      gsap.from(".service-skill-tag", {
        scrollTrigger: { trigger: ".services-section", start: "top 40%", invalidateOnRefresh: true },
        scale: 0, opacity: 0, stagger: 0.05, duration: 0.5, ease: "back.out(2)", immediateRender: false,
      })

      // ═══════════════════════════════════════════════════════════
      // ABOUT — marquee + reveal
      // The marquee itself is pure CSS; GSAP only handles element reveals.
      // ═══════════════════════════════════════════════════════════
      gsap.from(".about-photo", {
        scrollTrigger: { trigger: ".about-section", start: "top 70%" },
        clipPath: "inset(0 0 100% 0)",
        duration: 1.2, ease: "power4.out", immediateRender: false,
      })

      gsap.from(".about-heading", {
        scrollTrigger: { trigger: ".about-section", start: "top 75%" },
        y: 100, opacity: 0, duration: 1, ease: "power4.out", immediateRender: false,
      })

      gsap.from(".about-text", {
        scrollTrigger: { trigger: ".about-section", start: "top 70%" },
        y: 60, opacity: 0, duration: 0.9, ease: "power3.out", immediateRender: false,
      })

      gsap.from(".about-list-item", {
        scrollTrigger: { trigger: ".about-section", start: "top 65%" },
        x: -50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", immediateRender: false,
      })

      // ═══════════════════════════════════════════════════════════
      // STATS / MY JOURNEY — very slow scrub-based reveal
      //
      // Each component animates in as you slowly scroll through
      // the section. Uses scrub: 2 so the animation pace exactly
      // matches how fast the user scrolls — visible and deliberate.
      // ═══════════════════════════════════════════════════════════

      // Left card (certificates) — slides in from left
      gsap.from(".stats-card", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 90%",
          end: "top 30%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
        x: -120,
        y: 60,
        opacity: 0,
        rotation: -4,
        scale: 0.9,
        ease: "power2.out",
        immediateRender: false,
      })

      // The floating badge inside the card — tiny delay offset
      gsap.from(".stats-section .absolute.-bottom-6", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
        y: 40,
        opacity: 0,
        scale: 0.7,
        ease: "back.out(2)",
        immediateRender: false,
      })

      // Right heading — slides in from right, slow scrub
      gsap.from(".stats-right-content span", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
        x: 80,
        opacity: 0,
        ease: "power2.out",
        immediateRender: false,
      })

      gsap.from(".stats-right-content h2", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
        x: 100,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        immediateRender: false,
      })

      gsap.from(".stats-right-content p", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 75%",
          end: "top 25%",
          scrub: 2.5,
          invalidateOnRefresh: true,
        },
        x: 80,
        opacity: 0,
        ease: "power2.out",
        immediateRender: false,
      })

      // Highlight cards — stagger into view from right, very slow
      const highlightCards = gsap.utils.toArray<HTMLElement>(".stats-right-content .grid > div")
      highlightCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: ".stats-section",
            start: `top ${72 - i * 8}%`,
            end: `top ${20 - i * 5}%`,
            scrub: 2,
            invalidateOnRefresh: true,
          },
          x: 100,
          y: 30,
          opacity: 0,
          scale: 0.85,
          ease: "power3.out",
          immediateRender: false,
        })
      })

      // CTA button at bottom — last to arrive
      gsap.from(".stats-right-content a", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 40%",
          end: "top -10%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.8,
        ease: "back.out(1.5)",
        immediateRender: false,
      })

      // ═══════════════════════════════════════════════════════════
      // PROJECTS — Sticky 3D Stack animation
      // Each card is sticky top-28. As the next card scrolls up over it,
      // GSAP scrub-animates the previous card to scale down (0.94) and dim,
      // creating a clean, luxurious 3D card deck stacking effect.
      // ═══════════════════════════════════════════════════════════
      const projectCards = gsap.utils.toArray<HTMLElement>(".project-stack-card")

      projectCards.forEach((card, i) => {
        if (i === projectCards.length - 1) return // last card stays full size

        const nextCard = projectCards[i + 1]

        gsap.to(card, {
          scrollTrigger: {
            trigger: nextCard,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
          scale: 0.94,
          filter: "brightness(0.7)",
          y: -15,
          ease: "none",
        })
      })

      // Section heading reveal
      gsap.from(".project-section-heading", {
        scrollTrigger: {
          trigger: ".project-gallery-wrapper",
          start: "top 85%",
        },
        y: 60, opacity: 0, duration: 1, ease: "power4.out", immediateRender: false,
      })

      gsap.from(".project-section-sub", {
        scrollTrigger: {
          trigger: ".project-gallery-wrapper",
          start: "top 80%",
        },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out", immediateRender: false,
      })

      // ═══════════════════════════════════════
      // CTA — Closing reveal
      // ═══════════════════════════════════════
      gsap.from(".cta-section .cta-heading", {
        scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
        y: 120, opacity: 0, scale: 0.9, duration: 1.2, ease: "power4.out", immediateRender: false,
      })

      gsap.from(".cta-content", {
        scrollTrigger: { trigger: ".cta-section", start: "top 75%" },
        y: 60, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", immediateRender: false,
      })

      gsap.from(".cta-social-link", {
        scrollTrigger: { trigger: ".cta-section", start: "top 68%" },
        y: 30, opacity: 0, scale: 0.95, stagger: 0.12, duration: 0.6, ease: "back.out(1.7)", immediateRender: false,
      })
    })

    const handleRefresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", handleRefresh)
    window.addEventListener("resize", handleRefresh)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      lenis.destroy()
      window.removeEventListener("load", handleRefresh)
      window.removeEventListener("resize", handleRefresh)
    }
  }, [])

  return <>{children}</>
}
