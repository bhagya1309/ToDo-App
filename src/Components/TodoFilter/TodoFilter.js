import "./TodoFilter.css";
const TodoFilter = (props) => {
  // const AllYears = [{
  //     id: '2021',
  //     value:'2021'
  // }]
  const yearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <div className="filter-control">
        <label>Filter By</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          {/* {AllYears.map((year) => (
                      <option value={year.id} key={ year.id}>{ year.value}</option>
                  ))} */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
