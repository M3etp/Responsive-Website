import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex sm:flex-row flex-col gap-5 items-center my-11 pb-11 justify-between mx-5'>
        <div className='flex flex-col gap-6'>
            <div className=' flex gap-2 items-center'>
                <img
                    src='/navbar-logo.png'
                    className=' h-[40px] w-[40px]'
                />
                <h1 className=' font-bold text-2xl'>Travlog</h1>
            </div>
            <p className=' sm:w-[450px] w-auto md:text-[18px] text-[14px] text-[#191825] opacity-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            <div>
                <img 
                    src='/footer.png'
                    className=' mt-5'
                />
            </div>
        </div>
        <div className='flex justify-between w-auto sm:gap-24 gap-7 self-baseline'>
            <div className='flex flex-col gap-7'>
                <h4 className='md:text-[19px] text-[15px] font-bold'>Company</h4>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>About</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>Career</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>Mobile</p>
            </div>
            <div className='flex flex-col gap-7'>
                <h4 className='md:text-[19px] text-[15px] font-bold'>Contact</h4>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>Why Travlog?</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>Partner with us</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>FAQ's</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>Blog</p>
            </div>
            <div className='flex flex-col gap-7'>
                <h4 className='md:text-[19px] text-[15px] font-bold'>Meet us</h4>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>+91 8140323248</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px]'>info@travlog.com</p>
                <p className='text-[#191825] opacity-50 md:text-[18px] text-[14px] w-[125px]'>201, Abc tower, Bhavnagar</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer