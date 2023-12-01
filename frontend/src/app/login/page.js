"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [showHide, setShowHide] = useState(false);
  const [userData , setUserData] = useState(null)

  //User Login
  const Loading = () => {
    setLoading(!loading);
    setTimeout(handleLogin, 2000);
  }

  const handleLogin = async () => {
     await axios.post('http://localhost:8000/login', {
      email: loginData.email,
      password: loginData.password
    }).then(res => setUserData(res.data.data.user))
    .catch(res => alert(res.response.data.message))
    
  }
  useEffect(() => {
    if (userData) {
      setLoading(false);
      console.log("userData" , userData)
      localStorage.setItem("uid", userData.data.user._id);
      router.push('/');
    } 
    // else if (userData === ) {
    // alert('User not found!');
    // }
  }, [userData])

  return (
    <>
      {loading ? <div className="bg-[#FFFFFF] text-[#000000] font-bold min-w-screen h-screen flex items-center justify-center">Loading...</div> :
        <main className="flex min-h-screen w-screen bg-[#f6f7fb]">
          <div className='flex min-w-[50%] h-screen'>
            <Image src="/signup.jpg" width={600} height={500} alt="education" className='object-fill h-screen w-[80%]' />
          </div>
          <div className='flex min-w-[50%] h-screen justify-center items-center'>
            <div className='flex flex-col p-[30px] justify-start items-start gap-y-[10px] m-[0]'>
              <div className='flex'>
                <button onClick={() => router.push('/login')} className='py-[10px] px-[15px] justify-center items-center text-[#00000] font-bold rounded-[10px] underline decoration-wavy'>Log in</button>
                <button onClick={() => router.push(`/signup`)} className='py-[10px] px-[15px] justify-center items-center text-[#586380] font-bold rounded-[10px]'>Sign up</button>
              </div>
              <h3>email</h3>
              <input type='text' placeholder='Enter email address' className='w-[450px] h-[5%] p-[20px]' onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))} />

              <h3>password</h3>
              <div className='bg-[#ffffff] w-[450px] h-[5%] p-[20px] flex justify-between items-center'>
                <input type={showHide ? 'text' : 'password'} placeholder='••••••••' onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))} />
                <button onClick={() => setShowHide(!showHide)}>{showHide ? 'Show' : 'Hide'}</button>
              </div>
              <button onClick={() => Loading()} className='bg-[#586380] w-[450px] h-[5%] p-[15px] text-[#FFFFFF] mt-[20px]'>Log in</button>
              <a href='/' className='text-[#586380] flex justify-center items-center w-[450px] h-[5%] gap-[10px]'>Go Back to Homepage</a>
            </div>
          </div>
        </main>}
    </>
  )
}

export default login;

/*
<div className='flex justify-center items-center text-[#000000] font-bold'>
              <IoIosArrowBack />
              <h1>Back</h1>
              </div>
*/