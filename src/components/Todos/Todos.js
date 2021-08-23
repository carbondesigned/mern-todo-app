import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";
import Todo from "../Todo/Todo";

// Styles
import { StyledTodos } from "./Todos.styles";

const Todos = () => {
  const { todos, completeTodo, deleteTodo } = useContext(AppContext);
  return (
    <StyledTodos>
      {todos.map((todo, key) => (
        <Todo
          key={key}
          isCompleted={todo.complete}
          todo={todo}
          text={todo.text}
          id={todo._id}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </StyledTodos>
  );
};

export default Todos;
