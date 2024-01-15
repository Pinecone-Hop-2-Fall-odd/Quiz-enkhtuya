"use client";
import axios from 'axios'
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserDataContext } from '@/app/layout';
import Timer from '@/components/Timer';

const Quiz = ({ searchParams }) => {
  const router = useRouter();
  const quizId = searchParams.quizId;
  const { username } = useContext(UserDataContext);

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [warning, setWarning] = useState(false);

  function shuffle(array) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex],];
    }
    return array;
  }

  function handleSelect(answer, currentQuestion) {
    // console.log(currentQuestion, answer);
    setQuestionsAndAnswers(
      questionsAndAnswers.map((obj) => {
        return obj.question === currentQuestion ? { ...obj, selected: answer } : obj
      }));
    // console.log(questionsAndAnswers);
  }

  function checkAnswers() {
    const isNotAnswered = questionsAndAnswers.some((answer) => answer.selected === "");
    if (isNotAnswered) return setWarning(true);
    else if (!isNotAnswered) {
      questionsAndAnswers.find((answer) => {
        if (answer.selected === answer.correctAnswer) return setScore((prev) => prev + 1);
      })
      setWarning(false)
      setShowResult(!showResult)
    }
    sendAnswers();
  }

  async function sendAnswers() {
    try {
      const { data } = await axios.post(`http://localhost:8000/quiz/${quizId}`, {
        selectedAnswer: questionsAndAnswers.filter((answer) => answer.selected), username: username
      })
      console.log(data);
      alert(`${data.message} Your score:${data.score}`)
    } catch (err) {
      alert(`${err.response.data.message} Your score:${err.response.data.score}`)
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://backend-one-blush-69.vercel.app/quiz/${quizId}`);
        const quizData = res.data.data[0];
        setQuestionsAndAnswers(
          quizData?.quiz.map((el, idx) => {
            return ({
              subjectName: quizData?.subjectName,
              question: el.question,
              allAnswers: shuffle([el.correctAnswer, ...Object.values(el.incorrectAnswers)]),
              correctAnswer: el.correctAnswer,
              selected: ""
            })
          }));
      } catch (err) {console.log(err)}
    }
    fetchData();
  }, []);

  function again() {
    setQuestionsAndAnswers(questionsAndAnswers.map((el) => ({ ...el, selected: "" })));
    setScore(0);
    setWarning(false);
    setShowResult(false);
  }

  return (
    <div className="flex w-full h-screen justify-center bg-[#f6f7fb] p-[5%] overflow-auto text-[#000000]">
      <div className="flex flex-col items-center p-[15px] gap-[20px] ">
        <div className="flex justify-between items-center w-full p-[10px]">
          <h1 className="font-bold text-[20px]">Quiz: {questionsAndAnswers[0]?.subjectName}</h1>
          {/* <Timer seconds={4}/> */}
          <button onClick={() => router.push("/")}
            className="bg-[#DC2F1E] h-[40px] w-[40px] p-[10px] text-[#FFFFFF] flex justify-center items-center font-bold">x</button>
        </div>
        {questionsAndAnswers?.map((val, index) => (
          <div key={index} className="flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]">
            <div className="flex justify-end w-[100%]">{index + 1} of {questionsAndAnswers.length}</div>
            <h3>{val.question}</h3>
            <div className="gap-[20px] grid grid-cols-2">
              {val.allAnswers.map((answer, index) => (
                <button onClick={() => handleSelect(answer, val.question)} key={index}
                  style={{
                    display: "flex", justifyContent: "center", alignItems: "center", padding: "5px",
                    backgroundColor: `${showResult ? (answer === val.correctAnswer ? "#90B089" : answer === val.selected ? "#D65648" : "#D7D7D7") : (answer === val.selected ? '#90B089' : '#D7D7D7')}`, width: "240px",
                  }}>{answer}</button>))}
            </div>
          </div>))}
        {warning && <h1>Some questions weren't answered!!</h1>}
        {showResult && (<div className="flex flex-col justify-center items-center gap-[10px]">
            <h1>Your score: {score}/{questionsAndAnswers.length}</h1>
            <button className="bg-[#2475B7] p-[10px] text-[#FFFFFF]" onClick={() => again()}>Again</button>
          </div>)}
        {!showResult && (<button onClick={() => checkAnswers()} className="bg-[#2475B7] p-[10px] text-[#FFFFFF]">Submit</button>)}
      </div>
    </div>
  );
};
//red-#D65648 gray-D7D7D7 green-90B089
export default Quiz;