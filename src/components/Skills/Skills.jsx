import Container from "./Container.jsx";
import Frontend from "./Frontend.jsx";
import LearningPlace from '../Education/Courses.jsx';
import Backend from "./Backend.jsx";
import Tools from "./Tools.jsx";
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <>
      <h1 className={styles.title} id="skills">MY <span>Skills</span></h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsContentContainer}>
          <Container>
            <Backend />
          </Container>

          <Container>
            <Tools />
          </Container>

          <Container>
            <Frontend />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Skills;