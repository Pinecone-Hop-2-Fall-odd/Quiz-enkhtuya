'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'

export default function Home() {
  const router = useRouter();
  const [initialData, setInitialData] = useState();
  const [quizData, setQuizData] = useState([]);
  const [index, setIndex] = useState();
  const handleClick = (idx, category) => {
    setIndex(idx);
    if (category !== 'Home') {
      const filteredData = initialData.filter((val) => val.category === category);
      setQuizData(filteredData);
    } else if (category === 'Home') return setQuizData(initialData);
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8000/quizzes')
        .then(res => { setInitialData(res.data.data); setQuizData(res.data.data); })
    }
    fetchData();
    const token = localStorage.getItem("token");
    if(!token) {
      router.push('/login');
    }
  }, []);

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setQuizData={setQuizData} initialData={initialData}/>
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <div className='flex justify-around items-center w-[100%] h-[25%] gap-[20px]'>
          <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[70%] p-[15px]'>
            <button onClick={() => router.push('/createQuiz')} className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Quiz! </button>
          </div>
          <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[70%] p-[15px]'>
            <button className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Flashcard! </button>
          </div>
        </div>
        <Cards quizData={quizData} />
      </div>
    </main>
  )
}