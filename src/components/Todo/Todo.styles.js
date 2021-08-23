import styled from "styled-components";

export const StyledTodo = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  background-color: ${(p) => p.theme.colors.dark};
  border-radius: 0.5em;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    opacity: 0.8;
  }

  .group {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .todo {
    font-weight: ${(p) => (p.isCompleted ? "700" : "400")};
    text-decoration: ${(p) => (p.isCompleted ? "line-through" : "")};
    color: ${(p) => (p.isCompleted ? p.theme.colors.lightAlt : "#eee")};
  }

  .checkbox {
    width: 2.125em;
    height: 2.125em;
    border-radius: 10em;
    background-color: ${(p) =>
      p.isCompleted ? p.theme.colors.primary : p.theme.colors.darkAlt};
    background: ${(p) =>
      p.isCompleted ? "linear-gradient(to bottom, #d81e5b, #8a4efc)" : ""};
    transition: 200ms;
    display: grid;
    place-items: center;
  }

  .delete-todo {
    transition: 100ms;
    &:hover {
      opacity: 0.8;
    }
  }
`;
