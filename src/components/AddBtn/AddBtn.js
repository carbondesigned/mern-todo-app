import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

// Styles
import { StyledAddBtn } from "./AddBtn.styles";

const AddBtn = () => {
  const { setPopupActive, popupActive } = useContext(AppContext);

  return (
    <StyledAddBtn onClick={() => setPopupActive(!popupActive)}>
      <div className="fas fa-plus"></div>
    </StyledAddBtn>
  );
};

export default AddBtn;
