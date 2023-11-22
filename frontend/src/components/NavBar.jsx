"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdOutlineScience } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaPaintbrush } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-[10%] w-full fixed justify-between items-center px-[5%] gap-[10px] bg-[#ffffff]'>
      <div className='flex min-h-[5%] w-full justify-between items-center px-[5%] pt-[20px] gap-[20px] bg-[#ffffff]'>
        <h1 className='text-[#206be5] font-bold text-[35px]'>Quiz</h1>
        <div className='flex items-center gap-[10px] bg-[#f6f7fb] h-[90%] w-[60%] rounded-[50px] p-[8px] pl-[10px]'>
          <IoIosSearch style={{ color: '#586380' }} />
          <input type='text' placeholder='Search by keyword or subject' className='border-none w-[85%] bg-[#f6f7fb]' />
        </div>
        <div className='flex gap-[15px] justify-center items-center'>
          <div className='flex justify-center items-center h-[40px] w-[40px] rounded-[50%] bg-[#4254ff]'>
            <IoAdd className='h-[25px] w-[25px] text-[#FFFFFF]' />
          </div>
          <button onClick={() => router.push('/login')} className='py-[10px] px-[15px] justify-center items-center text-[#586380] rounded-[10px] hover:bg-[#E0E3EC]'>Log in</button>
          <button onClick={() => router.push(`/signup`)} className='py-[10px] px-[15px] justify-center items-center bg-[#FFCD1F] hover:bg-[#FFDA56] text-[#000000] rounded-[10px]'>Sign up</button>
          {/* <img src='./avatar0.webp' className='h-[40px] w-[40px] rounded-[50%] border-[#e0e3ec] border-2' />
        <h3 className='text-[#e0e3ec]'>@mikeWazowski</h3> */}
        </div>
      </div>
      
      <div className='flex min-h-[5%] w-full justify-between items-center p-[10px] px-[5%] gap-[15px]'>
        <button className='flex flex-col justify-center items-center p-[5px]'>
          <AiFillHome className='h-[25px] w-[25px]' />
          <h4>Home</h4>
        </button>
        <button className='flex flex-col justify-center items-center p-[5px]'>
          <MdOutlineScience className='h-[25px] w-[25px]' />
          <h4>Science</h4>
        </button>
        <button className='flex flex-col justify-center items-center p-[5px]'>
          <FaPaintbrush className='h-[25px] w-[25px]' />
          <h4>Art & Humanities</h4>
        </button>
        <button className='flex flex-col justify-center items-center p-[5px]'>
          <BiConversation className='h-[25px] w-[25px]' />
          <h4>Social Science</h4>
        </button>
        <button className='flex flex-col justify-center items-center p-[5px]'>
          <IoLanguage className='h-[25px] w-[25px]' />
          <h4>Languages</h4>
        </button>
      </div>
    </div>
  )
}

export default NavBar