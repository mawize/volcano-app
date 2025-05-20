import Div from "../Shared/StyledComponents/Div";
import Button from "../../shared/styledComponents/Button";
import PrideText from "../../../themes/PrideText";

export default function FOrC(props) {
  return (
    <Div>
      <h2>
        <PrideText text="Temperature Display Unit" />
      </h2>
      Current display unit: {props.isFahrenheit ? 'Fahrenheit' : 'Celsius'}<br/>
      <Button onClick={props.onClick}>
        <PrideText text={`Switch to ${props.isFahrenheit ? 'Celsius' : 'Fahrenheit'}`}/>
      </Button>
    </Div>
  );
}
