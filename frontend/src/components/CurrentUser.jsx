'use client'
import React from 'react'
import axios from 'axios';
import { RxAvatar } from "react-icons/rx";
import { useRouter } from 'next/navigation';
// import { UserDataContext } from '@/app/layout';
import { useEffect, useState, useContext } from 'react'

const CurrentUser = () => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(null)
    // const { token } = useContext(UserDataContext);
    const token = localStorage.getItem("token");
    const handleLogOut = () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
        router.push('/login');
    }
    const getCurrentUser = async () => {
        try { const { data } = await axios.get(`https://backend-one-blush-69.vercel.app/currentUser`, { headers: { "token": token } })
            setCurrentUser(data.data)
            console.log(data)
        } catch (err) { console.error(err) }
    }

    useEffect(() => {
        getCurrentUser();
        console.log('currentUser', token)
    }, [token])

    return (
        <div className='flex justify-center items-center gap-[25px]'>
            <div className='flex justify-center items-center gap-[5px] hover:bg-[#E0E3EC] p-[5px] rounded-[10px]'>
                <RxAvatar className='h-[40px] w-[40px] rounded-[50%] text-[#586380]' />
                <div onClick={() => router.push('/profile')} className='text-[#586380] font-bold'>{currentUser?.username}</div>
            </div>
            <button onClick={() => router.push('/createQuiz')} className='bg-[#206be5] p-[10px] rounded-[10px] text-[#FFFFFF]'>Create Quiz! </button>
            <button onClick={handleLogOut} className='py-[10px] px-[15px] justify-center items-center bg-[#FFCD1F] hover:bg-[#FFDA56] text-[#000000] rounded-[10px]'>Log out</button>
        </div>
    )
}

export default CurrentUser