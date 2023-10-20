import React from 'react'
import profile from '../images/Aparker.jpg'

function Contact() {
  return (
    <section id='contact'>
      <div>
        <div className='flex flex-col'>
          <h2>CONTACT</h2>
          <img src={profile} alt="Alex Parker" />
          <div>
            <a href="https://www.linkedin.com/in/parkeralexjm/">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedin' />
            </a>
            <a href="https://github.com/parkeralexjm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
            </a>
            <a href="mailto:parkeralexjm@gmail.com">Email</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact