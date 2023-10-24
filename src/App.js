// Component Imports
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <>
      <div className='parallax'>
        <div className='scroll-smooth'>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
