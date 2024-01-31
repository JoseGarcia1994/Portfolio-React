import Certificate from "./Certificate.jsx";
import Topic from "./Topic.jsx";
import styles from './CourseInfo.module.css';

const CourseInfo = ({ course, onSelectedTopic, topicSelected }) => {
  return (
    <div className={styles.courseInfoContainer}>
      <h3>Courses:</h3>
      {course.courses.map(course => (
        <div key={course.id} className={styles.courseInfoContent}>
          <p className={styles.courseInfoTitle}>{course.certificate.name}</p>
          <p className={styles.courseInfoDate}><span>Completed: </span>{course.certificate.date}</p>
          <div className={styles.courseInfoBtn}>
            {
              course.certificate.url === "" ?
                <Certificate /> :
                <a href={course.certificate.url} target="_blank">View Certificate</a>
            }
            <button onClick={() => onSelectedTopic(course)}>
                {topicSelected?.id === course.id ? "Close" : "Topics"}
            </button>
          </div>
          {topicSelected?.id === course.id && <Topic course={course} />}
        </div>
      ))}

    </div>
  );
};

export default CourseInfo;