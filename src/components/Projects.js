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
import { colorVariants } from './utilities/helper'

function Projects() {
  const projects = [
    { name: 'Collect.BG', image: collect, mobileImage: collectMobile, link: 'http://collect-bg-229e9688a986.herokuapp.com/', github: 'https://github.com/parkeralexjm/collect-bg', description: 'Built using Django, PostgreSQL and React; Collect.BG is a board-game collection website where users can send chat messages, follow other users and display their board game collections.' },
    { name: 'Gourmet Gossip', image: gourmet, mobileImage: gourmetMobile, link: 'https://gourmet-gossip-665d7e750e14.herokuapp.com/', github: 'https://github.com/parkeralexjm/gourmet-gossip', description: 'A recipe sharing website where users can create, edit and delete recipes and leave reviews for recipes that they enjoy.' },
    { name: 'Everyday Alchemy', image: everyday, mobileImage: everydayMobile, link: 'https://everyday-alchemy.netlify.app/', github: 'https://github.com/parkeralexjm/everyday-alchemy', description: 'A cocktail recipe database allowing users to search for their favourite cocktails and filter by spirit to find new ones.' },
    { name: 'Pacman clone', image: pacman, mobileImage: pacmanMobile, link: 'https://parkeralexjm.github.io/puckman-clone/', github: 'https://github.com/parkeralexjm/puckman-clone', description: 'I was given one week to complete a grid-based game using javaScript, HTML and CSS. This is a "faithful" reproduction of the classic Pac-man game.' },
    { name: 'Weather app', image: weather, mobileImage: weatherMobile, link: 'https://parkeralexjm.github.io/weather-app/', github: 'https://github.com/parkeralexjm/weather-app', description: 'A weather display app showing the forecasted weather in searchable locations.' }
  ]

  const LinkButton = ({ children, href, color, outline = false, }) => {
    const buttonLayoutClasses = 'px-3 py-1 border rounded'
    if (outline) {
      return (
        <a className={`
        ${buttonLayoutClasses} 
        ${colorVariants.border[color]} 
        ${colorVariants.text[color]} 
        ${colorVariants.hoverbg[color]}
        `} href={href} target="_blank" rel="noreferrer noopener">{children}</a>
      )
    } else {
      return (
        <a className={`${buttonLayoutClasses} ${colorVariants.bg[color]} hover:brightness-75 transition ease-in-out duration-300`} href={href} target="_blank" rel="noreferrer noopener">{children}</a>
      )
    }
  }

  return (
    <section id='projects' className='flex justify-center p-12 my-48 bg-gray-100'>
      <div className='container flex flex-col items-center lg:p-12'>
        <h2 className='mb-6 text-4xl'>PROJECTS</h2>
        <span className='w-[50px] h-[10px] bg-yellow-500 rounded mb-6'></span>
        <div className='lg:flex lg:flex-wrap lg:justify-center'>
          {
            projects.map(({ name, image, mobileImage, link, github, description }, index) => {
              return (
                <div key={index} className="flex flex-col items-center mb-6 lg:basis-1/2 lg:p-4">
                  <h3 className='mb-3 text-2xl'>{name}</h3>
                  <div className='relative p-2 mb-5 bg-gray-400 border-2 border-gray-700 border-solid rounded-lg shadow-xl w-7/8'>
                    <img className='' src={image} alt={name} />
                    <div className='absolute bottom-0 w-1/4 p-1 bg-gray-400 border-2 border-gray-700 border-solid rounded-sm shadow-xl right-4'>
                      <img className='' src={mobileImage} alt={'mobile' + { name }} />
                    </div>
                  </div>
                  <div className='flex flex-col items-center mb-4'>
                    <div className='flex items-center justify-around w-full mb-3'>
                      <LinkButton color='teal' href={link}>Live link</LinkButton>
                      <LinkButton color='red' href={github} outline={true}>Github <i className="devicon-github-original colored"></i></LinkButton>
                    </div>
                    <p className='text-justify'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects