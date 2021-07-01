import { Button } from "react-native";
import styled, { css } from "styled-components";

const StyledButton = styled(Button)`
  ${(props) =>
    props.primary &&
    css`
      border: 0;
      border-radius: 999px;
      background: ${(props) => props.theme.accentColor};
      padding: 8px 16px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${(props) =>
    props.icon &&
    css`
      border: 0;
      background-color: transparent;
      color: ${(props) => props.theme.accentColor};
      font-size: 24px;
      height: 24px;
      padding: 12.8px;
    `}
    margin: ${(props) => (props.margin ? props.margin : 0)}px;
`;

export default StyledButton;
