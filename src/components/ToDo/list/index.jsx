import React from "react";

function List() {
  return (
    <div>
      {/* <section className="todoapp"> */}
      <section className="main">
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn React</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
      {/* </section> */}
    </div>
  );
}

export default List;
