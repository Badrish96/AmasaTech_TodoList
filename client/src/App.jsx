import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/icon.png";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [apiTodos, setApiTodos] = useState([]);
  const [displayCount, setDisplayCount] = useState(5); // Number of todos to display initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setApiTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTodos(apiTodos.slice(0, displayCount));
  }, [apiTodos, displayCount]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const apiTodo = apiTodos.find((todo) => todo.title === newTodo.trim());
      const newTodoItem = {
        id: todos.length + 1,
        title: newTodo,
        completed: apiTodo ? apiTodo.completed : false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const loadMoreTodos = () => {
    setDisplayCount(displayCount + 5); // Increase the number of todos to display by 5
  };

  return (
    <div className="container">
      <div className="todo_app">
        <Header title="To-Do List" logo={logo} />
        <AddItem newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <Content todos={todos} deleteTodo={deleteTodo} />
        {displayCount < apiTodos.length && (
          <button onClick={loadMoreTodos} className="load_more_btn">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
