import NavBar from './components/NavBar/NavBar.jsx';
import Presentation from './components/Presentation.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import HomeSection from './components/Home/HomeSection.jsx';
import EducationSection from './components/Education/EducationSection.jsx';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer.jsx';

function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className='App'>
      <NavBar />
      <body className='body'>
        <HomeSection />
        <div className='wrapper'>
          <Skills />
          <EducationSection />
        </div>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <div className='wrapper'>
          <Contact />
        </div>
        <Footer />
      </body>
      {/* <div id="home" className='home'>
        <NavBar />
        <HomeSection />
      </div>

      <div id="skills" className="skills">
        <Skills />
      </div>

      <div id="projects" className='prject'>
        <Projects
          filter={filter}
          setFilter={setFilter}
          filterProjects={filterProjects}
        />
      </div>

      <div className="contact" id="contact">
        <Contact />
      </div> */}
    </div>
  )
}

export default App
