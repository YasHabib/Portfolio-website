import React from 'react'
import Navbar from '../components/Navbar'
import MKTFY from '../assets/MKTFY.png'
import MKTFYbackend from '../assets/E-commerce.png'
import ChatWPF from '../assets/chat.png'


function NetCoreProjects() {
  return (
    <div name='netCoreProjects' className='w-full md:h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        {/* Containers */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='h-[80px]'></div>
            <div className='pb-8'>
                <text className='text-4xl font-bold inline border-b-4 border-amber-700'>.NET Projects</text><br/>
                <p className='py-6'>Check out some of my recent .NET projects. <br/>
                To look at the code, please hover over the image and click the github link</p>
            </div>


            {/* Project: MKTFY backend */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y'>
                <div style={{backgroundImage: `url(${MKTFYbackend})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Entity Framework Core
                        </span>
                        <div>
                            <a href='https://github.com/YasHabib/MarketPlace_For_You' target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                            {/* <a href='/'>
                                <button></button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Name:</b> MarketForYou Backend
                        <br/>
                        <b>Description:</b> Backend application for an E-commerce site build using Entity Framework Core. This application performs complex CRUD operations and returns the endpoints as RESTful APIs using Swagger UI. 
                        Other services used are SendGrid for sending welcome email upon a user has registered in the system, and AWS for CI/CD and database storage.
                    </p>
                </div>
            </div>
            {/* End of MKTFY backend */}

            <br/><br/>
            {/* Project: WPF Chat application */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${ChatWPF})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Windows Platform Foundation
                        </span>
                        <div>
                            <a href='https://github.com/YasHabib/ChatApp-WPF/tree/development' target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                            {/* <a href='/'>
                                <button></button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Name:</b> ChittyChat
                        <br/>
                        <b>Description:</b> A Chat application using WPF.Core. No server is currently integrated or external APIs. This application currenly have some seeded data to do testing. 
                        As a user, you can send messages and it'll be displayed on the main window. 
                    </p>
                </div>
            </div>
            {/* End of WPF Chat application */}

            

        </div>
    </div>
  )
}

export default NetCoreProjects