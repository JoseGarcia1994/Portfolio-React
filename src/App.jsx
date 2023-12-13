import './App.css'
import NavBar from './components/NavBar.jsx';
import Presentation from './components/Presentation.jsx';
import Skills from './components/Skills.jsx';

function App() {

  return (
    <>
      <div className='home'>
        <NavBar />
        <Presentation />
      </div>

      <div id="skills" className="skills">
        <Skills />
      </div>

    </>
  )
}

export default App
