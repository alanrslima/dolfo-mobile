import styled from "styled-components/native";
import { Title } from "../texts";

export const HeadlineContainer = styled.View`
  flex-direction: row;
  padding: 0px ${({ theme }) => theme.spaces[7]};
  padding-top: ${({ theme }) => theme.spaces[4]};
`;

export const HeadlineContent = styled.View`
  flex: 1;
  gap: ${({ theme }) => theme.spaces[2]};
`;

export const HeadlineTitle = styled(Title)``;

export const HeadlineSubTitle = styled(Title)``;
