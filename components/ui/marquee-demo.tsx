import type { ReactNode } from "react"
import { Marquee } from "@/components/ui/marquee"

interface TechItem {
  name: string
  icon: ReactNode
}

const techStackList: TechItem[] = [
  {
    name: "React 19",
    icon: (
      <svg className="h-6 w-6 text-[#61DAFB] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#1B2A4A" />
        <path d="M106 106L51.3 35H35v58h10.8V49.6L97.3 108c2.9-2.2 5.8-4.4 8.7-7z" fill="url(#next_g_v4)" />
        <path d="M83 35h10.8v58H83z" fill="#FFFFFF" />
        <defs>
          <linearGradient id="next_g_v4" x1="77" y1="83" x2="102" y2="114" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="h-6 w-6 rounded-[5px] shrink-0" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="18" fill="#3178C6" />
        <text
          x="50%"
          y="66%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="52"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-2"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="h-6 w-6 rounded-[5px] shrink-0" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M67.3 96.6c2.4 4 6.7 6.7 12 6.7 5.6 0 9.2-2.8 9.2-6.7 0-4.6-3.7-6.2-12.2-9.8l-4.2-1.8c-12.1-5.1-17.6-11.6-17.6-22 0-12.8 10.2-21.7 26.8-21.7 11.7 0 19.4 3.7 24.8 13.1l-10.6 6.7c-3.1-5.3-7.4-7.4-14.2-7.4-6.1 0-9.8 3.1-9.8 7 0 4.6 3.6 6.2 11.2 9.5l4.2 1.8c14.2 6 18.7 12.4 18.7 22.8 0 14.9-11.5 22.8-29.6 22.8-14.6 0-24.1-5.6-29.1-15.6l10.4-6.2zm-35.8.5c2.3 3.9 5.8 6.3 11 6.3 5.4 0 8.8-2.6 8.8-13.3V41.3h15.4v49.1c0 18.9-10.4 26.6-25.7 26.6-11.3 0-18.7-5.1-22.7-14.3l13.2-5.6z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="h-6 w-6 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 100 100" fill="none">
        <path
          d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
          fill="none"
          stroke="#83CD29"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path
          d="M38 85 L50 92 L75 78"
          fill="none"
          stroke="#83CD29"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="50%"
          y="58%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#83CD29"
          fontSize="42"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-3"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="#323232" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="46"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-2"
        >
          ex
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 128 128" fill="none">
        <path d="M62.6 0c-27.4 0-25.7 11.9-25.7 11.9v12.3h26.2v3.7H26.3S0 25.7 0 53.2c0 27.4 22.9 26.4 22.9 26.4h13.7V65.8s-.7-16.3 16-16.3h26.7s15.2-.2 15.2-15.1V15.2S101.4 0 62.6 0zm-14.2 8.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" fill="#3776AB" />
        <path d="M65.4 128c27.4 0 25.7-11.9 25.7-11.9v-12.3H64.9v-3.7h36.8s26.3 2.2 26.3-25.3c0-27.4-22.9-26.4-22.9-26.4h-13.7v13.8s.7 16.3-16 16.3H68.7s-15.2.2-15.2 15.1v19.2s-2.9 15.2 35.9 15.2zm14.2-8.3a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="h-6 w-6 text-[#336791] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.066 12.837c-.368-.135-.742-.258-1.121-.371-.241-.453-.521-.884-.836-1.288 1.488-1.897 2.016-3.766 1.474-5.267-.624-1.728-2.613-2.62-5.074-2.404-.702.062-1.393.208-2.063.435C10.28 3.3 9.07 3 7.822 3c-2.457 0-4.57 1.084-5.46 2.766-.632 1.196-.547 2.651.24 4.101.442.815 1.066 1.637 1.854 2.443C3.606 13.069 3 14.168 3 15.352c0 2.26 2.148 4.254 5.344 4.962.628.14 1.272.226 1.926.257 1.391.066 2.775-.17 4.07-.691 1.701.815 3.659 1.144 5.56.924 1.127-.131 2.096-.583 2.729-1.272.633-.69.919-1.579.805-2.504-.183-1.486-1.517-3.048-4.368-4.191zM7.822 4.5c.875 0 1.737.234 2.49.678C9.5 5.513 8.718 5.952 7.97 6.49c-.274-.251-.555-.494-.842-.728.225-.8.497-1.262.694-1.262zm-3.834 2.378c.553-1.048 2.011-1.628 3.584-1.458.261.218.514.444.758.679-1.084.772-2.097 1.69-3.023 2.738-.72-1.012-.872-1.47-.319-1.959zm7.391 10.957c-1.047.42-2.164.61-3.284.557-.525-.025-1.042-.094-1.547-.206C3.992 17.616 2.5 16.082 2.5 14.352c0-.756.452-1.526 1.272-2.167 1.055-1.189 2.21-2.233 3.447-3.111.442-.314.896-.607 1.36-.879 1.094-.64 2.247-1.128 3.428-1.451.464-.127.937-.213 1.414-.257 1.722-.151 3.109.473 3.543 1.674.378 1.047.01 2.355-1.037 3.687-1.043 1.326-2.529 2.569-4.185 3.501-.19.107-.382.21-.577.309.28.324.538.666.772 1.023.364.555.666 1.144.903 1.758a.75.75 0 0 1-1.39.566 6.945 6.945 0 0 0-.795-1.547c-.206-.314-.433-.615-.68-.902-.128.058-.257.113-.387.165z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg className="h-6 w-6 text-[#3ECF8E] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.359 1.125a1.002 1.002 0 0 0-1.428.16L1.174 14.654a.996.996 0 0 0 .783 1.602h8.043l-1.359 6.619a1.002 1.002 0 0 0 1.428-.16L22.826 9.346a.996.996 0 0 0-.783-1.602h-8.043l1.359-6.619z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="h-6 w-6 text-[#47A248] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-5.748 7.37-5.748 13.064c0 4.148 2.652 7.781 5.748 10.936 3.096-3.155 5.748-6.788 5.748-10.936C17.748 7.37 12 0 12 0zm.482 22.836v-8.77h-1.041v8.73c-2.316-2.585-4.225-5.503-4.225-8.874 0-4.004 3.754-9.336 4.746-10.67 1.01 1.35 4.746 6.666 4.746 10.67 0 3.398-1.928 6.326-4.226 8.914z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 38 57" fill="none">
        <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg className="h-6 w-6 text-[#F05032] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.301-.409-1.968l-2.484-2.48v6.78c.2.115.385.266.541.423.719.718.719 1.882 0 2.602-.719.719-1.884.719-2.602 0-.719-.72-.719-1.884 0-2.602.17-.17.368-.323.582-.436V9.458c-.214-.113-.412-.266-.582-.436-.537-.538-.674-1.294-.412-1.958L5.642 4.3.454 9.487c-.605.604-.605 1.582 0 2.186l10.48 10.48c.604.604 1.582.604 2.186 0l10.426-10.426c.605-.603.605-1.582 0-2.186z" />
      </svg>
    ),
  },
]

export function MarqueeDemo() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Mask fade gradients on left & right edges for seamless flow */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-peach-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-peach-50 to-transparent" />

      <Marquee pauseOnHover speed={40}>
        {techStackList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-3 px-4 py-2.5 rounded-full bg-white/75 backdrop-blur-md border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(245,130,31,0.14)] hover:border-orange/30 hover:scale-105 transition-all duration-300 cursor-default shrink-0"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center">
              {item.icon}
            </div>
            <span className="text-sm font-semibold text-navy font-heading tracking-tight whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
