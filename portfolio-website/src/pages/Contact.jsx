import React from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen text-gray-300 bg-[#0D0C4B]'>
        <Navbar/>
        <div className='flex justify-center items-center py-[150px]'>
            <form method='POST' action="https://getform.io/f/2dfdad3b-5c87-449c-9197-b7dbe121f7d6" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-amber-700'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form or send me an email at yasin_habib@outlook.com</p>
                </div>
                <input type={'Text'} placeholder='Name' name='name' className='bg-[#ccd6f6] text-black'/>
                <input className='my-4 p-2 bg-[#ccd6f6] text-black' type={'Email'} name='email' placeholder='Email'/>
                <textarea className='bg-[#ccd6f6] p-2 text-black' name='message' rows={"10"} placeholder='Message'></textarea>  
                <button className='text-white border-2 hover:bg-amber-700 hover:border-amber-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>           
            </form>
        </div>
    </div>
  )
}

export default Contact