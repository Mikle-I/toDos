import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoH = (text) => {
    setTodos([...todos, text]);
  };
  const delTodoH = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };
  return (
    <div className="App">
      <TodoForm addTodo={addTodoH} />
      <TodoList delTodo={delTodoH} todos={todos} />
    </div>
  );
}

export default App;
