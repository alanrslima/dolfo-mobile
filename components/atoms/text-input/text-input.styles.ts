import styled from "styled-components/native";

export const TextInputContainer = styled.View``;

export const TextInputInput = styled.TextInput<{ $isFocused: boolean }>`
  border-width: 1.25px;
  border-color: ${({ theme, $isFocused }) =>
    $isFocused ? theme.colors.onBackgroundPrimary : theme.colors.border};
  padding: ${({ theme }) => theme.sizes[5]};
  font-family: ${({ theme }) => theme.fonts.poppinsMedium};
  border-radius: ${({ theme }) => theme.radii.md};
`;
