import React from "react";
import Filter from "./filter";

import Footer from "./footer";
import Form from "./form";
import List from "./list";

function ToDo() {
  return (
    <div>
      <section className="todoapp">
        <Form />
        <List />
        <Filter />
      </section>
      <Footer />
    </div>
  );
}

export default ToDo;
