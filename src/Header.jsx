import Clock from "./Clock"
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import Lottie from "lottie-react"


export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-zinc-950/30 backdrop-blur-md border-b border-zinc-800">
      <div className=" mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className = "flex gap-4 items-center">
            <p className="flex items-center gap-2 text-white border px-4 py-1">
               <GrStatusGoodSmall className="text-green-400 drop-shadow-[0_0_6px_#4ade80]"/>
                Open To Work
            </p>
            <p className="text-white">
                |
            </p>
            <p className="flex items-center gap-2 text-white">
               <FaLocationArrow />
                Newport Beach, CA
            </p>
            <p className="text-white">
                |
            </p>
            <p className="flex items-center gap-2 text-white">
               <IoAirplaneSharp />
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