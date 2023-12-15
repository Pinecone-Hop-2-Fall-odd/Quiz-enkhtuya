'use client'
import React, { useState } from 'react'
import Question from '@/components/Question'

const Page = () => {
  const [number, setNumber] = useState(2);
  const [newData, setNewData] = useState({});
  const [newQuizData, setNewQuizData] = useState({});
  // const [cards, setCards] = useState([<Question number={1} setNewQuizData={setNewQuizData} />]);
  // const [cards, setCards] = useState([]);

  
  const addCard = () => {
    setNumber(number + 1);

    setNewQuizData((prev) => ({ ...prev, [Object.values(prev).length + 1]: { question: '', correctAnswer: '', incorrectAnswers: { 0: '', 1: '', 2: '' } } }))

    // setCards([...cards, ''])
    // setCards([...cards, <Question deleteCard={deleteCard} number={number} setNewQuizData={setNewQuizData} />])
  }
  const deleteCard = (index) => {
    const { [index]: quizData, ...others } = newQuizData

    const tempData = Object.values(others).reduce((sum, cur, index) => ({ ...sum, [index + 1]: cur }), {})

    setNewQuizData(tempData)
    // console.log("index: " + index);
    // const filteredCard = cards.filter((el, elIndex) => index !== elIndex);
    // console.log(filteredCard);
    // setCards(filteredCard);
    // setNumber(index);
  }

  const handleSubmit = async () => {
    console.log('newQuizData', Object.values(newQuizData));
    // const options = {
    //   method: 'POST',
    //   url: 'http://localhost:8000/user',
    //   Headers: {
    //     'Content-type': 'application/json'
    //   },
    //   data: {
    //     subjectName: newData.subjectName,
    //     quiz: [newData.quiz]
    //   }
    // }
    // await axios(options).then(res => {
    //   console.log(res)
    // });
    // console.log(newData);
    // console.log(newQuizData);
    const quiz =  Object.values(newQuizData).map((el) => Object.values(el.incorrectAnswers));
    console.log(quiz);
    const data = { subjectName: newData.subjectName, quiz: Object.values(newQuizData) }
    //const data = { subjectName: newData.subjectName, quiz: [newQuizData] }
    console.log(data);
  }
  // {
  //  0: {question: "bob"}
  //  1: {question: "bob"}
  //  3: {question: "bob"}
  // }

  // .values => [{question: "bob"}]
  // .keys => [0, 1, 3]
  return (
    <div className='flex w-full h-screen justify-center items-center bg-[#f6f7fb] p-[5%] overflow-auto'>
      <div className='h-screen w-[65%] p-[20px]'>
        <div className='flex justify-between w-full p-[20px]'>
          <h1 className='text-[#2e3856] font-bold text-[25px]'>Create a new Quiz</h1>
          <button className='bg-[#2e3856] text-[#FFFFFF] p-[10px] rounded-[6px] hover:bg-[#515972]'>create</button>
        </div>
        <div className='flex flex-col p-[10px] justify-start gap-[6px] text-[#2e3856]'>
          <h4>Subject title</h4>
          <input onChange={(e) => setNewData((prev) => ({ ...prev, subjectName: e.target.value }))}
            type='text' placeholder='Enter a title, like “Chinese HSK4 - Lesson 18: Protect our Mother Earth' className='h-[50px] p-[10px] rounded-[10px]' />
        </div>
        <div className='flex justify-around items-center gap-[10px] w-[100%]'>
          <button className='p-[10px] text-[#FFFFFF] bg-[#2e3856] hover:bg-[#515972] w-[20%]'>Choose Category</button>
          <button className='p-[10px] text-[#FFFFFF] bg-[#2e3856] hover:bg-[#515972] w-[20%]'>Difficulty</button>
          <div className='flex justify-around items-center p-[5px] text-[#2e3856] font-bold w-[40%] bg-[#FFFFFF] rounded-[10px]'>
            <h3>Time: </h3>
            <input placeholder='...' className='p-[10px] w-[70%]' />
          </div>
        </div>
        {/* {cards.map((card) => card)} */}
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