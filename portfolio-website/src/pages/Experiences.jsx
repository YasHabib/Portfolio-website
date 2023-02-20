import React from 'react';
import CSharp from '../assets/c#.png'
import NetCore from '../assets/netCore.png'
import SQL from '../assets/sql.png'
import ReactJS from '../assets/reactjs.png'
import Python from '../assets/python.png'
import Navbar from '../components/Navbar'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';



function Experiences() {
  return (
    <div name='technologies' className='w-full h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div>
                    <text className='text-4xl py-4 font-bold inline border-b-4 border-amber-700'>Technologies</text>
                    <p className='py-9'>These are the technologies I have worked with. 
                    <br/> Click on a framwork/language to see associated projects which have been built or in-progress</p>
                </div>

                {/* List of languages or frameworks */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-15 mx-auto' src={CSharp} alt="C#"/>
                        <text className='my-4'>C#</text>
                    </div>

                    <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-15 mx-auto' src={NetCore} alt=".NetCore"/>
                        <text className='my-4 group-hover:hidden duration-300'>.NET Core</text>
                        <Link to='/.netcore'>
                            <button className='hidden group-hover:flex duration-300 text-gray-100 border-3 my-1 items-center hover:bg-amber-700 mx-auto' >
                                View Projects <HiArrowNarrowRight className='ml-2'/>
                            </button>
                        </Link>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-15 mx-auto' src={SQL} alt="SQL"/>
                        <text className='my-4'>SQL</text>
                    </div>

                    <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<<<<<<< HEAD
                        <img className='w-15 mx-auto' src={ReactJS} alt=".NetCore"/>
=======
                        <img className='w-15 mx-auto' src={ReactJS} alt="reactjs"/>
>>>>>>> development
                        <text className='my-4 group-hover:hidden duration-300'>React.js</text>
                        <Link to='/reactjs'>
                            <button className='hidden group-hover:flex duration-300 text-gray-100 border-3 my-1 items-center hover:bg-amber-700 mx-auto' >
                                View Projects <HiArrowNarrowRight className='ml-2'/>
                            </button>
                        </Link>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-15 mx-auto' src={Python} alt="Python"/>
                        <text className='my-4'>Python</text>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Experiences