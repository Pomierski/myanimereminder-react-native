import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 5px;
  height: 5px;
  background: #f00;
  padding: 5px;
  color: #fff;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const NotificationBadge = ({ children }) => (
  <>{children ? <Wrapper>{children}</Wrapper> : null}</>
);

export default NotificationBadge;
