import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

// Styles
import { StyledModal, Overlay } from "./Modal.styles";

const Modal = () => {
  const { closeModal, newTodo, setNewTodo, addTodo } = useContext(AppContext);

  return (
    <Overlay>
      <StyledModal>
        <div className="modal-top">
          <div
            className="close-modal fas fa-times-circle"
            onClick={closeModal}
          ></div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="todoInput">Add a Task</label>
            <input
              type="text"
              name="text"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
          </div>
          <button className="submit" onClick={addTodo}>
            Add Task
          </button>
        </form>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
