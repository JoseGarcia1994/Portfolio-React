import { trainings } from '../data/index.js';
import { useState, Fragment } from "react";
import Course from './Course.jsx';

const LearningPlace = () => {

  const [courseSelected, setCourseSelected] = useState(null);
  const [topicSelected, setTopicSelected] = useState(null)

  const handleSelectedCourse = course => {
    setCourseSelected(cur => cur?.id === course.id ? null : course)
  }

  const handleSelectedTopic = course => {
    setTopicSelected(cur => cur?.id === course.id ? null : course)
  }
  console.log(topicSelected);
  return (
    <>
      <h2 className='skills-sub-title'>Learning Place</h2>
      <div className='course-container'>
        {trainings.map(course => (
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
    </>
  );
};

export default LearningPlace;