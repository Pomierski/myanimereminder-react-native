import { Text } from "react-native";
import styled from "styled-components";

const SubTitle = styled(Text)`
  color: ${(props) => props.theme.mainColor};
  padding-right: 16px;
`;

export default SubTitle;
