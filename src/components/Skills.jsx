import SkillContainer from "./SkillContainer.jsx";
import TechnicalSkills from "./TechnicalSkills.jsx";

const Skills = () => {
  return (
    <>
      <p className='skills-p1'>Explore My</p>
      <h1 className='sub-title'>MY<span>Skills</span></h1>
      <div className='skills-details-container'>
        <div className='about-containers'>
          <SkillContainer>
            <TechnicalSkills />
          </SkillContainer>

          <SkillContainer>
            <h2 className='skills-sub-title'>Professional Skills</h2>
            <div className='article-container'>

            </div>
          </SkillContainer>
        </div>
      </div>
    </>
  );
};

export default Skills;