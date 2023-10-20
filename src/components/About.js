import React from 'react'

function About() {

  const skills = [
    { name: 'javaScript', image: 'devicon-javascript-plain' }
  ]
  return (
    <section id='about' className=''>
      <div className='flex flex-col items-center'>
        <h2>ABOUT ME</h2>
        <span className='w-[50px] h-[10px] bg-yellow-400 rounded'></span>
        <div>
          <div>
            <h3>My Journey</h3>
            <p>Having worked as a teacher for the last 7 years I am seeking to change to a career as a software developer.</p>
            <p>As a passionate and versatile software engineer, my journey has taken me from the classroom to coding, blending the precision and problem-solving skills honed as a teacher with a profound love for technology.</p>
          </div>
          <div>
            {
              skills.map((skill, index) => {
                return (
                  <div key={index}>
                    <i class={skill.image}></i>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About