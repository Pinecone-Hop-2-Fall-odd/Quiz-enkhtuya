'use client'
import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {
  const router = useRouter();
  const [quizData, setQuizData] = useState();
  const [dt, setDt] = useState([]);
  const [index, setIndex] = useState();
  const handleClick = (idx, category) => {
    setIndex(idx);

    if (category !== 'Home') {
      const filteredData = quizData.filter((val) => val.category === category);
      console.log(filteredData);
      setDt(filteredData);
    } else if (category === 'Home') return setDt(quizData);
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8000/quizzes')
        .then(res => { setQuizData(res.data.data); setDt(res.data.data); })
    }
    console.log(quizData);
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setDt={setDt} quizData={quizData} />
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <div className='flex justify-around items-center w-[100%] h-[25%] gap-[20px]'>
          <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[70%] p-[15px]'>
            <button onClick={() => router.push('/createQuiz')} className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Quiz! </button>
          </div>
          <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[70%] p-[15px]'>
            <button className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Flashcard! </button>
          </div>
        </div>
        <Cards dt={dt} />
      </div>
    </main>
  )
}