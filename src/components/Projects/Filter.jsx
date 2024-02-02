import styles from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterContainer}>
      {
        filter === "" ?
          <div className={`${styles.filterOption} ${filter === "" ? styles.active : ""}`} value="" onClick={() => setFilter("")}>All</div>
          :
          <div className={styles.filterOption} value="" onClick={() => setFilter('')}>All</div>
      }
      <div className={styles.divider}></div>
      {
        filter === "Academlo" ?
          <div className={`${styles.filterOption} ${filter === "Academlo" ? styles.active : ""}`} value="Academlo" onClick={() => setFilter("Academlo")}>Academlo</div>
          :
          <div className={styles.filterOption} value="Academlo" onClick={() => setFilter('Academlo')}>Academlo</div>
      }
      <div className={styles.divider}></div>
      {
        filter === "Udemy" ?
          <div className={`${styles.filterOption}  ${filter === "Udemy" ? styles.active : ""}`} value="Udemy" onClick={() => setFilter("Udemy")}>Udemy</div>
          :
          <div className={styles.filterOption} value="Udemy" onClick={() => setFilter('Udemy')}>Udemy</div>
      }
    </div>
  );
};

export default Filter;