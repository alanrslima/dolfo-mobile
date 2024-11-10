import { Animated } from "react-native";
import styled from "styled-components/native";

export const TextInputContainer = styled.View`
  padding: 0px ${({ theme }) => theme.spaces[7]};
`;

export const TextInputInput = styled.TextInput<{ $isFocused: boolean }>`
  border-width: 1.25px;
  border-color: ${({ theme, $isFocused }) =>
    $isFocused ? theme.colors.onBackgroundPrimary : theme.colors.border};
  padding: ${({ theme }) => theme.sizes[5]};
  font-family: ${({ theme }) => theme.fonts.poppinsMedium};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.onSurfacePrimary};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const TextInputClose = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  flex-direction: row;
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[7]};
`;
