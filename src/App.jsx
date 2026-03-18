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

        <Card className="w-[50rem] h-[30rem] "> 
          <div className="h-full flex items-center px-8">
            <img 
              src="/images/prof.jpg" 
              alt="profile"
              className="w-60 h-60 rounded-full object-cover shrink-0 "
            />
          </div>
        </Card>
      </div>
    </div>
  )
}