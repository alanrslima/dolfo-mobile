import styled from "styled-components/native";

export const NavBarHeaderContainer = styled.View<{
  $safeAreaInsetTop: number;
  $float?: boolean;
}>`
  position: ${({ $float }) => ($float ? "absolute" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: ${({ theme, $safeAreaInsetTop }) =>
    `${$safeAreaInsetTop}px ${theme.spaces[6]} 0px ${theme.spaces[6]}`};
  height: ${({ $safeAreaInsetTop }) => 59 + $safeAreaInsetTop}px;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 999;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;
