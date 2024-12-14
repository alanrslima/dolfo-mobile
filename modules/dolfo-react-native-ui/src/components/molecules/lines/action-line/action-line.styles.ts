import styled from 'styled-components/native';

export const ActionLineLeadingContainer = styled.View`
  height: 54px;
  width: 54px;
  background-color: ${({theme}) => theme.colors.backgroundElevated};
  border-radius: ${({theme}) => theme.radii.round};
  justify-content: center;
  align-items: center;
`;
