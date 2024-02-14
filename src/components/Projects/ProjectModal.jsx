import Button from '../Button.jsx';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  console.log(project);
  return (
    <div className={styles.modal} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className={styles.modalContainer}>
        <button className={styles.modalCloseBtn} onClick={() => setOpenModal({ state: false, project: null })}>X</button>
        <img src={project.img} alt="projectImg" className={styles.projectImg} />
        <div className={styles.projectTitle}>{project.projectName}</div>
        <div className={styles.projectDate}>{project.date}</div>
        <div className={styles.projectTags}>
          {project.tags.map(tag => (
            <div className={styles.projectTag} key={tag}>{tag}</div>
          ))}
        </div>
        <div className={styles.projectDescription}>{project.description}</div>
        <div className={styles.projectBtnContainer}> 
            <Button href={project.github} target="_blank">View Code</Button>
            <Button href={project.web} target="_blank">Web App</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;