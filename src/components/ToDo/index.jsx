import React, { useEffect, useState } from "react";

import Filter from "./filter";
import Footer from "./footer";
import Form from "./form";
import List from "./list";

function ToDo() {
  const initialValue = [
    {
      task: "React Öğren",
      checked: false,
    },
    {
      task: "Askere Git",
      checked: false,
    },
    {
      task: "Yemek Ye",
      checked: false,
    },
  ];
  const [tasks, setTasks] = useState(initialValue);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <section className="todoapp">
        <Form addTask={setTasks} getTasks={tasks} />
        <List addTask={setTasks} getTasks={tasks} />
        <Filter />
      </section>
      <Footer />
    </div>
  );
}

export default ToDo;
