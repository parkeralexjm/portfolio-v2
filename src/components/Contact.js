import React from 'react'
import profile from '../images/Aparker.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id='contact'>
      <div className='flex flex-col items-center p-12 '>
        <h2 className='mb-6 text-4xl'>CONTACT</h2>
        <span className='w-[50px] h-[10px] bg-teal-500 rounded mb-6'></span>
        <img className='w-40 h-40 mb-6 border-2 border-white rounded-full shadow-xl' src={profile} alt="Alex Parker" />
        <div className='container flex items-center justify-between w-full max-w-[400px]'>
          <a className='flex items-center mb-1 text-lg md:text-xl' href="https://www.linkedin.com/in/parkeralexjm/">
            Linkedin<i className="ml-1 devicon-linkedin-plain"></i>
          </a>
          <a className='flex items-center mb-1 text-lg md:text-xl' href="https://github.com/parkeralexjm">
            Github<i className="ml-1 devicon-github-original"></i>
          </a>
          <a className='flex items-center mb-1 text-lg md:text-xl' href="mailto:parkeralexjm@gmail.com">
            Email<FontAwesomeIcon className='ml-1' icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact