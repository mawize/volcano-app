import Control from "react-bootstrap/FormControl";
import styled from "styled-components";

const ControlWrapper = styled(Control)`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border-color: ${(props) => props.theme.borderColor};

  &:focus {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border-color: ${(props) => props.theme.borderColor};
  }
  &:disabled {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border-color: ${(props) => props.theme.borderColor};
  }
`;

export default ControlWrapper;
