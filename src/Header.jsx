import { useState } from "react"
import Clock from "./Clock"
import { GrStatusGoodSmall } from "react-icons/gr"
import { FaLocationArrow, FaBars, FaTimes } from "react-icons/fa"
import { IoAirplaneSharp } from "react-icons/io5"

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-40">
      <div className="mx-auto px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">

        {/* Status badges — left */}
        <div className="flex gap-3 items-center">
          <p className="flex items-center gap-2 text-white border px-3 py-1 text-sm whitespace-nowrap">
            <GrStatusGoodSmall className="text-green-400 drop-shadow-[0_0_6px_#4ade80]"/>
            Open To Work
          </p>
          <p className="text-white hidden xl:block">|</p>
          <p className="hidden xl:flex items-center gap-2 text-white text-sm whitespace-nowrap">
            <FaLocationArrow />
            Newport Beach, CA
          </p>
          <p className="text-white hidden xl:block">|</p>
          <p className="hidden xl:flex items-center gap-2 text-white text-sm whitespace-nowrap">
            <IoAirplaneSharp />
            Relocate OK
          </p>
        </div>

        {/* Nav — center, desktop only */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-zinc-400 hover:text-indigo-400 text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        {/* Placeholder to keep grid balanced on mobile */}
        <div className="lg:hidden" />

        {/* Clock + hamburger — right */}
        <div className="flex items-center gap-4 justify-end">
          <Clock />
          <button
            className="lg:hidden text-zinc-400 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col border-t border-zinc-800 bg-zinc-950/95">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-6 py-3 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800/50 text-sm transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
