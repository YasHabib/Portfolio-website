import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className=' bg-[#0D0C4B] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
            <p>My name is,</p>
            <h1>Yasin Habib <h2>I am a Full Stack Developer.</h2></h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <br></br>
            <div>
                <button className=' text-gray-100 group border-2 px-5 py-3 my-2 flex items-center hover:bg-amber-700 hover:border-amber-700' >
                    View Projects <span className='group-hover:ml-5 duration-300'><HiArrowNarrowRight className='ml-1'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home