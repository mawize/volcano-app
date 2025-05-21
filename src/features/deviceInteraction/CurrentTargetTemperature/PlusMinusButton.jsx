import { PlusMinusButton as StyledPlusMinusButton } from "./styledComponents";

function PlusMinusButton(props) {
  return (
      <StyledPlusMinusButton {...props}>
        {props.buttonText}
      </StyledPlusMinusButton>
  );
}

export default PlusMinusButton;
