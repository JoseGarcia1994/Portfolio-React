import styles from './Footer.module.css';
import {profile} from '../data';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerContent}>
        <h1 className={styles.footerLogo}></h1>
        <nav className={styles.nav}>
          <a className={styles.navLinks} href="#home">Home</a>
          <a className={styles.navLinks} href="#skills">Skills</a>
          <a className={styles.navLinks} href="#education">Education</a>
          <a className={styles.navLinks} href="#projects">Projects</a>
          <a className={styles.navLinks} href="#contact">Contact</a>
        </nav>
        <div className={styles.socialIcons}>
          <a className={styles.socialIcon} href={profile.github}>
            <i className={`bx bxl-github bx-sm ${styles.github}`}></i>
          </a>
          <a className={styles.socialIcon} href={profile.linkedin}>
          <i className={`bx bxl-linkedin-square bx-sm ${styles.linkedin}`}></i>
          </a>
        </div>
        <p className={styles.copyright}>&copy; 2023 Jose Garcia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;