import CourseInfo from "./CourseInfo.jsx";
import styles from './Course.module.css';

const Course = ({course, courseSelected, handleSelectedCourse, onSelectedTopic, topicSelected}) => {

  const isSeleted = courseSelected?.id === course.id

  return (
      <div className={styles.course}>
        <div className={styles.courseContent}>
          <img src={course.img} alt="" className={styles.courseImg} />
          <div className={styles.courseDetails}>
            <h3>{course.school}</h3>
            <p>{course.date}</p>
          </div>
          <button 
            className={styles.courseBtn} 
            onClick={() => handleSelectedCourse(course)}
            >
              {isSeleted ? 'Close' : 'More Info'}
          </button>
        </div>
        {
          isSeleted && 
            <CourseInfo 
            course={course} 
            onSelectedTopic={onSelectedTopic} 
            topicSelected={topicSelected}
          />
        }
      </div>
  );
};

export default Course;