import React from 'react'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll'

function Hero() {
  return (
    <section id='hero' className='relative text-center h-[60vh] md:min-h-[400px] md:h-[calc(100vh-68px)] 2xl:max-h-[1440px] flex items-center justify-center'>
      <div className='container mx-16'>
        <h1 className='text-5xl font-bold transition-colors duration-300 mb-14 lg:text-6xl xl:text-7xl dark:text-gray-300'>ALEX&nbsp;PARKER</h1>
        <h4 className='text-2xl transition-colors duration-300 lg:text-3xl dark:text-gray-300'>A full-stack web developer aspiring to build innovative web applications</h4>
      </div >
      <Link to='about' smooth duration={750}>
        <div className="h-5 arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </section >
  )
}

export default Hero