import styles from './MobileMenue.module.css';

const MobileMenue = ({openMenu, closeNav}) => {
  return (
    <div className={`${openMenu ? styles.overlayNav : styles.overlayNavClose}`} id="mobile-menu">
      <div className={styles.overlayContent}>
        <a href="#home" onClick={closeNav}>HOME</a>
        <a href="#skills" onClick={closeNav}>SKILLS</a>
        <a href="#projects" onClick={closeNav}>PROJECTS</a>
        <a href="#contact" onClick={closeNav}>CONTACT</a>
      </div>
    </div>
  );
};

export default MobileMenue;