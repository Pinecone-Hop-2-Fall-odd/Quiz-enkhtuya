'use client'
import React, { useState } from 'react'
import Question from '@/components/Question'
import { FaTrashAlt } from "react-icons/fa";

const page = () => {
  const [number, setNumber] = useState(2);
  const [card, setCard] = useState([<Question number={1} />]);
  const addCard = () => {
    // setNumber(number + 1);
    setCard([...card, <Question deleteCard={deleteCard} number={number} />])
  }
  const deleteCard = (index) => {
    console.log(index);
    // const filteredCard = card.filter((el) => index !== )
  }
  return (
    <div className='flex w-full h-screen justify-center items-center bg-[#f6f7fb] p-[5%] overflow-auto'>
      <div className='h-screen w-[65%] p-[20px]'>
        <div className='flex justify-between w-full p-[20px]'>
          <h1 className='text-[#2e3856] font-bold text-[25px]'>Create a new Quiz</h1>
          <button className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px]'>create</button>
        </div>
        <div className='flex flex-col p-[10px] justify-start gap-[6px] text-[#2e3856]'>
          <h4>Subject title</h4>
          <input type='text' placeholder='Enter a title, like “Chinese HSK4 - Lesson 18: Protect our Mother Earth' className='h-[50px] p-[10px] rounded-[10px]' />
        </div>
        {card.map((el, idx) => (
          <div key={idx} className='flex flex-col rounded-[10px] p-[10px] m-[10px] justify-start gap-[6px] text-[#2e3856] bg-[#FFFFFF]'>
            <div className='flex py-[10px] px-[20px] justify-between items-center'>
              <h1>{number}</h1>
              <button onClick={() => deleteCard(idx)} ><FaTrashAlt /></button>
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
              <h4>Question</h4>
              <input type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px]' />
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
              <h4>Correct Answer</h4>
              <input type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px]' />
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
              <h4>False Answers</h4>
              <input type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px]' />
              <input type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px]' />
              <input type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px]' />
            </div>
          </div>
        ))}
        <div className='bg-[#FFFFFF] m-[10px] flex justify-center items-center h-[7%] text-[#2e3856] hover:text-[#FFCD1F] font-bold rounded-[10px]'>
          <button onClick={() => addCard()}>ADD CARD</button>
        </div>
        <div className='flex justify-center items-center w-full p-[20px]'>
          <button className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px]'>create</button>
        </div>
      </div>
    </div>
  )
}

export default page