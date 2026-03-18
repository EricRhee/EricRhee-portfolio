export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-zinc-700 bg-white/5 backdrop-blur-sm p-6 ${className}`}>
      {children}
    </div>
  )
}