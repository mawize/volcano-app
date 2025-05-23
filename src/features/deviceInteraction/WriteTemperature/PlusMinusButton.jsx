import { Div, InactiveButton } from "./styledComponents";

function PlusMinusButton(props) {
  return (
    <Div>
      <InactiveButton hierarchy="Button.TempControlButton.PlusMinusButton" {...props}>
        {props.buttonText}
      </InactiveButton>
    </Div>
  );
}

export default PlusMinusButton;
