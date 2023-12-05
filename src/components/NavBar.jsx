import { navMenu } from '../data'
import { useState } from 'react';
import SocialIcons from './SocialIcons.jsx';

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const openNav = () => {
    setOpenMenu(true)
  }

  const closeNav = () => {
    setOpenMenu(false)
  }

  return (
    <header className="navbar-container">
      <div className="header-title">
        <h1>Jose Garcia</h1>
      </div>

      <nav id="nav" className="navbar">
        <ul className="navbar__links" id="links">
          {navMenu.map(link => (
            <li key={link.name}><a className='navbar__links-items'>{link.name}</a></li>
          ))}
        </ul>
      </nav>

      <SocialIcons />

      <button className="checkbtn" onClick={openNav}><i className='bx bx-list-ul bx-md'></i></button>

      <div className={openMenu ? "overlay-nav" : "overlay-nav-close"} id="mobile-menu">
        <div className="overlay-content">
          <a className="navbar__links-items choiced" href="#home" onClick={closeNav}>HOME</a>
          <a className="navbar__links-items" href="#skills" onClick={closeNav}>SKILLS</a>
          <a className="navbar__links-items" href="#projects" onClick={closeNav}>PROJECTS</a>
          <a className="navbar__links-items" href="#contact" onClick={closeNav}>CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;