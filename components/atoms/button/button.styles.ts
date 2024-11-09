import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonSizes, ButtonVariants } from "./button";
import { Title } from "../texts";

const variantContainerStyles = (theme: DefaultTheme, variant: ButtonVariants) =>
  ({
    solid: css`
      background-color: ${({ theme }) => theme.colors.button};
    `,
    link: css`
      min-width: auto;
    `,
    outline: css`
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.border};
    `,
  }[variant]);

const variantTextStyles = (theme: DefaultTheme, variant: ButtonVariants) =>
  ({
    solid: css`
      color: ${({ theme }) => theme.colors.white};
    `,
    link: css`
      color: ${theme.colors.primary};
    `,
    outline: css``,
  }[variant]);

const sizeContainerStyles = (theme: DefaultTheme, size: ButtonSizes) =>
  ({
    xs: css`
      min-width: 82px;
      height: 32px;
    `,
    sm: css`
      min-width: 106px;
      height: 36px;
    `,
    base: css`
      min-width: 112px;
      height: 40px;
    `,
    lg: css`
      min-width: 122px;
      height: 44px;
    `,
    xl: css`
      min-width: 122px;
      height: 48px;
    `,
  }[size]);

export const ButtonContainer = styled.TouchableOpacity<{
  $size: ButtonSizes;
  $variant: ButtonVariants;
}>`
  border-radius: ${({ theme }) => theme.radii.md};
  align-self: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spaces[2]};
  align-items: center;
  padding: 0px ${({ theme }) => theme.spaces[4]};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};

  ${({ theme, $size }) => sizeContainerStyles(theme, $size)}
  ${({ theme, $variant }) => variantContainerStyles(theme, $variant)}
`;

export const ButtonTitle = styled(Title)``;
