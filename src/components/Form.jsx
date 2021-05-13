import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Enter an item");
    }
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div
        className="card"
        style={{
          width: "36rem",
          background: " rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
        }}
      >
        <div className="card-body">
          <div className="form-floating mb-3 text-center ">
            <input
              type="text"
              className="form-control input"
              id="floating"
              placeholder="name@example.com"
              value={input}
              onChange={inputHandler}
            />

            <label className="floatingInput">Todo List</label>
          </div>

          <button type="submit" className="btn btn-outline-success">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
