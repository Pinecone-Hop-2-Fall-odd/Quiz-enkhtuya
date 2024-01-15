'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { UserDataContext } from '@/app/layout';
import { useState, useContext, useEffect } from 'react';
import Question from '@/components/Question'

const Page = () => {
  const router = useRouter();
  const { username } = useContext(UserDataContext);
  const [number, setNumber] = useState(2);
  const [newData, setNewData] = useState({});
  const [newQuizData, setNewQuizData] = useState({});
  const categories = ['Choose a Category', 'Science', 'Art & Humanities', 'Social science', 'Languages', 'Other'];
  const difficultyLevel = ['Difficulty Level', 'easy', 'medium', 'hard'];

  const addCard = () => {
    setNumber(number + 1);
    setNewQuizData((prev) => ({ ...prev, [Object.values(prev).length + 1]: { question: '', correctAnswer: '', incorrectAnswers: { 0: '', 1: '', 2: '' } } }))
  }

  const deleteCard = (index) => {
    const { [index]: quizData, ...others } = newQuizData
    const tempData = Object.values(others).reduce((sum, cur, index) => ({ ...sum, [index + 1]: cur }), {})
    setNewQuizData(tempData)
  }

  const handleSubmit = async () => {
    try {
        const res = await axios.post('http://localhost:8000/quiz', {
        subjectName: newData.subjectName,
        quiz: Object.values(newQuizData),
        category: newData.category,
        difficulty: newData.difficulty,
        time: newData.time * 60,
        // creator: username
      })
      console.log(res);
    } catch (err) { console.log(err); alert(`Quiz must have ${Object.keys(err.response.data.message.errors)}`) }
  }

  return (
    <div className='flex w-full h-screen justify-center items-center bg-[#f6f7fb] p-[5%] overflow-auto'>
      <div className='h-screen w-[65%] p-[20px]'>
        <div className='flex justify-between w-full p-[20px]'>
          <h1 className='text-[#2e3856] font-bold text-[25px]'>Create a new Quiz</h1>
          <div className='flex gap-[10px]'>
            <button onClick={() => handleSubmit()} className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px] hover:bg-[#515972]'>create</button>
            <button onClick={() => router.push('/')} className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px] hover:bg-[#515972] font-bold'>x</button>
          </div>
        </div>
        <div className='flex flex-col p-[10px] justify-start gap-[6px] text-[#2e3856]'>
          <h4 className='font-bold'>Subject title</h4>
          <input onChange={(e) => setNewData((prev) => ({ ...prev, subjectName: e.target.value }))}
            type='text' placeholder='Enter a title, like “Chinese HSK4 - Lesson 18: Protect our Mother Earth' className='h-[50px] p-[10px] rounded-[10px]' />
        </div>
        <div className='flex justify-around items-center gap-[10px] w-[100%]'>
          <select className='p-[10px] text-[#FFFFFF] bg-[#2e3856] hover:bg-[#515972] w-[24%]' onChange={(e) => setNewData((prev) => ({ ...prev, category: e.target.value }))}>
            {categories.map((el, id) => { return (<option key={id} value={el}>{el}</option>) })}
          </select>
          <select className='p-[10px] text-[#FFFFFF] bg-[#2e3856] hover:bg-[#515972] w-[20%]' onChange={(e) => setNewData((prev) => ({ ...prev, difficulty: e.target.value }))}>
            {difficultyLevel.map((el, id) => { return (<option key={id} value={el}>{el}</option>) })}
          </select>
          <div className='flex justify-around items-center p-[5px] text-[#2e3856] font-bold w-[40%] bg-[#FFFFFF] rounded-[10px]'>
            <h3>Time limit: </h3>
            <input placeholder='...minute' className='p-[10px] w-[70%]' onChange={(e) => setNewData((prev) => ({ ...prev, time: Number(e.target.value) }))} />
          </div>
        </div>
        {Object.keys(newQuizData).map((quizIndex, index) => <Question key={`card-${index}`} newQuizData={newQuizData} deleteCard={() => deleteCard(index + 1)} number={quizIndex} setNewQuizData={setNewQuizData} />)}

        <div className='bg-[#FFFFFF] m-[10px] flex justify-center items-center h-[7%] text-[#2e3856] hover:text-[#FFCD1F] font-bold rounded-[10px]'>
          <button onClick={() => addCard()}>ADD CARD</button>
        </div>
        <div className='flex justify-center items-center w-full p-[20px]'>
          <button onClick={() => handleSubmit()} className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px] hover:bg-[#515972]'>create</button>
        </div>
      </div>
    </div>
  )
}

export default Page;