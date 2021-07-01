import { TextInput } from "react-native";
import styled from "styled-components";

const Input = styled(TextInput)`
  border: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.accentColor};
  background-color: transparent;
  margin-bottom: 8px;
  color: ${(props) => props.theme.mainColor};
  padding: 8px 0;
`;

export default Input;
