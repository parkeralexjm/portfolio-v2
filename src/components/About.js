import React from 'react'

function About() {

  const skills = [
    { name: 'JavaScript', image: 'devicon-javascript-plain' },
    { name: 'HTML5', image: 'devicon-html5-plain' },
    { name: 'CSS3', image: 'devicon-css3-plain' },
    { name: 'React', image: 'devicon-react-original' },
    { name: 'MongoDB', image: 'devicon-mongodb-plain' },
    { name: 'express', image: 'devicon-express-original' },
    { name: 'Next.js', image: 'devicon-nextjs-plain' },
    { name: 'Node.js', image: 'devicon-nodejs-plain' },
    { name: 'Sass', image: 'devicon-sass-plain' },
    { name: 'Bootstrap', image: 'devicon-bootstrap-plain' },
    { name: 'MaterialUI', image: 'devicon-materialui-plain' },
    { name: 'Python', image: 'devicon-python-plain' },
    { name: 'django', image: 'devicon-django-plain' },
    { name: 'PostgreSQL', image: 'devicon-postgresql-plain' },
    { name: 'Tailwind', image: 'devicon-tailwindcss-plain' },
    // { name: 'Git', image: 'devicon-git-plain' },
    { name: 'Heroku', image: 'devicon-heroku-plain' },
    { name: 'Figma', image: 'devicon-figma-plain' },
    { name: 'VSCode', image: 'devicon-vscode-plain' }
  ]
  return (
    <section id='about' name='about' className='justify-center p-6 mb-24 md:p-12 containerflex'>
      <div className='flex flex-col items-center bg-gray-100 p-9 md:p-16 2xl:px-28 group '>
        <h2 className='mb-6 text-4xl'>ABOUT ME</h2>
        <span className='w-[50px] h-[10px] bg-teal-500 rounded mb-6 group-hover:w-[150px] group-hover:h-[5px] group-hover:mt-[5px] transition-all ease-in-out duration-1000'></span>
        <div className='flex flex-col lg:flex-row'>
          <div className='mb-6 lg:basis-1/2 lg:pr-6 lg:pt-2'>
            <p className='mb-3 text-justify'>Having worked as a teacher for the last 7 years I am seeking to change to a career as a software developer.</p>
            <p className='mb-3 text-justify'>As a passionate and versatile software engineer, my journey has taken me from the classroom to coding, blending the precision and problem-solving skills honed as a teacher with a profound love for technology.</p>
            <p className='hidden text-justify md:block'>Outside of software development, my interests in video games and cooking fuel my creativity, fostering a holistic approach to problem-solving. I am eager to contribute my diverse skills and enthusiasm for technology to a dynamic software engineering role, where I can make meaningful contributions and continue my professional growth.</p>
          </div>
          <div className='flex flex-wrap justify-center lg:basis-1/2'>
            {
              skills.map(({ name, image }, index) => {
                return (
                  <div key={index} className='flex flex-col items-center justify-center w-20 h-20 p-4 m-2 transition-all duration-700 ease-out bg-gray-200 rounded shadow-md odd:hover:shadow-yellow-500 even:hover:shadow-red-500'>
                    <i className={`${image} text-4xl mb-1`}></i>
                    <h5 className='text-sm'>{name}</h5>
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