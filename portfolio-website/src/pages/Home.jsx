import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div name='home' className=' bg-[#0D0C4B] w-full h-screen'>
        <Navbar/>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
            <p className='text-amber-700 text-2xl'>My name is,</p>
            <p className='text-4xl font-bold text-[#ccd6f6]'>Yasin Habib.</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <br></br>
            <div>
                <Link to='/projects'>
                    <button className=' text-gray-100 group border-2 px-5 py-3 my-2 flex items-center hover:bg-amber-700 hover:border-amber-700' >
                        View Projects <span className='group-hover:ml-5 duration-300'><HiArrowNarrowRight className='ml-1'/></span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home