import { useState, useEffect } from 'react';
import { projects } from '../../data/index.js';
import Filter from './Filter.jsx';
import Project from './Project.jsx';
import Pagination from './Pagination.jsx';
import styles from './Projects.module.css';

const Projects = ({openModal , setOpenModal}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState(3)
  const [filter, setFilter] = useState('');
  const [filterProjects, setFilterProjects] = useState([]);
  
  const lastProjectIndex = currentPage * projectsPerPage
  const firstProjectIndex = lastProjectIndex - projectsPerPage
  
  const projectsPagination = projects.slice(firstProjectIndex, lastProjectIndex)
  const projectsFilterPage = filterProjects.slice(firstProjectIndex, lastProjectIndex)
  
  useEffect(() => {
    if (filter) {
      const filterProject = projects.filter(project => project.school === filter || project.teacher === filter)
      setFilterProjects(filterProject);
    }
  }, [filter])

  return (
    <div className={styles.projects} id='projects'>
      <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>My Projects</h2>
      <Filter filter={filter} setFilter={setFilter} />
        {
          filter ? (
            <>
              <Pagination
                totalProjects={filterProjects.length}
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <div className={styles.projectsFilter}>
                {projectsFilterPage.map(project => (
                  <Project
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
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
              <div className={styles.projectsFull}>
                {projectsPagination.map(project => (
                  <Project
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
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