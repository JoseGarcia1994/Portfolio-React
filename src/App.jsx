import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import HomeSection from './components/Home/HomeSection.jsx';
import EducationSection from './components/Education/EducationSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import Wrapper from './components/Wrapper.jsx';
import Body from './components/Body.jsx';
import './App.css';
import ProjectModal from './components/Projects/ProjectModal.jsx';

function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className='App'>
      <NavBar />
      <Body>
        <HomeSection />
        <Wrapper>
          <Skills />
          <EducationSection />
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state && <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />}
      </Body>
    </div>
  )
}

export default App
