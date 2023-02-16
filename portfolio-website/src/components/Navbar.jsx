import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

function Navbar() {
    const[nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '80px'}}/>
        </div>
        

        <div>
            {/* navbar menu */}
            <ul className='hidden md:flex justify-end'>
                <li className='text-amber-700'>Home</li>
                <li className='text-amber-700'>About</li>
                <li className='text-amber-700'>Experience</li>
                <li className='text-amber-700'>Projects</li>
                <li className='text-amber-700'>Contact</li>
            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {/* Hamburger menu */}
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* Mobile menu when hamber menu is clicked*/}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl text-amber-700'>Home</li>
                <li className='py-6 text-4xl text-amber-700'>About</li>
                <li className='py-6 text-4xl text-amber-700'>Experience</li>
                <li className='py-6 text-4xl text-amber-700'>Projects</li>
                <li className='py-6 text-4xl text-amber-700'>Contact</li>
            </ul>
        </div>


        {/* Social links/icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ui>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/yasin-habib/' target={'_blank'} >LinkedIn <FaLinkedin size={30}/> </a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-slate-800'>
                    <a className='flex justify-between items-center w-full' href='https://github.com/YasHabib?tab=repositories' target={'_blank'}>Github <FaGithub size={30}/> </a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full' href='/' target={'_blank'}>Email <HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full' href='/' target={'_blank'}>Resume <BsFillPersonLinesFill size={30}/> </a>
                </li>


            </ui>
        </div>
    </div>
  )
}

export default Navbar
