import { useState } from 'react'
import reactLogo from './assets/react.svg'
import user from '../public/images/user-solid.svg'
import cart from '../public/images/cart-shopping-solid.svg'
import logo from '../public/images/logo.svg'
import moon from '../public/images/moon-solid.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faM } from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import './App.css'

function App() {
  return (
    <>
      <nav className="font-inter fixed w-full p-8 h-12 shadow-xl bg-[#00000]">
        <div className='flex justify-around items-center h-full w-full 2xl:px-1 md:px-1 phone:px-2 align-middle'>
          <div className='flex justify-between gap-12 items-center'>
            <div>
                <div className='flex items-center'>
                  <div className='xl:invisible lg:invisible md:invisible sm:visible phone:visible'>
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                    <img src={logo} alt='logo' className='h-12 w-10'></img>
                  </div>
                </div>
            <div>
              <ul className='flex gap-12 xl:visible md:visible lg:visible phone:invisible'>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>Bikes</li>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>Accessories</li>
                <li className=' hover:underline decoration-yellow-400 underline-offset-4'>About Us</li>
              </ul>
            </div>
          </div>

          <div className='flex items-center gap-12 justify-betweenlg:visible xl:visible md:visible sm:invisible phone:invisible'>
            <button></button>
            <FontAwesomeIcon icon={faUser} className='hover:text-yellow-500 hover:animate-ping' />
              <div className="flex">
                <FontAwesomeIcon icon={faCartShopping} className='hover:text-yellow-500 hover:animate-ping' />
                <div className='relative right-2 -bottom-2 h-5 w-1 py-1 border-2 border-white px-2 text-[7px] text-white rounded-[50%] animate-bounce bg-red-600'>1</div>
              </div>
            <FontAwesomeIcon icon={faMoon} className='hover:text-yellow-500 hover:animate-ping' />
          </div>
        </div>
      </nav> 
    </>
  )
}

export default App
