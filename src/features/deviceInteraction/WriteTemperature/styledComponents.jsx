import styled from "styled-components";
import Button from "../../shared/styledComponents/Button";

export const InactiveButton = styled(Button)`
  font-size: 1.25rem;
  min-height: 2.75rem;
  flex-grow: 1;
`;

export const ActiveButton = styled(InactiveButton)`
  background-color: ${(props) => props.theme.get(`${props.hierarchy}.Active.backgroundColor`)};
  color: ${(props) => props.theme.get(`${props.hierarchy}.Active.textColor`)};
  border-color: ${(props) => props.theme.get(`${props.hierarchy}.Active.borderColor`)};
`;

export const Div = styled.div`
  display: flex;
  width: 48%;
  flex-grow: 1;
  margin: 0px 2.5px 8px;

  svg {
    height: 2rem;
    width: 2rem;
  }
`;
