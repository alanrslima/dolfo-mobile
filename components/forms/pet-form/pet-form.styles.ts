import styled from "styled-components/native";

export const FormFooter = styled.View`
  padding: ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[7]};
  border-top-width: 1px;
  flex-direction: row;
  border-top-color: ${({ theme }) => theme.colors.border};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.surface};
`;
