import Courses from "./Courses.jsx";
import styles from "./EducationSection.module.css";

const EducationSection = () => {
  return (
    <div className={styles.education} id="education">
      <div className={styles.educationContainer}>
        <div className={styles.educationTitle}>
          Education
        </div>
        <p className={styles.educationSubtitle}>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>
        <Courses />
      </div>
    </div>
  );
};

export default EducationSection;