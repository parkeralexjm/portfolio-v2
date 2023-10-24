import collect from '../../images/projects/collect.PNG'
import gourmet from '../../images/projects/gourmet.PNG'
import everyday from '../../images/projects/everyday.PNG'
import pacman from '../../images/projects/pacman.PNG'
import weather from '../../images/projects/weather.PNG'
import collectMobile from '../../images/projects/collect-mobile.PNG'
import gourmetMobile from '../../images/projects/gourmet-mobile.PNG'
import everydayMobile from '../../images/projects/everyday-mobile.PNG'
import pacmanMobile from '../../images/projects/pacman-mobile.png'
import weatherMobile from '../../images/projects/weather-mobile.PNG'

export const projects = [
  {
    name: 'Collect.BG',
    image: collect,
    mobileImage: collectMobile,
    link: 'http://collect-bg-229e9688a986.herokuapp.com/',
    github: 'https://github.com/parkeralexjm/collect-bg',
    description: 'Built using Django, PostgreSQL and React; Collect.BG is a board-game collection website where users can send chat messages, follow other users and display their board game collections.',
    technologies: [
      { image: 'devicon-javascript-plain' },
      { image: 'devicon-html5-plain' },
      { image: 'devicon-css3-plain' },
      { image: 'devicon-react-original' },
      { image: 'devicon-sass-plain' },
      { image: 'devicon-bootstrap-plain' },
      { image: 'devicon-python-plain' },
      { image: 'devicon-django-plain' },
      { image: 'devicon-postgresql-plain' },
      { image: 'devicon-heroku-plain' },
      { image: 'devicon-figma-plain' }
    ]
  },
  {
    name: 'Gourmet Gossip',
    image: gourmet,
    mobileImage: gourmetMobile,
    link: 'https://gourmet-gossip-665d7e750e14.herokuapp.com/',
    github: 'https://github.com/parkeralexjm/gourmet-gossip',
    description: 'A recipe sharing website where users can create, edit and delete recipes and leave reviews for recipes that they enjoy.',
    technologies: [
      { image: 'devicon-javascript-plain' },
      { image: 'devicon-html5-plain' },
      { image: 'devicon-css3-plain' },
      { image: 'devicon-react-original' },
      { image: 'devicon-sass-plain' },
      { image: 'devicon-express-original' },
      { image: 'devicon-nodejs-plain' },
      { image: 'devicon-mongodb-plain' },
      { image: 'devicon-heroku-plain' }
    ]
  },
  {
    name: 'Everyday Alchemy',
    image: everyday,
    mobileImage: everydayMobile,
    link: 'https://everyday-alchemy.netlify.app/',
    github: 'https://github.com/parkeralexjm/everyday-alchemy',
    description: 'A cocktail recipe database allowing users to search for their favourite cocktails and filter by spirit to find new ones.',
    technologies: [
      { image: 'devicon-javascript-plain' },
      { image: 'devicon-html5-plain' },
      { image: 'devicon-css3-plain' },
      { image: 'devicon-react-original' }
    ]
  },
  {
    name: 'Pacman clone',
    image: pacman,
    mobileImage: pacmanMobile,
    link: 'https://parkeralexjm.github.io/puckman-clone/',
    github: 'https://github.com/parkeralexjm/puckman-clone',
    description: 'I was given one week to complete a grid-based game using javaScript, HTML and CSS. This is a "faithful" reproduction of the classic Pac-man game.',
    technologies: [
      { image: 'devicon-javascript-plain' },
      { image: 'devicon-html5-plain' },
      { image: 'devicon-css3-plain' }
    ]
  },
  {
    name: 'Weather app',
    image: weather,
    mobileImage: weatherMobile,
    link: 'https://parkeralexjm.github.io/weather-app/',
    github: 'https://github.com/parkeralexjm/weather-app',
    description: 'A weather display app showing the forecasted weather in searchable locations.',
    technologies: [
      { image: 'devicon-javascript-plain' },
      { image: 'devicon-html5-plain' },
      { image: 'devicon-css3-plain' }
    ]
  }
]