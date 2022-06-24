import React from "react";
import "./ToDoItem.css";
import TodoDate from "../TodoDate/TodoDate";
import Card from "../UI/Card/Card";
function TodoItem(props) {
  // const { title, date, priority } = props;

  const todoDate = props.date;
  const todoTitle = props.title;
  const priority = props.priority;
  return (
    <Card className="todo-item">
      <TodoDate date={todoDate} />
      <div className="todo-description">
        <h2>{todoTitle}</h2>

        <div className="todo-priority">{priority}</div>
      </div>
    </Card>
  );
}
export default TodoItem;
