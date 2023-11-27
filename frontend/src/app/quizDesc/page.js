"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import quizzes from '../data'

const quizDesc = () => {
  const router = useRouter();

  return (
    <div className='flex min-h-screen w-full bg-[#f6f7fb] justify-center items-center p-[20px] gap-[10px]'>
      {quizzes.map((val, index) => (
        <div key={index} className='flex flex-col '>
          <h1>{val.creator}</h1>
          <p>{val.name}</p>
          <p>{val.score}</p>
          <button onClick={() => router.push('/quiz')} className='p-[10px] bg-[#FFCD1F]'>start quiz</button>
        </div>
      ))}

    </div>
  )
}

export default quizDesc