'use client'
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { useRouter } from 'next/navigation';

const CurrentUser = ({ currentUser, setCurrentUser }) => {
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
        router.push('/login');
    }
    return (
        <div className='flex justify-center items-center gap-[25px]'>
            <div className='flex justify-center items-center gap-[5px] hover:bg-[#E0E3EC] p-[5px] rounded-[10px]'>
                <RxAvatar className='h-[40px] w-[40px] rounded-[50%] text-[#586380]' />
                <div onClick={() => router.push('/profile')} className='text-[#586380] font-bold'>{currentUser?.username}</div>
            </div>
            <button onClick={handleLogOut} className='py-[10px] px-[15px] justify-center items-center bg-[#FFCD1F] hover:bg-[#FFDA56] text-[#000000] rounded-[10px]'>Log out</button>
        </div>
    )
}

export default CurrentUser