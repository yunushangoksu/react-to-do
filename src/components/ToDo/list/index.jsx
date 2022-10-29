import React from "react";

function List({ getTasks, addTask }) {
  const deleteHandle = (idd) => {
    const newList = getTasks.filter((l) => l.id !== idd);
    addTask(newList);
  };

  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {getTasks.map((id, tasks, checked) => {
            return (
              <li
                key={id}
                className={checked[id].checked ? "checked" : "notchecked"}
              >
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{tasks.task}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteHandle(id)}
                  ></button>
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
