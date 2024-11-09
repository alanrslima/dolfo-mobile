import { Title } from "@/components/atoms";
import styled from "styled-components/native";

export const SegmentedButtonsContainer = styled.View`
  flex-direction: row;
  padding: 0px ${({ theme }) => theme.spaces[7]};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces[4]};
`;

export const SegmentedButtonsItem = styled.TouchableOpacity``;

export const SegmentedButtonsItemText = styled(Title)``;
