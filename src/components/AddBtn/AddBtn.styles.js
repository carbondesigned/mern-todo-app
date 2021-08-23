import styled from "styled-components";

export const StyledAddBtn = styled.div`
  position: fixed;
  bottom: 2em;
  right: 3em;
  background: linear-gradient(to bottom, #d81e5b, #8a4efc);
  height: 3em;
  width: 3em;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
