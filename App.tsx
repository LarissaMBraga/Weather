import React, { useState } from 'react'
import Home from './pages/Home'
import Days from './pages/Days'
import Monthly from './pages/Monthly'
import { motion, AnimatePresence } from 'framer-motion'

export default function App(){
  const [tab, setTab] = useState<'home'|'days'|'monthly'>('home')
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-indigo-700 text-white flex flex-col">
      <div className="flex-1 container mx-auto p-4">
        <AnimatePresence exitBeforeEnter>
          {tab === 'home' && <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Home/></motion.div>}
          {tab === 'days' && <motion.div key="days" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Days/></motion.div>}
          {tab === 'monthly' && <motion.div key="monthly" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Monthly/></motion.div>}
        </AnimatePresence>
      </div>

      <footer className="h-20 bg-white/10 backdrop-blur-md flex items-center justify-around">
        <button onClick={()=>setTab('home')} className="flex flex-col items-center">
          <span>🏠</span>
          <small>Hoje</small>
        </button>
        <button onClick={()=>setTab('days')} className="flex flex-col items-center">
          <span>📅</span>
          <small>Dias</small>
        </button>
        <button onClick={()=>setTab('monthly')} className="flex flex-col items-center">
          <span>🗓️</span>
          <small>Mensal</small>
        </button>
      </footer>
    </div>
  )
}
