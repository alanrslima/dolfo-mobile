import { SpaceProps } from "@/types";
import styled from "styled-components/native";

export const SurfaceContainer = styled.View<{
  $padding: keyof SpaceProps;
  $gap: keyof SpaceProps;
  $marginHorizontal: keyof SpaceProps;
  $marginVertical: keyof SpaceProps;
}>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  padding: ${({ theme, $padding }) => theme.spaces[$padding]};
  gap: ${({ theme, $gap }) => theme.spaces[$gap]};
  border-radius: ${({ theme }) => theme.radii.md};
  margin: ${({ theme, $marginVertical, $marginHorizontal }) =>
    `${theme.spaces[$marginHorizontal]} ${theme.spaces[$marginVertical]}`};
`;
