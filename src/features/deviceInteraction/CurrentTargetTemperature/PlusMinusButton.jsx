import { useTheme } from "styled-components";
import { PlusMinusButton as StyledPlusMinusButton } from "./styledComponents";

function PlusMinusButton(props) {
  const theme = useTheme()
  return (
      <StyledPlusMinusButton {...props}>
        {props.key === 'incrementTemperatureButton' ? <theme.plusMinusButtons.plusIcon /> : <theme.plusMinusButtons.minusIcon />}
      </StyledPlusMinusButton>
  );
}

export default PlusMinusButton;
