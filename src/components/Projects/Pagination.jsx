import styles from './Pagination.module.css';

const Pagination = ({ totalProjects, projectsPerPage, currentPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className={styles.pagination}>
      {
        pages.map((page, index) => {
          return (
            <button 
              key={index} 
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? styles.active : ""}
            >
              {page}
            </button>
          )
        })
      }
    </div>
  );
};

export default Pagination;