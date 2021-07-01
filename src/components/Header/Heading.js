import { Text } from "react-native";
import styled from "styled-components";

const Heading = styled(Text)`
  color: ${(props) => props.theme.accentColor};
  font-weight: 700;
  font-size: 36px;
`;

export default Heading;
