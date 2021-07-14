import React from "react";
import StyledButton from "../components/StyledButton";
import Heading from "../components/Header/Heading";
import Header from "../components/Header/Header";
import HeaderButtons from "../components/Header/HeaderButtons";
import { IconButton } from "react-native-paper";
import { Text } from "react-native";
import Drawer from "../components/Drawer";

const Settings = ({ logout, showSettings, toggleSettings, loggedInUser }) => {
  return (
    <Drawer show={showSettings}>
      <Header>
        <Heading>Settings</Heading>
        <HeaderButtons>
          <IconButton
            icon="close"
            color="#1E88E5"
            size={20}
            onPress={toggleSettings}
          />
        </HeaderButtons>
      </Header>
      <Text style={{ color: "#fff" }}>Logged as {loggedInUser}</Text>
      <StyledButton onPress={logout} title="Logout" />
    </Drawer>
  );
};

export default Settings;
