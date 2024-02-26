import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from '../public/images/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <nav className="font-inter fixed w-full p-8 h-12 shadow-xl bg-red">
        <div className='flex justify-around items-center h-full w-full 2xl:px-1 md:px-1 phone:px-2 align-middle'>
          <div className='flex justify-between gap-12 items-center'>
            <div>
              <img src={logo} alt='logo' className='h-12 w-10'></img>
            </div>
            <div>
              <ul className='flex gap-12 xl:visible md:visible lg:visible phone:invisible'>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>Bikes</li>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>Accessories</li>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>About Us</li>
              </ul>
            </div>
          </div>
          <div>right</div>
        </div>
      </nav> 
    </>
  )
}

export default App
