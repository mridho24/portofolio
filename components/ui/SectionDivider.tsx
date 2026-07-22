interface SectionDividerProps {
  from?: string
  to?: string
}

export function SectionDivider({ from = "bg-peach", to = "bg-white" }: SectionDividerProps) {
  return (
    <div className={`relative -mb-1 ${to}`}>
      <svg
        viewBox="0 0 1440 60"
        className={`w-full h-[60px] ${from}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C 360 60, 1080 0, 1440 30 L 1440 60 L 0 60 Z"
          className={to}
        />
      </svg>
    </div>
  )
}
