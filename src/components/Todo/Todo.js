import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";
// Styles
import { StyledTodo } from "./Todo.styles";

const Todo = ({ id, text, isCompleted }) => {
  const { completeTodo, deleteTodo } = useContext(AppContext);

  return (
    <StyledTodo isCompleted={isCompleted}>
      <div className="group">
        <div className="checkbox">
          {isCompleted ? <div className="fas fa-check"></div> : ""}
        </div>
        <div className="todo" onClick={() => completeTodo(id)}>
          {text}
        </div>
      </div>
      <div
        className="delete-todo fas fa-trash"
        onClick={() => deleteTodo(id)}
      ></div>
    </StyledTodo>
  );
};

export default Todo;
