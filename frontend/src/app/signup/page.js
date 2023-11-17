"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const signup = () => {
  const router = useRouter();
  const [password, setPassword] = useState();
  const [showHide, setShowHide] = useState(false);

  return (
    <main className="flex min-h-screen w-screen bg-[#f6f7fb]">
      <div className='flex min-w-[50%] h-screen'>
        <Image src="/signup.jpg" width={600} height={500} alt="education" className='object-fill h-screen w-[80%]'/>
      </div>
      <div className='flex min-w-[50%] h-screen justify-center items-center'>
        <div className='flex flex-col p-[30px] justify-start items-start gap-y-[10px] mt-[-300px]'>
          <div className='flex'>
            <button onClick={() => router.push('/signup')} className='py-[10px] px-[15px] justify-center items-center text-[#00000] font-bold rounded-[10px]'>Log in</button>
            <button className='py-[10px] px-[15px] justify-center items-center text-[#586380] font-bold rounded-[10px]'>Sign up</button>
          </div>
          <h3>email</h3>
          <input type='text' placeholder='Enter email address' className='w-[450px] h-[5%] p-[20px]' />

          <h3>username</h3>
          <input type='text' placeholder='Enter username' className='w-[450px] h-[5%] p-[20px]' />

          <h3>password</h3>
          <div className='bg-[#ffffff] w-[450px] h-[5%] p-[20px] flex justify-between items-center'>
            <input type={showHide ? 'text' : 'password'} placeholder='••••••••' onChange={(e) => setPassword(e)} />
            <button onClick={() => setShowHide(!showHide)}>{showHide ? 'Show' : 'Hide'}</button>
          </div>
          <button className='bg-[#586380] w-[450px] h-[5%] p-[15px] text-[#FFFFFF]'>Sign up</button>
        </div>
      </div>


    </main>
  )
}

export default signup;
