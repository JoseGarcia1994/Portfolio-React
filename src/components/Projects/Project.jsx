import styles from './Project.module.css';

const Project = ({project, setOpenModal}) => {
  return (
    <div className={styles.proyectCard} onClick={() => setOpenModal({state: true, project: project})}>
      <div className={styles.projectTitle}>{project.projectName}</div>
      <img className={styles.projectImg} src={project.img} alt="project" />
      <div className={styles.projectDate}>{project.date}</div>
      <div className={styles.projectTags}>
        {
          project.tags.map((tag, ind) => (
            <span className={styles.tag} key={ind}>{tag}</span>
          ))
        }
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.projectDescription}>{project.description}</div>
      </div>
    </div>
    
  );
};

export default Project;