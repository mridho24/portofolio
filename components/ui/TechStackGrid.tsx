"use client"

const techStackItems = [
  { name: "Next.js 15", dot: "bg-orange" },
  { name: "React 19", dot: "bg-orange" },
  { name: "TypeScript", dot: "bg-orange" },
  { name: "Tailwind CSS v4", dot: "bg-orange" },
  { name: "JavaScript (ES6+)", dot: "bg-orange" },
  { name: "Framer Motion", dot: "bg-orange" },
  { name: "Node.js", dot: "bg-purple-500" },
  { name: "Express.js", dot: "bg-purple-500" },
  { name: "Python", dot: "bg-purple-500" },
  { name: "FastAPI", dot: "bg-purple-500" },
  { name: "PostgreSQL", dot: "bg-emerald-500" },
  { name: "Supabase", dot: "bg-emerald-500" },
  { name: "MongoDB", dot: "bg-emerald-500" },
  { name: "Figma", dot: "bg-blue-500" },
  { name: "Git & GitHub", dot: "bg-blue-500" },
]

export function TechStackGrid() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-orange uppercase tracking-widest">
            Technologies & Tools
          </span>
          <h3 className="text-xl font-bold text-navy font-heading mt-0.5">
            My Tech Stack
          </h3>
        </div>
        <p className="text-xs text-muted max-w-sm">
          Core tools and frameworks I work with to build modern applications.
        </p>
      </div>

      {/* Clean, minimalist pill cloud */}
      <div className="flex flex-wrap items-center gap-2.5">
        {techStackItems.map((tech) => (
          <div
            key={tech.name}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/70 text-xs font-semibold text-navy shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-sm hover:border-orange/40 hover:text-orange hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${tech.dot}`} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
