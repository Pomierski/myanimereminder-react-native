import React from "react";
import styled from "styled-components";
import { Image, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { MotiView } from "@motify/components";

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

const StyledProgressBar = styled(Progress.Bar)`
  position: absolute;
  bottom: 9px;
  left: 0;
  width: 100%;
`;

const AnimeCard = ({
  animeUrl,
  imgUrl,
  title,
  progress,
  progressMax,
  aired,
  endDate,
  type,
}) => (
  <Wrapper from={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <CardImg source={{ uri: imgUrl }} alt="Anime poster" />
    <Column>
      <CardHeader>
        <StyledA
          href={animeUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {title}
        </StyledA>
      </CardHeader>
      <Desc>
        <StyledText>Type: {type}</StyledText>
        <StyledText>Aired: {aired}</StyledText>
        <StyledText>Est. end date: {endDate}</StyledText>
      </Desc>
      <StyledProgressBar
        progress={progress / progressMax}
        width={null}
        height={16}
      />
    </Column>
  </Wrapper>
);

export default AnimeCard;
