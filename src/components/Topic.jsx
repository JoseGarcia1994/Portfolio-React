
const Topic = ({course}) => {
  console.log(course.topics);
  return (
    <div className="topic-container">
      <ul className="topics">
        {course.topics.map(topic => (
          <div>
            <p className="topic-week"><span>Section: </span>{topic.section}</p>
            <li key={topic.section}>
              {topic.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Topic;