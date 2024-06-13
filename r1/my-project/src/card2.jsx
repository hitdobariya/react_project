import React from 'react'
import {FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Cards2 = () => {
  return (
    <>
      <div className='w-64 h-[310px] font-mono mt-10 shadow-xl shadow-slate-400'>
        <img className=' w-64 rounded-md h-40' src="https://grancast.in/wp-content/uploads/2023/05/IronRotiTawaPan-Grancast-Image3.png" alt="" />
        <h3 className='text-[15px] m-2 font-bold'>Culinary</h3>
        <h1 className='text-[12px] m-2 font-bold'>Cheat Day Inspirations</h1>
        <p className='text-[10px] m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestias.</p>
        <button className='bg-purple-800 text-white w-16 h-8 text-[10px] rounded-md m-2'>Button</button>
      </div>
    </>
  )
}
export {Cards2}

const Card2 = (props) => {
  return (
    <>
      <div className='w-64 h-[310px] text-center font-mono mt-10 shadow-xl shadow-slate-400'>
            <img className='w-64 rounded-md m-2' src="https://www.asianpaints.com/content/dam/Colourpro-new/Article_Page/Arun-Reddy-Hyderabad/Reddy-residence-11.jpg" alt="" />
            <h1 className='font-bold m-2 text-[20px]'>{props.name}</h1>
            <h3 className='font-bold m-2 text-[12px]' >{props.heding}</h3>
            <p className="text-[10px] m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quo.</p>
        <div className='flex justify-center m-2'>
        <FaLinkedinIn className='mx-2 text-blue-800'/>
        <FaTwitter className='mx-2 text-blue-600'/>
        <FaFacebookF className='mx-2 text-blue-800'/>
        </div>
      </div>
    </>
  )
}
export default Card2