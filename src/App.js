// Component Imports
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css';

function App() {
  return (
    <>
      <div className='parallax'>
        <div className=''>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
