import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./NewTodo.css";
function NewTodo(props) {
  const [showForm, setShowForm] = useState(false);
  const userTodoHandler = (todoData) => {
    const TodoData = {
      ...todoData,
      id: Math.random().toString(),
    };
    props.onAddTodo(TodoData);
    setShowForm(false);
    console.log(todoData);
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  const closeFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-todo">
      {!showForm ? (
        <button onClick={showFormHandler}>Add New Todo</button>
      ) : (
        <TodoForm onSaveTodo={userTodoHandler} onClose={closeFormHandler} />
      )}
    </div>
  );
}

export default NewTodo;
