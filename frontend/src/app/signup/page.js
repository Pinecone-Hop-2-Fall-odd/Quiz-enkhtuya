"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'

const signup = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({});
  const [showHide, setShowHide] = useState(false);

  //Create User
  const handleSignUp = async () => {
    try {
      const res = await axios.post('https://backend-one-blush-69.vercel.app/user', {
      username: signupData.username,
      email: signupData.email,
      password: signupData.password
    })
    // console.log(res);
    router.push('/login');
    } catch (err) {
      console.log(err);
      alert(err.response.data.message)
    }
  }

  return (
    <main className="flex min-h-screen w-screen bg-[#f6f7fb]">
      <div className='flex min-w-[50%] h-screen'>
        <Image src="/signup.jpg" width={600} height={500} alt="education" className='object-fill h-screen w-[80%]' />
      </div>
      <div className='flex min-w-[50%] h-screen justify-center items-center'>
        <div className='flex flex-col p-[30px] justify-start items-start gap-y-[10px] m-[0]'>
          <div className='flex'>
            <button onClick={() => router.push(`/login`)} className='py-[10px] px-[15px] justify-center items-center text-[#586380] font-bold rounded-[10px]'>Log in</button>
            <button onClick={() => router.push('/signup')} className='py-[10px] px-[15px] justify-center items-center text-[#000000] font-bold rounded-[10px] underline decoration-wavy'>Sign up</button>
          </div>
          <h3>email</h3>
          <input type='text' placeholder='Enter email address' className='w-[450px] h-[5%] p-[20px] outline-none' onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))} />

          <h3>username</h3>
          <input type='text' placeholder='Enter username' className='w-[450px] h-[5%] p-[20px] outline-none' onChange={(e) => setSignupData((prev) => ({ ...prev, username: e.target.value }))} />

          <h3>password</h3>
          <div className='bg-[#ffffff] w-[450px] h-[5%] p-[20px] flex justify-between items-center'>
            <input type={showHide ? 'text' : 'password'} placeholder='••••••••' onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))} 
            onKeyDown={(e) => {if(e.key === 'Enter') return handleSignUp()}} className='outline-none'/>
            <button onClick={() => setShowHide(!showHide)}>{showHide ? 'Show' : 'Hide'}</button>
          </div>
          <button onClick={() => handleSignUp()} className='bg-[#586380] w-[450px] h-[5%] p-[15px] text-[#FFFFFF] mt-[20px]'>Sign up</button>
          <a href='/' className='text-[#586380] flex justify-center items-center w-[450px] h-[5%] gap-[10px]'>Go Back to Homepage</a>
        </div>
      </div>
    </main>
  )
}

export default signup;