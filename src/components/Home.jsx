import React from 'react'

function Home() {
  return (
    <>
        <main className=' py-[100px] md:flex md:flex-row md:items-center md:justify-between flex flex-col-reverse'>
            <div className=' px-2 flex flex-col gap-5 '>
                <button className=' bg-white px-[32px] py-[16px] rounded-full shadow-sm font-bold text-pink-500 self-start'>Explore the world! 👜</button>
                <h1 className=' text-5xl md:text-7xl font-bold'>
                Travel <span className=' text-pink-500'>top destination</span> of the World
                </h1>
                <p className='md:text-[18px] text-[14px] text-[#191825] opacity-50'>We always make our customer happy by providing as many choices as possible </p>
               <div className=' flex gap-3'>
               <button className=' shadow-lg self-start md:h-[49px] h-[37px] rounded-full md:px-[32px] px-[20px] font-bold text-sm bg-purple-500 text-white hover:scale-110 '>Get Started</button>
                <button className=' shadow-lg self-start md:h-[49px] h-[37px] rounded-full md:px-[32px] px-[20px] font-bold text-sm bg-white hover:scale-110 '>Watch Demo ▶️</button>
               </div>
            </div>
            <img 
                src='/main-home.png'
                className=' w-[672px] m-auto'
            />
        </main>
    </>
  )
}

export default Home