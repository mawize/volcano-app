import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRouterIconLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.iconTextColor};
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: none;
`;

export { StyledRouterIconLink };
