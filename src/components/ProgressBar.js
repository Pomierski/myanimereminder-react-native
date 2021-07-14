import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import styled from "styled-components";

const ProgressBarText = styled(View)`
  position: absolute;
  width: 100%;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProgressBar = styled(Progress.Bar)`
  position: absolute;
  bottom: 9px;
  left: 0;
  width: 100%;
`;

const ProgressBar = ({ progressMax, progress }) => (
  <StyledProgressBar
    progress={progressMax ? progress / progressMax : 0.5}
    width={null}
    height={16}
  >
    <ProgressBarText>
      <Text style={{ color: "#fff" }}>
        {progressMax ? `${progress} / ${progressMax}` : `${progress} / ?`}
      </Text>
    </ProgressBarText>
  </StyledProgressBar>
);

export default ProgressBar;
