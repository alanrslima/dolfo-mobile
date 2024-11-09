import styled from "styled-components/native";

export const CardImage = styled.Image`
  height: 200px;
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const CardContent = styled.View`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  border-bottom-right-radius: ${({ theme }) => theme.radii.md};
`;
