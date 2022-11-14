import Todo from "../todo/todo";
import "./todoList.module.css";

function TodoList({ todos, delTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} udal={delTodo} />
      ))}
      {todos.length === 0 && <h3>список задач пуст</h3>}
    </div>
  );
}
export default TodoList;
