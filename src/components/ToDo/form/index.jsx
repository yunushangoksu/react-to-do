import React from "react";

function Form() {
  return (
    <div>
      {/* <section className="todoapp"> */}
      <header className="header">
        <h1>todos</h1>
        <form action="">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </section>
      {/* </section> */}
    </div>
  );
}

export default Form;
