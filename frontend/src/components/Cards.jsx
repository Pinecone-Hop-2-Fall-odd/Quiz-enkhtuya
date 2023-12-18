"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Cards = ({ quizData }) => {
  const router = useRouter();
  const handleClick = (QuizID) => {
    router.push(`/quiz?quizId=` + QuizID);
  }
  return (
    <div className='flex flex-wrap py-[10px] px-[40px] gap-[30px] mt-[40px]'>
      {quizData.map((val, index) => (
        <div key={index} className='flex flex-col justify-center items-start p-[20px] gap-[10px] bg-[#FFFFFF] w-[250px]'>
          <h1 className='font-bold ml-[5px]'>{val.subjectName}</h1>
          <h6 className='rounded-[30px] bg-[#ecefff] py-[5px] px-[10px]'>{val.quiz.length} questions</h6>
          <div className='flex justify-between items-center gap-[10px] w-[100%]'>
            <div className='flex items-center gap-[10px]'>
              <img src='./avatar0.webp' alt='avatar' height={40} width={40} className='rounded-[50%]' />
              <p>{val.creator}</p>
            </div>
            <button onClick={() => handleClick(val._id)} className='bg-[#FFCD1F] p-[10px]'>start</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards;