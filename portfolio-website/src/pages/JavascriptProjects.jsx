import React from 'react'
import Navbar from '../components/Navbar'
import Weather from '../assets/Weather.png'


function NetCoreProjects() {
  return (
    <div name='netCoreProjects' className='w-full md:h-screen text-gray-300 bg-[#0D0C4B] overflow-y-auto'>
        <Navbar/>
        {/* Containers */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='h-[80px]'></div>
            <div className='pb-8'>
                <text className='text-4xl font-bold inline border-b-4 border-amber-700'>React.js</text><br/>
                <p className='py-6'>Check out some of my recent JavaScript projects. <br/>
                To look at the code, please hover over the image and click the github link</p>
            </div>


            {/* Project: Weather app*/}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y'>
                <div style={{backgroundImage: `url(${Weather})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather App
                        </span>
                        <div>
                            <a href='https://github.com/YasHabib/Weather-App/tree/development' target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                            {/* <a href='/'>
                                <button></button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Name:</b> Weather App
                        <br/>
                        <b>Description:</b> This web-application uses Open-Mateo weather api to fetch weather data based on the latiude, longitude and timezone. Location is auto detected as long as the browser has permission to allow your location.
                    </p>
                </div>
            </div>
            {/* End of Weather app */}

            <br/><br/>

            

        </div>
    </div>
  )
}

export default NetCoreProjects