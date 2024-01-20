
const Project = ({project}) => {
  return (
    <div className="project">
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
    </div>
  );
};

export default Project;