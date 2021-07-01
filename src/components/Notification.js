import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { Button, Image, Text, View } from "react-native";

const Wrapper = styled(View)`
  display: flex;
  background: #2c2c2c;
  padding: 8px;
  margin-bottom: 16px;
`;

const StyledImage = styled(Image)`
  width: 50px;
  height: auto;
  margin-right: 8px;
`;

const Desc = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  padding-right: 18.4px;
`;

const Title = styled(Text)`
  font-size: 18.4px;
`;

const Aired = styled(Text)`
  margin: 0;
  color: ${(props) => props.theme.secondaryColor};
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 16px;
  color: #fff;
  z-index: 2;
  background: none;
  border: 0;
`;

const Notification = ({ id, imgSrc, title, aired, deleteNotification }) => {
  const airedDateString = new Date(aired).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Wrapper>
      <DeleteButton onPress={() => deleteNotification(id)}>
        <IoClose />
      </DeleteButton>
      <StyledImage source={{ uri: imgSrc }} />
      <Desc>
        <Title>{title}</Title>
        <Aired>Aired: {airedDateString}</Aired>
      </Desc>
    </Wrapper>
  );
};

export default Notification;
