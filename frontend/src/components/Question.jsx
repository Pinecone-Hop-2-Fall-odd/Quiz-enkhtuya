import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Question = ({number}) => {
    return (
        <div className='flex flex-col rounded-[10px] p-[10px] m-[10px] justify-start gap-[6px] text-[#2e3856] bg-[#FFFFFF]'>
            <div className='flex py-[10px] px-[20px] justify-between items-center'>
                <h1>{number}</h1>
                <button onClick={() => deleteCard()} ><FaTrashAlt /></button>
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
    )
}

export default Question