"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Cards = ({quizData}) => {
  const router = useRouter();
  const handleClick = (QuizID) => {
    router.push(`/quiz?quizId=` + QuizID);
  }

  return (
    <div className='flex p-[10px] gap-[20px] mt-[40px]'>
      {quizData.map((val, index) => (
        <div key={index} className='flex flex-col justify-center items-start p-[20px] gap-[10px] bg-[#FFFFFF]'>
          <h1 className='font-bold'>{val.name}</h1>
          <h6 className='rounded-[30px] bg-[#ecefff] p-[5px]'>{val.quiz.length} questions</h6>
          <div className='flex justify-center items-center gap-[10px]'>
            <img src='./avatar0.webp' alt='avatar' height={40} width={40} className='rounded-[50%]' />
            <p>{val.creator}</p>
            <button onClick={() => handleClick(val.id)} className='bg-[#FFCD1F] p-[10px]'>start</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards

