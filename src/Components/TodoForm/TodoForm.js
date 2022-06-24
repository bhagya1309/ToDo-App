import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [todoDate, setTodoDate] = useState("");

  //   const [userInput, setInput] = useState({
  //     title: "",
  //     priority: "High",
  //     todoDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // setInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
    // setInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setTitle(event.target.value);
  };
  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
    // setInput({
    //   ...userInput,
    //   priority: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setTodoDate(event.target.value);
    // setInput({
    //   ...userInput,
    //   todoDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const todoData = {
    //   title: userInput.title,
    //   priority: userInput.priority,
    //   date: userInput.todoDate,
    // };
    const todoData = {
      title: title,
      priority: priority,
      date: new Date(todoDate),
    };
    props.onSaveTodo(todoData);
    console.log(todoData);
    setTitle("");
    setTodoDate("");
    setPriority("High");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="form-control">
          <label>Priority</label>
          <select
            name="selectedList"
            id="selectedList"
            onChange={priorityChangeHandler}
            value={priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={todoDate} />
        </div>
      </div>
      <div className="form-actions">
        <button type="button" onClick={props.onClose}>
          Close
        </button>

        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
