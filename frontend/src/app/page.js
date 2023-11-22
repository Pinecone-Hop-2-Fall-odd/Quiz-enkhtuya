import Cards from '@/components/Cards'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">
        <NavBar />
        <div className='flex flex-col justify-start items-center p-[5%] mt-[160px]'>
          <Cards />
        </div>
    </main>
  )
}
