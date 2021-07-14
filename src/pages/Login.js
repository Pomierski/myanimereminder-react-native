import React, { useState } from "react";
import { Text, View } from "react-native";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
import StyledButton from "../components/StyledButton";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Heading from "../components/Header/Heading";
import { fetchUserList } from "../utility/fetchUserList";

const ErrorMessage = styled(Text)`
  color: red;
  margin: 0;
  margin-bottom: 8px;
`;

const Login = ({ setUserLogged, getUserData }) => {
  const [inputValue, setInputValue] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInput = (text) => {
    setInputValue(text);
    setShowError(false);
  };

  const handleButton = async () => {
    setShowLoading(true);
    const userList = await fetchUserList(inputValue).catch((e) => e);
    if (userList.status !== 200) {
      setShowLoading(false);
      setShowError(true);
    }
    if (userList.status === 200) {
      getUserData();
      setUserLogged(true);
    }
  };

  return (
    <View>
      <Header>
        <Heading>Login</Heading>
      </Header>
      <SubTitle>
        Please enter your MyAnimeList username so we check what anime you are
        watching
      </SubTitle>
      <Input
        placeholder="Username"
        value={inputValue}
        onChangeText={(text) => handleInput(text)}
      />
      {showError ? (
        <ErrorMessage>Username is invalid, please try again.</ErrorMessage>
      ) : null}
      <StyledButton onPress={handleButton} title="Login"></StyledButton>
    </View>
  );
};

export default Login;
