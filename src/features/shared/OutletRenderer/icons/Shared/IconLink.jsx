import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRouterIconLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.get("Navigation.textColor")};
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;
`;

export { StyledRouterIconLink };
