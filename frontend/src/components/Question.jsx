import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Question = ({ newQuizData, deleteCard, number, setNewQuizData }) => {
    const quizData = newQuizData[number];
    
    const handleQuestionName = (e) => {
        setNewQuizData((prev) => ({ ...prev, [number]: { ...prev[number], question: e.target.value } }))
    }
    const handleQuestionCorrectAnswer = (e) => {
        setNewQuizData((prev) => ({ ...prev, [number]: { ...prev[number], correctAnswer: e.target.value } }))
    }
    const handleQuestionInCorrectAnswer = (e, key) => {
        setNewQuizData((prev) => ({ ...prev, [number]: { ...prev[number], incorrectAnswers: { ...prev[number].incorrectAnswers, [key]: e.target.value } } }))
    }
    return (
        <div className='flex flex-col rounded-[10px] p-[10px] m-[10px] justify-start gap-[6px] text-[#2e3856] bg-[#FFFFFF]'>
            <div className='flex py-[10px] px-[20px] justify-between items-center'>
                <h1>{number}</h1>
                <button onClick={() => deleteCard(number)} ><FaTrashAlt /></button>
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
                <h4>Question</h4>
                <input value={quizData.question} type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px] outline-none' onChange={handleQuestionName} />
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
                <h4>Correct Answer</h4>
                <input value={quizData.correctAnswer} type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px] outline-none' onChange={handleQuestionCorrectAnswer} />
            </div>
            <div className='flex flex-col p-[10px] justify-start gap-[6px]'>
                <h4>Incorrect Answers</h4>
                <input value={quizData.incorrectAnswers[0]} type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px] outline-none' onChange={(e) => handleQuestionInCorrectAnswer(e, 0)} />
                <input value={quizData.incorrectAnswers[1]} type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px] outline-none' onChange={(e) => handleQuestionInCorrectAnswer(e, 1)} />
                <input value={quizData.incorrectAnswers[2]} type='text' placeholder='required' className='h-[50px] p-[10px] rounded-[10px] outline-none' onChange={(e) => handleQuestionInCorrectAnswer(e, 2)} />
            </div>
        </div>
    )
}

export default Question