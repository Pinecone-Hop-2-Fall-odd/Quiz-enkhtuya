"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
// Category
import { MdOutlineScience } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaPaintbrush } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const NavBar = ({ index, handleClick, setQuizData, initialData}) => {
  const router = useRouter();
  const search = (input) => {
    const filteredSearch = initialData.filter((quiz) => { return quiz.subjectName.toLowerCase().includes(input.toLowerCase())});
    setQuizData(filteredSearch); 
  }
  return (
    <div className='flex flex-col min-h-[10%] w-full fixed justify-between items-center px-[5%] gap-[10px] bg-[#ffffff]'>
      <div className='flex min-h-[5%] w-full justify-between items-center px-[5%] pt-[20px] gap-[20px] bg-[#ffffff]'>
        <h1 className='text-[#206be5] font-bold text-[35px]'>Quiz</h1>
        <div className='flex items-center gap-[10px] bg-[#f6f7fb] h-[90%] w-[60%] rounded-[50px] p-[8px] pl-[10px]'>
          <IoIosSearch style={{ color: '#586380' }} />
          <input type='text' placeholder='Search by keyword or subject' onKeyDown={(e) => { if(e.key === "Enter") return search}} 
          onChange={(e) => search(e.target.value)} className='w-[85%] bg-[#f6f7fb]' />
        </div>
        <div className='flex gap-[15px] justify-center items-center'>
          <div className='flex justify-center items-center h-[40px] w-[40px] rounded-[50%] bg-[#206be5] cursor-pointer'>
            <IoNotificationsOutline className='h-[25px] w-[25px] text-[#FFFFFF]' />
          </div>
          <button onClick={() => router.push('/login')} className='py-[10px] px-[15px] justify-center items-center text-[#586380] rounded-[10px] hover:bg-[#E0E3EC]'>Log in</button>
          <button onClick={() => router.push(`/signup`)} className='py-[10px] px-[15px] justify-center items-center bg-[#FFCD1F] hover:bg-[#FFDA56] text-[#000000] rounded-[10px]'>Sign up</button>
          {/* <img src='./avatar0.webp' className='h-[40px] w-[40px] rounded-[50%] border-[#e0e3ec] border-2' />
        <h3 className='text-[#e0e3ec]'>@mikeWazowski</h3> */}
        </div>
      </div>

      <div className='flex min-h-[5%] w-full justify-between items-center p-[10px] px-[5%] gap-[15px]'>
        {categories.map((category, idx) => (
          <button onClick={() => handleClick(idx, category.name)} key={idx} style={{ color: index === idx ? '#206be5' : '#586380' }} className='flex flex-col justify-center items-center p-[5px] text-[#586380]'>
            {category.icon}
            <h4>{category.name}</h4>
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavBar

const categories = [{ icon: <AiFillHome className='h-[25px] w-[25px]' />, name: 'Home' }, { icon: <MdOutlineScience className='h-[25px] w-[25px]' />, name: 'Science' },
{ icon: <FaPaintbrush className='h-[25px] w-[25px]' />, name: 'Art & Humanities' }, { icon: <BiConversation className='h-[25px] w-[25px]' />, name: 'Social science' },
{ icon: <IoLanguage className='h-[25px] w-[25px]' />, name: 'Languages' }, { icon: <BsThreeDots className='h-[25px] w-[25px]' />, name: 'Other' }];