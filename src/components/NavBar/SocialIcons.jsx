import styles from './SocialIcons.module.css';
import {profile} from '../../data';

const SocialIcons = () => {
  return (
    <div>
      <a className={styles.socialItems} href={profile.github} target="_blank">
        <i className={`bx bxl-github bx-md ${styles.github}`}></i>
      </a>
      <a className={styles.socialItems} href={profile.linkedin} target="_blank">
        <i className={`bx bxl-linkedin-square bx-md ${styles.linkedin}`}></i>
      </a>
    </div>
  );
};

export default SocialIcons;