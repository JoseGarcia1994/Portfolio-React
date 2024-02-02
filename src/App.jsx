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
import Wrapper from './components/Wrapper.jsx';
import Body from './components/Body.jsx';

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
      </Body>
    </div>
  )
}

export default App
