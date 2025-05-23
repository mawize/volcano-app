import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import PrideText from "../../../themes/PrideText";

const Div = styled.div`
  text-align: center;
  font-size: 30px;
  color: ${(props) => props.theme.get("TemperatureDisplay.CurrentTemperatureDisplay.textColor")};
  font-family: "digital-mono";
  font-size: 4rem;
  margin-bottom: -1.75rem;
`;

const Span = styled.span`
  font-size: 2rem;
  margin-left: 4px;
`;

const StyledSpinner = styled(Spinner)`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.get("TemperatureDisplay.CurrentTemperatureDisplay.textColor")} !important;
`;

const CurrentTemperature = (props) => {
  return (
    <Div style={props.style}>
      {(props.currentTemperature && (
        <div>
          <PrideText text={`${props.currentTemperature}`} />
          <Span>
            <PrideText text={`${props.temperatureSuffix}`} />
          </Span>
        </div>
      )) || <StyledSpinner animation="border" variant="dark" />}
    </Div>
  );
};

export default CurrentTemperature;
