import { ColorProps } from "@/types";
import styled from "styled-components/native";

export const ScreenContainer = styled.View<{
  $marginTop: number;
  $marginBottom: number;
  $safeAreaColor: keyof ColorProps;
}>`
  flex: 1;
  padding-top: ${({ $marginTop }) => $marginTop}px;
  padding-bottom: ${({ $marginBottom }) => $marginBottom}px;
  background-color: ${({ theme, $safeAreaColor }) =>
    theme.colors[$safeAreaColor]};
`;

export const ScreenContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
