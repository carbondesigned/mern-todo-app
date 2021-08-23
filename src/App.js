import { useState, useEffect } from "react";
import axios from "axios";
import Theme from "./Theme";
import { AppContext } from "./Contexts/AppContext";

// Components
import Todos from "./components/Todos/Todos";
import AddBtn from "./components/AddBtn/AddBtn";
import Modal from "./components/Modal/Modal";

// Styles
import { StyledApp } from "./App.styles";

const API_BASE = "https://mern-api-todo-app.herokuapp.com";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const GetTodos = async () => {
    await axios
      .get(`${API_BASE}/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  const completeTodo = (id) => {
    axios
      .put(`${API_BASE}/todo/complete/${id}`)
      .then((res) =>
        setTodos((todos) =>
          todos.map((todo) => {
            if (todo._id === res.data._id) todo.complete = res.data.complete;
            return todo;
          })
        )
      )
      .catch((err) => console.log(err));
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`${API_BASE}/todo/delete/${id}`)
      .then((res) =>
        setTodos((todos) => todos.filter((todo) => todo._id !== res.data._id))
      );
  };

  const closeModal = () => {
    setPopupActive(false);
  };

  const addTodo = () => {
    axios
      .post(`${API_BASE}/todo/new`, {
        text: newTodo,
      })
      .then((res) => setTodos([...todos, res.data]));

    closeModal();
    setNewTodo("");
  };

  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <Theme>
      <AppContext.Provider
        value={{
          todos,
          setTodos,
          newTodo,
          setNewTodo,
          addTodo,
          deleteTodo,
          completeTodo,
          closeModal,
          setPopupActive,
        }}
      >
        <StyledApp className="App">
          <AddBtn />
          {popupActive ? <Modal /> : ""}
          <div className="header">
            <h1>Welcome, to your Todos</h1>
            <h4>Your Tasks</h4>
          </div>
          <Todos />
        </StyledApp>
      </AppContext.Provider>
    </Theme>
  );
};

export default App;
