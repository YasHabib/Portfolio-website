import React from 'react'
import Navbar from '../components/Navbar'
import MKTFY from '../assets/MKTFY.png'
import Portfolio from '../assets/Portfolio.png'

function ReactjsProjects() {
  return (
    <div name='netCoreProjects' className='w-full md:h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        {/* Containers */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='h-[80px]'></div>
            <div className='pb-8'>
                <text className='text-4xl font-bold inline border-b-4 border-amber-700'>React.js</text><br/>
                <p className='py-6'>Check out some of my recent React.js projects. <br/>
                To look at the code, please hover over the image and click the github link</p>
            </div>


            {/* Project: MKTFY frontend */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y'>
                <div style={{backgroundImage: `url(${MKTFY})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            MarketForYou Frontend
                        </span>
                        <div>
                            <a href='https://github.com/YasHabib/Market_for_you_frontend/tree/development' target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                            {/* <a href='/'>
                                <button></button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Name:</b> MarketForYou Frontend
                        <br/>
                        <b>Description:</b> A frontend application of a E-commerce site using React.js. Currently in progress and will be connected to the RESTful APIs created in MarketForYou: Backend.
                    </p>
                </div>
            </div>
            {/* End of MKTFY backend */}

            <br/><br/>
            {/* Project: WPF Chat application */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${Portfolio})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My Portfolio
                        </span>
                        <div>
                            <a href='https://github.com/YasHabib/yashabib.github.io' target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                            {/* <a href='/'>
                                <button></button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Name:</b> My Portflio (this website)
                        <br/>
                        <b>Description:</b> Developed using React.js and Tailwind. React-router-dom was used to give it a multipage feel while keeping the advantages of a Single Page Application. GetForm was used to develop the contact form.
                    </p>
                </div>
            </div>
            {/* End of WPF Chat application */}

            

        </div>
    </div>
  )
}

export default ReactjsProjects