import { motion } from "framer-motion"

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      className={`rounded-2xl border border-zinc-700 bg-white/5 backdrop-blur-sm p-6 ${className}`}
      whileHover={{
        y: -5,
        borderColor: "rgba(99,102,241,0.55)",
        boxShadow: "0 12px 36px rgba(99,102,241,0.18)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
