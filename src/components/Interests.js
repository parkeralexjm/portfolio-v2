import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faGamepad, faCode } from '@fortawesome/free-solid-svg-icons'

function Interests() {

  return (
    <section id='interests' name='interests' className='justify-center p-6 md:p-12 containerflex'>
      <div className='flex flex-col items-center transition-colors duration-300 bg-gray-100 dark:bg-gray-800 p-9 md:p-16 2xl:px-28 group '>
        <h2 className='mb-6 text-4xl dark:text-gray-200'>INTERESTS</h2>
        <span className='w-[50px] h-[10px] bg-yellow-500 rounded mb-6 group-hover:w-[150px] group-hover:h-[5px] group-hover:mt-[5px] transition-all ease-in-out duration-1000'></span>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col items-center mb-6 lg:basis-1/3'>
            <FontAwesomeIcon className='mb-4 text-5xl dark:text-gray-200' icon={faCode} />
            <p className='mx-4 mb-4 text-justify dark:text-gray-200'>Currently I'm learning Typescript! I'm picking it up to enhance the maintainability of my JavaScript code while pushing the boundaries of my JavaScript knowledge.</p>
          </div>
          <div className='flex flex-col items-center mb-6 lg:basis-1/3'>
            <FontAwesomeIcon className='mb-4 text-5xl dark:text-gray-200' icon={faGamepad} />
            <p className='mx-4 mb-4 text-justify dark:text-gray-200'>I enjoy playing video games and have a great interest in the game design space. Having started playing Super Mario World with my grandfather at age 5, I've barely put down the controller and now forms a larger part of my socialisation as I play with a group of friends that I have known since secondary school.</p>
          </div>
          <div className='flex flex-col items-center mb-6 lg:basis-1/3'>
            <FontAwesomeIcon className='mb-4 text-5xl dark:text-gray-200' icon={faDice} />
            <p className='mx-4 mb-4 text-justify dark:text-gray-200'>I also love to connect with people playing board games. I enjoy the blend of strategic thinking and social interaction that is sometimes missing from playing online video games. It also helps that I can get my wife involved too, our current favourites are Everdell and Terraforming Mars.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests