import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[140px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-amber-700'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                {/* Sections */}

                <div className='sm:text-right text-3xl font-bold'>
                    <p>Pofessional life</p>
                </div>
                <div>
                <p> I am passionate about building softwares and solve problems. 
                    I have worked as a IT Project Coordinator and as a Backend Developer, 
                    over-all I have worked on around 18 different projects in healthcare, on-demand service, social media, GIS, Firmware etc.</p>  
                </div>

                <div className='sm:text-right text-3xl font-bold'>
                    <p>Hobbies</p>
                </div>
                <div>
                    <p> I love to cook, grow house plants such as Golden Pothos, Avocado etc and traveling. 
                        I enjoy outdoor activities and indoor sports such as badminton and indoor soccer. In my free-time, I usually play console games, go for a run or exercise.
                    </p>  
                </div>

            </div>
        </div>
    </div>
    

  )
}

export default About