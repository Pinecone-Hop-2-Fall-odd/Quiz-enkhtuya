import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
        <NavBar />
        <div className='flex flex-col justify-start items-start p-[5%] mt-[100px] w-full'>
          <div className='flex justify-center items-center bg-[#FFFFFF] w-[45%] h-[20%] p-[15px]'>
            <button className='bg-[#206be5] p-[10px] rounded-[20px] text-[#FFFFFF]'>Create Quiz! </button>
          </div>
          <Cards />
        </div>
    </main>
  )
}
