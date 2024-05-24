import React, { useRef } from "react";
import "../App.css";

const AddItem = ({ newTodo, setNewTodo, addTodo }) => {
  const inputRef = useRef();

  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/stickers/100/filled-plus-2-math.png"
        alt="filled-plus-2-math"
        className="add_icon"
        onClick={() => {
          inputRef.current.focus();
          addTodo();
        }}
      />
    </form>
  );
};

export default AddItem;
