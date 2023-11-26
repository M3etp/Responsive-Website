import React from 'react'

function ServiceCard({emoji, heading, para}) {
  return (
    <div className='bg-white rounded-xl flex flex-col items-center justify-center md:h-[443px] md:px-[35px] h-[300px] px-[25px] gap-6 '>
        <p className='text-[64px] pb-5'>{emoji}</p>
        <h2 className=' text-[28px] font-bold'>{heading}</h2>
        <p className='w-[222px] text-black opacity-50 text-center'>{para}</p>
    </div>
  )
}

export default ServiceCard