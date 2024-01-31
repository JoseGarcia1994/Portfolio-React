import {frontend} from '../../data';
import Article from './Article.jsx';
import styles from './Frontend.module.css';

const Frontend = () => {
  
  return (
    <>
      <h2 className={styles.frontendTitle}>Frontend</h2>
      <div className={styles.articleContainer}>
        {frontend.map(skill => (
          <Article  key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default Frontend;