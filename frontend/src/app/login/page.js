"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({});
  const [showHide, setShowHide] = useState(false);

  //User Login
  const handleLogin = async () => {
    const { data } = await axios.post('http://localhost:8000/login', {
      email: loginData.email,
      password: loginData.password
  });
console.log('login success')
  if (data) {
    // localStorage.setItem("uid", data.user.id);
    router.push('/');
}
  }

  return (
    <main className="flex min-h-screen w-screen bg-[#f6f7fb]">
      <div className='flex min-w-[50%] h-screen'>
        <Image src="/signup.jpg" width={600} height={500} alt="education" className='object-fill h-screen w-[80%]'/>
      </div>
      <div className='flex min-w-[50%] h-screen justify-center items-center'>
        <div className='flex flex-col p-[30px] justify-start items-start gap-y-[10px] m-[0]'>
          <div className='flex'>
            <button onClick={() => router.push('/login')} className='py-[10px] px-[15px] justify-center items-center text-[#00000] font-bold rounded-[10px] underline decoration-wavy'>Log in</button>
            <button onClick={() => router.push(`/signup`)} className='py-[10px] px-[15px] justify-center items-center text-[#586380] font-bold rounded-[10px]'>Sign up</button>
          </div>
          <h3>email</h3>
          <input type='text' placeholder='Enter email address' className='w-[450px] h-[5%] p-[20px]' onChange={(e) => setLoginData((prev) => ({...prev, email: e.target.value}))}/>

          <h3>password</h3>
          <div className='bg-[#ffffff] w-[450px] h-[5%] p-[20px] flex justify-between items-center'>
            <input type={showHide ? 'text' : 'password'} placeholder='••••••••' onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))} />
            <button onClick={() => setShowHide(!showHide)}>{showHide ? 'Show' : 'Hide'}</button>
          </div>
          <button onClick={() => handleLogin()} className='bg-[#586380] w-[450px] h-[5%] p-[15px] text-[#FFFFFF] mt-[20px]'>Log in</button>
        </div>
      </div>


    </main>
  )
}

export default login;