import React, { useEffect } from "react";
import { MotiView } from "moti";
import styled from "styled-components";
import { Dimensions, SafeAreaView } from "react-native";

const Wrapper = styled(MotiView)`
  padding: 36px;
  width: ${Dimensions.get("window").width}px;
  height: 100%;
  z-index: 3;
  top: 0;
  left: ${(props) =>
    props.fromLeft
      ? -Dimensions.get("window").width
      : Dimensions.get("window").width}px;
  margin: 0 auto;
  position: absolute;
  background: ${(props) => props.theme.bgColor};
`;

const Drawer = (props) => {
  const windowWidth = props.fromLeft
    ? Dimensions.get("window").width
    : -Dimensions.get("window").width;

  return (
    <Wrapper
      {...props}
      animate={{ translateX: props.show ? windowWidth : 0 }}
      exit={{
        translateX: windowWidth,
      }}
      transition={{
        type: "timing",
        duration: 500,
      }}
    >
      <SafeAreaView>{props.children}</SafeAreaView>
    </Wrapper>
  );
};

export default Drawer;
