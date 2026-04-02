import { useState, useEffect } from 'react'
import './App.css'
import { motion, AnimatePresence } from "framer-motion"
import ReactGA from 'react-ga4'
import Header from "./Header"
import Card from "./Card"
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaDownload, FaEnvelope, FaArrowUp } from "react-icons/fa"

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const heroImage = {
  hidden: { opacity: 0, scale: 0.78 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
}

const TITLES = ["Software Engineer", "Full-Stack Dev"]

// ── Data ────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: "Languages",
    skills: ["Java", "C", "C++", "C#", "Python", "JavaScript", "Kotlin", "Ruby", "Rust", "OCaml", "Swift"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Node.js", "Express", "Firebase", "Android SDK"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Linux", "PSQL", "MongoDB", "Godot", "Android Studio", "Roblox Studio"],
  },
]

const education = [
  {
    school: "University of Maryland, College Park",
    degree: "Bachelor of Science, Computer Science",
    period: "Aug 2021 – May 2025",
    courses: [
      "Object-Oriented Programming I/II", "Algorithms", "Data Structures",
      "Database Design", "Web Application Development", "Game Programming",
      "Programming Handheld Systems", "Introduction to Parallel Computing",
      "Discrete Structures", "C Programming", "Intro to Human Computer Interactions",
    ],
  },
]

const experiences = [
  {
    company: "The Coder School",
    role: "Coding Instructor Intern",
    period: "May 2020 – Aug 2020",
    location: "Yorba Linda, CA",
    bullets: [
      "Led engaging teaching sessions for high school students preparing for the AP Computer Science exam, covering foundational Java concepts and core data structures.",
      "Developed customized lesson plans in Java and Rust to enhance student understanding and confidence in programming fundamentals.",
      "Fostered a collaborative learning environment by introducing Git-based workflows, encouraging students to explore problem-solving techniques and critical thinking skills.",
    ],
  },
]

// preview: path under /public — supports .jpg/.png/.gif/.mp4/.webm
// Drop files into public/images/projects/ and set the path here.
const projects = [
  {
    name: "KeepItBurning Game",
    description:
      "Ranked #8 overall in Alberta Slow Jam #3. A 2D survival game built in Godot with dynamic environmental hazards, resource gathering, and increasing difficulty.",
    tech: ["Godot", "GDScript"],
    github: "https://github.com/EricRhee/Keep-It-Burning",
    live: null,
    preview: "/images/projects/keepitburning.gif",
  },
  {
    name: "Anim Blitz",
    description:
      "Competitive multiplayer battler on Roblox featuring unique characters, strategic combat, progression systems, and a secure client–server architecture.",
    tech: ["Lua", "Roblox Studio"],
    github: "https://github.com/EricRhee/AnimBlitz-Game",
    live: null,
    preview: "/images/projects/animblitz.gif",
  },
  {
    name: "Ecommerce Portal",
    description:
      "Full-stack e-commerce app with product browsing, MongoDB-backed user data, secure authentication, and a streamlined checkout flow.",
    tech: ["JavaScript", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/EricRhee/MarketWebsite",
    live: null,
    preview: "/images/projects/ecommerce.webm",
  },
  {
    name: "Anonymous Confession Diary",
    description:
      "Android app for anonymous confessions with Firebase Authentication, real-time database sync, and a responsive UI built for high school and college-age users.",
    tech: ["Android Studio", "Firebase", "Kotlin"],
    github: "https://github.com/EricRhee/OpenDiary-app",
    live: null,
    preview: "/images/projects/confession.gif",
  },
]

const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src ?? "")

