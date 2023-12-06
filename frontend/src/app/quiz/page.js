'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import quizzes from '../data.js'
import array from '../data2.js'

const quiz = ({ searchParams }) => {
  const router = useRouter();
  const quizId = searchParams.quizId
  const quizData = quizzes[quizId - 1];

  // function shuffle(array) {
  //   for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

  // const questionsAndAnswers = array.map((el) => el.quiz.map((val) => {
  //   return {
  //     question: val.question,
  //     allAnswers: shuffle([
  //       val.correct_answer,
  //       ...val.incorrect_answers,
  //     ]),
  //     correct_answer: val.correct_answer,
  //   }
  // }));
  // console.log(questionsAndAnswers)

  const handleSelect = (index) => {
    console.log('idx: ' + index);
  }

  return (
    <div className='flex w-full h-screen justify-center bg-[#f6f7fb] p-[5%] overflow-auto'>
      {/* {quizzes.map((obj, index) => ( */}
      <div className='flex flex-col items-center p-[15px] gap-[20px] '>
        <div className='flex justify-between items-center w-full p-[10px]'>
          <h1 className='font-bold text-[20px]'>Quiz: {quizData.name}</h1>
          <button onClick={() => router.push('/')} className='bg-[#E61600] h-[40px] w-[40px] p-[10px] text-[#FFFFFF] flex justify-center items-center font-bold'>x</button>
        </div>
        {quizData.quiz.map((el, index) => (
          <div key={index} className='flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]'>
            <div className='flex justify-end w-[100%]'> _ of {quizData.quiz.length}</div>
            <h3>{el.question}</h3>
            <div className='gap-[20px] grid grid-cols-2'>
              {el.options.map((option, index) => (
                <button onClick={() => handleSelect(index, option, el.question)} key={index} className='bg-[#FFCD1F] p-[5px] w-[240px]' >{option.answer}</button>
              ))}
            </div>
          </div>
        ))}

        <button className='bg-[#2475B7] p-[10px] text-[#FFFFFF]'>Submit</button>
      </div>
      {/* ))} */}
    </div>
  )
}

export default quiz

// {/* {questionsAndAnswers.map((val, index) => (val.map((el, index) => {
//   <div key={index} className='flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]'>
//     {/* <div className='flex justify-end w-[100%]'> _ of {questionsAndAnswers.length}</div> */}
//     <h3>{el.question}</h3>
//     <div className='gap-[20px] grid grid-cols-2'>
//       <button onClick={() => handleSelect(index)} key={index} className='bg-[#FFCD1F] p-[5px] w-[240px]' >{el.allAnswers}</button>
//     </div>
//   </div>
// })))} */}