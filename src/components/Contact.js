import React from 'react'
import profile from '../images/Aparker.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id='contact'>
      <div className='flex flex-col items-center p-12 '>
        <h2 className='mb-6 text-4xl'>CONTACT</h2>
        <img className='w-40 h-40 rounded-full' src={profile} alt="Alex Parker" />
        <div className='container flex justify-around w-2/3 mt-4'>
          <a href="https://www.linkedin.com/in/parkeralexjm/">
            Linkedin<i className="ml-1 devicon-linkedin-plain"></i>
          </a>
          <a href="https://github.com/parkeralexjm">
            Github<i className="ml-1 devicon-github-original"></i>
          </a>
          <a href="mailto:parkeralexjm@gmail.com">
            Email<FontAwesomeIcon className='ml-1' icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact