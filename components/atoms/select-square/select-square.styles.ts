import styled from "styled-components/native";
import { Title } from "../texts";

export const SelectSquareContainer = styled.TouchableOpacity<{
  $selected?: boolean;
}>`
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.onBackgroundPrimary : theme.colors.border};
  flex: 1;
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.border : "transparent"};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  gap: ${({ theme }) => theme.spaces[3]};
`;

export const SelectSquareText = styled(Title)``;
