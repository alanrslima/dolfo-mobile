import styled, {css, DefaultTheme} from 'styled-components/native';
import {Typography} from '../typography/typography';

import {ButtonSizes, ButtonVariants} from './button';

const sizesStyles = (theme: DefaultTheme, size: ButtonSizes) =>
  ({
    xs: css`
      height: 32px;
    `,
    sm: css`
      height: 36px;
    `,
    md: css`
      height: 40px;
    `,
    lg: css`
      height: 44px;
    `,
    xl: css`
      height: 48px;
    `,
  }[size]);

const variantsContainerStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants,
) =>
  ({
    primary: css`
      background-color: ${theme.colors.primary};
    `,
    secondary: css`
      background-color: ${theme.colors.secondary};
    `,
    tertiary: css`
      background-color: ${theme.colors.secondary};
    `,
    outline: css`
      background-color: ${theme.colors.secondary};
    `,
  }[variant]);

export const ButtonContainer = styled.TouchableHighlight<{
  $size: ButtonSizes;
  $variant: ButtonVariants;
}>`
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  padding: 0px ${({theme}) => theme.spaces[5]};
  align-self: flex-start;
  border-radius: ${({theme}) => theme.radii.md};
  min-width: 175px;

  ${({theme, $size}) => sizesStyles(theme, $size)}
  ${({theme, $variant}) => variantsContainerStyles(theme, $variant)};
`;

export const ButtonText = styled(Typography).attrs({
  type: 'body-default-bold',
})``;
