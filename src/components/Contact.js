import React from 'react'
import profile from '../images/Aparker.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id='contact'>
      <div>
        <div className='flex flex-col'>
          <h2>CONTACT</h2>
          <img className='rounded-full h-40 w-40' src={profile} alt="Alex Parker" />
          <div className='flex'>
            <a href="https://www.linkedin.com/in/parkeralexjm/">
              <img className='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedin' />
              Linkedin
            </a>
            <a href="https://github.com/parkeralexjm">
              <img className='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
              Github
            </a>
            <a href="mailto:parkeralexjm@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact