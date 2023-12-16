import SkillContainer from "./SkillContainer.jsx";
import TechnicalSkills from "./TechnicalSkills.jsx";
import LearningPlace from './LearningPlace.jsx';

const Skills = () => {
  return (
    <>
      <p className='skills-p1'>Explore</p>
      <h1 className='sub-title'>MY<span>Skills</span></h1>
      <div className='skills-details-container'>
        <div className='about-containers'>
          <SkillContainer>
            <TechnicalSkills />
          </SkillContainer>

          <SkillContainer>
            <LearningPlace />
          </SkillContainer>
        </div>
      </div>
    </>
  );
};

export default Skills;