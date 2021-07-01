import React from "react";
import Heading from "../components/Header/Heading";
import AnimeCard from "../components/AnimeCard";
import { getEndDateForAnime } from "../utility/parseDate";
import Header from "../components/Header/Header";
import HeaderButtons from "../components/Header/HeaderButtons";
import Badge from "../components/NotificationBadge";
import { Text } from "react-native";
import { IconButton } from "react-native-paper";

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
            url,
            mal_id,
            title,
            image_url,
            airing_start,
            watched_episodes,
            episodes,
            type,
          }) => {
            const { startDateLocalized, endDateLocalized, airingDay } =
              getEndDateForAnime(airing_start, episodes);

            return (
              <AnimeCard
                animeUrl={url}
                key={mal_id}
                title={title}
                imgUrl={image_url}
                aired={startDateLocalized}
                endDate={endDateLocalized}
                progress={watched_episodes}
                progressMax={episodes}
                airingDay={airingDay}
                type={type}
              />
            );
          }
        )
      ) : (
        <Text style={{ color: "#fff" }}>No airing animes found on list</Text>
      )}
    </>
  );
};

export default Main;
