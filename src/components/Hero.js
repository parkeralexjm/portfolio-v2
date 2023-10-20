import React from 'react'

function Hero() {
  return (
    <section id='hero' className='text-center h-[60vh] md:h-[calc(100vh-68px)] bg-gray-400 flex items-center justify-center'>
      <div className='container mx-16'>
        <h1 className='text-5xl font-bold mb-14'>ALEX&nbsp;PARKER</h1>
        <h4 className='text-2xl'>A full-stack web developer aspiring to build innovative web applications</h4>
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div >
    </section >
  )
}

export default Hero