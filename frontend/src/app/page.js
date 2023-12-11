'use client'
import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'
import array from './data2';

export default function Home() {
  const router = useRouter();
  // const [quizData, setQuizData] = useState(array);
  const [quizData, setQuizData] = useState();
  const [dt, setDt] = useState([]);
  const [index, setIndex] = useState();
  const handleClick = (idx, category) => {
    console.log(idx, category);
    setIndex(idx);
    // const filteredData = array.filter((val) => val.category === category);
    const filteredData = quizData.filter((val) => val.category === category);
    console.log(filteredData);
    // setQuizData(filteredData);
    setDt(filteredData);
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8000/quizzes')
      .then(res => {setQuizData(res.data.data); setDt(res.data.data)})
    }
    console.log(quizData);
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setQuizData={setQuizData}  setDt={setDt} quizData={quizData}/>
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[20%] p-[15px]'>
          <button onClick={() => router.push('/createQuiz')} className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Quiz! </button>
        </div>
        <Cards quizData={quizData} dt={dt}/>
      </div>
    </main>
  )
}