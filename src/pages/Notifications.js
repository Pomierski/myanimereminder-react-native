import React from "react";
import Heading from "../components/Header/Heading";
import Notification from "../components/Notification";
import Header from "../components/Header/Header";
import HeaderButtons from "../components/Header/HeaderButtons";
import Drawer from "../components/Drawer";
import { IconButton } from "react-native-paper";
import StyledButton from "../components/StyledButton";

const Notifications = ({
  showNotifications,
  toggleNotifications,
  clearBadgeText,
  userNotifications,
  deleteNotification,
}) => {
  return (
    <Drawer show={showNotifications} fromLeft>
      <Header>
        <Heading>Notifications</Heading>
        <HeaderButtons>
          <IconButton
            icon="close"
            color="#1E88E5"
            size={20}
            onPress={toggleNotifications}
          />
        </HeaderButtons>
      </Header>
      {userNotifications ? (
        <>
          {userNotifications.notifications.map(
            ({ image_url, title, airing_start, aired, id }) => (
              <Notification
                imgSrc={image_url}
                title={title}
                desc={airing_start}
                aired={aired}
                id={id}
                deleteNotification={deleteNotification}
              />
            )
          )}
          <StyledButton
            onClick={clearBadgeText}
            margin="0 0 16px 0"
            title="Delete all"
          />
        </>
      ) : null}
    </Drawer>
  );
};

export default Notifications;
