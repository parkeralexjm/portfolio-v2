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
    { name: 'Material UI', image: 'devicon-materialui-plain' },
    { name: 'Python', image: 'devicon-python-plain' },
    { name: 'django', image: 'devicon-django-plain' },
    { name: 'PostgreSQL', image: 'devicon-postgresql-plain' },
    { name: 'Git', image: 'devicon-git-plain' },
    { name: 'Heroku', image: 'devicon-heroku-plain' },
    { name: 'Figma', image: 'devicon-figma-plain' },
    { name: 'VS Code', image: 'devicon-vscode-plain' }
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
              skills.map(({ name, image }, index) => {
                return (
                  <div key={index}>
                    <i class={image}></i>
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