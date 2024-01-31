
const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filterContainer'>
      {
        filter === "" ?
          <div className={`filterOption ${filter === "" ? "active" : ""}`} value="" onClick={() => setFilter("")}>All</div>
          :
          <div className="filterOption" value="" onClick={() => setFilter('')}>All</div>
      }
      <div className="divider"></div>
      {
        filter === "Academlo" ?
          <div className={`filterOption ${filter === "Academlo" ? "active" : ""}`} value="Academlo" onClick={() => setFilter("Academlo")}>Academlo</div>
          :
          <div className="filterOption" value="Academlo" onClick={() => setFilter('Academlo')}>Academlo</div>
      }
      <div className="divider"></div>
      {
        filter === "Udemy" ?
          <div className={`filterOption  ${filter === "Udemy" ? "active" : ""}`} value="Udemy" onClick={() => setFilter("Udemy")}>Udemy</div>
          :
          <div className="filterOption" value="Udemy" onClick={() => setFilter('Udemy')}>Udemy</div>
      }
    </div>
  );
};

export default Filter;