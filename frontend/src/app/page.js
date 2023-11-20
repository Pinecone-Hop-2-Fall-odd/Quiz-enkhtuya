import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
        <NavBar />
        <div className='flex flex-col justify-start items-center p-[30px] mt-[100px]'>
          <div className='flex flex-col justify-center items-start p-[20px] gap-[10px] bg-[#FFFFFF]'>
            <h1>Subject Name</h1>
            <h7 className='rounded-[30px] bg-[#ecefff]'>20 questions</h7>
            <div className='flex justify-center items-center gap-[10px]'>
              <img src='./avatar0.webp' alt='avatar' height={40} width={40} className='rounded-[50%]'/>
              <p>user account</p>
              <button className='bg-[#FFCD1F] p-[10px]'>preview</button>
            </div>
          </div>
        </div>
    </main>
  )
}
