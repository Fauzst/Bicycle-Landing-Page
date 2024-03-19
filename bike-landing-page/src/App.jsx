import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bikes from './components/Bikes'
import Accessories from './components/Accessories'
import About from './components/About'
import Body from './components/Body'
import './App.css'




function App() {
  return (
    <div className='block h-[1000px]'>
      <Navbar />
      <Body />
      <Hero />
      <Bikes />
      <Accessories />
      <About />
    </div>
  )
}

export default App
