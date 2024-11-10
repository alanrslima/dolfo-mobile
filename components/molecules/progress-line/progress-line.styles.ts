import { Animated } from "react-native";
import styled from "styled-components/native";

export const ProgressLineContainer = styled.View`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.onSurfaceDisabled};
`;

export const ProgressLineContent = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
