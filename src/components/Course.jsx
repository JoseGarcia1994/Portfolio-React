import CourseInfo from "./CourseInfo.jsx";

const Course = ({course, courseSelected, handleSelectedCourse, onSelectedTopic, topicSelected}) => {

  const isSeleted = courseSelected?.id === course.id

  return (
      <div className='course'>
        <div className='course-principal'>
          <img src={course.img} alt="" className='course-img' />
          <div>
            <h3>{course.school}</h3>
            <p>{course.date}</p>
          </div>
          <button className='course-btn' onClick={() => handleSelectedCourse(course)}>{isSeleted ? 'Close' : 'More Info'}</button>
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