import Clock from "./Clock"

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-zinc-950/30 backdrop-blur-md border-b border-zinc-800">
      <div className=" mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className = "flex gap-4 items-center">
            <p className="text-white border px-4 py-1">
                Open To Work
            </p>
            <p className="text-white">
                |
            </p>
            <p className="text-white">
                Newport Beach, CA
            </p>
            <p className="text-white">
                |
            </p>
            <p className="text-white">
                Relocate OK
            </p>
        </div>
       

    

        <div >
          <Clock />
        </div>


      </div>
    </header>
  )
}