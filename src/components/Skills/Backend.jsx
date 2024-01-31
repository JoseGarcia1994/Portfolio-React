import {backend} from '../../data';
import Article from './Article.jsx';
import styles from './Backend.module.css';

const Backend = () => {
  return (
    <>
      <h2 className={styles.backendTitle}>Backend</h2>
      <div className={styles.articleContainer}>
        {backend.map(skill => (
          <Article key={skill.id} skill={skill}/>
        ))}
      </div>
    </>
  );
};

export default Backend;