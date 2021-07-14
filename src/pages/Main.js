import React from "react";
import Heading from "../components/Header/Heading";
import AnimeCard from "../components/AnimeCard";
import { getEndDateForAnime } from "../utility/parseDate";
import Header from "../components/Header/Header";
import HeaderButtons from "../components/Header/HeaderButtons";
import Badge from "../components/NotificationBadge";
import { Text } from "react-native";
import { IconButton } from "react-native-paper";
import { formatDateToDateString } from "../utility/formatDateToDateString";

const Main = ({
  toggleSettings,
  toggleNotifications,
  badgeText,
  animeList,
  refreshData,
}) => {
  return (
    <>
      <Header>
        <Heading>Watching</Heading>
        <HeaderButtons>
          <IconButton
            icon="refresh"
            color="#1E88E5"
            size={20}
            onPress={refreshData}
          />
          <IconButton
            icon="bell"
            color="#1E88E5"
            size={20}
            onPress={toggleNotifications}
          />
          <IconButton
            icon="cog"
            color="#1E88E5"
            size={20}
            onPress={toggleSettings}
          />
        </HeaderButtons>
      </Header>
      {animeList && animeList.length ? (
        animeList.map(
          ({
            mal_id,
            title,
            image_url,
            watched_episodes,
            episodes,
            airingDay,
            airingDate,
            type,
          }) => (
            <AnimeCard
              mal_id={mal_id}
              key={mal_id}
              title={title}
              imgUrl={image_url}
              progress={watched_episodes}
              progressMax={episodes}
              airingDay={airingDay}
              type={type}
              airingDate={formatDateToDateString(airingDate)}
            />
          )
        )
      ) : (
        <Text style={{ color: "#fff" }}>No airing animes found on list</Text>
      )}
    </>
  );
};

export default Main;
