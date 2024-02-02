import styles from './Topic.module.css';

const Topic = ({course}) => {
  return (
    <div className={styles.topicContainer}>
      <ul className={styles.topicsList}>
        {course.topics.map(topic => (
          <div key={topic.section}>
            <p className={styles.topicSection}><span>Section: </span>{topic.section}</p>
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