
const Topic = ({course}) => {
  console.log(course.topics);
  return (
    <div className="topic-container">
      <ul className="topics">
        {course.topics.map(topic => (
          <div>
            <p className="topic-week"><span>Week: </span>{topic.week}</p>
            <li key={topic.week}>
              {topic.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Topic;