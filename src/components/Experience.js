import React from 'react'
import general from '../images/experience/general.png'
import acs from '../images/experience/acs.png'
import chobham from '../images/experience/chobham.png'

function Experience() {
  const experience = [
    { name: 'General Assembly', logo: general, position: 'Software Engineering Immersive Student', dates: 'July 2023 - Oct 2023', description: 'Studying with General Assembly has strengthened my software development experience in HTML, JavaScript, CSS and React whilst exposing students to industry software and tools. Our experience consists of daily stand ups, lessons, labs, paired and group coding tasks over a full-time 12 week period.' },
    { name: 'The Astley Cooper School', logo: acs, position: 'KS5 Coordinator', dates: 'Jun 2020 - Aug 2023', description: "Automated the department data entry systems to streamline teacher experience giving directed feedback. Mentored a school's direct trainee to achieve their qualified teacher status. Led evening tutoring sessions for students outside of regular teaching hours." },
    { name: 'Harris Academy Chobham', logo: chobham, position: 'Deputy Head Of Department', dates: 'Sep 2016 - Mar 2020', description: 'Oversaw multiple departments and conducted skills, student and product training for 80 staff. Planned and managed educational trips of 180+ students to various London museums. Trained new staff and implemented processes to ensure successful integration of newly qualified teachers.' }
  ]
  return (
    <section id='experience'>
      <div>
        <h2>EXPERIENCE</h2>
        <span className='w-[50px] h-[10px] bg-red-400 rounded'></span>
        {
          experience.map(({ name, logo, position, dates, description }, index) => {
            return (
              <div key={index}>
                <div>
                  <img src={logo} alt={name} className={'h-20 ' + (name === 'Harris Academy Chobham' && 'bg-blue-950')} />
                </div>
                <div>
                  <h3>{position}</h3>
                  <h4>{name}</h4>
                  <h5>{dates}</h5>
                  <p>{description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience