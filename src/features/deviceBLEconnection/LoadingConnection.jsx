import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { PrideTextWithDiv } from "../../themes/PrideText";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: ${(props) => props.theme.get("StartScreen.backgroundColor")};
  color: ${(props) => props.theme.get("StartScreen.textColor")};
`;

export default function Loading() {
  return (
    <Div>
      <Spinner animation="border" style={{ color: (props) => props.theme.get("StartScreen.iconColor") }} />
      <PrideTextWithDiv text="Establishing BLE Connection" />
    </Div>
  );
}
