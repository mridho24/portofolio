const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about", active: false },
  { label: "Services", href: "#services", active: false },
]

export function Footer() {
  return (
    <footer className="bg-navy py-10">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white font-heading"
        >
          Ridho
        </a>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "text-sm font-medium text-orange"
                    : "text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-orange"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
