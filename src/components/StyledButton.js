import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";

const Button = styled(TouchableOpacity)`
  border: 0;
  border-radius: 5px;
  background: ${(props) => props.theme.accentColor};
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  margin: ${(props) => (props.margin ? props.margin : "16px 0px")};
  ${(props) =>
    props.disabled &&
    css`
      background: #1560a2;
    `}
`;

const StyledButton = ({
  height,
  width,
  margin,
  title,
  onPress,
  disabled,
  children,
}) => (
  <Button
    height={height}
    width={width}
    margin={margin}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={{ color: "#fff" }}>{children || title}</Text>
  </Button>
);

export default StyledButton;
