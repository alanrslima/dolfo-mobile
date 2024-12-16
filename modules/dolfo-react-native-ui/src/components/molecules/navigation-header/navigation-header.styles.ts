import styled from 'styled-components/native';

const HEADER_HEIGHT = 70;

export const NavigationHeaderContainer = styled.View<{
  $statusBarHeight: number;
}>`
  height: ${({$statusBarHeight}) => `${$statusBarHeight + HEADER_HEIGHT}px`};
  padding-top: ${({$statusBarHeight}) => `${$statusBarHeight}px`};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.borderNeutral};
`;

export const NavigationHeaderContent = styled.View`
  flex: 1;
  padding: 0px ${({theme}) => theme.spaces[7]};
  justify-content: center;
`;
