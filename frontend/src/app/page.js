'use client'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { UserDataContext } from '@/app/layout';
import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'

export default function Home() {
  const [initialData, setInitialData] = useState();
  const [quizData, setQuizData] = useState([]);
  const [index, setIndex] = useState(0);
  const { token } = useContext(UserDataContext);
  const handleClick = (idx, category) => {
    setIndex(idx);
    if (category !== 'Home') {
      const filteredData = initialData.filter((val) => val.category === category);
      setQuizData(filteredData);
    } else if (category === 'Home') return setQuizData(initialData);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/quizzes', { headers: { "token": token } })
      setInitialData(res.data.data); setQuizData(res.data.data);
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    if (token) {fetchData()};
  }, [token]);

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setQuizData={setQuizData} initialData={initialData} />
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <Cards quizData={quizData} />
      </div>
    </main>
  )
}