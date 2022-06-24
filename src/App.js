import { useState } from "react";
import "./App.css";
import Todos from "./Components/Todos/Todos";
import NewTodo from "./Components/NewTodo/NewTodo";
const INITIAL_ARRAY = [
  {
    id: "T1",
    title: "Upload MOM",
    date: new Date(2021, 12, 7),
    priority: "Medium",
  },
  {
    id: "T2",
    title: "Reply to E-mail",
    date: new Date(2021, 12, 9),
    priority: "High",
  },
  {
    id: "T3",
    title: "Order Books",
    date: new Date(2021, 10, 17),
    priority: "Medium",
  },
  {
    id: "T4",
    title: "Watch Movie",
    date: new Date(2021, 11, 7),
    priority: "Low",
  },
];

function App() {
  const [allTodo, setTodo] = useState(INITIAL_ARRAY);
  const addTodoHandler = (todo) => {
    setTodo((prevState) => {
      return [todo, ...prevState];
    });
    console.log(todo);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos item={allTodo} />
    </div>
  );
}

export default App;
