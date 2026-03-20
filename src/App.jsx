import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header"
import Card from "./Card"

export default function App() {
  return (
    <div className="textured min-h-screen w-screen bg-gradient-to-r from-indigo-900 via-black to-zinc-900 bg-[length:200%_200%] animate-gradient text-white">
      <Header />

      <div className="pt-[120px] flex flex-col items-center gap-6">

        <Card className="w-[50rem] h-[30rem]"> 
          <div className="h-full flex flex-col justify-center px-8">
            
            {/* text aligned left */}
            <div className="flex flex-col self-start text-left gap-0 mb-3 pl-3">
              <p className="text-[1.25rem]">Hello, I'm</p>
              <p className="text-[3rem] font-bold text-indigo-400">Eric Rhee</p>
            </div>

            {/* image below text */}
            <div className="relative w-60 h-60 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-[3px] rounded-full bg-zinc-900">
                <img 
                  src="/images/prof.jpg" 
                  alt="profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  )
}