
const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filters shadow container'>
      <form>
        <div className='camp'>
          <label>Filter Projects</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- All Projects --</option>
            <option value="Academlo">Academlo</option>
            <option value="Udemy">Udemy</option>
            <option value="Jonas Schmedtmann">Jonas Schmedtmann</option>
            <option value="Brenda Gonzalez">Brenda Gonzalez</option>
            <option value="Juan Pablo">Juan Pablo</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;