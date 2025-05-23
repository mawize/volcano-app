import styled from "styled-components";

const Button = styled.button.attrs((props) => ({ hierarchy: props.hierarchy || 'Button' }))`
  background-color: ${(props) => props.theme.get(`${props.hierarchy}.backgroundColor`)};
  color: ${(props) => props.theme.get(`${props.hierarchy}.textColor`)};
  border-radius: 5px;
  border-color: ${(props) => props.theme.get(`${props.hierarchy}.borderColor`)};
  border-style: ${(props) =>props.theme.get(`${props.hierarchy}.borderStyle`)};
  &:active {
    background-color: ${(props) => props.theme.get(`${props.hierarchy}.Active.backgroundColor`)};
    color: ${(props) => props.theme.get(`${props.hierarchy}.Active.textColor`)};
    border-color: ${(props) => props.theme.get(`${props.hierarchy}.Active.borderColor`)};
  }
`;

export default Button;