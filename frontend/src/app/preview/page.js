'use client'
import React, { useState } from 'react'

const page = () => {
    const [showQuizInfo, setShowQuizInfo] = useState(false);
    return (
        <div className='bg-[#f6f7fb] min-w-screen min-h-screen p-[5%] flex justify-center'>
            <main className='flex flex-col gap-[10px] w-[60%] h-[100%]'>
                <div className='flex gap-[10px]'>
                    <button onClick={() => setShowQuizInfo(false)} className='flex justify-center items-center p-[7px] bg-[#FFFFFF]'>Flashcard</button>
                    <button onClick={() => setShowQuizInfo(true)} className='flex justify-center items-center p-[7px] bg-[#FFFFFF]'>Quiz</button>
                </div>
                {showQuizInfo ? (
                    <div className='flex bg-[#FFFFFF] w-[800px]'>
                        <div className='flex justify-center items-start p-[10px] w-[300px]'>
                            <img src='https://framerusercontent.com/images/UpeYp3Cna7fqd53SYIZqXApt3c.jpg?scale-down-to=1024' alt='example' height={300} width={300} />
                        </div>
                        <div className='flex flex-col justify-center p-[20px] gap-[10px] w-[500px]'>
                            <h1>subjectName</h1>
                            <h4>Created By: <span className='text-[#417FE6]'>creator</span></h4>
                            <div className='flex gap-[10px]'>
                                <p><span className='text-[#417FE6]'>2</span> questions</p>
                                <p><span className='text-[#417FE6]'>4</span> duration</p>
                                <p>createdAt: <span className='text-[#417FE6]'>2</span></p>
                            </div>
                            <button className='flex justify-center items-center p-[7px] bg-[#E4E3E5] w-[150px]'>Play Now</button>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>) : (
                    <div className='w-full flex justify-center items-center'>
                        <div className="p-[10px] gap-[10px] flex justify-center items-center">
                            <button>-1</button>
                            <div className="w-[600px] h-[450px] flex justify-center items-center bg-[#FFFFFF] p-[10px]">
                                QUESTION
                            </div>
                            <button>+1</button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default page