import React from 'react'
import quizzes from '../data.js'

const quiz = () => {
  return (
    <div className='flex w-full h-screen justify-center bg-[#f6f7fb] p-[5%] overflow-auto'>
      {quizzes.map((val, index) => (
          <div key={index} className='flex flex-col  items-center p-[20px] gap-[10px]'>
            {val.quiz.map((quiz) => (
              <div className='flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]'>
                <h3>{quiz.question}</h3>
                <div className='gap-[20px] grid grid-cols-2'>
                  {quiz.options.map((option) => (
                      <button className='bg-[#FFCD1F] p-[5px] w-[200px]'>{option.answer}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}

export default quiz