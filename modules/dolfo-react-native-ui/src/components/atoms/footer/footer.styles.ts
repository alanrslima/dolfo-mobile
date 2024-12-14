import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  border-top-width: 1px;
  flex-direction: row;
  border-top-color: ${({theme}) => theme.colors.borderNeutral};
  padding: ${({theme}) => theme.spaces[7]} ${({theme}) => theme.spaces[5]};
  justify-content: space-between;
`;
