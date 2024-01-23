import { useState } from 'react';
import { projects } from '../data';
import Filter from './Filter.jsx';
import Project from './Project.jsx';
import Pagination from './Pagination.jsx';

const Projects = ({ filter, setFilter, filterProjects }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState(3)

  const lastProjectIndex = currentPage * projectsPerPage
  const firstProjectIndex = lastProjectIndex - projectsPerPage

  const projectsPagination = projects.slice(firstProjectIndex, lastProjectIndex)
  const projectsFilterPage = filterProjects.slice(firstProjectIndex, lastProjectIndex)

  return (
    <div className="projects">
      <h2 className="projects__title">My Projects</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="projects__container">
        {
          filter ? (
            <>
              <Pagination
                totalProjects={filterProjects.length}
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <div className='projects-filter'>
                {projectsFilterPage.map(project => (
                  <Project
                    project={project}
                    key={project.id}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <Pagination
                totalProjects={projects.length}
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <div className='projects-full'>
                {projectsPagination.map(project => (
                  <Project
                    project={project}
                    key={project.id}
                  />
                ))}

              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Projects;