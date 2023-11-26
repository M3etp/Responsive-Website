import React from 'react'

function Navbar() {
  return (
    <nav className='h-[113px] flex justify-between items-center px-4 md:px-0'>
        <div className=' md:hidden'>
            <img 
                src='/menu-icon.png'
                className=' w-[30px]'
            />
        </div>
        <div className=' flex gap-2 items-center'>
            <img
                src='/navbar-logo.png'
                className=' h-[40px] w-[40px]'
            />
            <h1 className=' font-bold text-2xl'>Travlog</h1>
        </div>
        <div className='md:flex justify-between gap-5 hidden items-center text-sm font-bold'>
            <a href='#'>Home</a>
            <a href='#'>Discover</a>
            <a href='#'>Special Deals</a>
            <a href='#'>Contact</a>
        </div>
        <div className='hidden sm:flex'>
            <button className=' bg-transparent rounded-full w-[105px] h-[50px] font-bold text-sm hover:scale-125'>Log In</button>
            <button className=' rounded-full w-[105px] h-[50px] font-bold text-sm bg-purple-500 text-white hover:scale-110'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar