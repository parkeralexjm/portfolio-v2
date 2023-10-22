import React from 'react'
import collect from '../images/projects/collect.PNG'
import gourmet from '../images/projects/gourmet.PNG'
import everyday from '../images/projects/everyday.PNG'
import pacman from '../images/projects/pacman.PNG'
import weather from '../images/projects/weather.PNG'
import collectMobile from '../images/projects/collect-mobile.PNG'
import gourmetMobile from '../images/projects/gourmet-mobile.PNG'
import everydayMobile from '../images/projects/everyday-mobile.PNG'
import pacmanMobile from '../images/projects/pacman-mobile.png'
import weatherMobile from '../images/projects/weather-mobile.PNG'

function Projects() {
  const projects = [
    { name: 'Collect.BG', image: collect, mobileImage: collectMobile, link: 'http://collect-bg-229e9688a986.herokuapp.com/', github: 'https://github.com/parkeralexjm/collect-bg', description: 'Built using Django, PostgreSQL and react; Collect.BG is a board-game collection website where users can send chat messages, follow other users and display their board game collections.' },
    { name: 'Gourmet Gossip', image: gourmet, mobileImage: gourmetMobile, link: 'https://gourmet-gossip-665d7e750e14.herokuapp.com/', github: 'https://github.com/parkeralexjm/gourmet-gossip', description: 'A recipe sharing website where users can create, edit and delete recipes and leave reviews for recipes that they enjoy.' },
    { name: 'Everyday Alchemy', image: everyday, mobileImage: everydayMobile, link: 'https://everyday-alchemy.netlify.app/', github: 'https://github.com/parkeralexjm/everyday-alchemy', description: 'A cocktail recipe database allowing users to search for their favourite cocktails and filter by spirit to find new ones.' },
    { name: 'Pacman clone', image: pacman, mobileImage: pacmanMobile, link: 'https://parkeralexjm.github.io/puckman-clone/', github: 'https://github.com/parkeralexjm/puckman-clone', description: 'I was given one week to complete a grid-based game using javascript, HTML and CSS. this is a "faithful" reproduction of the classic Pac-man game.' },
    { name: 'Weather app', image: weather, mobileImage: weatherMobile, link: 'https://parkeralexjm.github.io/weather-app/', github: 'https://github.com/parkeralexjm/weather-app', description: 'A weather display app showing the forecasted weather in searchable locations.' }
  ]

  return (
    <section id='projects' className='my-36'>
      <div className='flex flex-col items-center p-12 bg-gray-200'>
        <h2 className='mb-6 text-4xl'>PROJECTS</h2>
        <span className='w-[50px] h-[10px] bg-teal-500 rounded mb-6'></span>
        {
          projects.map(({ name, image, mobileImage, link, github, description }, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className='relative p-3 bg-gray-400 rounded-lg w-7/8'>
                  <img className='' src={image} alt={name} />
                  <div className='absolute bottom-0 w-20 p-2 bg-gray-400 rounded-sm right-5'>
                    <img className='' src={mobileImage} alt={'mobile' + { name }} />
                  </div>
                </div>
                <div className='flex flex-col items-center mb-4'>
                  <h3>{name}</h3>
                  <div className='flex items-center justify-around w-full'>
                    <a href={link} target="_blank" rel="noreferrer noopener">Live link</a>
                    <a href={github} target="_blank" rel="noreferrer noopener">Github <i className="devicon-github-original colored"></i></a>
                  </div>
                  <p className='text-justify'>{description}</p>
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