import React, { useEffect, useState } from "react";

import Filter from "./filter";
import Footer from "./footer";
import Form from "./form";
import List from "./list";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <section className="todoapp">
        <Form addTask={setTasks} getTasks={tasks} />
        <List getTasks={tasks} />
        <Filter />
      </section>
      <Footer />
    </div>
  );
}

export default ToDo;
