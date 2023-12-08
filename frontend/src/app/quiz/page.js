"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import array from "../data2.js";

const Quiz = ({ searchParams }) => {
  const router = useRouter();
  const quizId = searchParams.quizId;
  const [quizData, setQuizData] = useState(array[quizId - 1]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  const handleSelect = (idx) => {
    console.log(idx);
  }

  function shuffle(array) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex],];
    }
    return array;
  }

  useEffect(() => {
    setQuestionsAndAnswers(
      quizData.quiz.map((el) => {
        return {
          question: el.question,
          allAnswers: shuffle([el.correct_answer, ...el.incorrect_answers]),
          correctAnswer: el.correct_answer,
          selected: '',
        };
      })
    )
  }, []);

  return (
    <div className="flex w-full h-screen justify-center bg-[#f6f7fb] p-[5%] overflow-auto">
      <div className="flex flex-col items-center p-[15px] gap-[20px] ">
        <div className="flex justify-between items-center w-full p-[10px]">
          <h1 className="font-bold text-[20px]">Quiz: ..</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-[#E61600] h-[40px] w-[40px] p-[10px] text-[#FFFFFF] flex justify-center items-center font-bold"
          >
            x
          </button>
        </div>
        {questionsAndAnswers.map((val, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#FFFFFF] w-[900px] h-[300px] p-[5%] justify-center items-center gap-[10px]"
          >
            <div className="flex justify-end w-[100%]">
              {" "}
              _ of {questionsAndAnswers.length} 
            </div>
            <h3>{val.question}</h3>
            <div className="gap-[20px] grid grid-cols-2">
              {val.allAnswers.map((el, index) => (<button
                onClick={() => handleSelect(index, val.selected)}
                key={index}
                className="flex justify-center items-center bg-[#FFCD1F] p-[5px] w-[240px]"
              >
                {el}
              </button>))}
            </div>
          </div>
        ))}
        <button className="bg-[#2475B7] p-[10px] text-[#FFFFFF]">Submit</button>
      </div>
    </div>
  );
};

export default Quiz;