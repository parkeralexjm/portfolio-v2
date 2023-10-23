import React from 'react'

function Hero() {
  return (
    <section id='hero' className='relative text-center h-[60vh] md:h-[calc(100vh-68px)] 2xl:max-h-[1440px] flex items-center justify-center'>
      <div className='container mx-16'>
        <h1 className='text-5xl font-bold mb-14 lg:text-6xl xl:text-7xl'>ALEX&nbsp;PARKER</h1>
        <h4 className='text-2xl lg:text-3xl'>A full-stack web developer aspiring to build innovative web applications</h4>
      </div >
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section >
  )
}

export default Hero