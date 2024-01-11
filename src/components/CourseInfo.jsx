import Topic from "./Topic.jsx";
import CourseCompleted from "./CourseCompleted.jsx";

const CourseInfo = ({ course, onSelectedTopic, topicSelected }) => {
  return (
    <div className="course-info">
      <h3>Courses:</h3>
      {course.courses.map(course => (
        <div key={course.id} className="info">
          <p className="info-title">{course.certificate.name}</p>
          <p><span>Completed: </span>{course.certificate.date}</p>
          <div className="info-btn">
            <a href={course.certificate.url} target="_blank">View Certificate</a>
            <button onClick={() => onSelectedTopic(course)}>Topics</button>
          </div>
          {topicSelected?.id === course.id && <Topic course={course} />}
        </div>
      ))}

    </div>
  );
};

export default CourseInfo;