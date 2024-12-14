import styled from 'styled-components/native';

export const DividerContainer = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.borderNeutral};
  margin: ${({theme}) => theme.spaces[7]} 0px;
`;
