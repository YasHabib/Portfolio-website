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
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a Mechanical Engineer switched career into Software Development. I specilize in building backend applications using .NET Core such as using Entity Frameworks, WPF, and React.js to build websites and more. 
                Currently I am focused on improving my skills further into .NET development, React.js and Python.</p>
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