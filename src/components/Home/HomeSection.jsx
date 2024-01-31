import Typewriter from 'typewriter-effect';
import Img from '../../../public/JoseGa.png'
import styles from "./HomeSection.module.css";
import {profile} from '../../data';
import HomeBgAnimation from '../HomeBgAnimation/HomeBgAnimation.jsx';

const HomeSection = () => {
  return (
    <div id="home">
      <div className={styles.homeContainer}>
        <div className={styles.homebk}>
          <HomeBgAnimation />
        </div>
        <div className={styles.homeInnerContainer}>
          <div className={styles.homeContentContainer}>
            <div className={styles.homeTitle}>Hi, I am <br /> {profile.name}</div>
            <div className={styles.textLoop}>
              I am a
              <span>
                <Typewriter
                  options={{
                    strings: profile.roles,
                    autoStart: true,
                    loop: true
                  }}
                />
              </span>
            </div>
            <div className={styles.homeSubtitle}>
              {profile.description}
            </div>
            <a
              href={profile.resume}
              target="_blank"
              download
              className={styles.resumeButton}>
              Download Resume
            </a>
          </div>

          <div className={styles.homeProfileContainer}>
            <img src={Img} alt="My Image" className={styles.homeImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;