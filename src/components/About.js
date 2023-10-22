import React from 'react'

function About() {

  const skills = [
    { name: 'JavaScript', image: 'devicon-javascript-plain' },
    { name: 'CSS3', image: 'devicon-css3-plain' },
    { name: 'HTML5', image: 'devicon-html5-plain' },
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
    { name: 'Git', image: 'devicon-git-plain' },
    { name: 'Heroku', image: 'devicon-heroku-plain' },
    { name: 'Figma', image: 'devicon-figma-plain' },
    { name: 'VS Code', image: 'devicon-vscode-plain' }
  ]
  return (
    <section id='about' className='flex justify-center p-12 bg-gray-100'>
      <div className='container flex flex-col items-center'>
        <h2 className='mb-6 text-4xl'>ABOUT ME</h2>
        <span className='w-[50px] h-[10px] bg-yellow-400 rounded mb-6'></span>
        <div className='flex flex-col justify-center'>
          <div className='mb-6'>
            <h3 className='text-xl'>My Journey</h3>
            <p className='text-justify'>Having worked as a teacher for the last 7 years I am seeking to change to a career as a software developer.</p>
            <p className='text-justify'>As a passionate and versatile software engineer, my journey has taken me from the classroom to coding, blending the precision and problem-solving skills honed as a teacher with a profound love for technology.</p>
          </div>
          <div className='flex flex-wrap justify-center mb-6'>
            {
              skills.map(({ name, image }, index) => {
                return (
                  <div key={index} className='flex flex-col items-center justify-center w-24 h-24 m-2 bg-gray-200 rounded shadow-md'>
                    <i className={`${image} text-5xl my-2`}></i>
                    <h5>{name}</h5>
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