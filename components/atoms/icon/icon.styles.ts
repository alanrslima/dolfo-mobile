import { ColorProps } from "@/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import styled from "styled-components/native";

export const IconWrapper = styled.View``;

export const IconContainer = styled(MaterialCommunityIcons).attrs<{
  $color: keyof ColorProps;
}>(({ theme, $color }) => ({
  color: theme.colors[$color],
}))``;

export const IconButtonContainer = styled(MaterialCommunityIcons.Button).attrs<{
  $color: keyof ColorProps;
  $bgColor: keyof ColorProps;
}>(({ theme, $color, $bgColor }) => ({
  color: theme.colors[$color],
  backgroundColor: theme.colors[$bgColor],
  iconStyle: { marginRight: 0 },
  activeOpacity: 0.8,
}))``;
