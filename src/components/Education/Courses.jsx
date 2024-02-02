import { education } from '../../data/index.js';
import { useState } from "react";
import Course from './Course.jsx';
import styles from './Courses.module.css';

const Courses = () => {

  const [courseSelected, setCourseSelected] = useState(null);
  const [topicSelected, setTopicSelected] = useState(null)

  const handleSelectedCourse = course => {
    setCourseSelected(cur => cur?.id === course.id ? null : course)
  }

  const handleSelectedTopic = course => {
    setTopicSelected(cur => cur?.id === course.id ? null : course)
  }
  return (
    <div className={styles.courseContainer}>
      {education.map(course => (
          <Course
            key={course.id}
            course={course}
            courseSelected={courseSelected}
            handleSelectedCourse={handleSelectedCourse}
            onSelectedTopic={handleSelectedTopic}
            topicSelected={topicSelected}
          />
      ))}
    </div>
  );
};

export default Courses;