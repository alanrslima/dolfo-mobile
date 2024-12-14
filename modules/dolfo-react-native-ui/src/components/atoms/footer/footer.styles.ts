import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.borderNeutral};
  padding: ${({theme}) => theme.spaces[7]} ${({theme}) => theme.spaces[5]};
`;
