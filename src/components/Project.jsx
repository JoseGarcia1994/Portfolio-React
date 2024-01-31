import styles from './Project.module.css';

const Project = ({project, setOpenModal}) => {
  return (
    <div className={styles.proyectCard} onClick={() => setOpenModal({state: true, project: project})}>
      <img className={styles.projectImg} src={project.img} alt="project" />
      <div className={styles.projectTags}>
        {
          project.tags.map((tag, ind) => (
            <span className={styles.tag} key={ind}>{tag}</span>
          ))
        }
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.projectTitle}>{project.projectName}</div>
        <div className={styles.projectDate}>{project.date}</div>
        <div className={styles.projectDescription}>{project.description}</div>
      </div>
    </div>
    
  );
};

export default Project;

{/* <div className="project">
      <div className="overlay"></div>
      <img className="proyect__img" src={project?.img} alt="p1" />
      <div className="project__info">
        <div className="proyect-links">
          <a href={project?.web} target="_blank">
            <h3>{project?.projectName}</h3>
          </a>
          <a href={project?.github} target="_blank">
            <h3>Web Code</h3>
          </a>
        </div>
        <button className="proyect-btn">More Details</button>
      </div>
    </div> */}