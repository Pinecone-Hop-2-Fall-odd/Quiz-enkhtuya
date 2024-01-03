'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { RxAvatar } from "react-icons/rx";
import { AiFillFlag } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";

const profile = () => {
    const router = useRouter();
    return (
        <div className='bg-[#f4f5f9] min-h-screen min-w-screen flex flex-col justify-center items-center'>
            {/* <h1 className='font-bold text-[30px] '>Edit Profile</h1> */}
            <div className='bg-[#FFFFFF] p-[30px] h-[80%] w-[70%] rounded-[20px] flex flex-col gap-y-[35px]'>
                <div className='flex gap-[20px] p-[10px] justify-around items-center'>
                    <RxAvatar className='h-[150px] w-[150px] rounded-[50%] text-[#586380]' />
                    <>
                        <div className='flex gap-[10px] justify-center items-center'>
                            <AiFillFlag className='h-[40px] w-[40px]' />
                            <div>
                                <h1 className='font-bold text-[20px]'>2</h1>
                                <h1 className='text-[#61687e]'>Quiz Passed</h1>
                            </div>
                        </div>
                        <div className='flex gap-[10px] justify-center items-center'>
                            <MdCreateNewFolder className='h-[40px] w-[40px]' />
                            <div>
                                <h1 className='font-bold text-[20px]'>3</h1>
                                <h1 className='text-[#61687e]'>Quiz Created</h1>
                            </div>
                        </div>
                    </>
                </div>
                <div className='flex flex-col gap-[20px] p-[20px] border-2 rounded-[20px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-[20px]'>Personal Info</h1>
                        <button className='p-[5px] border-2'>Edit</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1><span className='text-[#61687e]'>username:</span> dukaDD</h1>
                        <h1><span className='text-[#61687e]'>Email:</span> dulamsurenD@gmail.com</h1>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] p-[20px] border-2 rounded-[20px] overflow-auto'>
                    <h1 className='font-bold text-[20px]'>Completed Quizzes</h1>
                    <div className='flex flex-col justify-center items-start p-[20px] gap-[10px] w-[250px] border-2 rounded-[20px]'>
                        <h1 className='font-bold ml-[5px]'>subjectName</h1>
                        <h6 className='rounded-[30px] bg-[#ecefff] py-[5px] px-[10px]'>quiz.length questions</h6>
                        <div className='flex justify-between items-center gap-[10px] w-[100%]'>
                            <div className='flex items-center gap-[10px]'>
                                <RxAvatar className='h-[40px] w-[40px] rounded-[50%] ' />
                                <p>creator</p>
                            </div>
                            <button className='bg-[#FFCD1F] p-[10px]'>start</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pr-[10px]'>
                    <button onClick={() => router.push('/')} className='bg-[#2e3856] text-[#FFFFFF] p-[10px] ml-[10px] rounded-[6px] hover:bg-[#515972]'>Go Back to Homepage</button>
                    <button className='bg-[#2e3856] text-[#FFFFFF] p-[10px] mr-[10px] rounded-[6px] hover:bg-[#515972]'>Delete Account X</button>
                </div>
            </div>
        </div>
    )
}
//onClick={() => handleClick(val._id)}
export default profile