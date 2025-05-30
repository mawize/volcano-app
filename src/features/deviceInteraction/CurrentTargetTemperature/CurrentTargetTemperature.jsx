import Spinner from "react-bootstrap/Spinner";

import styled from "styled-components";
import PrideText from "../../../themes/PrideText";

const Div = styled.div`
  text-align: center;
  font-size: 30px;
  color: ${(props) => props.theme.get("TemperatureDisplay.TargetTemperatureDisplay.textColor")};
  font-family: "digital-mono";
  font-size: 4rem;
`;

const Span = styled.span`
  font-size: 2rem;
  margin-left: 4px;
`;

const StyledSpinner = styled(Spinner)`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.get("TemperatureDisplay.TargetTemperatureDisplay.textColor")} !important;
`;

const CurrentTargetTemperature = (props) => {
  return (
    <Div style={props.style}>
      {(props.currentTargetTemperature && (
        <div>
          <PrideText text={`${props.currentTargetTemperature}`} />
          <Span>
            <PrideText text={`${props.temperatureSuffix}`} />
          </Span>
        </div>
      )) || <StyledSpinner animation="border" variant="dark" />}
    </Div>
  );
};

export default CurrentTargetTemperature;
