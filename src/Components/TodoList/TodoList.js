import ToDoItem from "../ToDoItem/ToDoItem";
const TodoList = (props) => {
  if (props.filnalData.length === 0) {
    return <p>No Todo Found</p>;
  }

  return (
    <ul>
      {props.filnalData.map((todo, index) => (
        <ToDoItem
          key={todo.id}
          title={todo.title}
          date={todo.date}
          priority={todo.priority}
        />
      ))}
    </ul>
  );
};

export default TodoList;
