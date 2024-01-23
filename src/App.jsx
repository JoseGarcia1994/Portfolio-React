import { useState, useEffect } from 'react';
import {projects} from './data';
import NavBar from './components/NavBar.jsx';
import Presentation from './components/Presentation.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import './App.css'

function App() {

  const [filter, setFilter] = useState('');
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    if (filter) {
      const filterProject = projects.filter( project => project.school === filter || project.teacher === filter)
      setFilterProjects(filterProject);
    }
  }, [filter])

  return (
    <>
      <div id="home" className='home'>
        <NavBar />
        <Presentation />
      </div>

      <div id="skills" className="skills">
        <Skills />
      </div>

      <section id="projects" className='prject'>
        <Projects 
          filter={filter}
          setFilter={setFilter}
          filterProjects={filterProjects} 
        />
      </section>
    </>
  )
}

export default App
