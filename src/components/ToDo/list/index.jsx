import React from "react";

function List({ getTasks, addTask }) {
  const deleteHandle = () => {
    addTask(getTasks.filter((item) => item.id !== getTasks.task.id));
  };

  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {getTasks.map((tasks, id, checked) => {
            return (
              <li key={id} className={checked}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{tasks.task}</label>
                  <button className="destroy" onClick={deleteHandle}></button>
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
