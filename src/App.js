import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container-fluid">
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
