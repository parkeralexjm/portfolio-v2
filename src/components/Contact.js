import React from 'react'
import profile from '../images/Aparker.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { colorVariants } from './utilities/helper'

const ContactLinks = ({ children, href, color }) => {
  return (
    <a className={`flex items-center mb-1 text-lg md:text-xl relative ${colorVariants.transition[color]} after:absolute after:h-[3px] after:w-0 after:bottom-[-3px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function Contact() {
  return (
    <section id='contact' name="contact">
      <div className='flex flex-col items-center p-12 group'>
        <h2 className='mb-6 text-4xl'>CONTACT</h2>
        <span className='w-[50px] h-[10px] bg-teal-500 rounded mb-6  group-hover:w-[150px] group-hover:h-[5px] group-hover:mt-[5px] transition-all ease-in-out duration-1000'></span>
        <img className='w-40 h-40 mb-6 border-2 border-white rounded-full shadow-xl' src={profile} alt="Alex Parker" />
        <div className='container flex items-center justify-between w-full max-w-[400px]'>
          <ContactLinks href="https://www.linkedin.com/in/parkeralexjm/" color='red'>Linkedin<i className="ml-1 devicon-linkedin-plain"></i></ContactLinks>
          <ContactLinks href="https://github.com/parkeralexjm" color='red'>Github<i className="ml-1 devicon-github-original"></i></ContactLinks>
          <ContactLinks href="mailto:parkeralexjm@gmail.com" color='red'>Email<FontAwesomeIcon className='ml-1' icon={faEnvelope} /></ContactLinks>
        </div>
      </div>
    </section>
  )
}

export default Contact