// ── Component ───────────────────────────────────────────────────────────────

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [titleIdx, setTitleIdx] = useState(0)
  const [typed, setTyped] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const full = TITLES[titleIdx]
    if (!deleting && typed === full) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && typed === "") {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
      return
    }
    const speed = deleting ? 45 : 90
    const t = setTimeout(() => {
      setTyped(deleting ? full.slice(0, typed.length - 1) : full.slice(0, typed.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [typed, deleting, titleIdx])

  return (
    <div className="textured min-h-screen w-screen bg-gradient-to-r from-indigo-900 via-black to-zinc-900 bg-[length:200%_200%] animate-gradient text-white">
      <Header />

      <div className="pt-[90px] flex flex-col items-center gap-16 pb-24 px-4">

        {/* ── Hero ── */}
        <section id="hero" className="w-full max-w-4xl">
          <Card>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10 py-4"
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              {/* Profile image */}
              <motion.div variants={heroImage} className="relative w-44 h-44 shrink-0">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute inset-[3px] rounded-full bg-zinc-900">
                  <img
                    src="/images/prof.jpg"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text + links */}
              <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                <motion.p variants={heroItem} className="text-lg text-zinc-400">
                  Hello, I'm
                </motion.p>
                <motion.h1 variants={heroItem} className="text-5xl font-bold text-indigo-400">
                  Eric Rhee
                </motion.h1>
                <motion.p variants={heroItem} className="text-xl text-zinc-300 h-7 flex items-center gap-1">
                  {typed}
                  <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
                </motion.p>
<motion.p variants={heroItem} className="text-zinc-400 max-w-md leading-relaxed">
                  Early-career software engineer with a solid foundation in data structures,
                  algorithms, and systems. Eager to contribute to high-throughput, low-latency
                  applications. Currently open to new opportunities.
                </motion.p>

                <motion.div variants={heroItem} className="flex gap-5 mt-1 justify-center">
                  <motion.a
                    href="https://github.com/EricRhee"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => ReactGA.event({ category: 'Social', action: 'click', label: 'GitHub' })}
                  >
                    <FaGithub size={26} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ericrhee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => ReactGA.event({ category: 'Social', action: 'click', label: 'LinkedIn' })}
                  >
                    <FaLinkedin size={26} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors" style={{ color: '#000000' }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => ReactGA.event({ category: 'Resume', action: 'download' })}
                  >
                    <FaDownload size={14} />
                    <span>Resume</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </Card>
        </section>

        {/* ── About Me ── */}
        <motion.section
          id="about"
          className="w-full max-w-4xl scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => ReactGA.event({ category: 'Section', action: 'view', label: 'About' })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            About Me
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Card>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-300 text-base leading-relaxed">
                  I'm an early-career software engineer and University of Maryland CS graduate with
                  experience across systems programming, mobile, web, and game development. Proficient
                  in C++, Java, Python, and C, with solid knowledge of data structures, algorithms,
                  and Linux environments.
                </p>
                <p className="text-zinc-300 text-base leading-relaxed">
                  Hands-on with Git, Node.js, and PSQL, and eager to contribute to low-latency,
                  high-throughput systems. I love building things — from competitive multiplayer
                  games to full-stack web apps.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {skillCategories.map(({ label, skills }) => (
                    <div key={label}>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">{label}</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-indigo-900/50 border border-indigo-700 rounded-full text-indigo-300 text-sm cursor-default"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(79,70,229,0.4)",
                              borderColor: "rgba(129,140,248,0.8)",
                              color: "#c7d2fe",
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        {/* ── Education ── */}
        <motion.section
          id="education"
          className="w-full max-w-4xl scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => ReactGA.event({ category: 'Section', action: 'view', label: 'Education' })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            Education
          </motion.h2>
          {education.map((edu, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                    <p className="text-indigo-400 font-medium">{edu.degree}</p>
                  </div>
                  <p className="text-zinc-400 text-sm shrink-0">{edu.period}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <span key={c} className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Experience ── */}
        <motion.section
          id="experience"
          className="w-full max-w-4xl scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          onViewportEnter={() => ReactGA.event({ category: 'Section', action: 'view', label: 'Experience' })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            Experience
          </motion.h2>
          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="md:text-right shrink-0">
                      <p className="text-zinc-400 text-sm">{exp.period}</p>
                      <p className="text-zinc-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-zinc-300 text-sm">
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Projects ── */}
        <motion.section
          id="projects"
          className="w-full max-w-4xl scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          onViewportEnter={() => ReactGA.event({ category: 'Section', action: 'view', label: 'Projects' })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-700 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col h-full group"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(99,102,241,0.55)",
                  boxShadow: "0 12px 36px rgba(99,102,241,0.18)",
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Preview thumbnail */}
                <div className="h-40 overflow-hidden bg-zinc-800 shrink-0">
                  {proj.preview && isVideo(proj.preview) ? (
                    <video
                      src={proj.preview}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : proj.preview ? (
                    <img
                      src={proj.preview}
                      alt={`${proj.name} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 via-zinc-800 to-zinc-900 flex items-center justify-center">
                      <span className="text-zinc-600 text-xs">No preview</span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-semibold text-white">{proj.name}</h3>
                  <p className="text-zinc-400 text-sm flex-1 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <motion.span
                        key={t}
                        className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs cursor-default"
                        whileHover={{
                          backgroundColor: "rgba(39,39,42,0.9)",
                          borderColor: "rgba(99,102,241,0.5)",
                          color: "#a5b4fc",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-1">
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => ReactGA.event({ category: 'Project', action: 'view_code', label: proj.name })}
                    >
                      <FaGithub size={15} /> Code
                    </motion.a>
                    {proj.live && (
                      <motion.a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => ReactGA.event({ category: 'Project', action: 'view_live', label: proj.name })}
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Contact ── */}
        <motion.section
          id="contact"
          className="w-full max-w-4xl scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => ReactGA.event({ category: 'Section', action: 'view', label: 'Contact' })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            Contact
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Card>
              <div className="flex flex-col items-center gap-6 py-4 text-center">
                <p className="text-zinc-300 text-base max-w-md leading-relaxed">
                  I'm actively looking for new opportunities. Whether you have a question,
                  a role in mind, or just want to connect — my inbox is open.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="mailto:ericrhee03@gmail.com"
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors" style={{ color: '#000000' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => ReactGA.event({ category: 'Contact', action: 'email_click' })}
                  >
                    <FaEnvelope size={16} />
                    ericrhee03@gmail.com
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ericrhee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-indigo-500 text-indigo-400 hover:bg-indigo-900/40 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => ReactGA.event({ category: 'Contact', action: 'linkedin_click' })}
                  >
                    <FaLinkedin size={16} />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 bg-zinc-950/60 py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
          <p className="text-zinc-500 text-sm">© 2026 Eric Rhee. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href="https://github.com/EricRhee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ericrhee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a
              href="mailto:ericrhee03@gmail.com"
              aria-label="Email"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              <FaEnvelope size={16} /> Email
            </a>
          </div>
        </div>
      </footer>

      {/* ── Scroll to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
