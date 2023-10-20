import React from 'react'

function Hero() {
  return (
    <section id='hero' className='text-center h-[60vh] md:h-[calc(100vh-72px)] bg-gray-400 flex items-center justify-center'>
      <div className='mx-10'>
        <h1 className='text-4xl mb-5'>ALEX PARKER</h1>
        <h4 className='text-xl'>A full-stack web developer aspiring to build innovative web applications</h4>
      </div >
    </section >
  )
}

export default Hero