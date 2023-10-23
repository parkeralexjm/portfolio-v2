import React from 'react'
import general from '../images/experience/general.png'
import acs from '../images/experience/acs.png'
import chobham from '../images/experience/chobham.png'

function Experience() {
  const experience = [
    { name: 'General Assembly', logo: general, position: 'Software Engineering Immersive Student', dates: 'July 2023 - Oct 2023', description: 'Studying with General Assembly has strengthened my software development experience in HTML, JavaScript, Python, CSS and React. Our experience consists of daily stand ups, lessons, labs, paired and group coding tasks over a full-time 12 week period.' },
    { name: 'The Astley Cooper School', logo: acs, position: 'KS5 Coordinator', dates: 'Jun 2020 - Aug 2023', description: "Automated the department data entry systems to streamline teacher experience giving directed feedback. Mentored a school's direct trainee to achieve their qualified teacher status. Led evening tutoring sessions for students outside of regular teaching hours." },
    { name: 'Harris Academy Chobham', logo: chobham, position: 'Deputy Head Of Department', dates: 'Sep 2016 - Mar 2020', description: 'Oversaw multiple departments and conducted skills, student and product training for 80 staff. Planned and managed educational trips of 180+ students to various London museums. Trained new staff and implemented processes to ensure successful integration of newly qualified teachers.' }
  ]
  return (
    <section id='experience'>
      <div className='flex flex-col items-center p-8 '>
        <h2 className='mb-6 text-4xl'>EXPERIENCE</h2>
        <span className='w-[50px] h-[10px] bg-red-500 rounded mb-6'></span>
        {
          experience.map(({ name, logo, position, dates, description }, index) => {
            return (
              <div key={index} className='p-6 mb-6 bg-gray-100 rounded-md md:max-w-[800px] md:flex md:flex-row-reverse md:items-center'>
                <div className='flex justify-center md:w-72'>
                  <img src={logo} alt={name} className={'mb-4 h-20 md:mb-0 md:h-24 ' + (name === 'Harris Academy Chobham' && 'bg-blue-950 md:h-16 md:w-36 rounded p-1')} />
                </div>
                <div className='md:flex-grow md:pr-8'>
                  <h3 className='font-bold'>{position}</h3>
                  <h4 className='font-semibold'>{name}</h4>
                  <h5>{dates}</h5>
                  <p className='text-sm text-justify'>{description}</p>
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