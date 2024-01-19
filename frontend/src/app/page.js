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
  const { token, username } = useContext(UserDataContext);
  // const { username } = useContext(UserDataContext);
  // const token = localStorage.getItem("token");

  const handleClick = (idx, category) => {
    setIndex(idx);
    if (category !== 'Home') {
      const filteredData = initialData.filter((val) => val.category === category);
      setQuizData(filteredData);
    } else if (category === 'Home') return setQuizData(initialData);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get('https://backend-one-blush-69.vercel.app/quizzes', { headers: { "token": token } })
      setInitialData(res.data.data); setQuizData(res.data.data);
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    console.log(token, username)
    // if (token && username) {
    if (token) {
      fetchData()
    } else {
      console.log('aaa')
    }
  }, [token, username]);

  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
      <NavBar index={index} handleClick={handleClick} setQuizData={setQuizData} initialData={initialData} />
      <div className='flex flex-col justify-start items-start p-[5%] mt-[140px] w-full'>
        <Cards quizData={quizData} />
      </div>
    </main>
  )
}
//https://backend-one-blush-69.vercel.app