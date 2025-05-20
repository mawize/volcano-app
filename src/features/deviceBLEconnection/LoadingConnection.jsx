import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { PrideTextWithDiv } from "../../themes/PrideText";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.iconColor};
`;

export default function Loading() {
  return (
    <Div>
      <Spinner animation="border" style={{ color: (props) => props.theme.iconColor }} />
      <PrideTextWithDiv text="Connecting to Volcano ..." />
    </Div>
  );
}
