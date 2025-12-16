import React from 'react'

const Navbar = () => {
  return (
    <header className='border-b border-slate-800'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-4 py-4'> 
        <div className='flex items-center gap-2'>
            <div className='bg-indigo-500 h-8 w-8 flex items-center justify-center font-bold rounded-xl text-white'>FJ</div>
             <span className='font-semibold text-lg uppercase'>Matchin Learing</span>
        </div>

        <nav className='hidden md:flex gap-6 text-sm text-slate-300'>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about"> About </a>         
        </nav>

        <button className='px-4 py-2 text-sm font-medium border border-indigo-500 hover:bg-indigo-500/10 rounded-full '>
          Sign In
        </button>

      </div>


    </header>
  )
}

export default Navbar