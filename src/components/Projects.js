import React from 'react'
import collect from '../images/projects/collect.PNG'
import gourmet from '../images/projects/gourmet.PNG'
import everyday from '../images/projects/everyday.PNG'
import pacman from '../images/projects/pacman.PNG'
import weather from '../images/projects/weather.PNG'

function Projects() {
  const projects = [
    { name: 'Collect.BG', image: collect, link: 'http://collect-bg-229e9688a986.herokuapp.com/', github: 'https://github.com/parkeralexjm/collect-bg' },
    { name: 'Gourmet Gossip', image: gourmet, link: 'https://gourmet-gossip-665d7e750e14.herokuapp.com/', github: 'https://github.com/parkeralexjm/gourmet-gossip' },
    { name: 'Everyday Alchemy', image: everyday, link: 'https://everyday-alchemy.netlify.app/', github: 'https://github.com/parkeralexjm/everyday-alchemy' },
    { name: 'Pacman clone', image: pacman, link: 'https://parkeralexjm.github.io/puckman-clone/', github: 'https://github.com/parkeralexjm/puckman-clone' },
    { name: 'Weather app', image: weather, link: 'https://parkeralexjm.github.io/weather-app/', github: 'https://github.com/parkeralexjm/weather-app' }
  ]

  return (
    <section id='projects'>
      <div className='flex flex-col items-center'>
        <h2>PROJECTS</h2>
        <span className='w-[50px] h-[10px] bg-teal-500 rounded'></span>
        {
          projects.map(({ name, image, link, github }, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <img src={image} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <a href={link}>Link</a>
                  <a href={github}><i class="devicon-github-original colored"></i></a>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects