import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-items">
      {todos.map((todo, id) => (
        <div className="todo-list">
          <li
            key={id}
            className={`list-items ${todo.completed ? "complete" : ""}`}
          >
            {todo.title}
            <div className="buttons">
              <button
                className="btn-item check"
                onClick={() => completeHandler(todo)}
              >
                <i class="bi bi-check-circle"></i>
              </button>

              <button
                className="btn-item delete"
                onClick={() => deleteHandler(todo)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
