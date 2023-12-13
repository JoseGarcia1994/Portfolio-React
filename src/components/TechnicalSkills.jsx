import {skills} from '../data';

const TechnicalSkills = () => {
  return (
    <>
      <h2 className='skills-sub-title'>Technical Skills</h2>
      <div className='article-container'>
        {skills.map(skill => (
          <article key={skill.id}>
            <img src={skill.img} alt="image" className='article-img' />
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default TechnicalSkills;