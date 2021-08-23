import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.dark};
  padding: 2em;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  .modal-top {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .close-modal {
      cursor: pointer;
      font-size: 1.5em;
      color: ${(p) => p.theme.colors.primary};
    }
  }

  form {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 1em;
    justify-content: space-between;

    .input-group {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      gap: 1em;

      input {
        padding: 1em 0.5em;
        outline: transparent;

        &:focus {
          border-color: ${(p) => p.theme.colors.primary};
        }
      }
    }

    .submit {
      padding: 1em;
      cursor: pointer;
      background: ${(p) => p.theme.colors.primary};
      border: none;
      outline: transparent;
      color: white;
      font-weight: 700;
    }
  }
`;
