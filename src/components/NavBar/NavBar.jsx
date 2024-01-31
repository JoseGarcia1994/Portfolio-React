import { useState } from 'react';
import SocialIcons from './SocialIcons.jsx';
import styles from './NavBar.module.css';
import Nav from './Nav.jsx';
import MobileMenue from './MobileMenue.jsx';

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const openNav = () => {
    setOpenMenu(true)
  }

  const closeNav = () => {
    setOpenMenu(false)
  }

  return (
    <header className={styles.navbarContainer}>
      <Nav />
      <SocialIcons />

      <button className={styles.mobileListBtn} onClick={openNav}><i className='bx bx-list-ul bx-md'></i></button>

      <MobileMenue openMenu={openMenu} closeNav={closeNav}/>
    </header>
  );
};

export default NavBar;