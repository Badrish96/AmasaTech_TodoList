import React from "react";
import "../App.css";

const ItemList = ({ todos, deleteTodo }) => {
  return (
    <ul id="list_container">
      {todos.map((todo) => (
        <li key={todo.id}>
          <p className={todo.completed ? "checked list_title" : "list_title"}>
            {todo.title}
          </p>
          <p>{todo.completed ? "Completed" : "Incomplete"}</p>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color-glass/48/filled-trash.png"
            alt="filled-trash"
            onClick={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
