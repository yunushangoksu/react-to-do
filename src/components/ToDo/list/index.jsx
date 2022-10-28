import React from "react";

function List(getTasks) {
  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {getTasks.getTasks.map((tasks, i, state) => {
            return (
              <li key={i} className={state}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{tasks.task}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default List;
