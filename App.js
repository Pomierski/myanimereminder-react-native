import React, { useLayoutEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import Login from "./src/pages/Login";
import Main from "./src/pages/Main";
import * as storageAPI from "./src/utility/storageAPI";
import Settings from "./src/pages/Settings";
import Notifications from "./src/pages/Notifications";
import { fetchUserList } from "./src/utility/fetchUserList";

const Wrapper = styled(SafeAreaView)`
  width: 100%;
  height: ${Dimensions.get("screen").height}px;
  background-color: #171717;
  margin: 0 auto;
  padding: 36px;
  color: #fff;
`;

function App() {
  const [userData, setUserData] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [userNotifications, setUserNotifications] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const getUserData = async () => {
    const [savedData, savedNotifications] = await Promise.all([
      storageAPI.getStorageData(storageAPI.userDataKey),
      storageAPI.getStorageData(storageAPI.notificationsKey),
    ]);
    if (savedData) {
      setUserData(savedData);
      setUserLogged(true);
    }
    if (savedNotifications) setUserNotifications(savedNotifications);
  };

  useLayoutEffect(() => {
    getUserData();
  }, []);

  const refreshData = async () => {
    setUserData(null);
    await fetchUserList(userData.username);
    getUserData();
  };

  const clearBadgeText = () => {
    storageAPI.clearNotifications();
    setUserNotifications(null);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const deleteNotification = async (id) => {
    setUserNotifications(await storageAPI.deleteNotification(id));
  };

  const logout = () => {
    storageAPI.clearStorage();
    setUserLogged(false);
    setShowSettings(false);
    setUserData(null);
    setShowSettings(false);
    storageAPI.clearNotifications();
  };

  return (
    <ThemeProvider theme={theme}>
      <ScrollView scrollEnabled={!showNotifications && !showSettings}>
        <Wrapper>
          {!userLogged ? (
            <Login setUserLogged={setUserLogged} getUserData={getUserData} />
          ) : (
            <>
              <Notifications
                toggleNotifications={toggleNotifications}
                showNotifications={showNotifications}
                clearBadgeText={clearBadgeText}
                userNotifications={userNotifications}
                deleteNotification={deleteNotification}
              />
              <Settings
                showSettings={showSettings}
                logout={logout}
                toggleSettings={toggleSettings}
                loggedInUser={userData ? userData.username : null}
              />
              <Main
                toggleSettings={toggleSettings}
                toggleNotifications={toggleNotifications}
                badgeText={
                  userNotifications
                    ? userNotifications.notifications.length
                    : null
                }
                animeList={userData ? userData.animeList : null}
                refreshData={refreshData}
              />
            </>
          )}
        </Wrapper>
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;
