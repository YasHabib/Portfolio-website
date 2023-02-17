import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[100px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-amber-700'>About</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About