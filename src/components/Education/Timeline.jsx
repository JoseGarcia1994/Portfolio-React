import styles from './Timeline.module.css';
import {education} from '../../data';

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {education.map()}
    </div>
  );
};

export default Timeline;