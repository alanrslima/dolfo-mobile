import styled from "styled-components/native";

export const MultiStepFormContainer = styled.View`
  flex: 1;
`;

export const MultiStepFormScroll = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  scrollEnabled: false,
})``;

export const MultiStepFormPage = styled.View<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  height: 100%;
`;
