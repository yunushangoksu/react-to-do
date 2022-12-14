import React, { useState } from "react";

function Form({ addTask, getTasks }) {
  const initialValue = { id: "", task: "", checked: false };
  const [todos, setTodos] = useState(initialValue);

  const onChangeInput = (event) => {
    setTodos({ ...todos, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (event.target.value === "") {
      return;
    }
    console.log(todos);
    addTask([
      ...getTasks,
      {
        id: getTasks.length > 0 ? getTasks[getTasks.length - 1].id + 1 : 0,
        task: todos.task,
        checked: false,
      },
    ]);
    setTodos(initialValue);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            name="task"
            value={todos.task}
            placeholder="What needs to be done?"
            autoFocus
            onChange={onChangeInput}
          />
        </form>
      </header>

      <section className="main">
        <input
          className="toggle-all"
          name="state"
          type="checkbox"
          onChange={onChangeInput}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </section>
    </div>
  );
}

export default Form;
