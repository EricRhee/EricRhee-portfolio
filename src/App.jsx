import './App.css'
import { motion } from "framer-motion"
import Header from "./Header"
import Card from "./Card"
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa"

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

// ── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: "Company Name",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    location: "Newport Beach, CA",
    bullets: [
      "Built and maintained scalable web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-impact features on schedule",
      "Improved application performance by 30% through targeted code optimization",
    ],
  },
  {
    company: "Previous Company",
    role: "Frontend Developer",
    period: "Jun 2022 – Dec 2023",
    location: "Remote",
    bullets: [
      "Developed responsive UI components with React and Tailwind CSS",
      "Integrated REST APIs and managed client-side state with Redux",
      "Achieved 85% test coverage by writing unit and integration tests",
    ],
  },
]

const projects = [
  {
    name: "Project Alpha",
    description:
      "A full-stack task management app with real-time collaboration, drag-and-drop boards, and team notifications.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    name: "Project Beta",
    description:
      "Image classification model deployed as a REST API, capable of identifying objects across 100+ categories.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    github: "https://github.com",
    live: null,
  },
  {
    name: "Project Gamma",
    description:
      "Mobile-first e-commerce platform with Stripe payment integration, product CMS, and order tracking.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

// ── Component ───────────────────────────────────────────────────────────────

export default function App() {
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
              <div className="flex flex-col gap-3">
                <motion.p variants={heroItem} className="text-lg text-zinc-400">
                  Hello, I'm
                </motion.p>
                <motion.h1 variants={heroItem} className="text-5xl font-bold text-indigo-400">
                  Eric Rhee
                </motion.h1>
                <motion.p variants={heroItem} className="text-xl text-zinc-300">
                  Software Engineer
                </motion.p>
                <motion.p variants={heroItem} className="text-zinc-400 max-w-md leading-relaxed">
                  Passionate about building clean, performant web applications.
                  Currently open to new opportunities.
                </motion.p>

                <motion.div variants={heroItem} className="flex gap-5 mt-1">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={26} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin size={26} />
                    <span>LinkedIn</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </Card>
        </section>

        {/* ── About Me ── */}
        <motion.section
          id="about"
          className="w-full max-w-4xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            About Me
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Card>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-300 text-base leading-relaxed">
                  I'm a software engineer based in Newport Beach, CA with a passion for creating
                  intuitive and efficient digital experiences. I enjoy solving complex problems and
                  turning ideas into polished products that people love to use.
                </p>
                <p className="text-zinc-300 text-base leading-relaxed">
                  When I'm not coding, you can find me exploring the Southern California coast,
                  keeping up with the latest in tech, or working on side projects that push my
                  skills in new directions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "Git",
                  ].map((skill) => (
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
            </Card>
          </motion.div>
        </motion.section>

        {/* ── Experience ── */}
        <motion.section
          id="experience"
          className="w-full max-w-4xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
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
          className="w-full max-w-4xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-indigo-400 mb-5">
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="flex flex-col gap-3 h-full">
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
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </motion.a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  )
}
