import React from 'react'

const Hero = () => {
  return (
    <section className='py-16 flex items-center justify-center'>
      {/* Left side of hero */}
      <div>
        <span className='border rounded-full px-2 py-1 border-indigo-500 inline-flex mb-4'>New AI Powered Landing Page</span>
        
        <h1 className='font-bold text-2xl md:text-5xl mb-4 '>Design Your Landing Page {" "} <span className='text-indigo-400'>in minute</span>.</h1>

        <p className='text-slate-300 mb-6'>
            FJ helps you build, launch and optimize high-converting landing
          pages with zero code using AI and smart components.
        </p>

        <div className='flex gap-5 flex-col sm:flex-row mb-4'>
            <button className='bg-blue-800 rounded-full px-6 py-3'>Get Stated Free</button>
            <button className='border rounded-full px-6 py-3'>Watch Demo</button>
        </div>

        <p className='text-xs text-slate-400'>No credit card required • 14-day free trial</p>
      </div>





      {/* Right side of hero*/}
      <div>
        <img className='w-[600px]' src="/public/images/hero-right.png" alt="" />
      </div>
    </section>
  )
}

export default Hero