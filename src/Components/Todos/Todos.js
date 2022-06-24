import { useState } from "react";
import "./Todos.css";
import Card from "../UI/Card/Card";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoList from "../TodoList/TodoList";
function Todos(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const todoValues = props.item;
  const filteredTodo = todoValues.filter((todo) => {
    return todo.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="todos">
      <TodoFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <TodoList filnalData={filteredTodo} />
    </Card>
  );
}

export default Todos;
