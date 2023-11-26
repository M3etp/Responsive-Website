import React from 'react'

function Newsletter() {
  return (
    <div className='h-[100vh] mt-20 bg-[#FACD49] bg-opacity-10 flex flex-col items-center justify-center'>
        <h2 className="text-pink-500 md:text-3xl text-lg font-bold tracking-widest">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <h2 className='sm:text-[55px] text-[26px] font-bold max-w-[80%] text-center pt-4'>
        Prepare yourself & let’s explore the beauty of the world
        </h2>
        <div className='flex flex-col sm:flex-row gap-10 w-full mt-8 justify-center mx-5'>
            <input type="email" className=' rounded mx-auto sm:mx-0 w-[300px] sm:w-[500px] text-[23px] py-[10px] px-[10px]' placeholder='Email'/>
            <button className=' self-center shadow-lg md:h-[49px] h-[37px] rounded-full md:px-[32px] px-[20px] font-bold text-sm bg-white hover:scale-110 '>Subscribe</button>

        </div>
    </div>
  )
}

export default Newsletter