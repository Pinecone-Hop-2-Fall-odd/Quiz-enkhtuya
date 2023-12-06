'use client'
import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import quizzes from './data';

export default function Home() {
  const router = useRouter();
  const [quizData, setQuizData] = useState(quizzes);
  const [index, setIndex] = useState();
  const handleClick = (idx, category) => {
    console.log(idx, category);
    setIndex(idx);
    const filteredData = quizzes.filter((val) => val.category === category);
    console.log(filteredData);
    setQuizData(filteredData);
  }

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setQuizData={setQuizData} />
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[20%] p-[15px]'>
          <button onClick={() => router.push('/createQuiz')} className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Quiz! </button>
        </div>
        <Cards quizData={quizData} />
      </div>
    </main>
  )
}