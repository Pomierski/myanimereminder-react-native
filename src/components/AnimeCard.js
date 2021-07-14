import React from "react";
import styled from "styled-components";
import { Image, Text, View } from "react-native";

import { MotiView } from "@motify/components";
import ProgressBar from "./ProgressBar";

const Wrapper = styled(MotiView)`
  width: 100%;
  height: 128px;
  margin-bottom: 16px;
  opacity: 1;
  display: flex;
  flex-direction: row;
`;

const Column = styled(View)`
  flex: 1;
`;

const CardImg = styled(Image)`
  height: 120px;
  width: 80px;
  margin-right: 16px;
`;

const CardHeader = styled(Text)`
  color: ${(props) => props.theme.accentColor};
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: 37px;
  font-size: 15px;
`;

const Desc = styled(View)`
  color: ${(props) => props.theme.secondaryColor};
`;

const StyledText = styled(Text)`
  margin: 0;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 12px;
`;

const StyledA = styled(Text)`
  text-decoration: none;
  color: ${(props) => props.theme.accentColor};
  font-weight: bold;
`;

const AnimeCard = ({
  mal_id,
  imgUrl,
  title,
  progress,
  progressMax,
  airingDay,
  airingDate,
  type,
}) => (
  <Wrapper from={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <CardImg source={{ uri: imgUrl }} alt="Anime poster" />
    <Column>
      <CardHeader>
        <StyledA
          href={`https://myanimelist.net/anime/${mal_id}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {title}
        </StyledA>
      </CardHeader>
      <Desc>
        <StyledText>Type: {type}</StyledText>
        <StyledText>Next episode: {airingDay}</StyledText>
        <StyledText>{airingDate}</StyledText>
      </Desc>
      <ProgressBar
        progress={progress}
        progressMax={progressMax}
        width={null}
        height={16}
      />
    </Column>
  </Wrapper>
);

export default AnimeCard;
