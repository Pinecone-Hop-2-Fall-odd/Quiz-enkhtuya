"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const quizDesc = () => {
    const router = useRouter();

  return (
    <div className='flex min-h-screen w-full bg-[#f6f7fb] justify-center items-center p-[20px] gap-[10px]'>
        <h1>Random1</h1>
        <button onClick={() => router.push('/quiz')} className='p-[10px] bg-[#FFCD1F]'>start quiz</button>
    </div>
  )
}

export default quizDesc