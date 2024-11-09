import styled from "styled-components/native";

export const BannerContainer = styled.View`
  height: 160px;
  background-color: blueviolet;
  border-radius: ${({ theme }) => theme.radii.md};
  margin: 0px 24px;
`;
