import React from 'react'
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <div className='flex min-h-[5%] w-full fixed justify-center items-center gap-[20px] bg-[#ffffff]'>
      <h1 className='text-[#206be5] font-bold text-[30px]' style={{textShadow: '#ffbe58 1.5px -0.3px'}}>Quiz</h1>
      <div className='flex items-center gap-[10px] bg-[#f6f7fb] h-[90%] w-[60%] rounded-[50px] p-[8px] pl-[10px]'>
        <IoIosSearch style={{color: '#586380'}}/>
        <input type='text' placeholder='Search by keyword or subject' className='border-none w-[500px] bg-[#f6f7fb]'/>
      </div>
      <div>
        <img src='./avatar0.webp' className='h-[40px] w-[40px] rounded-[50%] border-[#e0e3ec] border-2'/>
      </div>
      <h3 className='text-[#e0e3ec]'>@mikeWazowski</h3>
    </div>
  )
}

export default NavBar