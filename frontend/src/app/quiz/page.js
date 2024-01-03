"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'

const Quiz = ({ searchParams }) => {
  const router = useRouter();
  const quizId = searchParams.quizId;
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [warning, setWarning] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(false);

  function shuffle(array) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex],];
    }
    return array;
  }

  function handleSelect(answer, currentQuestion) {
    console.log(currentQuestion, answer);
    setQuestionsAndAnswers(
      questionsAndAnswers.map((obj) => {
        return obj.question === currentQuestion ? { ...obj, selected: answer } : obj
      }));
    console.log(questionsAndAnswers);
  }

  function checkAnswers() {
    questionsAndAnswers.map((obj) => {
      if (obj.selected === "") return setWarning(true);
      else if (obj.selected === obj.correctAnswer) return setScore((prev) => prev + 1);
    });
    setShowResult(!showResult)
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8000/quizzes')
        .then(res => {
          const quizData = res.data.data.filter((el) => el._id === quizId);
          setQuestionsAndAnswers(
            quizData[0]?.quiz.map((el, idx) => {
              return ({
                subjectName: quizData[0]?.subjectName,
                question: el.question,
                allAnswers: shuffle([el.correctAnswer, ...Object.values(el.incorrectAnswers)]),
                correctAnswer: el.correctAnswer,
                selected: "",
                idx: idx
              })
            }));
        })
    }
    fetchData();
  }, []);

  function again() {
    setQuestionsAndAnswers(questionsAndAnswers.map((el) => ({ ...el, selected: "" })));
    setScore(0);
    setWarning(false);
    setShowResult(false);
  }

  function handleFlashcards(index) {
    setSelectedId(index === selectedId ? null : index);
  }

  return (
    <div className="flex w-full h-screen justify-center bg-[#f6f7fb] p-[5%] overflow-auto text-[#000000]">
      <div className="flex flex-col items-center p-[15px] gap-[20px] ">
        <div className="flex justify-between items-center w-full p-[10px]">
          <h1 className="font-bold text-[20px]">Quiz: {questionsAndAnswers[0]?.subjectName}</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-[#DC2F1E] h-[40px] w-[40px] p-[10px] text-[#FFFFFF] flex justify-center items-center font-bold"
          >x</button>
        </div>
        {questionsAndAnswers?.map((val, index) => (
          <div key={index} className="flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]">
            <div className="flex justify-end w-[100%]">{index + 1} of {questionsAndAnswers.length}</div>
            <h3>{val.question}</h3>
            <div className="gap-[20px] grid grid-cols-2">
              {val.allAnswers.map((answer, index) => (
                <button onClick={() => handleSelect(answer, val.question)}
                  key={index}
                  style={{
                    display: "flex", justifyContent: "center", alignItems: "center", padding: "5px",
                    backgroundColor: `${showResult ? (answer === val.correctAnswer ? "green" : answer === val.selected ? "red" : "#427FE6") : (answer === val.selected ? 'green' : '#427FE6')}`, width: "240px",
                  }}>
                  {answer}</button>))}
            </div>
          </div>))}
        {warning && <h1>Some questions weren't answered!!</h1>}
        {showResult ?
          (<div className="flex flex-col justify-center items-center gap-[10px]">
            <h1>Your score: {score}/{questionsAndAnswers.length}</h1>
            <button className="bg-[#2475B7] p-[10px] text-[#FFFFFF]" onClick={() => again()}>Again</button>
          </div>) : ""}
        {!showResult && (<button onClick={() => checkAnswers()} className="bg-[#2475B7] p-[10px] text-[#FFFFFF]">Submit</button>)}

        {/**flashcards */}
        <div className="w-[90%] h-[60%] p-[10px] gap-[10px] flex flex-wrap">
          {questionsAndAnswers?.map((val, index) => (
            <div key={index} className="w-[250px] h-[120px] flex justify-center items-center bg-[#FFFFFF] p-[10px]" onClick={() => handleFlashcards(val.idx)}>
              {selectedId === index ? (<h1 className="font-bold text-blue-600">{val.correctAnswer}</h1>) : (<h1>{val.question}</h1>)}
            </div>
          ))}
        </div>

        <div className="w-[90%] h-[60%] p-[10px] gap-[10px] flex flex-wrap">
          <button onClick={() => setIndex((prev) => index - 1)}>-1</button>
          <div className="w-[250px] h-[120px] flex justify-center items-center bg-[#FFFFFF] p-[10px]" onClick={() => setNext(!next)}>
            {next ? (<h1 className="font-bold text-blue-600">{questionsAndAnswers[index]?.correctAnswer}</h1>) : (<h1>{questionsAndAnswers[index]?.question}</h1>)}
          </div>
          <button onClick={() => setIndex((prev) => index + 1)}>+1</button>
        </div>

      </div>
    </div>
  );
};

export default Quiz;