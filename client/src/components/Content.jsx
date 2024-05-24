import React from "react";
import ItemList from "./ItemList";

const Content = ({ todos, deleteTodo }) => {
  return (
    <main>
      {todos.length ? (
        <ItemList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <p>List is Empty</p>
      )}
    </main>
  );
};

export default Content;
