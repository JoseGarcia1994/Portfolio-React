import { projects } from '../data';
import Filter from './Filter.jsx';
import Project from './Project.jsx';

const Projects = ({ filter, setFilter, filterProjects }) => {
  return (
    <>
      <h2 className="projects__title">My Projects</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="projects__container">
        {
          filter ? (
            <>
              {filterProjects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                />
              ))}
            </>
          ) : (
            <>
              {projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                />
              ))}
            </>
          )
        }
      </div>
    </>
  );
};

export default Projects;