import Certificate from "./Certificate.jsx";
import Topic from "./Topic.jsx";

const CourseInfo = ({ course, onSelectedTopic, topicSelected }) => {
  return (
    <div className="course-info">
      <h3>Courses:</h3>
      {course.courses.map(course => (
        <div key={course.id} className="info">
          <p className="info-title">{course.certificate.name}</p>
          <p><span>Completed: </span>{course.certificate.date}</p>
          <div className="info-btn">
            {
              course.certificate.url === "" ?
                <Certificate /> :
                <a href={course.certificate.url} target="_blank">View Certificate</a>
            }
            <button onClick={() => onSelectedTopic(course)}>{topicSelected?.id === course.id ? "Close" : "Topics"}</button>
          </div>
          {topicSelected?.id === course.id && <Topic course={course} />}
        </div>
      ))}

    </div>
  );
};

export default CourseInfo;