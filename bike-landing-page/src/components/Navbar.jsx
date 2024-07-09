import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faM } from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/images/logo.svg'
import { useState } from "react"
import ShopCard from "./ShopCard"


function Navbar(){
  //Sidebar mechanism
    const [isActive, setIsActive] = useState(false);
    console.log(isActive)
    function handleMenuClick(){
        setIsActive(!isActive)
        if (isActive == true && openShop == true) {
          setOpenShop(openShop == false)
        }
        console.log("The menu is " + isActive)
        console.log("Tne shop is " + openShop)
        Sidebar(isActive);
    }

  //Shop Button Mechanism
    const [openShop, setOpenShop] = useState(false);
    function handleShopClick(){
        setOpenShop(!openShop)
      
    }

    return (
      <>
      
        <nav className="z-50 fixed font-inter w-full p-8 h-12 shadow-xl bg-white">
          <div className='flex justify-around items-center h-full w-full 2xl:px-1 md:px-1 phone:px-2 align-middle'>
            <div className='flex justify-between gap-12 items-center'>
              <div>
                  <div className='flex items-center'>
                    <div className='xl:invisible lg:invisible md:invisible sm:visible phone:visible'>
                      <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} className={isActive ? 'text-yellow-400 animate-onespinonly' : 'text-black animate-backspinonly'} />
                    </div>
                      <img src={logo} alt='logo' className='h-12 w-10'></img>
                    </div>
                  </div>
              <div>
                <ul className='flex gap-12 xl:visible md:visible lg:visible phone:invisible'>
                  <li className=' hover:underline decoration-yellow-400 underline-offset-4'><a href="#bike">Bikes</a></li>
                  <li className=' hover:underline decoration-yellow-400 underline-offset-4'>Accessories</li>
                  <li className=' hover:underline decoration-yellow-400 underline-offset-4'>About Us</li>
                </ul>
              </div>
            </div>
  
            <div className='flex items-center gap-12 justify-betweenlg:visible xl:visible md:visible sm:invisible phone:invisible'>
              <button></button>
              <FontAwesomeIcon icon={faUser} className='hover:text-yellow-500 hover:animate-ping' />
                <div className="flex">
                  <FontAwesomeIcon icon={faCartShopping} className='hover:text-yellow-500 hover:animate-ping' onClick={handleShopClick} />
                  <div className='relative right-2 -bottom-2 h-5 w-1 py-1 border-2 border-white px-2 text-[7px] text-white rounded-[50%] animate-bounce bg-red-600'>1</div>
                </div>
              <FontAwesomeIcon icon={faMoon} className='hover:text-yellow-500 hover:animate-ping' />
            </div>
          </div>
          
          <div className={!isActive ? 'w-[30%] bg-white sm:hidden text-white duration-500 ease-in transform -translate-x-[400px] -left-[300px] pt-20 relative top-8 lg:invisible xl:invisible' : 'lg:invisible xl:invisible right-[50px] transform translate-x-4 ease-in duration-500 relative top-8 pt-20 right w-[30%] shadow-lg  h-screen bg-gray-400 text-white'}>
                <ul className='px-4 right-0'>
                    <li className='mb-4'>Bikes</li>
                    <li className='mb-4'>Accessories</li>
                    <li className='mb-4'>About Us</li>
                    <li className='mb-4'>Account</li>
                    <li className='mb-4' onClick={handleShopClick}>Cart</li>
                    <li className='mb-4'>Dark Mode</li>
                </ul>
            </div>
            <div className={openShop ? 'bg-slate-50 border-[1px] absolute -top-[288px] left-[45%] h-[100vw] w-[35%] lg:left-[70%] lg:w-[30%] md:top-[64px] md:w-[60%] md:left-[40%] phone:w-[80%] phone:top-[64px] pt-8 phone:left-[20%] phone:h-[700px]' : 'bg-red-400 relative -top-[288px] left-[200%] h-[100vw] w-[350px]'}>
              <div className="flex flex-col justify-start gap-4 items-center relative h-[90%] bg-slate-50">
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>
              <div>
                <button className="h-[70px] w-full relative bg-yellow-300">Buy Now</button>
              </div>
            </div>
        </nav> 
        
        

        
      </>
    )
  }

  export default Navbar