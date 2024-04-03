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
    <div className=''>
      <Navbar />
      <div className='pt-12'>
      <Hero />
      <Bikes />
      <Accessories />
      <About />
      </div>
    </div>
  )
}

export default App
