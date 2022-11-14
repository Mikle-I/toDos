import "./todo.modul.css";
function Todo(props) {
  return (
    <div className="td" onDoubleClick={() => props.udal(props.index)}>
      <img src="https://img.icons8.com/ios/100/null/task-completed.png" />

      <div>{props.todo}</div>
    </div>
  );
}

export default Todo;
